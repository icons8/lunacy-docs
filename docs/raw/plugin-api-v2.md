# Plugin API v2 reference

> All typed document, component, style, variable and library methods and schemas


This complete reference is synchronized from the [lunacy-plugins article](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/API_V2_REFERENCE.md) at commit `7b82b781`, checked on November 5, 2026. See [Plugins](https://lunacy.docs.icons8.com/raw/plugins.md) for installation and manifests.

> Availability: preview API. Use a matching Lunacy build that advertises these operations through `/v2/get_session`; older installed releases may not include them. Snapshot checked on 2026-11-05.

This reference documents direct HTTP calls from plugins. MCP and the built-in AI Chat group the same operations into 11 tools, but a plugin sends the HTTP body directly: do not add the MCP `request.operation` wrapper. Legacy layer, image, export, event and UI contracts remain available in the [legacy API reference](https://lunacy.docs.icons8.com/raw/plugin-api.md) and [UI guide](https://lunacy.docs.icons8.com/raw/plugin-ui.md). Start with the [worked workflows](https://lunacy.docs.icons8.com/raw/plugin-workflows.md).

## Transport and availability

The usual base URL is `http://localhost:31415`; use the address configured by the running application. All 26 methods below accept POST JSON. `get_session` also accepts GET. Request and response property names are camelCase; enum/discriminator values are strings. JSON member order does not matter. Unknown fields, unknown actions, numeric enums and malformed typed references are rejected. A valid parser schema does not grant permissions or establish a valid model operation.

Fetch `/v2/get_session` first. Its `operations` describes actual registered HTTP operations/actions, `bindings` lists available property/type/target combinations, and `limits` reports budgets. If a route is unavailable, report that capability requirement instead of falling back to an unrelated active document. Plugins do not need to implement MCP.

## Identities and common request fields

| Field/identity | Meaning |
| --- | --- |
| `sessionId` | This running server session. Replay and handles end when the server restarts. |
| `tabId` | One visible tab; discover it with `list_documents`. |
| `documentHandle` | One live ready document instance. It is not the persisted ID. Closing/reopening expires the old handle. |
| `documentId` / `versionId` | Persisted/cloud identities used for locating/opening documents. They cannot replace a live handle. |
| `pageId` | A page belonging to the explicit target document. |
| `expectedRevision` | Current opaque revision from a recent read. Content edits, undo/redo, collaboration and synchronization can invalidate it. Navigation does not advance it. |
| `requestId` | Client-generated 1–128 character identity for a mutation/lifecycle call. Use a fresh UUID for each new operation. |
| `clientId` | Optional creation label local to one ordered batch; returned `clientIds` map it to actual resource IDs. |
| `clientRef` | Refers only to a preceding compatible creation in that same batch. |

Model selectors are exactly `{"id":"<returned-id>"}` or `{"clientRef":"<earlier-client-id>"}`. Do not combine them, invent resource IDs, use a name as identity, or use forward/deleted references. IDs are opaque strings and should be passed back unchanged.

A document mutation requires `documentHandle`, `expectedRevision`, and `requestId`. Lifecycle calls use their documented tab/locator selectors and request ID. Apply/page batches use 1–100 non-null `changes`; `validateOnly:true` prepares/validates without editing, creating live resources or adding history. Commit later with a fresh request ID and current revision. One changed domain batch creates one normal undo item; a genuine no-op creates none. Cross-domain dependencies use separate requests in variable, style, then component order.

## Responses, errors and replay

```json
{"ok":true,"requestId":"<request-id>","documentHandle":"<handle>","revision":"<revision>","data":{},"warnings":[]}
```

```json
{"ok":false,"requestId":"<request-id>","error":{"code":"RevisionConflict","message":"<explanation>","path":"<optional-field>","operationIndex":0},"warnings":[]}
```

Optional metadata and null fields can be omitted. Success has typed `data`; failure has `error`, not a successful data payload. Always inspect `ok`, per-item errors and `warnings`. HTTP statuses are 400 for invalid input; 403 for access/read-only restrictions; 404 for unavailable targets; 409 for stale/conflicting/busy state; 413 for limits; 503 for unavailable dependencies; 500 for unexpected/save failures. Errors use stable codes, including `InvalidArgument`, `InvalidId`, `DocumentNotFound`, `DocumentClosed`, `DocumentNotReady`, `PageNotFound`, `AssetNotFound`, `ReadOnly`, `PermissionDenied`, `RevisionConflict`, `RequestConflict`, `Busy`, `UnsupportedOperation`, `UnsupportedBinding`, `TypeMismatch`, `AliasCycle`, `RecursiveComponent`, `ResourceInUse`, `UnsavedChanges`, `PathRequired`, `DestinationExists`, `SaveFailed`, `NetworkUnavailable`, `LibraryUnavailable`, `LimitExceeded`, `Cancelled`, and `InternalError`.

After a lost response, retry the identical target/request ID/payload to retrieve the original retained result and created IDs. The replay check precedes the old revision guard. Reusing the request ID for a different payload is `RequestConflict`. `get_request_status` returns pending, completed with the retained result, or unknown. Replay is bounded to 256 entries, 16 MiB of completed bytes and one hour; eviction/restart ends it. After unknown, reread content before a new operation, which can otherwise duplicate a creation, save, import or discard. A failed batch is rolled back before publication; an uncertain network outcome still needs status recovery.

On `RevisionConflict`, reread/rebuild. On `Busy`, wait for native work to finish before retrying. Permission/network/library failures are not permission to sign in, publish, bypass sandbox access, edit remote definitions or silently target another document.

## Methods

The field tables distinguish **JSON-required** fields from domain constraints. A field that is optional in the parser can still need a nonempty value for a usable call; the behavior paragraphs and full schemas describe its context. Defaults shown below are native request defaults, not newly generated live values. Nested request objects appear after the methods.

| HTTP path | Successful data |
| --- | --- |
| [`POST /v2/get_session`](#get_session) | Session data |
| [`POST /v2/list_documents`](#list_documents) | {items: `DocumentInfo[]`} |
| [`POST /v2/activate_document`](#activate_document) | DocumentResult |
| [`POST /v2/list_pages`](#list_pages) | {items: `PageInfo[]`, nextCursor?} |
| [`POST /v2/query_design_system`](#query_design_system) | {items: `AssetSummary[]`, nextCursor?} |
| [`POST /v2/get_design_system_assets`](#get_design_system_assets) | {items: `AssetDetail[]`} |
| [`POST /v2/get_asset_usage`](#get_asset_usage) | {items: `AssetUsage[]`, nextCursor?} |
| [`POST /v2/get_design_context`](#get_design_context) | {layers: `LayerContext[]`, assets: `AssetDefinition[]`} |
| [`POST /v2/apply_component_changes`](#apply_component_changes) | BatchResult |
| [`POST /v2/apply_style_changes`](#apply_style_changes) | BatchResult |
| [`POST /v2/apply_variable_changes`](#apply_variable_changes) | BatchResult |
| [`POST /v2/get_request_status`](#get_request_status) | {status: "pending" \| "completed" \| "unknown", result?: originalEnvelope} |
| [`POST /v2/get_automation_documentation`](#get_automation_documentation) | {topic, content} |
| [`POST /v2/activate_page`](#activate_page) | DocumentResult |
| [`POST /v2/manage_pages`](#manage_pages) | BatchResult |
| [`POST /v2/create_document`](#create_document) | DocumentResult |
| [`POST /v2/open_document`](#open_document) | DocumentResult |
| [`POST /v2/rename_document`](#rename_document) | DocumentResult |
| [`POST /v2/reorder_tabs`](#reorder_tabs) | DocumentResult with tabIds |
| [`POST /v2/save_document`](#save_document) | DocumentResult |
| [`POST /v2/close_document`](#close_document) | DocumentResult with closed |
| [`POST /v2/list_libraries`](#list_libraries) | {items: `LibraryInfo[]`, nextCursor?} |
| [`POST /v2/connect_library`](#connect_library) | {library?: LibraryInfo, changed} |
| [`POST /v2/disconnect_library`](#disconnect_library) | {library?: LibraryInfo, changed} |
| [`POST /v2/import_library_assets`](#import_library_assets) | {assets: `AssetMapping[]`, changes: BatchResult, sourceVersion} |
| [`POST /v2/refresh_libraries`](#refresh_libraries) | {items: `LibraryRefreshItem[]`} |

### get_session

`POST /v2/get_session` or `GET /v2/get_session`

Inspect the active server session, supported HTTP operation/action descriptors, binding combinations and limits. GET is also supported. A missing route means the installed build does not expose this API.

Body: `{}`.

Data: **Session data**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/get_session.schema.json).

### list_documents

`POST /v2/list_documents`

List visible loaded and unloaded tabs without loading each document. Only ready readable documents have live handles. Hidden library source loads are not visible editable targets.

Body: `{}`.

Data: **{items: `DocumentInfo[]`}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/list_documents.schema.json).

### activate_document

`POST /v2/activate_document`

Activate the specified tab and await its document load. tabId comes from list_documents. Return the live handle/readiness; do not replace a failed load with a different active document.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `tabId` | string | yes | — |
| `requestId` | string | yes | — |

Data: **DocumentResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/activate_document.schema.json).

### list_pages

`POST /v2/list_pages`

List the target document’s pages. Use the returned page IDs for navigation and placement. Pagination binds its query and revision.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `limit` | integer | no | `50` |
| `cursor` | string / null | no | — |
| `documentHandle` | string | yes | — |

Data: **{items: `PageInfo[]`, nextCursor?}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/list_pages.schema.json).

### query_design_system

`POST /v2/query_design_system`

Search reusable assets by name/filter and scope. kinds: component, style, collection, theme, variable. scopes: local, imported, connectedLibrary, availableLibrary. External scopes use explicit libraryIds discovered for this account. Search names, then mutate returned IDs.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `kinds` | array / null | no | — |
| `query` | string / null | no | — |
| `scopes` | array / null | no | — |
| `collectionId` | string / null | no | — |
| `styleType` | `"color"` / `"text"` / `"effect"` / `"guide"` / `null` | no | — |
| `libraryIds` | array / null | no | — |
| `limit` | integer | no | `50` |
| `cursor` | string / null | no | — |
| `documentHandle` | string | yes | — |

Data: **{items: `AssetSummary[]`, nextCursor?}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/query_design_system.schema.json).

### get_design_system_assets

`POST /v2/get_design_system_assets`

Inspect 1–100 typed references. Each result retains its input asset and either a definition or an item error; inspect item errors even when the envelope is successful. componentDepth defaults to 0; bounded component content may be requested up to the reported limit.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `assets` | array of object | no | — |
| `componentDepth` | integer | no | `0` |
| `documentHandle` | string | yes | — |

Data: **{items: `AssetDetail[]`}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/get_design_system_assets.schema.json).

### get_asset_usage

`POST /v2/get_asset_usage`

Inspect direct and inherited consumers, aliases and property locations of one typed asset. Do not count generated copies as separately editable definitions. Follow nextCursor.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `asset` | object | no | — |
| `limit` | integer | no | `50` |
| `cursor` | string / null | no | — |
| `documentHandle` | string | yes | — |

Data: **{items: `AssetUsage[]`, nextCursor?}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/get_asset_usage.schema.json).

### get_design_context

`POST /v2/get_design_context`

Pass exactly one of nonempty layerIds or selection:true. Read effective bindings, themes, component property values and used definitions in this explicit document. An optional pageId further qualifies the target.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `layerIds` | array / null | no | — |
| `selection` | boolean / null | no | — |
| `pageId` | string / null | no | — |
| `documentHandle` | string | yes | — |

Data: **{layers: `LayerContext[]`, assets: `AssetDefinition[]`}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/get_design_context.schema.json).

### apply_component_changes

`POST /v2/apply_component_changes`

Validate or commit one ordered component/instance/state/property batch. Full action fields and native restrictions appear below. One changed commit creates one normal undo operation.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `validateOnly` | boolean | no | `false` |
| `changes` | array of typed union | yes | — |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **BatchResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/apply_component_changes.schema.json).

### apply_style_changes

`POST /v2/apply_style_changes`

Validate or commit one ordered batch over color, text, effect or guide styles. Supports definition edits, apply and detach, subject to native target/override rules.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `validateOnly` | boolean | no | `false` |
| `changes` | array of typed union | yes | — |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **BatchResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/apply_style_changes.schema.json).

### apply_variable_changes

`POST /v2/apply_variable_changes`

Validate or commit one ordered batch over collections, themes, typed variables, aliases and native bindings. Read bindings from get_session before selecting a property/target combination.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `validateOnly` | boolean | no | `false` |
| `changes` | array of typed union | yes | — |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **BatchResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/apply_variable_changes.schema.json).

### get_request_status

`POST /v2/get_request_status`

Recover the same requestId in the original target scope: documentHandle, tabId, or neither for a session operation. Do not provide contradictory scopes. Retention is bounded; unknown does not prove that the original operation failed.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `requestId` | string | yes | — |
| `documentHandle` | string / null | no | — |
| `tabId` | string / null | no | — |

Data: **{status: "pending" | "completed" | "unknown", result?: originalEnvelope}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/get_request_status.schema.json).

### get_automation_documentation

`POST /v2/get_automation_documentation`

Read focused runtime help. topic defaults to overview; overview aliases common. Topics: common, components, styles, variables, documents, libraries. Available without an open document.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `topic` | string | no | `"overview"` |

Data: **{topic, content}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/get_automation_documentation.schema.json).

### activate_page

`POST /v2/activate_page`

Navigate explicitly to a page in the target document. It requires the current revision and request ID but does not add a content revision or undo item.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `pageId` | string | yes | — |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **DocumentResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/activate_page.schema.json).

### manage_pages

`POST /v2/manage_pages`

Validate or commit 1–100 ordered page changes. Components-page roles and the last-page invariant are enforced before commit. One changed batch has one undo item.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `validateOnly` | boolean | no | `false` |
| `changes` | array of typed union | yes | — |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **BatchResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/manage_pages.schema.json).

### create_document

`POST /v2/create_document`

Create and await a ready document. Without cloudDestination the result is local. Cloud creation needs an explicitly authorized destination and normal account permissions. Optional name follows the native document naming rules.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `name` | string / null | no | — |
| `cloudDestination` | object / null | no | — |
| `requestId` | string | yes | — |

Data: **DocumentResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/create_document.schema.json).

### open_document

`POST /v2/open_document`

Provide exactly one locator: localPath or cloud. The cloud locator has documentId and optional versionId. Await native loading; reuse a matching visible document/version/path. A local path needs native filesystem access; opening a version can produce a read-only target.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `localPath` | string / null | no | — |
| `cloud` | object / null | no | — |
| `requestId` | string | yes | — |

Data: **DocumentResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/open_document.schema.json).

### rename_document

`POST /v2/rename_document`

Rename through the document manager, retaining document identity. name must be a valid nonempty native document name. Inspect the returned name/path/save metadata.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `name` | string | yes | — |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **DocumentResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/rename_document.schema.json).

### reorder_tabs

`POST /v2/reorder_tabs`

Supply the exact complete set of currently visible tabIds in the desired order, without duplicates. Does not change document content.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `tabIds` | array of string | yes | — |
| `requestId` | string | yes | — |

Data: **DocumentResult with tabIds**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/reorder_tabs.schema.json).

### save_document

`POST /v2/save_document`

Await a native local save or actual cloud-send result. Untitled/imported/template files need destination unless allowDialog:true explicitly permits a dialog. overwrite defaults to false. Read destination, savedRevision and synchronization state; a sent/queued change is not a separate durable-storage guarantee.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `destination` | string / null | no | — |
| `overwrite` | boolean | no | `false` |
| `allowDialog` | boolean | no | `false` |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **DocumentResult**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/save_document.schema.json).

### close_document

`POST /v2/close_document`

tabId is always required. Every loaded-tab close requires its current documentHandle and expectedRevision. ifUnsaved defaults to fail; save or discard is explicit. Unloaded/failed tabs support metadata-only close with fail. A failed/cancelled save keeps the tab/recovery work. Use the same request ID to recover a lost close response.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `documentHandle` | string / null | no | — |
| `expectedRevision` | string / null | no | — |
| `tabId` | string | yes | — |
| `ifUnsaved` | string | no | `"fail"` |
| `destination` | string / null | no | — |
| `overwrite` | boolean | no | `false` |
| `allowDialog` | boolean | no | `false` |
| `requestId` | string | yes | — |

Data: **DocumentResult with closed**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/close_document.schema.json).

### list_libraries

`POST /v2/list_libraries`

scope defaults to connected; available lists authorized account metadata without downloading every source. Editable cloud targets support persistent connections. A local target’s connected list is empty but it can inspect/import available assets. Metadata version may be null; obtain a loaded semantic sourceVersion through asset discovery before import.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `scope` | string | no | `"connected"` |
| `limit` | integer | no | `50` |
| `cursor` | string / null | no | — |
| `documentHandle` | string | yes | — |

Data: **{items: `LibraryInfo[]`, nextCursor?}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/list_libraries.schema.json).

### connect_library

`POST /v2/connect_library`

Connect a discovered cloud source to an editable cloud target. The locator kind is cloud; id/endpoint must identify a pair discovered through existing authorized connections. Arbitrary endpoint URLs, local locators and self-connection are rejected. A local target cannot create persistent connections.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `library` | object | no | — |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **{library?: LibraryInfo, changed}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/connect_library.schema.json).

### disconnect_library

`POST /v2/disconnect_library`

Await native disassociation from the editable cloud target. libraryId is an observed source ID. Existing imported definitions/consumers remain; this is not delete or deep detach.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `libraryId` | string | no | — |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **{library?: LibraryInfo, changed}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/disconnect_library.schema.json).

### import_library_assets

`POST /v2/import_library_assets`

Import 1–100 explicit discovered asset references using libraryId and its observed semantic sourceVersion. Dependencies are prepared and the target changes in one undo operation. validateOnly defaults to false. Existing imported IDs are reused; a new asset does not implicitly refresh already imported dependencies.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `libraryId` | string | no | — |
| `sourceVersion` | string | no | — |
| `assets` | array of object | no | — |
| `validateOnly` | boolean | no | `false` |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **{assets: `AssetMapping[]`, changes: BatchResult, sourceVersion}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/import_library_assets.schema.json).

### refresh_libraries

`POST /v2/refresh_libraries`

Refresh 1–100 unique explicit libraryId/version pairs. Each completed library is atomic; earlier successful libraries remain committed if a later one fails. Preserve IDs and supported overrides. Read per-item errors/results before retrying. Missing source assets are not automatically deleted.

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `libraries` | array of object | no | — |
| `expectedRevision` | string | yes | — |
| `requestId` | string | yes | — |
| `documentHandle` | string | yes | — |

Data: **{items: `LibraryRefreshItem[]`}**. [Full request JSON Schema](https://lunacy.docs.icons8.com/plugin-api-schemas/refresh_libraries.schema.json).

## Batch action fields

Put the following objects in their endpoint’s `changes` array. `action` is the required string discriminator. Each variant rejects undeclared properties. References, appearances and binding/property values are described in the nested types and semantic rules below.

### Component action: createFromLayers

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"createFromLayers"` | yes | — |
| `clientId` | string / null | no | — |
| `layerIds` | array of string | yes | — |
| `name` | string / null | no | — |
| `placement` | object / null | no | — |

### Component action: updateDefinition

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"updateDefinition"` | yes | — |
| `component` | resource selector (exactly one variant) | yes | — |
| `patch` | JSON value | yes | — |

### Component action: rename

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"rename"` | yes | — |
| `component` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |

### Component action: delete

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"delete"` | yes | — |
| `component` | resource selector (exactly one variant) | yes | — |
| `policy` | string | no | `"rejectIfUsed"` |

### Component action: combineStates

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"combineStates"` | yes | — |
| `clientId` | string / null | no | — |
| `components` | array of JSON value | yes | — |
| `name` | string / null | no | — |

### Component action: createState

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"createState"` | yes | — |
| `clientId` | string / null | no | — |
| `component` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |

### Component action: renameState

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"renameState"` | yes | — |
| `state` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |

### Component action: deleteState

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"deleteState"` | yes | — |
| `state` | resource selector (exactly one variant) | yes | — |
| `replacement` | resource selector (exactly one variant) | no | — |
| `policy` | string | no | `"rejectIfUsed"` |

### Component action: moveToComponentsPage

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"moveToComponentsPage"` | yes | — |
| `components` | array of JSON value | yes | — |

### Component action: createProperty

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"createProperty"` | yes | — |
| `clientId` | string / null | no | — |
| `component` | resource selector (exactly one variant) | yes | — |
| `property` | typed union | yes | — |

### Component action: updateProperty

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"updateProperty"` | yes | — |
| `component` | resource selector (exactly one variant) | yes | — |
| `property` | resource selector (exactly one variant) | yes | — |
| `name` | string / null | no | — |
| `initialValue` | typed union | no | — |
| `allowedComponents` | array / null | no | — |
| `allowedStates` | array / null | no | — |

### Component action: deleteProperty

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"deleteProperty"` | yes | — |
| `component` | resource selector (exactly one variant) | yes | — |
| `property` | resource selector (exactly one variant) | yes | — |

### Component action: createInstances

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"createInstances"` | yes | — |
| `component` | resource selector (exactly one variant) | yes | — |
| `instances` | array of object | yes | — |

### Component action: swapInstances

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"swapInstances"` | yes | — |
| `instances` | array of JSON value | yes | — |
| `component` | resource selector (exactly one variant) | yes | — |

### Component action: setInstanceProperties

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"setInstanceProperties"` | yes | — |
| `instances` | array of JSON value | yes | — |
| `properties` | array of object | yes | — |

### Component action: removeOverrides

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"removeOverrides"` | yes | — |
| `instances` | array of JSON value | yes | — |
| `properties` | array / null | no | — |

### Component action: detachInstances

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"detachInstances"` | yes | — |
| `instances` | array of JSON value | yes | — |

### Component action: deepDetachInstances

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"deepDetachInstances"` | yes | — |
| `instances` | array of JSON value | yes | — |

### Style action: create

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"create"` | yes | — |
| `clientId` | string / null | no | — |
| `name` | string | yes | — |
| `type` | `"color"` / `"text"` / `"effect"` / `"guide"` | yes | — |
| `value` | JSON value | yes | — |

### Style action: createFromLayer

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"createFromLayer"` | yes | — |
| `clientId` | string / null | no | — |
| `name` | string | yes | — |
| `type` | `"color"` / `"text"` / `"effect"` / `"guide"` | yes | — |
| `layerId` | string | no | — |
| `slot` | string / null | no | — |
| `range` | object / null | no | — |

### Style action: update

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"update"` | yes | — |
| `style` | resource selector (exactly one variant) | yes | — |
| `patch` | JSON value | yes | — |

### Style action: rename

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"rename"` | yes | — |
| `style` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |

### Style action: delete

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"delete"` | yes | — |
| `style` | resource selector (exactly one variant) | yes | — |
| `policy` | string | no | `"rejectIfUsed"` |

### Style action: apply

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"apply"` | yes | — |
| `style` | resource selector (exactly one variant) | yes | — |
| `targets` | array of object | yes | — |

### Style action: detach

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"detach"` | yes | — |
| `targets` | array of object | yes | — |

### Variable action: createCollection

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"createCollection"` | yes | — |
| `clientId` | string / null | no | — |
| `name` | string | yes | — |
| `defaultThemeName` | string | no | `"Default"` |
| `defaultThemeClientId` | string / null | no | — |

### Variable action: renameCollection

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"renameCollection"` | yes | — |
| `collection` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |

### Variable action: deleteCollection

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"deleteCollection"` | yes | — |
| `collection` | resource selector (exactly one variant) | yes | — |

### Variable action: createTheme

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"createTheme"` | yes | — |
| `clientId` | string / null | no | — |
| `collection` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |
| `sourceTheme` | resource selector (exactly one variant) | yes | — |

### Variable action: renameTheme

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"renameTheme"` | yes | — |
| `collection` | resource selector (exactly one variant) | yes | — |
| `theme` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |

### Variable action: deleteTheme

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"deleteTheme"` | yes | — |
| `collection` | resource selector (exactly one variant) | yes | — |
| `theme` | resource selector (exactly one variant) | yes | — |

### Variable action: selectCollectionTheme

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"selectCollectionTheme"` | yes | — |
| `collection` | resource selector (exactly one variant) | yes | — |
| `theme` | resource selector (exactly one variant) | yes | — |

### Variable action: setLayerTheme

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"setLayerTheme"` | yes | — |
| `layerIds` | array of string | yes | — |
| `collection` | resource selector (exactly one variant) | yes | — |
| `theme` | resource selector (exactly one variant) | yes | — |

### Variable action: clearLayerTheme

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"clearLayerTheme"` | yes | — |
| `layerIds` | array of string | yes | — |
| `collection` | resource selector (exactly one variant) | yes | — |

### Variable action: createVariable

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"createVariable"` | yes | — |
| `clientId` | string / null | no | — |
| `collection` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |
| `type` | `"color"` / `"float"` / `"bool"` / `"text"` | yes | — |
| `values` | array of object | yes | — |

### Variable action: renameVariable

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"renameVariable"` | yes | — |
| `variable` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |

### Variable action: setValues

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"setValues"` | yes | — |
| `variable` | resource selector (exactly one variant) | yes | — |
| `values` | array of object | yes | — |

### Variable action: deleteVariable

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"deleteVariable"` | yes | — |
| `variable` | resource selector (exactly one variant) | yes | — |

### Variable action: bind

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"bind"` | yes | — |
| `target` | object | yes | — |
| `location` | object | yes | — |
| `variable` | resource selector (exactly one variant) | yes | — |

### Variable action: unbind

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"unbind"` | yes | — |
| `target` | object | yes | — |
| `location` | object | yes | — |

### Page action: create

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"create"` | yes | — |
| `clientId` | string / null | no | — |
| `name` | string | yes | — |
| `index` | integer / null | no | — |

### Page action: rename

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"rename"` | yes | — |
| `page` | resource selector (exactly one variant) | yes | — |
| `name` | string | yes | — |

### Page action: reorder

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"reorder"` | yes | — |
| `page` | resource selector (exactly one variant) | yes | — |
| `index` | integer | yes | — |

### Page action: duplicate

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"duplicate"` | yes | — |
| `clientId` | string / null | no | — |
| `page` | resource selector (exactly one variant) | yes | — |
| `name` | string / null | no | — |
| `index` | integer / null | no | — |

### Page action: delete

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `action` | `"delete"` | yes | — |
| `page` | resource selector (exactly one variant) | yes | — |
| `policy` | string | no | `"rejectIfNotEmpty"` |

## Nested request types

### Asset reference

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `kind` | `"component"` / `"style"` / `"collection"` / `"theme"` / `"variable"` | yes | — |
| `id` | string | yes | — |
| `scope` | `"local"` / `"imported"` / `"connectedLibrary"` / `"availableLibrary"` | yes | — |
| `libraryId` | string / null | no | — |
| `sourceId` | string / null | no | — |
| `collectionId` | string / null | no | — |

### Cloud destination

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `teamId` | string / null | no | `null` |
| `projectId` | string / null | no | `null` |

### Cloud locator

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `documentId` | string | yes | — |
| `versionId` | string / null | no | `null` |

### Library locator

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `id` | string | no | — |
| `kind` | string | no | `"cloud"` |
| `localPath` | string / null | no | — |
| `endpoint` | string / null | no | — |

### Library version

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `libraryId` | string | yes | — |
| `version` | string | yes | — |

### Placement

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `pageId` | string / null | no | — |
| `parentId` | string / null | no | — |
| `index` | integer / null | no | — |
| `x` | number / null | no | — |
| `y` | number / null | no | — |

### Instance placement

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `clientId` | string / null | no | — |
| `placement` | object | no | — |

### Style target

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `layerId` | string | no | — |
| `slot` | string | no | `"fills"` |
| `range` | object / null | no | — |

### Text range

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `start` | integer | no | — |
| `length` | integer | no | — |

### Theme value

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `theme` | resource selector (exactly one variant) | yes | — |
| `value` | typed union | yes | — |

### Binding target

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `kind` | string | yes | — |
| `resource` | resource selector (exactly one variant) | yes | — |

### Binding location

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `property` | string | yes | — |
| `index` | integer / null | no | — |
| `stopIndex` | integer / null | no | — |
| `start` | integer / null | no | — |
| `length` | integer / null | no | — |

### Instance property assignment

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `property` | resource selector (exactly one variant) | yes | — |
| `value` | typed union | yes | — |

### Component property definition

#### bool

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `type` | `"bool"` | yes | — |
| `initialValue` | boolean | yes | — |
| `name` | string | yes | — |

#### text

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `type` | `"text"` | yes | — |
| `initialValue` | string | yes | — |
| `name` | string | yes | — |

#### swap

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `type` | `"swap"` | yes | — |
| `initialValue` | resource selector (exactly one variant) | yes | — |
| `allowedValues` | array of JSON value | no | — |
| `name` | string | yes | — |

#### slot

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `type` | `"slot"` | yes | — |
| `initialValue` | resource selector (exactly one variant) | yes | — |
| `allowedValues` | array of JSON value | no | — |
| `name` | string | yes | — |

#### state

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `type` | `"state"` | yes | — |
| `initialValue` | string | yes | — |
| `allowedValues` | array of string | no | — |
| `name` | string | yes | — |

### Component property value

#### bool

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `kind` | `"bool"` | yes | — |
| `value` | boolean | yes | — |

#### text

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `kind` | `"text"` | yes | — |
| `value` | string | yes | — |

#### component

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `kind` | `"component"` | yes | — |
| `component` | resource selector (exactly one variant) | yes | — |

#### state

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `kind` | `"state"` | yes | — |
| `value` | string | yes | — |

### Variable value

#### literal

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `kind` | `"literal"` | yes | — |
| `value` | JSON value | yes | — |

#### alias

| Field | JSON type | JSON-required | Default / notes |
| --- | --- | --- | --- |
| `kind` | `"alias"` | yes | — |
| `variable` | resource selector (exactly one variant) | yes | — |

## Native semantics and constraints

### Discovery and references

An asset reference has `kind`, `id`, `scope`, and applicable library/source/collection IDs. Kinds are `component`, `style`, `collection`, `theme`, and `variable`. Scopes are `local`, `imported`, `connectedLibrary`, and `availableLibrary`. Return complete references unchanged rather than reconstructing origins from names. A component's `componentId` and source `layerId` are distinct identities. Use discovery after creation when an operation needs a different identity kind.

Search and usage results are paginated; `limit` defaults to 50 and is bounded to 1–200. Cursors are opaque, tied to their query/target/revision and applicable source snapshot. A changed target/source can invalidate them. Restart the query after a cursor conflict. Do not treat an available-library metadata continuation as a global point-in-time snapshot: the native endpoint has no ETag/global snapshot, and equal update timestamps across a page boundary can omit metadata entries. This does not weaken source validation for an explicitly opened library.

`get_design_system_assets` returns a definition or an item-specific error for each input reference. Component content is deliberately bounded by `componentDepth` and work budgets. Missing, dead or inaccessible references are not live assets merely because a name or in-memory object remains.

### Components and instances

`createFromLayers` converts explicit existing source layers, preserving existing child IDs. Placement names an explicit page/parent when relocation is needed. `createInstances` requires explicit placements; no active selection is inferred. A `clientId` on an instance placement maps that creation into the batch's `clientIds` result.

`updateDefinition.patch` updates the existing source and explicitly identified direct children. Supported fields are:

```text
name size width height pos transform opacity blendMode hidden locked
lockAspect clipContent breakMask mask smoothCorners cornerRadius thickness
linePos lineCap lineJoin dash fill fills border borders shadows innerShadows
blur tint fillsId bordersId effectsId gridsId textStyleId
text fontSize kerning paragraphSpacing align valign lineHeight underline
strikethrough rtl casing binds layers
```

Each `layers` patch entry identifies an existing direct child by `id`; it cannot replace, add, remove or reorder siblings. IDs, layer types, component identities, state/property metadata, versions and library ownership cannot be overwritten. Patches cannot introduce new external image/font resources. Appearance leaves use the existing FREE representations.

Component property definitions are discriminated by `type`: `bool`, `text`, `swap`, `slot`, or `state`. Values are discriminated by `kind`: `bool`, `text`, `component`, or `state`. Swap/slot defaults are component selectors; state defaults identify one state. An explicit literal default can replace a variable-backed default even when the fallback literal is unchanged; a rename preserves that binding.

A property definition does not guess a source-node binding from its name. A later definition patch may use `binds` entries with numeric `field` and an actual property/value reference:

| Numeric field | Supported binding |
| --- | --- |
| `1` | Visibility: an owned bool property `ref`, a literal `bool`, or live bool variable `boolId`. |
| `58` | Text: an owned text property `ref`, literal `text`, or live text variable `textId`; target must be text. |
| `100` | Component source: an owned swap/slot property `ref`; target must be a source instance. |

Here `ref`, `boolId`, and `textId` contain actual IDs. A raw FREE appearance fragment does not turn arbitrary strings into typed batch `clientRef` selectors. Use `apply_variable_changes` for other native variable binding locations. State properties select through `setInstanceProperties` rather than a guessed source-node bind.

`combineStates` requires compatible sibling components and migrates property definitions to the shared owner. `createState` turns a standalone definition into a state group when needed. State names can encode multiple dimensions joined with `+`. `deleteState` preserves at least one state; its default policy is `rejectIfUsed`, while `replaceInstances` requires an explicit sibling replacement. Deleting a component defaults to `rejectIfUsed`; `detachInstances` is explicit.

`removeOverrides.properties` accepts the native categories below. Omit the list to remove supported overrides as a whole; `"all"` is not a category. Size reset also resets instance scale.

```text
size nestedComponent instanceSettings themes prototypingComponent text
layoutGuideStyle image flows tint color textColor textWeight cornerRadius
fills borders thickness linePos dash lineCap lineJoin effects blending
inlines exportOptions lock visibility clipContent smoothCorners startArrowhead
endArrowhead layoutOrientation layoutSpacing layoutPadding layoutAlign layoutSizing
layoutTextBaseline layoutIncludeBorders layoutReverseZIndex layoutStretch arc
layoutWrap layoutWrapDistribute layoutWrapSpacing lockAspect starRatio vertexCount
layoutMinMax imageFilters textBehavior layoutGuides textTruncate textMaxLines
scrollBehavior keepScroll name fillStyle borderStyle effectStyle textStyle
textVerticalTrim scrollOverflow binds
```

`detachInstances` materializes one level as frames while retaining nested instances. `deepDetachInstances` materializes the nested instance tree.

Source graph preparation observes the ordered batch. Every prefix that eagerly rebuilds instances must be acyclic, even if a later action would break the cycle. Order materialization and deletion around retained dependencies, or split the work and inspect resulting consumers first. Deleting a source retained by shallow materialization can return `ResourceInUse`; it never silently skips consumers. Swap compatibility follows native source name/type/sibling policy rather than position alone.

Imported definitions are read-only; local instances of imported definitions can use supported operations. Locked/generated targets and operations requiring unsupported comment relocation are rejected. Text/font/layout work must finish before publication; active text editing or an overlapping refresh can return `Busy`. These methods do not select layers, switch drawing tools, zoom, or open rename panels.

### Styles

Types are `color`, `text`, `effect`, and `guide`. `value` and `patch` use the FREE appearance fields appropriate to that kind, such as `{"fill":"0A84FF"}` for a color style. Updates keep IDs, untouched properties, variable references and linked consumers. Use `rename` rather than an appearance patch to change a name. `createFromLayer.slot` can be omitted for the native slot implied by the style type.

| Style kind | Target slot | Eligible target |
| --- | --- | --- |
| `color` | `fills` or `borders` | Native style-bearing layer; supported text fills can include a range. |
| `text` | `text` | Text layer. |
| `effect` | `effects` | Eligible native layer. |
| `guide` | `guides` | Frame. |

A target has explicit `layerId`; its parser default slot is `fills`, so provide the appropriate slot for other kinds. Ranges use `start`/`length` in UTF-16 positions and must not split a character. Other slots do not accept ranges.

`delete` defaults to `rejectIfUsed`; `detachConsumers` materializes supported effective appearance. `detach` materializes the explicit targets. Whole generated text style operations can use native overrides; partial generated ranges require a matching existing full inline override. A detach that would freeze unrelated inherited fields can be unsupported. Numeric scaled effects can be materialized where native geometry can preserve them, while incompatible scaled variable-bound effects are rejected. Imported style definitions cannot be edited directly.

### Variables, aliases and bindings

Types are `color`, `float`, `bool`, and `text`. Literal values are respectively FREE color strings, finite JSON numbers, JSON booleans, and strings. For example:

```json
{"kind":"literal","value":"0A84FF"}
```

```json
{"kind":"alias","variable":{"id":"<same-type-variable-id>"}}
```

Aliases are typed references, not strings containing IDs. Values belong to explicit themes in the variable's collection. `createTheme` clones a required source theme. Native collection/theme/default-role rules, alias type rules and graph cycle checks apply to the planned batch.

`selectCollectionTheme` changes the inspector's collection preview. `setLayerTheme` changes the evaluated layer theme and inheritance below that layer. `clearLayerTheme` restores inheritance. Without an explicit layer theme, the collection's default theme controls evaluated canvas values. Changing an inspector preview alone does not mean the canvas switched theme.

Use the actual `get_session.bindings` descriptor for each `target.kind`, variable type and `location.property`. Binding targets include eligible layers and appropriate style resources; examples of advertised locations include:

| Property family | Variable types / qualifier |
| --- | --- |
| `opacity`, width/height/min/max sizes, side thickness | `float`; eligible layer. |
| Corner radius properties | `float`; corner-radius-capable layer. |
| Padding and horizontal/vertical spacing | `float`; auto-layout layer. |
| `visibility` | `bool`; eligible layer. |
| `text` | `text` or `float`; text layer. |
| `fontSize`, `lineHeight`, `letterSpacing`, `paragraphSpacing` | `float`; text layer/style, with supported ranges. |
| `fontFamily` | `text`; text layer/style, with supported ranges. |
| `fontStyle` | `text` or `float`; text layer/style, with supported ranges. |
| `fontVariations` | `float`; indexed font axis and supported range. |
| `fills.color`, `borders.color`, `tint.color` | `color`; appropriate indexed paint and target. |
| `fills.stops.color`, `borders.stops.color` | `color`; paint index plus gradient stop index; ranges only where advertised. |
| Shadow/inner-shadow `.color`, `.radius`, `.x`, `.y`, `.spread` | Color or float as appropriate; indexed effect on eligible layer/effect style. |
| `blur.radius` and advertised glass-effect properties | `float`; eligible layer/effect style. |
| `guides.size`, `.offset`, `.count`, `.gutter`, `.width`, `.height` | `float`; indexed native guide on frame/guide style. |
| `background.color` | `color`; ordinary slice. |

Not every location is valid on every target. Generated properties require a representable native override: scalar/selective paint bindings preserve unrelated inheritance; ranged generated text, selective gradient-stop/numeric-effect/guide edits can require an existing full override. Generated slice bindings are unsupported. Ordinary fields inherited from a linked style require detaching that style explicitly or editing its source first.

Unbinding preserves the current effective or cached value in the target's theme context; it does not resolve a dead variable. Native zero sentinels remain valid, such as automatic line height and unbounded maximum width/height. Deletion follows native dead-reference/save behavior, without a separate API persistence policy.

### Pages and document lifecycle

Page actions are ordered and undoable. Default delete policy is `rejectIfNotEmpty`; explicit `deleteContents` still preserves the last page and components-page roles. A duplication can specify a name/index and preserves relevant content/source ownership through native copy behavior. Page navigation uses `activate_page`; listing does not load every tab.

A loaded document close always carries the current handle/revision, even for `ifUnsaved:"fail"`. `ifUnsaved:"save"` and `"discard"` are explicit decisions; unloaded/failed tabs support only the documented metadata close path. An ungranted local path can return `PermissionDenied`; a plugin does not bypass native file access. User-granted normal open/save flows can authorize the needed destination. `allowDialog` defaults to false.

Local save completion identifies the actual destination and saved revision. Imported source identity and native save destination can differ. Cloud results distinguish actual native pending/sent synchronization state; a clean flag or queued save alone is not proof of server durability. Read the complete result before closing or claiming persistence.

### Libraries

Available/connected library data uses the current authorized account and its existing endpoint connections. The API does not sign in, publish, create a new connection model or grant edit access to a borrowed source. Persistent connect/disconnect operations require an editable cloud target. A local target can discover/import available sources, but its connected list is empty.

Use a locator discovered by `list_libraries`; `kind:"cloud"` is the supported connection kind. An optional `endpoint` must match the discovered source/connection pair, not an arbitrary URL. A document cannot connect to itself. Connecting does not publish. Disconnecting preserves consumers and imported definitions.

A metadata `version:null` is not an import token. An explicit source asset query opens the authorized source and returns its semantic `sourceVersion`. Import uses that token, complete source references, target revision and a fresh request ID. The source library identity plus source asset ID determines reuse; names do not. Import prepares nested components/state owners, styles, aliases, collections/themes and image dependencies before target registration. Repeated unchanged import is a no-op. A new asset does not refresh an already imported dependency; refresh explicitly.

Source access/version, account/endpoint identity, target lifetime/editability and revision are rechecked after asynchronous preparation and immediately before local commit. Refresh is atomic per library, not one global network transaction. Earlier completed items remain completed if a later one fails. Removed source assets are not automatically deleted locally. Inspect each refresh item's `error`, `observedVersion`, `appliedVersion` and `changed` fields.

The server connection request is the association commit point. Cancellation or revision changes after it do not trigger a compensating disconnect. An uncertain network response needs relationship/status inspection before a new request ID. Cleanup after a successful local import/refresh is reported as warnings rather than masking the committed result as a failure.

## Successful data shapes

These shapes are inside `data`, alongside the envelope's available target/revision metadata. Optional or irrelevant fields can be absent/null. An item-level error can coexist with a successful outer read/refresh result.

### Session data

| Field | Shape |
| --- | --- |
| `apiVersion` | `"2"` |
| `sessionId` | Opaque running session ID. |
| `activeTabId`, `activeDocumentHandle` | Optional current navigation metadata. |
| `limits` | Named numeric budgets; see below. |
| `operations` | Array of `{tool, actions: string[], description}` using underlying HTTP operation names. |
| `bindings` | Array of `{property, variableTypes: string[], targetKinds: string[], supportsIndex, supportsRange}`. |

### DocumentInfo and save state

`DocumentInfo` contains `tabId`, optional `documentHandle`, `documentId`, `versionId`, `revision`, `name`, `state`, `isActive`, `canRead`, `canEdit`, `canSave`, and `save`.

`save` contains `kind` (local/cloud context), optional `destination` and `sourcePath`, `isDirty`, `hasPendingChanges`, and `synchronization`. Read the returned native state instead of inferring durable completion from one flag. A tab can be unloaded or failed and have no live readable handle.

`DocumentResult` contains relevant optional `document`, `initialPageId`, `activePageId`, `savedRevision`, `destination`, `closed`, and `tabIds`. Creation returns the ready document and initial page; saves report destination/saved revision; close reports `closed`; reordering reports the actual order.

`PageInfo` is `{id, name, order, isSelected, isComponentsPage}`.

### BatchResult

```json
{
  "created":["<id>"],
  "updated":[],
  "deleted":[],
  "clientIds":{"brand":"<id>"},
  "changed":true,
  "validatedOnly":false
}
```

Validation predictions are not live resource IDs. A meaningful ordered batch can commit even when an early creation is later deleted; a true equal-value no-op does not create history.

### AssetSummary, definition and usage

`AssetSummary` contains `asset` (complete typed reference), `name`, optional `layerId`, `componentId`, `styleType`, `variableType`, `collectionId`, `sourceVersion`, and `supportedActions`.

`AssetDetail` is `{asset, definition?, error?}`. Its definition contains `summary` and the applicable `variable`, `collection`, `theme`, `component`, or `style` payload:

| Definition | Fields |
| --- | --- |
| Variable | `type`, `collectionId`, `values:[{themeId,value}]`, where value is a literal or alias union. |
| Collection | `defaultThemeId`, `selectedThemeId`, `themes:[{id,name,collectionId}]`. |
| Theme | `id`, `name`, `collectionId`. |
| Component | `layerId`, `componentId`, optional `pageId`, `properties`, `stateIds`, optional `stateGroupId`, `defaultStateId`, `states`, optional bounded FREE `content`. |
| Component property | `id`, `name`, `type`, `initialValue`, optional `allowedValues`, `initialVariable`. |
| Component state | `layerId`, `componentId`, `name`, `isDefault`, and dimension `values` dictionary. |
| Style | FREE appearance JSON for the native style kind. |

`AssetUsage` contains `consumerKind`, `consumerId`, optional `layerId`, `pageId`, `name`, `location`, `isInherited`, optional `sourceLayerId`, `themeId`, and `propertyId`. Location uses the same property/index/stop/range coordinates as binding requests. Treat inherited consumers as context, not new independent definitions.

### LayerContext

Each context contains `layerId`, `name`, `type`, optional `pageId`, asset references, `bindings`, `propertyBindings`, `instanceProperties`, effective `themes` dictionary and `warnings`.

- Resolved variable binding: `{location, variable, themeId?, effectiveValue, isOverride}`.
- Component source binding: `{componentId, propertyId, location, effectiveValue, isOverride, storedVariable?}`.
- Instance property: `{componentId, propertyId, name, type, value, isOverride, storedVariable?}`.

The accompanying top-level `assets` array contains definitions used by those layers. Effective values and stored bindings are different facts; an unresolved/dead binding can produce a warning.

### Library data

| Shape | Fields |
| --- | --- |
| `LibraryInfo` | `locator`, `name`, `state`, `canRead`, `isConnected`, optional `version`. State distinguishes native connected/disconnected/loading/failed/inaccessible conditions. |
| `AssetMapping` | `{source: AssetReference, local: AssetReference}`. |
| Import result | `assets` mappings, `changes: BatchResult`, applied `sourceVersion`. |
| `LibraryRefreshItem` | `libraryId`, `observedVersion`, optional `appliedVersion`, `changed`, optional `error`. |

### Status and documentation

`get_request_status` data is `{status, result?}`; `result` is the original retained envelope for a completed request. `get_automation_documentation` data is `{topic, content}` with focused text.

## Limits and recovery budgets

| Budget | Current limit |
| --- | --- |
| Default/max paged results | 50 / 200 |
| Detail references / changes / explicit import or refresh entries | 100 each |
| Typed HTTP request JSON | 2 MiB |
| Discovery response data | 2 MiB |
| Replay entries / completed bytes / retention | 256 / 16 MiB / one hour |
| Component inspection | Depth 8, 4,096 nodes |
| Layer context | 100 roots, 4,096 visited nodes and bindings |
| Prepared text | 1,000 text layers, 1,000,000 aggregate UTF-16 characters |
| Prepared component graph | 1,024 components, depth 128, 8 layout passes |
| Variable consumers | 1,000,000 candidates, 10,000 consumer layers |
| Library source reads | At most 8 explicit libraries; at most 2 native metadata pages per available-list request |
| Library source fingerprint serialization | 16 MiB plus graph/value work bounds |
| Prepared library images | 4,096 unique images; 16 MiB aggregate encoded input; 16,777,216 decoded pixels; 30-second window |

The running session is authoritative for advertised limits; additional bounded graph/depth/layout work checks can reject a complex request. `LimitExceeded` means reduce the actual work, not only the number of top-level changes. Keep retries bounded and preserve already completed per-library outcomes. Legacy image upload retains its separate 200 MiB binary budget; it is not a typed v2 import request.

## Legacy targeting and format boundary

Legacy endpoints keep their original raw array/string/wrapper request bodies and response forms. `X-Lunacy-Document-Handle` can explicitly target applicable legacy document routes. Use `X-Lunacy-Page-Id` only for page-scoped reads/placement/captures, such as viewport/area, new layers/SVG and image insertion. Unsupported or contradictory headers fail. Do not place these headers in a shared client's mutable defaults when requests can run concurrently; add them to each request. V2 requests carry selectors in their JSON bodies.

The saved `.free` document contract is maintained in [icons8/free](https://github.com/icons8/free). API envelopes, handles, revisions, replay entries, chat history and internal undo records are not public FREE archive fields. Matching preview builds may write FREE metadata version 12 to retain generated border/effect/text/guide style links; the published upstream main specification can still describe an earlier version. Consult the published [README/changelog](https://github.com/icons8/free/blob/main/README.md) for that normative release and the separately labeled [FREE 12 proposal](https://github.com/icons8/free/pull/4) for pending additions. Do not present the proposal as merged or assume an older reader preserves new links on resave.
