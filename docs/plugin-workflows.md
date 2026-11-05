---
layout: default
permalink: /plugin-workflows/
keywords:
comments: false
title: Plugin automation workflows
description: Complete examples for discovery, revision checks, validation, mutations and recovery
icon: 'icons8-new-logo'
micro_nav: false
page_nav:
    prev:
        content: Plugins
        url: '/plugins'
    next:
        content: MCP
        url: '/mcp'
---

This complete reference is synchronized from the [lunacy-plugins article](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/AUTOMATION_WORKFLOWS.md) at commit `7b82b781`, checked on November 5, 2026. See [Plugins](https://lunacy.docs.icons8.com/plugins/) for installation and manifests.

These examples use the preview [Automation API v2](https://lunacy.docs.icons8.com/plugin-api-v2/). They need a matching Lunacy build; probe `/v2/get_session` instead of assuming an installed release includes them. HTTP requests contain the documented body directly. The grouped MCP/AI Chat `request.operation` wrapper is not part of HTTP.

The sequence is discovery → explicit target → revision → validation → commit → readback. Run examples on a document you intend to edit. Placeholders in JSON, such as `<document-handle>`, must be replaced with actual discovered values.

## A complete variable workflow

Save this as `brand.mjs` and run it with Node.js 18 or newer. It deliberately captures the active document once, verifies that it is ready/editable, and retains that handle. It never chooses the first editable tab after another tab becomes active. The example creates a collection and color variable; it stops if a matching collection already exists so repeated execution does not duplicate resources.

```javascript
import { randomUUID } from 'node:crypto';

const baseUrl = process.env.LUNACY_API ?? 'http://localhost:31415';

async function api(operation, body = {}) {
  const response = await fetch(`${baseUrl}/v2/${operation}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const text = await response.text();
  let envelope;
  try {
    envelope = JSON.parse(text);
  } catch {
    throw new Error(`Expected a v2 response for ${operation}; HTTP ${response.status}`);
  }
  if (!response.ok || envelope.ok !== true) {
    const error = new Error(envelope.error?.message ?? `HTTP ${response.status}`);
    error.code = envelope.error?.code;
    error.path = envelope.error?.path;
    error.operationIndex = envelope.error?.operationIndex;
    error.envelope = envelope;
    throw error;
  }
  for (const warning of envelope.warnings ?? []) {
    console.warn(warning);
  }
  return envelope;
}

const session = (await api('get_session')).data;
if (!session.operations.some(item => item.tool === 'apply_variable_changes')) {
  throw new Error('This build does not advertise variable automation');
}
const documents = (await api('list_documents')).data.items;
const chosen = documents.find(item => item.documentHandle === session.activeDocumentHandle);
if (!chosen || chosen.state !== 'ready' || !chosen.canEdit) {
  throw new Error('Choose an editable ready document in Lunacy before running this example');
}
const documentHandle = chosen.documentHandle;

async function currentRevision() {
  const items = (await api('list_documents')).data.items;
  const document = items.find(item => item.documentHandle === documentHandle);
  if (!document?.canEdit || document.state !== 'ready') {
    throw new Error('The chosen document is no longer editable/ready');
  }
  return document.revision;
}

let cursor;
do {
  const result = await api('query_design_system', {
    documentHandle, kinds: ['collection'], scopes: ['local'], query: 'Plugin demo',
    ...(cursor ? { cursor } : {})
  });
  if (result.data.items.some(item => item.name === 'Plugin demo')) {
    throw new Error('Plugin demo already exists: inspect/reuse it instead of creating another collection');
  }
  cursor = result.data.nextCursor;
} while (cursor);

const changes = [
  {
    action: 'createCollection', clientId: 'brand', name: 'Plugin demo',
    defaultThemeName: 'Light', defaultThemeClientId: 'light'
  },
  {
    action: 'createVariable', clientId: 'primary', collection: { clientRef: 'brand' },
    name: 'Primary', type: 'color',
    values: [{ theme: { clientRef: 'light' }, value: { kind: 'literal', value: '0A84FF' } }]
  }
];

await api('apply_variable_changes', {
  documentHandle, expectedRevision: await currentRevision(),
  requestId: randomUUID(), validateOnly: true, changes
});

// A preview does not reserve IDs or a revision. The commit is a new operation.
const committed = await api('apply_variable_changes', {
  documentHandle, expectedRevision: await currentRevision(),
  requestId: randomUUID(), changes
});
const ids = committed.data.clientIds;
const readback = await api('get_design_system_assets', {
  documentHandle,
  assets: [{ kind: 'variable', scope: 'local', id: ids.primary, collectionId: ids.brand }]
});
for (const item of readback.data.items) {
  if (item.error) {
    throw new Error(`${item.error.code}: ${item.error.message}`);
  }
  console.log(JSON.stringify(item.definition, null, 2));
}
```

The variable batch produces one undo item. Request IDs must remain available to the plugin until the result is known. If this example loses its commit response, use the recovery procedure below before running it again. A production plugin should store the exact request before sending it. Do not add automatic mutation retries with a new ID.

For an alias, use the same variable type and a typed selector:

```json
{
  "kind": "alias",
  "variable": {"id": "<same-type-variable-id>"}
}
```

Create a new theme by copying an existing one. `selectCollectionTheme` changes the inspector preview; `setLayerTheme` changes the evaluated canvas theme:

```json
{
  "documentHandle": "<document-handle>",
  "expectedRevision": "<current-revision>",
  "requestId": "<new-request-id>",
  "changes": [
    {
      "action": "createTheme", "clientId": "dark", "name": "Dark",
      "collection": {"id": "<collection-id>"}, "sourceTheme": {"id": "<light-theme-id>"}
    },
    {
      "action": "setLayerTheme", "layerIds": ["<frame-layer-id>"],
      "collection": {"id": "<collection-id>"}, "theme": {"clientRef": "dark"}
    }
  ]
}
```

Send that body to `/v2/apply_variable_changes`. Themes are collection-specific. For a binding, use `get_session.data.bindings` to check the actual property/type/target combination, then send an explicit layer/style reference. For example, binding a float variable to an eligible layer's opacity:

```json
{
  "documentHandle": "<document-handle>",
  "expectedRevision": "<current-revision>",
  "requestId": "<new-request-id>",
  "changes": [{
    "action": "bind", "variable": {"id": "<float-variable-id>"},
    "target": {"kind": "layer", "resource": {"id": "<layer-id>"}},
    "location": {"property": "opacity"}
  }]
}
```

Read `/v2/get_design_context` with `layerIds` afterwards to inspect the binding, resolved theme and effective value. `unbind` uses the same target/location without `variable` and materializes the current effective or cached value.

## Create and apply a shared style

Search first with `query_design_system` using `kinds:["style"]`, `styleType:"color"`, and the intended scopes. Inspect any match with `get_design_system_assets`. If a new style is needed, `/v2/apply_style_changes` can create and apply it in one batch:

```json
{
  "documentHandle": "<document-handle>",
  "expectedRevision": "<current-revision>",
  "requestId": "<new-request-id>",
  "changes": [
    {"action": "create", "clientId": "accent", "name": "Accent", "type": "color", "value": {"fill": "0A84FF"}},
    {"action": "apply", "style": {"clientRef": "accent"}, "targets": [{"layerId": "<layer-id>", "slot": "fills"}]}
  ]
}
```

For text/effect/guide styles, provide the matching `text`/`effects`/`guides` slot. `createFromLayer` captures native appearance rather than requiring a handwritten FREE fragment. A `range` uses UTF-16 `start`/`length` and is supported only on eligible text slots. Inspect `get_asset_usage` before deletion; the default `rejectIfUsed` prevents an accidental destructive detach. `detachConsumers` is an explicit deletion policy.

## Create a component and place an instance

Query component assets first. The summary's `componentId` identifies a definition; `layerId` identifies its source layer. They are different. When an existing reusable component meets the need, pass its returned component reference directly to `createInstances`.

For a new definition from an existing eligible layer, send this to `/v2/apply_component_changes`:

```json
{
  "documentHandle": "<document-handle>",
  "expectedRevision": "<current-revision>",
  "requestId": "<new-request-id>",
  "changes": [
    {
      "action": "createFromLayers", "clientId": "button", "name": "Button",
      "layerIds": ["<frame-layer-id>"], "placement": {"pageId": "<page-id>"}
    },
    {
      "action": "createInstances", "component": {"clientRef": "button"},
      "instances": [{"clientId": "first", "placement": {"pageId": "<page-id>", "x": 40, "y": 40}}]
    }
  ]
}
```

`clientRef` resolves only a preceding compatible creation in this batch. After committing, discover the created asset again when you need its source-layer identity, definition/state owner, or complete typed asset reference. Do not assume every returned `clientIds` entry represents the same resource kind.

A property definition is a typed union. For example, append an explicit property action to a suitable component batch:

```json
{
  "action": "createProperty", "clientId": "caption",
  "component": {"id": "<component-id>"},
  "property": {"type": "text", "name": "Caption", "initialValue": "Continue"}
}
```

Assign values to local instances with `setInstanceProperties`, using the returned property identity:

```json
{
  "action": "setInstanceProperties",
  "instances": [{"id": "<instance-layer-id>"}],
  "properties": [{"property": {"id": "<property-id>"}, "value": {"kind": "text", "value": "Save"}}]
}
```

Creating the property does not invent bindings on source nodes. If a source text/visibility/swap binding is needed, use the documented native `updateDefinition.patch.binds` shape with actual property IDs after creation/readback. A raw FREE fragment cannot resolve a batch `clientRef` string. Imported source definitions remain read-only. See [component semantics](https://lunacy.docs.icons8.com/plugin-api-v2/#components-and-instances) for states, swaps, supported patch fields and override categories.

## Pages, navigation and document lifecycle

`list_documents` discovers visible tabs; `activate_document` takes `tabId` and a request ID. Loading and navigation are explicit operations rather than consequences of a read. To create a local document:

```json
{"name": "Plugin draft", "requestId": "<new-request-id>"}
```

Send that to `/v2/create_document`, then retain its returned document handle, revision and initial page. For an existing file, `/v2/open_document` accepts exactly one of these locator shapes:

```json
{"localPath": "<user-authorized-absolute-file-path>", "requestId": "<new-request-id>"}
```

```json
{"cloud": {"documentId": "<document-id>", "versionId": "<optional-version-id>"}, "requestId": "<new-request-id>"}
```

Omit `versionId` to open the current cloud document. The application needs its normal account/file access; the API does not grant it. Version tabs can be read-only. `open_document` reuses a matching visible tab where supported.

Create and rename a page in a single `/v2/manage_pages` batch:

```json
{
  "documentHandle": "<document-handle>",
  "expectedRevision": "<current-revision>",
  "requestId": "<new-request-id>",
  "changes": [
    {"action": "create", "clientId": "screens", "name": "Screens"},
    {"action": "rename", "page": {"clientRef": "screens"}, "name": "Product screens"}
  ]
}
```

Activate the returned page with `/v2/activate_page`, supplying `pageId` plus the document mutation guards. Navigation does not advance content revision or add an undo item. Page edits do. Deleting a nonempty page requires the explicit `deleteContents` policy; default `rejectIfNotEmpty` rejects it, and the final page cannot be removed.

Rename with `/v2/rename_document` and `name` plus guards. Save to an authorized destination through `/v2/save_document`:

```json
{
  "documentHandle": "<document-handle>", "expectedRevision": "<current-revision>",
  "requestId": "<new-request-id>", "destination": "<user-authorized-absolute-free-path>",
  "overwrite": false, "allowDialog": false
}
```

Inspect `savedRevision`, `destination`, and the returned document's `save` metadata. A cloud queued/sent result is not an extra durable-storage guarantee. Do not close after a failed/cancelled save. When the intended document is safely saved, close with `/v2/close_document`:

```json
{
  "tabId": "<tab-id>", "documentHandle": "<document-handle>",
  "expectedRevision": "<current-revision>", "requestId": "<new-request-id>", "ifUnsaved": "fail"
}
```

Every loaded close needs both handle and revision. `ifUnsaved:"discard"` is destructive and must reflect an explicit user decision. Unloaded/failed tabs use the metadata-only close path. `reorder_tabs` supplies the exact complete visible tab ID set in its desired order.

## Recover a response without duplicating a change

Keep the exact original request and its scope. If the transport failed after sending a document mutation, call `/v2/get_request_status`:

```json
{"documentHandle": "<original-document-handle>", "requestId": "<original-request-id>"}
```

Use `tabId` for a tab-scoped lifecycle request, or neither selector for a session-scoped operation. Do not change scope because the active tab changed.

- `pending`: the original request is still in progress; wait rather than start a different mutation.
- `completed`: inspect `data.result`, which is the original success/error envelope, including returned IDs.
- `unknown`: retention expired, the server restarted, or the request was never observed. Reread model/save/tab state before deciding what to do next.

An exact retry with the same payload/target/request ID can return the retained result even if its old `expectedRevision` is now stale. A different payload with the same ID returns `RequestConflict`. A new request ID means a new operation; it is not a safe lost-response retry. A known `RevisionConflict` requires a fresh read and rebuilt request; never just replace the revision on a destructive stale plan.

## Discover and import library assets

These are request examples, not an instruction to connect/publish anything. Use already authorized account sources. `/v2/list_libraries` with `scope:"available"` lists metadata; follow `nextCursor` with the same target/filter. A metadata `version:null` is not a usable import version.

Search one explicitly selected source through `/v2/query_design_system`:

```json
{
  "documentHandle": "<target-document-handle>", "libraryIds": ["<discovered-library-id>"],
  "scopes": ["availableLibrary"], "kinds": ["component"], "query": "Button", "limit": 50
}
```

Retain the returned asset reference and `sourceVersion` together. Inspect the definition before importing. Then send `/v2/import_library_assets` with the current target revision:

```json
{
  "documentHandle": "<target-document-handle>", "expectedRevision": "<current-target-revision>",
  "requestId": "<new-request-id>", "libraryId": "<discovered-library-id>",
  "sourceVersion": "<observed-semantic-source-version>", "validateOnly": true,
  "assets": [{"kind": "component", "id": "<source-component-id>", "scope": "availableLibrary", "libraryId": "<discovered-library-id>"}]
}
```

Commit with `validateOnly:false`, a fresh request ID and current target revision after a successful preview. Use the returned `assets[].local` mapping for local consumers. Existing imported IDs are reused; importing a new asset does not implicitly update existing imported dependencies.

Persistent `connect_library`/`disconnect_library` needs an editable cloud target and a discovered cloud locator. A local target has no persistent connections but can discover/import available sources. Disconnecting retains imported assets and their consumers. Source definitions are not made editable by importing them.

To refresh, first inspect the source again and submit explicit version pairs to `/v2/refresh_libraries`:

```json
{
  "documentHandle": "<target-document-handle>", "expectedRevision": "<current-target-revision>",
  "requestId": "<new-request-id>",
  "libraries": [{"libraryId": "<discovered-library-id>", "version": "<observed-semantic-source-version>"}]
}
```

Read every result item: refresh is atomic per library, and successful earlier libraries remain applied if a later one fails. Missing source assets are not automatically deleted. Review [native library limits](https://lunacy.docs.icons8.com/plugin-api-v2/#libraries) before preparing large imports.

## Combine v2 with legacy layer, export and UI calls

Use v2 for explicit document discovery and typed design-system operations. Legacy layer/image/export routes keep their own bodies and response formats. On a matching build, pass request-local target headers rather than switching the active tab:

```javascript
const response = await fetch(`${baseUrl}/getlayersbyids`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Lunacy-Document-Handle': documentHandle,
    'X-Lunacy-Page-Id': pageId
  },
  body: JSON.stringify(layerIds)
});
const raw = await response.text();
if (!response.ok) {
  throw new Error(`Layer read failed: HTTP ${response.status}`);
}
const layers = JSON.parse(raw);
```

`pageId` and `layerIds` in this fragment must come from the chosen document. Only pass a page header on routes supporting it. Target failures are explicit; do not retry against the active tab. Legacy calls do not gain a v2 envelope/replay guard from these headers. See the [legacy endpoint reference](https://lunacy.docs.icons8.com/plugin-api/#explicit-document-targets).

The [UI guide](https://lunacy.docs.icons8.com/plugin-ui/) and [service example](https://github.com/icons8/lunacy-plugins/tree/7b82b78118e2c66a474f3d556b171903af12bcbc/featured-plugins/bitmap-to-vector-plugin) show registration and WebSocket lifecycle. Re-register UI after each `plugin_initialized` handshake. Events signal that you should reread; legacy document IDs are not live v2 handles and an event is not a complete revision/commit acknowledgement.
