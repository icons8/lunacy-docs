# MCP

> Connect an AI client to Lunacy through Model Context Protocol


## What MCP does

Lunacy's Model Context Protocol server lets an external AI client inspect and edit the open editor. The client starts a local stdio process, and that process calls the running application's local Automation API. The GUI must be running for document operations.

The current grouped catalog contains 11 tools. It covers document/page management, reusable assets, layer geometry, images/export, history, and help. It shares the same production editing operations as [plugins](https://lunacy.docs.icons8.com/raw/plugins.md) and the built-in [AI Chat](https://lunacy.docs.icons8.com/raw/ai-chat.md).

### Availability

The 11-tool catalog described here requires a build that includes the grouped automation update. Other released builds can expose a different inventory. Check your client's `tools/list`, then read `session.get` for the running application's native operations, binding locations and limits. A tool's presence does not grant permission to edit a document or library.

The 26 underlying HTTP v2 methods are documented in the [complete API reference](https://lunacy.docs.icons8.com/raw/plugin-api-v2.md). That reference also provides the exact action fields used inside grouped requests.

## Connect a client

1. Open Lunacy and a document you intend to work with.
2. Enable **AI → Model Context Protocol → Enable MCP Server**. Wording can vary with the UI language.
3. Use **Copy MCP Server Entry** to get a configuration entry for your installation. **Copy MCP Servers File** produces a complete configuration object for a new client setup.
4. Add the copied entry to your MCP client's configuration. Preserve other server entries and the surrounding configuration.
5. Restart or reconnect that client and refresh its tool inventory.
6. Ask it to read the session and list documents before editing.

Use the generated configuration because executable paths and launch commands differ between regular, Store, and Flatpak packages. A regular installation uses the application executable with `-mcp`; the stdio helper is distinct from the GUI window. Advanced `--host` and `--port` arguments select the Automation API endpoint used by the helper. They do not create another editor document session or grant access to a remote account.

Any client that supports this stdio MCP server can be configured using its own server-entry format. Exact configuration-file locations and restart behavior belong to that client, rather than to Lunacy.

The transport is local. The selected AI client or provider can still receive the document data, tool responses, and screenshots used for the conversation. Review that client's settings before sharing sensitive work.

## The 11 tools

Each call has one `request` object and an `operation` discriminator. Dotted names below are shorthand for a tool plus `request.operation`; `components.search` is not a separate tool name.

| Tool | Operations |
| --- | --- |
| `session` | `get`, `request_status`, `toast` |
| `documents` | `list`, `activate`, `create`, `open`, `rename`, `reorder`, `save`, `close` |
| `pages` | `list`, `activate`, `apply` |
| `components` | `search`, `get`, `usage`, `apply`, `content` |
| `styles` | `search`, `get`, `usage`, `apply` |
| `variables` | `search`, `get`, `usage`, `apply` |
| `libraries` | `list`, `connect`, `disconnect`, `import`, `refresh` |
| `layers` | `selected`, `get`, `area`, `viewport`, `context`, `set_selected`, `create`, `update`, `create_svg`, `replace_svg`, `delete`, `duplicate` |
| `images` | `get`, `screenshot_ids`, `screenshot_viewport`, `screenshot_area`, `export`, `insert` |
| `history` | `list`, `undo`, `redo` |
| `documentation` | `topic`, `free_format`, `prompt` |

FREE and SVG modes expose the same groups and both geometry formats. The alternate command-line mode is `-mcp_svg`; FREE mode also exposes its prompt endpoints. Do not assume that an inventory cached from an older build is current.

## First calls

Call `session` with:

```json
{"request":{"operation":"get"}}
```

Then call `documents`:

```json
{"request":{"operation":"list"}}
```

Choose a readable/editable document from `data.items`. Its `documentHandle` identifies one live instance, `documentId` is its persisted identity, and `tabId` is its visible tab. They are not interchangeable. Closing and reopening a document invalidates the previous handle.

Search for reusable components:

```json
{"request":{"operation":"search","documentHandle":"<live-handle>","query":"Button"}}
```

Pass that request to `components`. Use the returned asset references with its `get` and `usage` operations. `styles` and `variables` use the same discovery pattern. Searches default to that domain's asset kinds; optional `kinds` can narrow it but cannot select another domain.

Use `layers.context` with explicit `layerIds` or `selection:true` to inspect the relevant effective styles, variables, themes, and bindings. Selection is read from the named document; switching the active tab is not a substitute for targeting a handle.

## Apply a typed batch

Call `variables` with this request after replacing the placeholders:

```json
{
  "request": {
    "operation": "apply",
    "documentHandle": "<live-handle>",
    "expectedRevision": "<current-revision>",
    "requestId": "<unique-request-id>",
    "validateOnly": true,
    "changes": [
      {"action":"createCollection","clientId":"brand","name":"Brand","defaultThemeName":"Light"}
    ]
  }
}
```

Validation does not edit the document or produce live IDs. Commit with a fresh request ID and the current revision. Use returned `clientIds`/created IDs in later requests; a `clientRef` only references a preceding compatible creation in that same ordered batch.

A committed domain or page batch is one undo operation. A genuine equal-value no-op creates no history. Cross-domain work uses separate calls in variable, style, then component order, taking the returned revision after each commit.

The request schemas are closed unions: the fields required for `apply` differ from those for `search` or `get`. Unknown operations, unrelated fields, unsupported action tags, and mixed ID selectors are errors. Change lists are typed JSON arrays, not strings containing JSON.

## Layers, screenshots, and files

Use existing layer IDs when modifying geometry. `layers.create` creates new objects; `layers.update` edits existing ones. `layers.set_selected` uses replacement semantics, and `layers.replace_svg` replaces one identified layer's content. Read the relevant contract before replacing a subtree.

Legacy FREE geometry remains a string in `layersJson` or `objectsJson`. The outer grouped request and typed asset changes remain JSON objects. Use `layers.create_svg` for SVG markup with optional position and parent.

For a visual check, choose an `images` screenshot operation. Images retain their MIME type and binary content; exports can return embedded binary resources. `layers.get`, `components.content`, screenshot-by-ID, and export requests use `ids` in the grouped schema; typed asset-detail operations such as `components.get` use `assets`.

Read `documentation.free_format` only when authoring unfamiliar FREE geometry or appearance fields. The [complete FREE specification](https://lunacy.docs.icons8.com/raw/free-format.md) is available without loading it for every metadata or tab operation.

## Documents, pages, and libraries

Use `documents` for lifecycle and `pages` for page navigation or an ordered page-edit batch. Opening may reuse an existing matching tab. Listing tabs does not implicitly load every document. Native file operations require normal filesystem access; a client cannot grant that access by supplying a path.

Saving reports the actual native destination or cloud synchronization state. Close defaults to `ifUnsaved:"fail"`. Loaded tabs require the expected current handle/revision for close; unloaded or failed tabs support metadata-only close under the fail policy. Save/discard require an explicit policy.

Imported library assets are read-only. Edit a source through its separately opened editable document. Connect/disconnect require an editable cloud target; local documents can inspect/import explicitly available assets. Import uses an observed source version, and refresh reports per-library results. Disconnect does not delete imported consumers. Publishing remains a separate application workflow.

## Results and recovery

Operations backed by v2 return a JSON envelope in text content. `ok:true` includes typed `data` and available target/revision metadata. `ok:false` includes a stable `error.code`; failed v2 calls also set MCP `isError:true`. Legacy geometry/history operations retain their text/binary response forms.

After a lost response, retry the same target/request ID and payload, or query `session.request_status`. Its result is `pending`, `completed`, or `unknown`. A changed payload under the same retained ID fails with `RequestConflict`. After `unknown`, reread before choosing a new ID.

Replay retention is bounded to 256 entries, 16 MiB of retained response bytes, and one hour. It ends after eviction or server restart. A new request ID can repeat a create, import, save, or discard.

On `RevisionConflict`, reread and rebuild the intended change. On `Busy`, allow the reported work to finish. On unsupported bindings, inspect capabilities and representation prerequisites; do not silently target a different layer or document.

## Limits and reference mapping

Typical v2 limits are 50 results by default, 200 per page, 100 detail references, 100 changes, and 2 MiB JSON. Additional graph, context, layout, and alias limits come from the session. Image insertion keeps the native 200 MiB binary upload limit with bounded base64 overhead. Use cursors only for the same query and revision. Library metadata follows the native service pagination; a page is not a permanent snapshot of the account catalog.

The session's operation descriptors name underlying HTTP routes. To use a route body from the [API reference](https://lunacy.docs.icons8.com/raw/plugin-api-v2.md), add its grouped operation and put the body inside `request`. For example, `/v2/apply_component_changes` maps to `components.apply`; `get_design_context` maps to `layers.context`; `get_request_status` maps to `session.request_status`.

The old standalone MCP names are no longer advertised by the grouped build. Refresh the client inventory after updating. Existing HTTP endpoints remain available to plugins.

See the [repository API article](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/API_V2_REFERENCE.md) and [workflow examples](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/AUTOMATION_WORKFLOWS.md) for complete method/action payloads.
