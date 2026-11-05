# Plugins

> Install plugins and build integrations with the Lunacy Automation API


## What a Lunacy plugin is

A plugin is an external program that uses Lunacy's local Automation API. It can inspect a document, create or edit layers, work with components and variables, export assets, subscribe to application events, and provide a plugin UI. Plugins can be written in any language that can make HTTP requests; the public repository includes Node.js, Python, and C# examples.

The application supplies the editing operations and their undo behavior. A plugin does not load a managed assembly into the editor or need to implement Lunacy's document model.

### Availability

This guide covers the existing plugin interface and the new typed v2 API and grouped automation catalog, checked on November 5, 2026. The v2 API and the 11-group MCP/AI Chat catalog require a build that includes them; they are not a guarantee about every released Lunacy build. Ask the running application for `GET /v2/get_session`. A missing route means that build does not expose this v2 interface.

The complete references are available on this site:

- [Plugin API reference](https://lunacy.docs.icons8.com/raw/plugin-api.md) — legacy geometry, screenshots, export, events, and plugin UI.
- [Plugin UI guide](https://lunacy.docs.icons8.com/raw/plugin-ui.md) — complete field definitions and service lifecycle examples.
- [Automation workflows](https://lunacy.docs.icons8.com/raw/plugin-workflows.md) — runnable examples and recovery.
- [Typed API v2 reference](https://lunacy.docs.icons8.com/raw/plugin-api-v2.md) — all 26 methods, request/result contracts, actions, limits, and errors.
- [MCP](https://lunacy.docs.icons8.com/raw/mcp.md) — connect an external AI client to the grouped tools.
- [AI Chat](https://lunacy.docs.icons8.com/raw/ai-chat.md) — use the same automation from Lunacy's built-in chat.

For runnable examples and development articles, use [lunacy-plugins](https://github.com/icons8/lunacy-plugins), its [API v2 reference](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/API_V2_REFERENCE.md), and [automation workflows](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/AUTOMATION_WORKFLOWS.md).

## Install a plugin

1. Get a plugin from a source you trust and read its runtime/dependency instructions.
2. In Lunacy, use **Help → Open App Data Folder**. Open or create its `Plugins` directory.
3. Put the plugin in its own immediate subdirectory. Its `plugin.jsonc` must be at that directory's root. `plugin.json` is also accepted.
4. Install any runtime/dependencies required by that plugin.
5. Restart Lunacy and use the plugin's command in the Plugins menu.

The actual application-data location depends on the platform and package variant. Use the menu command rather than copying a path from another computer or package.

Plugins run programs with your user's operating-system permissions. Inspect a plugin before installing it. The local connection does not prevent the plugin from sending data to another service.

## Manifest and lifecycle

A minimal utility plugin can contain these two files:

```text
inspect-document/
  plugin.jsonc
  inspect.js
```

`plugin.jsonc`:

```json
{
  "id": "example-inspect-document",
  "name": "Inspect document",
  "lifecycle": "Utility",
  "commands": [
    {
      "id": "inspect",
      "name": "Inspect open documents",
      "executable": "node",
      "args": ["inspect.js"]
    }
  ]
}
```

Use relative script paths. The default working directory is the plugin directory. The executable and arguments are separate values; do not rely on shell-specific quoting for paths with spaces.

| Lifecycle | Purpose |
| --- | --- |
| `Utility` | Run a command when the user chooses it. Appropriate for one-off inspection, changes, or export. |
| `Service` | Run a longer-lived process through `serviceCommand`, for example an event-driven integration or plugin UI. Subscribe only to the event categories the plugin needs. |

### Manifest fields

| Field | Type / purpose |
| --- | --- |
| `id` | Stable plugin identity; use the same value in registration and UI requests. |
| `name` | Display name. |
| `description`, `version` | Optional descriptive strings. |
| `workingDirectory` | Optional process working directory; defaults to the installed plugin directory. |
| `lifecycle` | `"Utility"` (default) or `"Service"`. |
| `commands` | Array of command objects for utility menu actions. |
| `serviceCommand` | Command object used to launch a service plugin. |
| `events` | Optional application event category names: `selection`, `undo`, `document`, `window`. |

A command object has `id`, `name`, `executable`, an `args` string array, and optional `description`, `env` string dictionary, and `timeoutMs` integer. `timeoutMs` controls a utility command's execution timeout; it is not a service lifetime setting. The process inherits its environment and applies the declared `env` overrides. Use a real executable path or a runtime discoverable by the application process; a shell alias is not an executable.

For a service plugin, replace the utility `commands` entry with a `serviceCommand` and set `lifecycle` to `"Service"`. Connect its WebSocket, register the same plugin ID, and wait for `plugin_initialized` before registering a UI. The service is started with the application and participates in application shutdown; do not use a short utility command for a persistent subscription.

The [plugin API reference](https://lunacy.docs.icons8.com/raw/plugin-api.md) covers events and connection messages. The complete [plugin UI guide](https://lunacy.docs.icons8.com/raw/plugin-ui.md) describes registration, field types, values and lifecycle examples. The [repository examples](https://github.com/icons8/lunacy-plugins/tree/main) demonstrate each pattern.

## First request

Use a Node.js runtime with built-in `fetch` for this example. `inspect.js` lists tabs without loading all documents:

```js
const baseUrl = process.argv[2] || 'http://localhost:31415';

async function call(method, body = {}) {
  const response = await fetch(`${baseUrl}/v2/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(`${result.error?.code || response.status}: ${result.error?.message || 'Request failed'}`);
  }
  return result;
}

async function main() {
  const session = await call('get_session');
  const documents = await call('list_documents');
  console.log('API version:', session.data.apiVersion);
  console.log(documents.data.items);
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
```

The default HTTP address is `http://localhost:31415`. If your application instance uses another endpoint, pass its actual base URL to the plugin. Use the running application's endpoint and operation metadata; do not infer capabilities from a documentation version alone.

## Edit the intended document

A safe workflow is:

1. Read the session and tab list.
2. Choose the intended item using its name and persisted identity. Activate an unloaded tab only when loading is needed.
3. Keep the returned live `documentHandle` and `revision`. They identify this instance and state, not every document with the same name.
4. Search existing assets and read their definitions/usages before creating duplicates.
5. Send a typed batch with `expectedRevision` and a unique `requestId`. Use `validateOnly:true` before a complex or destructive change.
6. Read back the affected data and use the returned revision for the next edit.
7. Save only when the workflow calls for saving. A failed save must not be reported as complete.

For example, create a variable collection through the HTTP API:

```json
{
  "documentHandle": "<live-handle>",
  "expectedRevision": "<current-revision>",
  "requestId": "<unique-request-id>",
  "validateOnly": true,
  "changes": [
    {"action":"createCollection","clientId":"brand","name":"Brand","defaultThemeName":"Light"}
  ]
}
```

POST that body to `/v2/apply_variable_changes`, replacing placeholders with real values. Validation creates no live collection or history. To commit, use `validateOnly:false`, a fresh request ID, and a current revision. One committed domain batch creates one undo operation; an equal-value no-op creates none.

A creation may declare `clientId`. A later compatible change in the same ordered batch can reference it with `{"clientRef":"brand"}`. An existing asset uses `{"id":"<asset-id>"}`. Do not send both selectors, reuse a forward/deleted reference, or treat a validation preview ID as a persisted ID.

## Errors and uncertain responses

For v2, inspect both the HTTP status and the JSON envelope. Success has `ok:true`; failure has `ok:false` and a stable `error.code`. Legacy routes retain their older text/JSON/binary responses.

If a response is lost, retry the same target, request ID, and payload, or use `/v2/get_request_status`. A different payload with the same retained request ID fails with `RequestConflict`. Once status is `unknown`, reread the document before choosing a new request ID: a fresh ID could repeat a creation, save, import, or discard.

On `RevisionConflict`, reread and rebuild the edit. On `Busy`, wait for the relevant operation/layout to finish. On permission or filesystem denial, obtain access through the normal application workflow; an HTTP client cannot grant itself access.

## Components, libraries, and persistence

Use the domain methods for assets rather than rebuilding them through layer JSON. Component properties, states, overrides, style links, variable themes, and aliases have native identity and inheritance rules.

Imported library definitions are read-only. Editing a source requires opening the source document with edit access and using that source's own live handle. Connecting or importing is not permission to publish. Persistent connect/disconnect operations apply to editable cloud documents; local documents can inspect and import explicitly available assets. Disconnecting does not delete imported consumers.

Local save completion reports the actual destination and saved revision. Cloud results distinguish queued/pending/sent synchronization from durable server storage. Read the result instead of inferring success from a request completing or the document looking clean.

FREE geometry and the saved `.free` archive are documented in the [FREE format reference](https://lunacy.docs.icons8.com/raw/free-format.md). HTTP envelopes, live handles, replay entries, and chat history are separate contracts.

## Next steps

Use the [complete typed API](https://lunacy.docs.icons8.com/raw/plugin-api-v2.md) for all actions and exact fields, or the [legacy/events/UI reference](https://lunacy.docs.icons8.com/raw/plugin-api.md) to extend an existing plugin. The [repository workflow article](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/AUTOMATION_WORKFLOWS.md) provides request sequences and recovery examples.
