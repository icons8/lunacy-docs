## Overview 

Lunacy documents are primarily in the `free` format. `Free` documents are stored as `ZIP` archives containing `JSON` files that describe the document data.

Like with a `sketch` file, you can unarchive a `free` document using the terminal with the `unzip` command:

`unzip document.free`

Or archive the contents of a document folder back into the `free` format using the `zip` command:

`zip -r -X document.free *`

(©️ Sketch)

## File structure

The archive representing a `free` document contains these files:


| File | Description |   
|---------------------------------------------------|-------------------------------------------------------|
| `preview.png` | Preview file |
| `document.json` | The document file containing the page list, document color variables, shared styles, embedded fonts, and other document properties |
| `shared.json` | This file contains components, styles, and color variables taken from shared libraries |
| `meta.json` | This file contains the file and app version info |
| `pages/{id}.json` | Page files containing infomation about all the layers of the document |

----

## Specifications

The `free` format specifications are presented as JSON Schema (???) that describe _ ???

| Title | Description | Properties |
|-------------|-------------|----------------|
| Document | A `free` document. | `_class:` <br>`{ const: document }` <br>Classifies the object.<br> `do_objectID:`<br> `{ $ref: ./utils/uuid.schema.yaml }`<br> UUID string determining the document ID<br>`assets:`<br>`{ $ref: ./objects/asset-collection.schema.yaml }`<br>Collection of global document objects<br>`colorSpace:` <br>`{ $ref: ./enums/color-space.schema.yaml }` <br>Enumeration of the color profiles Sketch can use to render a document<br>`currentPageIndex:`<br>`type: integer`<br>`minimum: 0`<br>Integer determining the current page index.<br>`foreignLayerStyles:`<br>`type: array`<br>`items: { $ref: ./objects/foreign-layer-style.schema.yaml }`<br>Defines a layer style that has been imported from a library<br>`foreignSymbols:`<br>`type: array`<br>`items: { $ref: ./objects/foreign-symbol.schema.yaml }`<br>Defines a symbol that has been imported from a library<br>`foreignTextStyles:`<br>`type: array`<br>`items: { $ref: ./objects/foreign-text-style.schema.yaml }`<br>Defines a text style that has been imported from a library<br>`foreignSwatches:`<br>`type: array`<br>`items: { $ref: ./objects/foreign-swatch.schema.yaml }`<br>Defines a swatch that has been imported from a library<br>`layerStyles: `<br>`{ $ref: ./objects/shared-style-container.schema.yaml }`<br>Defines a document's list of reusable styles<br>`layerTextStyles:` <br>`{ $ref: ./objects/shared-text-style-container.schema.yaml }`<br>Defines a document's list of reusable text styles<br>`layerSymbols: `<br>`{ $ref: ./objects/symbol-container.schema.yaml }`<br>Defines a document's list of symbols<br>`sharedSwatches:` <br>`{ $ref: ./objects/swatch-container.schema.yaml }`<br>Defines a swatch color variable.<br>`fontReferences:`<br>`type: array`<br>`items: { $ref: ./objects/font-ref.schema.yaml }`<br>Defines a reference to font data embedded in the document<br>`documentState:` <br>`{ $ref: ./objects/document-state.schema.yaml }`<br>Container for ephemeral document state. For now this is just a placeholder,and will see additions in future document versions.<br>`patchInfo: { $ref: ./objects/patch-info.schema.yaml }`<br>Defines ephemeral patch information related to the Cloud collaborative editing feature. This information will only be found behind-the-scenes in Cloud documents and won't be relevant or visible to users parsing or generating their own Sketch documents<br>`perDocumentLibraries:`<br>`type: array`<br>`items: { $ref: ./objects/document-library-info.schema.yaml }`<br>Represents a "reference" to the asset library, that is used in the document |
| Document entry | The document entry in a `free` document. | `pages`  <br> `type: array`<br>`items: { $ref: ./objects/file-ref.schema.yaml }` <br> Page layers are the top level organizational abstraction within a document. The file reference item defines a reference to a file within the document bundle |
| Frame |  Frames  are a document organisation aid. They have a fixed frame that usually map to variations of device dimensions or viewport sizes. | `_class: {const: frame` <br>Classifies the object. <br>`backgroundColor:` <br> `{ $ref: ../objects/color.schema.yaml }` <br>  Defines a RGBA color value which determines the background fill of a frame. <br> `hasBackgroundColor:`<br> `{ type: boolean }` <br> Determines whether the frame has a background color. `includeBackgroundColorInExport:`<br> `{ type: boolean }`<br> If set to true, the frame background color will be included in export.<br>`isFlowHome:`<br> `{ type: boolean }`<br> ???? <br>`resizesContent:`<br> `{ type: boolean }`<br> If set to true, the content of the frame is resized when the frame is resized. <br> `prototypeViewport: { $ref: ../objects/prototype-viewport.schema.yaml }` <br> Defines a prototype viewport with a reference to the original template layer that was used defining it. <br>  `layers` <br> `type: array` <br> `items:`<br>`oneOf:`<br>- { $ref: ./group.schema.yaml }<br>- { $ref: ./oval.schema.yaml }<br>- { $ref: ./polygon.schema.yaml }<br>- { $ref: ./rectangle.schema.yaml }<br>- { $ref: ./shape-path.schema.yaml }<br>- { $ref: ./star.schema.yaml }<br>- { $ref: ./triangle.schema.yaml }<br>- { $ref: ./shape-group.schema.yaml }<br>- { $ref: ./text.schema.yaml }<br>- { $ref: ./symbol-instance.schema.yaml }<br>- { $ref: ./slice.schema.yaml }<br>- { $ref: ./hotspot.schema.yaml }<br>- { $ref: ./bitmap.schema.yaml }<br>Artboards can contain any layer or layer group except for main components (and ??) |
|   |   |   |