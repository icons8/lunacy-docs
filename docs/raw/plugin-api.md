# Plugin API reference

> Complete legacy HTTP, WebSocket event and plugin UI contracts


This complete reference is synchronized from the [lunacy-plugins article](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/API_REFERENCE.md) at commit `7b82b781`, checked on November 5, 2026. See [Plugins](https://lunacy.docs.icons8.com/raw/plugins.md) for installation and manifests.

This page documents the legacy layer/image/export API and plugin WebSocket/UI contracts. The new document, component, style, variable and library operations have a separate [Automation API v2 reference](https://lunacy.docs.icons8.com/raw/plugin-api-v2.md), [complete request schemas](https://lunacy.docs.icons8.com/plugin-api-schemas/), and [worked workflows](https://lunacy.docs.icons8.com/raw/plugin-workflows.md).

The v2 additions require a matching preview build. Probe `/v2/get_session`; do not assume a published release contains every documented operation. Existing plugin process, manifest, event and UI contracts continue to apply.

## Connection and response formats

The default HTTP address is `http://localhost:31415`. The plugin WebSocket server starts at `ws://localhost:31416`. Each server can choose a later available port independently; use the running application's actual ports. An installed valid plugin starts the local automation service automatically. For standalone development, **AI → Model Context Protocol → MCP server enabled** can enable it without a plugin. See the [development guide](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/PLUGIN_DEVELOPMENT_GUIDE.md) for manifests and lifecycle modes.

Legacy endpoints return different formats: FREE JSON text, plain text, structured JSON, SVG or binary bytes. There is no universal legacy success/error envelope. Many string-based tools return a plain-text operation failure even with HTTP 200. Inspect the documented body as well as status. JSON text may arrive with `text/plain`; do not assume `response.json()` works for every endpoint. UI operations have their own `success` property; only `/v2/*` uses the v2 `ok` envelope.

Use `application/json` for JSON bodies, except the plain-text undo count and binary image upload below. Layer/asset IDs are opaque. Preserve the spelling and identity kind returned by the relevant route.

## Explicit document targets

On a matching v2 build, discover `documentHandle` with `/v2/list_documents`. For legacy routes supporting explicit document/page targeting, pass these headers on the individual request:

```http
X-Lunacy-Document-Handle: <live-document-handle>
X-Lunacy-Page-Id: <page-id>
```

The page header further qualifies an eligible request; it is not navigation. A page must belong to the target document. Viewport/selection operations retain native constraints. Unsupported header/route combinations are rejected. Do not silently retry against the active tab or put changing targets in shared global client headers. Older builds without these additions retain active-document behavior.

These headers do not give legacy writes v2 request IDs, revision guards or replay semantics. Use the corresponding v2 operation when those guarantees are needed. A stale/closed/read-only/unavailable target fails explicitly. See the [workflow example](https://lunacy.docs.icons8.com/raw/plugin-workflows.md#combine-v2-with-legacy-layer-export-and-ui-calls).

## Layer and viewport reads

| Route | Body | Successful body |
| --- | --- | --- |
| `GET /getselected` | None | FREE object for one selected layer, array for multiple, `{}` for no selection. |
| `POST /getlayersbyids` | JSON array of layer ID strings. | FREE object/array; a missing target can return text. |
| `POST /getcomponents` | JSON array of component ID strings. | Matching source definitions as FREE object/array; `{}` when none. Not an unfiltered catalog query. |
| `POST /getlayersinarea` | `{x,y,width,height,maxDepth?}`. | FREE layer data in the canvas rectangle. `maxDepth` defaults to `1`. |
| `POST /getlayersdata` | `{layerIds:[...]}`. | SVG with layer metadata. This route uses full GUID layer IDs. |
| `GET /getviewportinfo` | None | Text: `Viewport: x=..., y=..., width=..., height=...`. |

Coordinates use native canvas space; area fields are integers. Exported layers follow the [public FREE specification](https://github.com/icons8/free/blob/main/README.md). Handle object/array/empty cases rather than assuming every result is an array.

```bash
curl -X POST http://localhost:31415/getlayersbyids \
  -H 'Content-Type: application/json' -d '["<returned-layer-id>"]'
```

For reusable-asset search and complete component definitions, prefer `/v2/query_design_system` then `/v2/get_design_system_assets`. These distinguish component IDs from source-layer IDs and include individual asset errors.

## Layer writes

| Route | Body | Behavior |
| --- | --- | --- |
| `POST /setselected` | Direct FREE object or array. | Edits/replaces supplied existing selected layers. Requires a nonempty current selection and IDs belonging to it. Does not select arbitrary IDs; `[]` does not clear selection. |
| `POST /updatelayers` | Direct FREE object or array. | Updates existing layers by their IDs. |
| `POST /createlayers` | `{layersJson:"<serialized FREE JSON>",parentId?}`. | Creates content under an eligible parent, or native page root when omitted. |
| `POST /createlayersfromsvg` | `{svg:"<svg>...</svg>",x?,y?,parentId?}`. | Creates from SVG; `x` and `y` default to `0`. |
| `POST /updatelayerfromsvg` | `{layerId,svg}`. | Updates eligible layer content through native SVG import. |
| `POST /deletelayers` | JSON array of layer ID strings. | Deletes the specified eligible layers. |
| `POST /duplicatelayers` | `{layerIds:[...],offsetX?,offsetY?,componentsToInstances?}`. | Duplicates layers; offsets default to `10`, component-to-instance conversion to `true`. |

Except duplication, these writes return native success/error text. Duplication returns `{duplicatedLayerIds:[...],message:"..."}`; inspect IDs and message. It can return no duplicated IDs on failure. Native editability, generated-node, resource and parent constraints still apply.

For `/setselected` and `/updatelayers`, send the layer JSON directly:

```json
[{"_t":"RECT","id":"<existing-layer-id>","name":"Updated shape"}]
```

Only `/createlayers` uses `layersJson`, whose value is a **string**, not an array:

```json
{
  "parentId": "<frame-layer-id>",
  "layersJson": "[{\"_t\":\"RECT\",\"name\":\"New shape\",\"size\":[120,80],\"fill\":\"0A84FF\"}]"
}
```

Read exported content and the normative [FREE specification](https://github.com/icons8/free) for property types, transforms and ID encodings. Layer APIs cannot bypass typed v2 rules for imported definitions, aliases, styles or component properties.

## Images and screenshots

| Route | Body | Successful body |
| --- | --- | --- |
| `POST /getimage` | `{imageId,format?}`. | Image bytes with `Content-Type`; missing image returns 404. |
| `POST /getscreenshotbyid` | JSON array of layer ID strings. | Binary screenshot. |
| `POST /getscreenshotviewport` | None. | Binary screenshot of an eligible current viewport. |
| `POST /getscreenshotarea` | `{x,y,width,height}`. | Binary screenshot of the canvas rectangle. |
| `POST /insertimage` | Raw image bytes, not JSON/base64. | Native insertion result text. |

Screenshot response headers, when applicable:

| Header | Meaning |
| --- | --- |
| `X-Screenshot-AbsoluteX`, `X-Screenshot-AbsoluteY` | Canvas-space origin. |
| `X-Screenshot-Width`, `X-Screenshot-Height` | Dimensions. |
| `X-Screenshot-Timestamp` | Capture timestamp. |
| `X-Screenshot-Error` | Failure description. |

Inspect status, error header and `Content-Type` before treating a response as image bytes:

```bash
curl -X POST http://localhost:31415/getscreenshotarea \
  -H 'Content-Type: application/json' \
  -d '{"x":0,"y":0,"width":640,"height":480}' --output screenshot.png
```

Image upload headers:

| Header | Meaning |
| --- | --- |
| `X-Image-Position-X`, `X-Image-Position-Y` | Insertion coordinates. |
| `X-Image-File-Name` | Filename, including extension. |
| `X-Image-Parent-Id` | Optional eligible parent ID. |

```bash
curl -X POST http://localhost:31415/insertimage \
  -H 'Content-Type: image/png' \
  -H 'X-Image-Position-X: 40' -H 'X-Image-Position-Y: 40' \
  -H 'X-Image-File-Name: picture.png' --data-binary @picture.png
```

Legacy image upload has a 200 MiB limit. Native decoding/access rules still apply. This is separate from v2 prepared-library-image budgets.

## Export

`POST /export` fields:

| Field | Type | Default |
| --- | --- | --- |
| `layerIds` | Array of explicit layer ID strings. | Supply targets. |
| `format` | String: `PNG`, `SVG`, `PDF`, `JPG`, `WEBP`, `TIFF`, `ICO`. | `PNG`. |
| `scale` | Number. | `1`. |
| `mergeObjects` | Boolean. | `false`. |

The response is an array of `{layerId,fileName,contentType,data}`. `data` is a **base64 string** containing file bytes, not an array of integers:

```javascript
const response = await fetch(`${baseUrl}/export`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ layerIds, format: 'PNG', scale: 1, mergeObjects: false })
});
if (!response.ok) {
  throw new Error(`Export failed: HTTP ${response.status}`);
}
const results = await response.json();
for (const result of results) {
  const bytes = Buffer.from(result.data, 'base64');
  console.log(result.fileName, result.contentType, bytes.length);
}
```

This Node.js 18+ fragment assumes previously defined `baseUrl`/`layerIds`. Validate/choose an output filename before writing decoded bytes. Export returns data; it does not write a file to a destination supplied in this request.

## Undo, redo and toast notifications

`POST /getundostack` takes a positive integer as a **plain-text body**, for example `20`, and returns native history text. It is not GET and does not take a JSON options object. `POST /undo` and `POST /redo` take no body and return text.

```bash
curl -X POST http://localhost:31415/getundostack -H 'Content-Type: text/plain' --data '20'
```

`POST /showtoast` fields:

| Field | Type | Default |
| --- | --- | --- |
| `text` | String. | Supply a message. |
| `iconType` | Byte. | `0`. |
| `priority` | Byte. | `5`. |
| `durationSeconds` | 16-bit integer. | `7`. |
| `isContinuable` | Boolean. | `true`. |
| `isSkippable` | Boolean. | `false`. |
| `isAttention` | Boolean. | `false`. |

Icons: `0` None, `1` Copy, `2` CheckDone, `3` Document, `4` Warning, `5` Update, `6` Love, `7` Human, `8` Trash, `9` Smile, `10` CloudDisconnect, `11` Message, `12` Copyright, `13` Stars. A success/check toast uses `2`.

```json
{"text":"Plugin finished","iconType":2,"durationSeconds":4}
```

## Plugin UI HTTP API

All four routes use POST. UI values are strings, including checkbox/number/slider values; parse them explicitly.

| Route | JSON body | Response |
| --- | --- | --- |
| `/registerui` | `{pluginId,title,fields:[...]}`. | `{success:true,message:"UI registered successfully"}`. |
| `/getpluginuivalues` | JSON string, e.g. `"my-plugin"`. | Object mapping field IDs to strings, or `{}`. |
| `/unregisterui` | JSON string, e.g. `"my-plugin"`. | `{success,message}`; false when not found. |
| `/updateuifields` | `{pluginId,updates:{fieldId:"value"}}`. | `{success,message}`; inspect `success` for unknown UI/empty updates. |

Fields support `id`, `type`, `label`, and optional `description`, `placeholder`, `value`, `options`, `min`, `max`, `step`, `multiline`. Values/options are strings; min/max/step are numbers; multiline is boolean. Canonical field types: `text`, `number`, `select`, `checkbox`, `separator`, `button`, `slider`, `linkButton`, `label`.

```json
{
  "pluginId":"my-plugin","title":"Export helper",
  "fields":[
    {"id":"scale","type":"number","label":"Scale","value":"1","min":0.1,"max":4,"step":0.1},
    {"id":"export","type":"button","label":"Export"}
  ]
}
```

Register after the WebSocket `plugin_initialized` handshake and repeat after reconnecting. See the [UI tutorial](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/QUICK_START_UI.md), [UI guide](https://lunacy.docs.icons8.com/raw/plugin-ui.md), and [service example](https://github.com/icons8/lunacy-plugins/tree/7b82b78118e2c66a474f3d556b171903af12bcbc/featured-plugins/bitmap-to-vector-plugin).

## WebSocket events

Declare required event groups in the manifest's `events` array. Use service mode for background listeners. Connect to the actual WebSocket port and identify the plugin:

```json
{"type":"plugin_register","pluginId":"my-plugin"}
```

Wait for `plugin_initialized` before registering UI. Reconnect with bounded backoff, identify/register again, and rebuild cached state. Events include `type` and UTC `timestamp`; optional fields can be absent/null. UI messages use camelCase fields. The older selection/undo/document/window fields use the explicit snake_case names below.

### Selection

```json
{
  "type":"selection","timestamp":"2026-11-05T10:00:00Z",
  "selected_layers":[{"id":"<layer-id>","name":"Button"}]
}
```

`selected_layers` is an array of `{id,name}`; it is empty when selection clears. There are no `layer_ids` or `layer_count` fields. Read full layer data through HTTP when needed.

### Undo/history

```json
{
  "type":"undo","timestamp":"2026-11-05T10:00:00Z","operation_type":"created",
  "operation_description":"<native-operation-name>",
  "affected_layers":[{"id":"<layer-id>","name":"Button","type":"<native-layer-type>"}]
}
```

`operation_type` is `created`, `undo`, or `redo`. Description/layers are optional; non-layer operations need not supply layer entries. Native operation/layer descriptions are descriptive values, not a stable command vocabulary.

### Documents

```json
{
  "type":"document","timestamp":"2026-11-05T10:00:00Z","document_type":"activated",
  "document_id":"<persisted-document-id>","document_name":"Design","document_path":null
}
```

`document_type` can be `opening`, `opened`, `closing`, `closed`, `activated`, `deactivated`. ID/name/path are optional. Persisted `document_id` is not a v2 live handle; reread `/v2/list_documents` before targeting. Events do not replace revision/status checks.

### Window

```json
{"type":"window","timestamp":"2026-11-05T10:00:00Z","event_type":"focused"}
```

`event_type`: `focused`, `unfocused`, `state_changed`, `closing`. State changes can include `window_state` with the native state name.

### UI events

`plugin_initialized` contains the common event fields. `show_ui` and `close_ui` also include `pluginId`. Field events identify a field and its string value:

```json
{
  "type":"ui_field_event","timestamp":"2026-11-05T10:00:00Z",
  "pluginId":"my-plugin","fieldId":"scale","eventType":"value_change","value":"2"
}
```

`eventType` is `value_change` or `click`; `value` may be absent/null for a button. Filter by your plugin ID. UI show/close messages are distinct from document lifecycle events.

## Errors and work budgets

HTTP 400 indicates invalid HTTP/JSON input, 404 an unavailable route/resource, 405 an unsupported method, 500 an unexpected error. Explicit-target failures can also return 403/409 and text beginning with a stable automation error code. Preserve status/body for diagnosis. Do not assume a v2 `{ok,error}` envelope or universal legacy `{error,message,code}` object.

Native work, decoding, export, plugin command timeouts and v2 request/model limits have separate budgets. There is no promise of unlimited work or a fixed requests-per-second quota. Batch reads, debounce events, avoid overlapping writes and inspect `/v2/get_session.data.limits` where supported.

## FREE data and version compatibility

The saved/exported `.free` archive contract is maintained in [icons8/free](https://github.com/icons8/free), with its normative [specification/changelog](https://github.com/icons8/free/blob/main/README.md). Read exported values instead of guessing geometry/color encodings.

Matching preview builds may write FREE version 12 for extra generated style links. Its [upstream proposal](https://github.com/icons8/free/pull/4) is pending separately from published `main`; do not assume an older release preserves those links. HTTP envelopes, handles, revisions, replay, internal history and chat state are not public FREE document fields.
