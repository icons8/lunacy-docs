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

### Document

A `free` document.

| Property | Description |
|--------------------|-----------------------|
| `_class:` <br>`{ const: document }` | <br>Classifies the object.<br><br> | 
| `do_objectID:`<br> `{ $ref: ./utils/uuid.schema.yaml }`|  UUID string determining the document ID<br>|
| `assets:`<br>`{ $ref: ./objects/asset-collection.schema.yaml }`| Collection of global document objects<br>|
| `colorSpace:` <br>`{ $ref: ./enums/color-space.schema.yaml }` | Enumeration of the color profiles Sketch can use to render a document<br>|
| `currentPageIndex:`<br>`type: integer`<br>`minimum: 0`| Integer determining the current page index.| 
| `foreignLayerStyles:`<br>`type: array`<br>`items: { $ref: ./objects/foreign-layer-style.schema.yaml }`| Defines a layer style that has been imported from a library| 
| `foreignSymbols:`<br>`type: array`<br>`items: { $ref: ./objects/foreign-symbol.schema.yaml }`| Defines a symbol that has been imported from a library | 


### Document entry 

The document entry in a `free` document. 

| Property | Description |
|--------------------|-----------------------|
| `pages`  <br> `type: array`<br>`items: { $ref: ./objects/file-ref.schema.yaml }` | Page layers are the top level organizational abstraction within a document. The file reference item defines a reference to a file within the document bundle |



<!--- | Frame |  Frames  are a document organisation aid. They have a fixed frame that usually map to variations of device dimensions or viewport sizes. | `_class: {const: frame` <br>Classifies the object. <br><br>`backgroundColor:` <br> `{ $ref: ../objects/color.schema.yaml }` <br>  Defines a RGBA color value which determines the background fill of a frame. <br> <br>`hasBackgroundColor:`<br> `{ type: boolean }` <br> Determines whether the frame has a background color.<br><br> `includeBackgroundColorInExport:`<br> `{ type: boolean }`<br> If set to true, the frame background color will be included in export.<br><br>`isFlowHome:`<br> `{ type: boolean }`<br> ???? <br><br>`resizesContent:`<br> `{ type: boolean }`<br> If set to true, the content of the frame is resized when the frame is resized. <br><br> `prototypeViewport: { $ref: ../objects/prototype-viewport.schema.yaml }` <br> Defines a prototype viewport with a reference to the original template layer that was used defining it. <br><br>  `layers` <br> `type: array` <br> `items:`<br>`oneOf:`<br>`- { $ref: ./group.schema.yaml }`<br>`- { $ref: ./oval.schema.yaml }`<br>`- { $ref: ./polygon.schema.yaml }`<br>`- { $ref: ./rectangle.schema.yaml }`<br>`- { $ref: ./shape-path.schema.yaml }`<br>`- { $ref: ./star.schema.yaml }`<br>`- { $ref: ./triangle.schema.yaml }`<br>`- { $ref: ./shape-group.schema.yaml }`<br>`- { $ref: ./text.schema.yaml }`<br>`- { $ref: ./symbol-instance.schema.yaml }`<br>`- { $ref: ./slice.schema.yaml }`<br>`- { $ref: ./hotspot.schema.yaml }`<br>`- { $ref: ./bitmap.schema.yaml }`<br>Artboards can contain any layer or layer group except for main components (and ??) -->
