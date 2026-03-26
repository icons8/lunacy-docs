# Free Format

FREE is an open source format for vector graphic files designed to be compact, human-readable, back-compatible, and optimized for multithreaded parsing.

A FREE file is a ZIP archive with the following structure:

- `pages` — folder with JSON files containing layer structure and properties.
- `images` — folder with raster assets. PNG, JPG, BMP, WEBP, GIF, TIFF, and ICO are supported.
- `fonts` — folder with fonts embedded into the document, if any.
- `shared` — folder with JSON files containing structure and properties of components and styles used from shared libraries.
- `document.json` — file with document info data.
- `meta.json` — file with app version, file format, last saved by, when, and other info.
- `preview.webp` — a preview of the file.

Lunacy has the support for the Sketch format from the very beginning. Including both opening and saving such files. It's actually a great format with lots of advantages (JSON, everything bundled in a ZIP archive, extensions via UserInfo, a time-proved data structure, and many others) but over time, we've accumulated a long list of drawbacks that have been limiting Lunacy’s growth.

## What’s wrong with the Sketch format

### Stringent limitations

- No support for nested artboards (frames).
- You can’t  rotate artboards.
- You can’t apply styling options to artboards, round their corners, etc.
- Component overrides are only possible for a few fields supported by Sketch.
- There's no way to introduce new  layer types.

### Large file size

And there are reasons for this:

- Cumbersome MacOS-tied naming style for parameters: ``MSImmutableFreeformGroupLayout``, ``MSJSONFileReference``, ``MSAttributedStringColorAttribute``, ``NSCTFontSymbolicTrait``.
- Some of the parameter names are overly verbose: ``allowsDefaultTighteningForTruncation``, ``textStyleVerticalAlignmentKey``, ``automaticallyDrawOnUnderlyingPath``, ``includeBackgroundColorInInstance``, ``MSAttributedStringColorDictionaryAttribute``.
- The same applies to how the shape points are stored, resulting in enormous json files and slow file open times.

    ```json
    {
        "_class": "curvePoint",
        "cornerRadius": 0,
        "cornerStyle": 0,
        "curveFrom": "{0, 0}",
        "curveMode": 1,
        "curveTo": "{0, 0}",
        "hasCurveFrom": false,
        "hasCurveTo": false,
        "point": "{0, 0}"
        },
    ```
* Lots of fields have to be explicitly specified even for default values, i.e. they do not affect anything. But if you try to optimize a file, Sketch won’t open it. Take the fields from the above example and multiply it by millions of points in an average document.

    ```json
    "cornerRadius": 0,
    "cornerStyle": 0,
    "curveFrom": "{0, 0}",
    "curveMode": 1,
    "curveTo": "{0, 0}",
    "hasCurveFrom": false,
    "hasCurveTo": false,

    ```
* Also, object types are often explicitly defined, though they are self-evident from the context. Take ``"_class": "curvePoint"`` from the above example. And, again, multiply it by the number of points in the document.
* All Lunacy features that are not supported by Sketch we have to squeeze into userInfo, which is also far from being effective.

### Some objects have inefficient serialization, which slows down parsing performance.

* Points are described as strings, which adds extra complexity to parsing. First, you read a string like ``"{0, 0}"`` from JSON, and then you parse the values within that string. This impacts file reading performance.
* All IDs are specified as full GUIDs, like ``"1FCC7597-95CD-43E9-B264-18E8006C60B1"``, which is great in terms of data integrity but not the most efficient in terms of file size.
* Overrides have a peculiar format. For some reason, the data from this complex object is crammed into a single serialized string, containing an array of the target layer's IDs, the override type, and occasionally the override object's number:

  ``"42AB34F8-C748-46D5-9373-073296D64ABA/1FCC7597-95CD-43E9-B264-18E8006C60B1_color-1"``

  This approach is inefficient for parsing. Multiple JSON properties would work way better here.

## Downsides of the .fig format.

While working on import from Figma, we thoroughly explored the .fig format. It has one huge advantage — it’s binary and therefore extremely efficient in terms of disk space usage. But there are also serious downsides of the format:

* Not human-readable.
* Proprietary with no public format specification.
* No backward compatibility. Every new version can introduce a completely new format if the Figma team deems it necessary.

Due to this, supporting the .fig format is costly. It requires at least one experienced full-time developer with reverse engineering expertise dedicated solely to this task. And during Figma updates, sleepless nights may be required to quickly roll out an update to support the new format. Lots of products that previously supported the format have given up.

## Goals of the FREE format

We've made the decision to take the Sketch format and address all of its drawbacks while introducing new advantages. Therefore, the FREE format can be considered the successor to the Sketch format. We aimed for the format to be:

* Open source
* Fully back-compatible
* Human-readable
* Compact
* Easily extendable for third parties
* Optimized for high-performance multithreaded reading


We didn't rush the development and release of this format. We worked on it for an extended period, carefully refining all ideas and solutions, so that after new releases its back-compatibility would be as seamless as possible.

## Key differences from the Sketch format

* All fields have short, understandable names. For example, ``"hidden": true``.
* The object type field is given a concise name, ``"_t,"`` and is only specified where necessary, which is in just three places: layer type, layout guide type, and layout type.
* If a value is default, it is simply omitted from the file, even for complex objects.
* All GUIDs are written as ShortGUIDs, which are the base64 serialization of the byte data of the GUID. They retain all the GUID data but occupy 39% less space:

  - ``1FCC7597-95CD-43E9-B264-18E8006C60B1`` - 36 characters

  - ``_w7kV9AThEiBBxn5BtFCBA`` - 22 characters
* The Point data type is specified as an array of two numbers rather than a serialized string, which not only takes up slightly less space but also parses much faster:

  - Sketch format: ``"To": "{367, 566}"``

  - FREE format: ``"To": [367, 566]`` - 3 characters shorter
* The Size data type is also specified as an array:

  - Sketch format: ``"Width": 367, "Height": 566 ``

  - FREE format: ``"Size": [367, 566]`` - noticeably shorter
* The Matrix data type has two notation options: simple and with rotation.

  ``"Transform": [4, 6]`` - x and y coordinates of an object.

  ``"Transform": [0.9, 0.1, 4, 0.1, 0.9, 6]`` - ScaleX, SkewX, TransX, SkewY, ScaleY, TransY - this matrix includes the values of the following Sketch fields: x, y, rotation, isFlippedHorizontal, and isFlippedVertical. This is significantly more efficient.

* **The key difference**. The Vertex data type, which defines path points, and has several notation options. It's simply an array of numbers and can include up to eight values: ``[x, y, flags, radius, fromX, fromY, toX, toY]``. If the points on the right end of the array have default values, they are omitted. So, if toX, toY, fromX, fromY are all zeros, the array will look like ``[x,y,flags,radius]``. And if flags and radius are zeros, it becomes ``[x, y]``. Compare these two definitions of points of a rectangle, the most frequent element in all documents:

  - Sketch (682 characters)
    ```json 
    "points":[
      {"_class":"curvePoint","cornerRadius":0,"cornerStyle":0,"curveFrom":"{0, 0}","curveMode":1,"curveTo":"{0, 0}","hasCurveFrom":false,"hasCurveTo":false,"point":"{0, 0}"},
      {"_class":"curvePoint","cornerRadius":0,"cornerStyle":0,"curveFrom":"{1, 0}","curveMode":1,"curveTo":"{1, 0}","hasCurveFrom":false,"hasCurveTo":false,"point":"{1, 0}"},
      {"_class":"curvePoint","cornerRadius":0,"cornerStyle":0,"curveFrom":"{1, 1}","curveMode":1,"curveTo":"{1, 1}","hasCurveFrom":false,"hasCurveTo":false,"point":"{1, 1}"},
      {"_class":"curvePoint","cornerRadius":0,"cornerStyle":0,"curveFrom":"{0, 1}","curveMode":1,"curveTo":"{0, 1}","hasCurveFrom":false,"hasCurveTo":false,"point":"{0, 1}"}]
    ```
  - FREE (34 characters)
    ```json 
    "points":[[0,0],[1,0],[1,1],[0,1]]
    ```
  **20 times less in size!** Considering that Vertex is the most frequently encountered data type in the format, and a file may contain millions of them. Sacrificing some human-readability in this specific area, where it's not as crucial as in others, was a well-considered choice.
* For colors the FREE format uses HEX strings, while Sketch uses a complex object. Given that color is the second most frequently used object after Vertex, reducing its complexity is also highly critical:

  - Sketch: ``{"_class":"color","alpha":1,"blue":0.827451,"green":0.76862746,"red":0.27058825}`` - 80 characters.

  - FREE: ``“45C4D3”`` - 8 charecters, 10 times less.

  - Also, the color 333333 in the FREE format will go as 3, the color 4455FF — as 45F.
* Simplified, compact, and unbounded overrides. You can override any value. A single override can affect several values. In Sketch, the set of overrides is limited. Each field requires its own override. The number of fields is also limited and strictly defined. Plus parsing of complex strings can impact performance. The FREE format eliminates all these issues.

    ```json
    "overrides":[{
      "target":["bmlSSK7GO0SzhLA-YSdg3Q","TE1yOSobJkONa7C7EvKfig"],
      "locked":true,
      "hidden":false,
      "fills":[{"color":"B2EBF2"}],
      "link":"back"
    }] 
    ```
* ``document.json`` does not include any properties from shared libraries. They are stored in a separate folder, named ``shared``. This prevents ``document.json`` from growing to enormous sizes, up to several gigabytes in some cases. Instead, it remains small and quick to parse. Shared Libraries objects are parsed in a separate threads, ensuring it doesn't impact the file's opening speed.
* [Currently not implemented, coming soon] If a page size exceeds 20MB, it will be divided into 20MB parts, with the division occurring at the top-level artboards. For example, if a page features top-level artboards of 30MB, 10MB, 5MB, 1MB, and 10MB in size, it will be split into parts of 30MB, 16MB, and 10MB. We've observed that in very large files, there's typically one page that is 5-50 times larger than the others. Consequently, parsing it takes N times longer, monopolizes one execution thread, and significantly slows down the file opening. This approach will allow parallel parsing of large pages across multiple CPU threads, and greatly improve the opening speed of such files.

## Results

On small files or files with few layers but many images, improvements might not be very noticeable. But you will definitely see them on massive files with dozens or even hundreds of thousands of layers.

* JSON file sizes are reduced by a factor of 5-10. It's worth noting that JSON compresses well, and after compression, the difference consistently leads to a substantial reduction by a factor of 2. In our case, when transmitting JSON data over the internet, especially in cloud documents, this 5-10 times reduction significantly saves bandwidth for users and our servers.

* The size of images remains unchanged because they are already maximally compressed. However, it's important to mention that the FREE format supports various image formats, including JPG, PNG, WEBP, GIF, and others, without the need to convert them to PNG, as some competitors do. Converting JPG to PNG often significantly increases image size. Lunacy doesn't do this.

* The file opening process has improved by an average of 30%, and in some cases, especially with very large files, the speedup can be as high as 200%.

## Side-by-side comparison

Assume that we have a red rectangle on the canvas. In Sketch, it would result in a JSON representation of **1639 characters** (measured with the JSON formatted into a single line).

```json
{
  "_class": "rectangle",
  "do_objectID": "5FF2A422-C956-4F7A-9E49-C295DB00A4D9",
  "booleanOperation": -1,
  "isFixedToViewport": false,
  "isLocked": false,
  "isVisible": true,
  "isTemplate": false,
  "layerListExpandedType": 0,
  "name": "Rectangle",
  "nameIsFixed": false,
  "resizingConstraint": 63,
  "resizingType": 0,
  "rotation": 0,
  "shouldBreakMaskChain": false,
  "exportOptions": {
    "_class": "exportOptions",
    "includedLayerIds": [],
    "layerOptions": 0,
    "shouldTrim": false,
    "exportFormats": []
  },
  "frame": {
    "_class": "rect",
    "constrainProportions": false,
    "height": 428,
    "width": 431,
    "x": 1887,
    "y": -751
  },
  "clippingMaskMode": 0,
  "hasClippingMask": false,
  "style": {
    "_class": "style",
    "endMarkerType": 0,
    "miterLimit": 10,
    "startMarkerType": 0,
    "windingRule": 1,
    "fills": [
      {
        "_class": "fill",
        "isEnabled": true,
        "fillType": 0,
        "color": {
          "_class": "color",
          "alpha": 1,
          "blue": 0,
          "green": 0,
          "red": 1
        }
      }
    ]
  },
  "edited": false,
  "isClosed": true,
  "pointRadiusBehaviour": 1,
  "points": [
    {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "cornerStyle": 0,
      "curveFrom": "{0, 0}",
      "curveMode": 1,
      "curveTo": "{0, 0}",
      "hasCurveFrom": false,
      "hasCurveTo": false,
      "point": "{0, 0}"
    },
    {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "cornerStyle": 0,
      "curveFrom": "{1, 0}",
      "curveMode": 1,
      "curveTo": "{1, 0}",
      "hasCurveFrom": false,
      "hasCurveTo": false,
      "point": "{1, 0}"
    },
    {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "cornerStyle": 0,
      "curveFrom": "{1, 1}",
      "curveMode": 1,
      "curveTo": "{1, 1}",
      "hasCurveFrom": false,
      "hasCurveTo": false,
      "point": "{1, 1}"
    },
    {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "cornerStyle": 0,
      "curveFrom": "{0, 1}",
      "curveMode": 1,
      "curveTo": "{0, 1}",
      "hasCurveFrom": false,
      "hasCurveTo": false,
      "point": "{0, 1}"
    }
  ],
  "fixedRadius": 0,
  "needsConvertionToNewRoundCorners": false,
  "hasConvertedToNewRoundCorners": true
}
```

In Lunacy's FREE format the same will take only **91 characters**. A 18-fold difference.

```json
{
  "_t": "RECT",
  "id": "IqTyX1bJek-eScKV2wCk2Q",
  "pos": [1887,-751],
  "size": [431,428],
  "fill": "F00"
}
```
## Plans

After fully adapting the new format and polishing it, we plan to develop, test, and, once acceptable results are achieved, introduce support for a binary variation of the format. This means that within the ZIP archive, you'll have .BIN files instead of .JSON. The idea is to maintain the same structure and practices but represent the data in the most efficient manner. Additionally, in the case of providing such serialization options, we will offer a converter that will be able to convert the data to JSON and back, preserving user-readability and maximum file size efficiency. If successful, we can attain the efficiency of the .fig format without its drawbacks.

## Base Types

Free format is NULL-free, NaN-free and Infinity-free - if any of this values are in JSON - it's broken.

* <a name="float"></a>float - 32bit single-precision floating-point number
* <a name="int"></a>int - 32bit signed integer
* <a name="byte"></a>byte - 8-bit unsigned integer
* <a name="bool"></a>bool - Boolean (true or false) value
* <a name="string"></a>string - text as a sequence of UTF-8 code units
* <a name="GUID"></a>GUID - globally unique identifier, with base64 encryption, Examples: `R1o2w3_4D5i6n7g8_000AA`, `N1a2m3-4C5o6n7t8_910AA`, `reY4TrsLHUeFk-E0CtyS5A`.

## Layers

### <a name="Layer"></a>Layer
Base class for any layer on a canvas.

* _t: [string](#string) = `COMPONENT` - object type. Required to be first.
* Id: [GUID](#GUID) - unique layer identifier.
* Name: [string](#string) - defines layer name.
* BoolOp: [BoolOp](#BoolOp) = `Union` - defines the boolean operation applied to the layer.
* Locked: [bool](#bool) = `false` - defines whether the layer is locked for editing.
* Hidden: [bool](#bool) = `false` - defines whether the layer is hidden.
* IsTemplate: [bool](#bool) = `false` - defines whether tha layer is marked as a template.
* Expand: [bool](#bool) = `false` - defines whether the layer is expanded in Layer List.
* Trim: [bool](#bool) = `false` - when enabled, trims empty pixels in exported images.
* Export: [ExportOption[]](#ExportOption) - export options of the layer.
* Constraints: [string](#string) = `LTWH` - defines constraint settings of the layer. String with chars where every char means a flag: L - left, T - top, R - right, B - bottom, W - fix width, H - fix height.
* Transform: [Matrix](#Matrix) = `[1,0,0,0,1,0]` - position, rotation, skew and flips of an object, stored in a single 3x2 matrix, as 6 floats array.
* Pos: [Point](#Point) = `[0,0]` - defines position. Overrides Transform field.
* Size: [Size](#Size) = `[100,100]` - defines the layer size.
* Frame: [Rect](#Rect) = `[0,0,100,100]` - defines position and size with one field. Overrides Transform, Pos and Size fields.
* LockAspect: [bool](#bool) = `false` - defines whether the layer's aspect ratio should remain unchanged upon resizing.
* Mask: [bool](#bool) = `false` - defines whether the layer is used as a mask.
* BreakMask: [bool](#bool) = `false` - defines if the layer is set to ignore the mask.
* MaskType: [MaskType](#MaskType) = `Vector` - type of the Mask - Vector, Alpha or Luminance.
* KeepScroll: [bool](#bool) = `false` - if the *Keep scroll position* option is enabled (prototyping).
* ScrollBehavior: [FlowScrollBehavior](#FlowScrollBehavior) = `Scroll` - defines scroll behavior (prototyping).
* ScrollOverflow: [FlowScrollOverflow](#FlowScrollOverflow) = `NoScrolling` - defines scroll overflow (prototyping).
* Flows: [Flow[]](#Flow) - defines flows (prototyping).
* MinWidth: [float](#float) = `0` - defines the minimum layer width (auto layout).
* MinHeight: [float](#float) = `0` - defines the minimum layer height (auto layout).
* MaxWidth: [float](#float) = `0` - defines the maximum layer width (auto layout).
* MaxHeight: [float](#float) = `0` - defines the maximum layer height (auto layout).
* StretchWidth: [bool](#bool) = `false` - determines if the layer should stretch width (auto layout).
* StretchHeight: [bool](#bool) = `false` - determines whether a layer should stretch height (auto layout).
* AbsolutePos: [bool](#bool) = `false` - enables absolute position for the layer (auto layout).
* Custom: [[string,string]](#[string,string) - key/Value map for custom properties of a layer. Similar to UserInfo is Sketch and PluginData in Figma.
* Themes: [ThemeSelection[]](#ThemeSelection) - variable themes selections.
* Binds: [Bind[]](#Bind) - binds of variables to target fields like: fontSize, cornerRadius, thickness, etc.
* FillsId: [GUID](#GUID) - color style id for fills.
* BordersId: [GUID](#GUID) - color style id for borders.
* EffectsId: [GUID](#GUID) - effect style id.
* Opacity: [float](#float) = `1` - opacity value.
* BlendMode: [BlendMode](#BlendMode) = `Normal` - blend mode.
* Winding: [PathFillType](#PathFillType) = `EvenOdd` - defines the filling options for overlapping paths.
* Fill: [Color](#Color) = `00000000` - if there is a single color fill - use this, otherwise use Fills field.
* Border: [Color](#Color) = `00000000` - if there is a single color border - use this, otherwise use Borders field.
* Fills: [Fill[]](#Fill) - list of fills.
* Borders: [Fill[]](#Fill) - list of borders.
* Thickness: [float](#float) = `0` - defines border thickness.
* CustomThickness: [Thickness](#Thickness) = `[0,0,0,0]` - defines custom border thickness.
* LinePos: [LinePosition](#LinePosition) = `Center` - defines border position.
* LineCap: [LineCap](#LineCap) = `Butt` - defines the shape of line caps.
* LineJoin: [LineJoin](#LineJoin) = `Miter` - defines the appearance of line folds.
* Dash: [float[]](#float) - defines the size of dashes.
* Shadows: [ShadowEffect[]](#ShadowEffect) - list of shadows.
* InnerShadows: [ShadowEffect[]](#ShadowEffect) - list of inner shadows.
* Blur: [BlurEffect](#BlurEffect) - information about blurs.
* ImageFilters: [ImageFilters](#ImageFilters) - filters applied to an image (hue, saturartion, etc.), if any.
* CornerRadius: [float[]](#float) = `float[4]` - sets the corner radius of the frame/instance/component/states/section.
* SmoothCorners: [bool](#bool) = `false` - enables smooth rounded corners like in iOS interfaces.

<details>
<summary>Lunacy specific</summary>

* PhotoId: [string](#string) - identifier of a photo from the Lunacy gallery.
* IllustrationId: [string](#string) - identifier of an illustraion from the Lunacy gallery.
* IconId: [string](#string) - identifier of an icon from the Lunacy gallery.
* AvatarId: [string](#string) - identifier of a Lunacy-generated avatar.
* Data: [DataInfo](#DataInfo) - information about auto generated texts.
* Upscaled: [bool](#bool) = `false` - if the image has been upscaled in Lunacy.
* BackgroundRemove: [BackgroundRemovalState](#BackgroundRemovalState) = `None` - background removal procedure info.
</details>

### <a name="Frame"></a>Frame
A frame is a special type of layers that serves as a container for other layers or layer groups. Frames are a must for auto-layout and prototypes.

Has all properties of [`Layer`](#Layer), plus:

* _t: [string](#string) = `FRAME` - object type.
* ClipContent: [bool](#bool) = `true` - when enabled, hides the content outside the frame boundaries.
* FlowHome: [bool](#bool) = `false` - sets the frame as a prototype starting point.
* Viewport: [PrototypeViewport](#PrototypeViewport) - defines the area that should be displayed on a prototype, when the frame is resized to ensure scrolling effect.
* ResizesContent: [bool](#bool) = `false` - enables adjusting and resizing the frame content as the frame is resized.
* AutoLayout: [AutoLayout](#AutoLayout) - auto Layout Properties
* Layouts: [LayoutGuideBase[]](#LayoutGuideBase) - grid, Row and Column layouts of the frame.
* GridsId: [GUID](#GUID) - grid Layout style id.
* Rulers: [Rulers](#Rulers) - rulers and guidelines info.
* Layers: [Layer[]](#Layer) - list of layers on the frame.

### <a name="Path"></a>Path
A vector path determines the outline and form of a vector object. A path is made up of points and segments.

Has all properties of [`Layer`](#Layer), plus:

* _t: [string](#string) = `PATH` - object type.
* StartMarker: [Arrowhead](#Arrowhead) = `None` - determines the appearance of the tail of an open path drawn with the Line, Arrow, or Pen/Pencil tool.
* EndMarker: [Arrowhead](#Arrowhead) = `None` - determines the appearance of the head of an open path drawn with the Line, Arrow, or Pen/Pencil tool.
* MiterLimit: [float](#float) = `10` - limit on the ratio of the miter length to the stroke-width used to draw a miter joint. When the limit is exceeded, the joint is converted from miter to beveled.
* Edited: [bool](#bool) = `false` - if the shape is edited in the path editor.
* Open: [bool](#bool) = `false` - indicates whether the path is open.
* Points: [Vertex[]](#Vertex) - list of path's points.
* PathData: [string](#string) - optional Field. SVG path data. Overrides Points. Only for LLM and Plugins.

### <a name="Component"></a>Component
A component is a reusable frame of layers.

Has all properties of [`Frame`](#Frame), plus:

* _t: [string](#string) = `COMPONENT` - object type.
* ComponentId: [GUID](#GUID) - unique component identifier.
* Predefined: [bool](#bool) = `false` - indicates that the component belongs to the Lunacy default component library (see the Component Tool on the Toolbar)
* ComponentType: [ComponentType](#ComponentType) = `None` - reserved for future use. Will be used for component filters.
* FigmaId: [string](#string) - unique Figma Component Id. Used to connect shared libraries and documents imported from figma.
* Properties: [ComponentPropertyBase[]](#ComponentPropertyBase) - component properties.
* States: [StateBind[]](#StateBind) - component states definition values.

### <a name="Line"></a>Line
A line is a shape drawn on the canvas with the Line tool.

Has all properties of [`Path`](#Path), plus:

* _t: [string](#string) = `LINE` - object type.

### <a name="Oval"></a>Oval
An oval is a shape drawn on the canvas with the Oval tool.

Has all properties of [`Path`](#Path), plus:

* _t: [string](#string) = `OVAL` - object type.
* Angle: [float](#float) = `0` - end angle for donuts measured clockwise from the X axis.
* Ratio: [float](#float) = `0` - inner radius for donuts.
* StartAngle: [float](#float) = `0` - start angle for donuts measured clockwise from the X axis.

### <a name="Polygon"></a>Polygon
A polygon is a shape drawn on the canvas with the Polygon tool.

Has all properties of [`Path`](#Path), plus:

* _t: [string](#string) = `POLYGON` - object type.
* Rays: [float](#float) = `0` - defines the number of corners.

### <a name="Rectangle"></a>Rectangle
A rectangle is a shape drawn on the canvas with the Rectangle tool.

Has all properties of [`Path`](#Path), plus:

* _t: [string](#string) = `RECT` - object type.
* SmoothCorners: [bool](#bool) = `false` - if the smooth corners option is enabled. Works only if the rectangle is not edited.

### <a name="Slot"></a>Slot
Slot inside component.

Has all properties of [`Frame`](#Frame), plus:

* _t: [string](#string) = `SLOT`

### <a name="Star"></a>Star
A star is a shape drawn on the canvas with the Star tool.

Has all properties of [`Path`](#Path), plus:

* _t: [string](#string) = `STAR` - object type.
* Rays: [float](#float) = `0` - defines the number of rays in a star.
* Ratio: [float](#float) = `0` - defines the star ratio value.

### <a name="States"></a>States
Set of a states of the component.

Has all properties of [`Frame`](#Frame), plus:

* _t: [string](#string) = `STATES`
* Properties: [ComponentPropertyBase[]](#ComponentPropertyBase) - component properties of states.

### <a name="Triangle"></a>Triangle
A triangle is a shape drawn on the canvas with the Triangle tool.

Has all properties of [`Path`](#Path), plus:

* _t: [string](#string) = `TRIANGLE` - object type.

<details>
<summary>Sketch compatibility</summary>

* Equilateral: [bool](#bool) = `false` - if the triangle is equilateral.
</details>

### <a name="Connector"></a>Connector
Connectors are lines and arrows used for annotations.

Has all properties of [`Layer`](#Layer), plus:

* _t: [string](#string) = `CONNECTOR` - object type.
* Start: [GUID?](#GUID) - tail Layer Id
* End: [GUID?](#GUID) - head Layer Id
* StartPos: [Point](#Point) = `[0,0]` - normalized position in the tail layer. From 0 to 1.
* EndPos: [Point](#Point) = `[0,0]` - normalized position in the head layer. From 0 to 1.
* StartMarker: [Arrowhead](#Arrowhead) = `None` - determines the appearance of the tail.
* EndMarker: [Arrowhead](#Arrowhead) = `None` - determines the appearance of the head.
* MiterLimit: [float](#float) = `10` - limit on the ratio of the miter length to the stroke-width used to draw a miter joint. When the limit is exceeded, the joint is converted from miter to beveled.

### <a name="Group"></a>Group
A layer group is two or more layers unified into a single entity that can be manipulated, organized, and treated as a single layer.

Has all properties of [`Layer`](#Layer), plus:

* _t: [string](#string) = `GROUP` - object type.
* SkipSelect: [bool](#bool) = `false` - when enabled, users can select group items without first selecting the group.
* Layers: [Layer[]](#Layer) - list of layers within the group.

<details>
<summary>Sketch compatibility</summary>

* SkipConstraints: [bool](#bool) = `false` - serves for constraints compatibility with Sketch. If the file is imported from the Sketch format, the parameter should be set to false to handle constraints properly.
</details>

### <a name="Instance"></a>Instance
An instance is a linked copy of the component. With instances, you can reuse the same design element in multiple places in your project while retaining a connection to the component.

Has all properties of [`Layer`](#Layer), plus:

* _t: [string](#string) = `INSTANCE` - object type.
* Scale: [float](#float) = `0` - scale of the instance.
* ComponentId: [GUID](#GUID) - unique component identifier.
* AutoLayout: [AutoLayout](#AutoLayout) - auto Layout Properties
* Overrides: [Override[]](#Override) - defines the overrides applied to the instance.

### <a name="Section"></a>Section
Root group of layers. Can be a child of a page or another section. Does not support rotation, flips, effects.

Has all properties of [`Layer`](#Layer), plus:

* _t: [string](#string) = `SECTION`
* Layers: [Layer[]](#Layer) - list of layers within the section.

### <a name="Shape"></a>Shape
Group of path's

Has all properties of [`Layer`](#Layer), plus:

* _t: [string](#string) = `SHAPE` - object type.
* StartMarker: [Arrowhead](#Arrowhead) = `None` - determines the appearance of the tail of an open path drawn with the Line, Arrow, or Pen/Pencil tool.
* EndMarker: [Arrowhead](#Arrowhead) = `None` - determines the appearance of the head of an open path drawn with the Line, Arrow, or Pen/Pencil tool.
* MiterLimit: [float](#float) = `10` - limit on the ratio of the miter length to the stroke-width used to draw a miter joint. When the limit is exceeded, the joint is converted from miter to beveled.
* Layers: [Layer[]](#Layer) - list of layers.

<details>
<summary>Sketch compatibility</summary>

* SkipConstraints: [bool](#bool) = `false` - serves for constraints compatibility with Sketch. If the file is imported from the Sketch format, the parameter should be set to false to handle constraints properly.
</details>

### <a name="Slice"></a>Slice
A slice is a special type of layers used for exporting certaing parts of designs.

Has all properties of [`Layer`](#Layer), plus:

* _t: [string](#string) = `SLICE` - object type.
* HasBackground: [bool](#bool) = `false` - defines whether the slice includes background.
* Background: [Color](#Color) = `00000000` - defines the background color.
* BackgroundId: [GUID?](#GUID) - unique color variable ID.

### <a name="Text"></a>Text
Text is a block or line of text on the canvas.

Has all properties of [`Layer`](#Layer), plus:

* _t: [string](#string) = `TEXT` - object type.
* text: [string](#string) - content of the text layer.
* Font: [string](#string) = `Inter-Regular` - text font.
* FontSize: [float](#float) = `12` - text size.
* ParagraphSpacing: [float](#float) = `0` - paragraph spacing.
* Kerning: [float](#float) = `0` - letter spacing.
* BaselineOffset: [float](#float) = `0` - text offset from the baseline.
* LineHeight: [float?](#float) - line spacing.
* Casing: [CharacterCasing](#CharacterCasing) = `Normal` - character case.
* Align: [TextHorizontalAlignment](#TextHorizontalAlignment) = `Left` - horizontal alignment applied to the text.
* Valign: [TextVerticalAlignment](#TextVerticalAlignment) = `Top` - vertical alignment applied to the text.
* List: [ListMarkerType](#ListMarkerType) = `None` - list type: numbered, bulleted, none.
* Rtl: [bool](#bool) = `false` - if the text is RTL.
* Underline: [bool](#bool) = `false` - if the text is underlined.
* Strikethrough: [bool](#bool) = `false` - if the strikethrough option is applied to the text.
* BaselinePos: [BaselinePosition](#BaselinePosition) = `Normal` - text position against the baseline.
* Inlines: [InlineStyle[]](#InlineStyle) - styling options applied to the text within a text block.
* Behavior: [TextBehavior](#TextBehavior) = `Flexible` - behavior of the text layer size on text value change: flexible, fixed-width, or fixed.
* ClipContent: [bool](#bool) = `true` - valid for files imported from Figma. Defines whether to truncate text content.
* Truncate: [bool](#bool) = `false` - trim text with triple dots in the end if content overlaps fixed layer size bounds.
* MaxLines: [byte](#byte) = `0` - count of lines allowed. If the limit is exceeded, the text will be truncated.
* DrawOnPath: [bool](#bool) = `false` - defines whether text draws on the underlying path.
* Warp: [bool](#bool) = `false` - defines whether text warps when drawn on the underlying path.
* VerticalTrim: [bool](#bool) = `false` - removes extra space on top and bottom of the text layer.
* TextStyleId: [GUID](#GUID) - text style id.

### <a name="BoolVariable"></a>BoolVariable
Variable with a boolean value.

Has all properties of [`Variable`](#Variable), plus:

* _t: [string](#string) = `BOOL` - variable type.
* Values: [BoolValue[]](#BoolValue) - list of values for each theme in collection.

### <a name="ColorVariable"></a>ColorVariable
Variable with a color value.

Has all properties of [`Variable`](#Variable), plus:

* _t: [string](#string) = `COLOR` - variable type.
* Values: [ColorValue[]](#ColorValue) - list of values for each theme in collection.

### <a name="FloatVariable"></a>FloatVariable
Variable with a float value.

Has all properties of [`Variable`](#Variable), plus:

* _t: [string](#string) = `FLOAT` - variable type.
* Values: [FloatValue[]](#FloatValue) - list of values for each theme in collection.

### <a name="StringVariable"></a>StringVariable
Variable with a string value.

Has all properties of [`Variable`](#Variable), plus:

* _t: [string](#string) = `TEXT` - variable type.
* Values: [stringValue[]](#stringValue) - list of values for each theme in collection.

### <a name="BoolValue"></a>BoolValue
Value of a boolean variable.

* ThemeId: [GUID](#GUID) - theme unique identifier of a Value.
* Value: [bool](#bool) = `false` - boolean value.
* ValueId: [GUID](#GUID) - boolean variable ID.

### <a name="ColorValue"></a>ColorValue
Value of a color variable.

* ThemeId: [GUID](#GUID) - theme unique identifier of a Value.
* Value: [Color](#Color) = `00000000` - color value.
* ValueId: [GUID](#GUID) - color variable ID.

### <a name="FloatValue"></a>FloatValue
Value of a float variable

* ThemeId: [GUID](#GUID) - theme unique identifier of a Value.
* Value: [float](#float) = `0` - float value.
* ValueId: [GUID](#GUID) - float variable ID.

### <a name="StringValue"></a>StringValue
Value of a string variable

* ThemeId: [GUID](#GUID) - theme unique identifier of a Value.
* Value: [string](#string) - string value.
* ValueId: [GUID](#GUID) - string variable ID.

### <a name="Variable"></a>Variable
Base class of variable.

* _t: [string](#string) = `COLOR` - variable type.
* Id: [GUID](#GUID) - unique variable ID.
* Name: [string](#string) - variable name.
* Version: [int](#int) = `0` - variable version.

### <a name="VariableCollection"></a>VariableCollection
Collection of variables.

* Id: [GUID](#GUID) - unique identifier.
* Name: [string](#string) - name of variable collection.
* Themes: [VariableTheme[]](#VariableTheme) - list of variable theme names in this collection.
* Variables: [Variable[]](#Variable) - list of variables inside collection.
* Version: [int](#int) = `0` - version of collection.

### <a name="VariableTheme"></a>VariableTheme
Theme of variables. Used to switch all variable values inside specific collection.

* Id: [GUID](#GUID) - unique identifier.
* Name: [string](#string) - name of the theme.

### <a name="BoolComponentProperty"></a>BoolComponentProperty
Defines boolean component property of components and states.

Has all properties of [`ComponentPropertyBase`](#ComponentPropertyBase), plus:

* _t: [string](#string) = `BOOL` - object type.
* Value: [bool](#bool) = `false` - initial Value.
* ValueId: [GUID](#GUID) - boolean variable ID.

### <a name="SlotComponentProperty"></a>SlotComponentProperty
Defines slot component property of components and states.

Has all properties of [`ComponentPropertyBase`](#ComponentPropertyBase), plus:

* _t: [string](#string) = `SLOT` - object type.
* Value: [GUID](#GUID) - initial Slot ID.
* Values: [GUID[]](#GUID) - preferred Components Values.

### <a name="StateComponentProperty"></a>StateComponentProperty
Defines state(variant) component property of components and states. Can be assigned to states layer only.

Has all properties of [`ComponentPropertyBase`](#ComponentPropertyBase), plus:

* _t: [string](#string) = `STATE` - object type.
* Value: [string](#string) - initial Value.
* ValueId: [GUID](#GUID) - string variable ID.
* Values: [string[]](#string) - preferred Values.

### <a name="SwapComponentProperty"></a>SwapComponentProperty
Defines swap component property of components and states.

Has all properties of [`ComponentPropertyBase`](#ComponentPropertyBase), plus:

* _t: [string](#string) = `SWAP` - object type.
* Value: [GUID](#GUID) - initial Value.
* Values: [GUID[]](#GUID) - preferred Values.

### <a name="TextComponentProperty"></a>TextComponentProperty
Defines text component property of components and states.

Has all properties of [`ComponentPropertyBase`](#ComponentPropertyBase), plus:

* _t: [string](#string) = `TEXT` - object type.
* Value: [string](#string) - initial Value.
* ValueId: [GUID](#GUID) - string variable ID.

### <a name="ComponentPropertyBase"></a>ComponentPropertyBase
Defines component property of components and states.

* _t: [string](#string) = `BOOL` - variable type.
* Id: [GUID](#GUID) - unique property ID.
* Name: [string](#string) - property name.
* Dead: [bool](#bool) = `false` - is already deleted.

### <a name="ColorStyle"></a>ColorStyle
Style of fills. Can be set to borders and fills.

Has all properties of [`StyleBase`](#StyleBase), plus:

* Fill: [Color](#Color) = `00000000` - if there is a single color fill - use this, otherwise use Fills field.
* Fills: [Fill[]](#Fill) - list of fills applied to a style.

### <a name="EffectStyle"></a>EffectStyle

Has all properties of [`StyleBase`](#StyleBase), plus:

* Shadows: [ShadowEffect[]](#ShadowEffect) - list of shadows of the style.
* InnerShadows: [ShadowEffect[]](#ShadowEffect) - list of inner shadows of the style.
* Blur: [BlurEffect](#BlurEffect) - definition of the blur effect of the style.

### <a name="GuideStyle"></a>GuideStyle

Has all properties of [`StyleBase`](#StyleBase), plus:

* Layouts: [LayoutGuideBase[]](#LayoutGuideBase) - grid, Row and Column layouts of the style.

### <a name="TextStyle"></a>TextStyle
Text Style

Has all properties of [`StyleBase`](#StyleBase), plus:

* Font: [string](#string) = `Inter-Regular` - text font.
* FontSize: [float](#float) = `12` - text size.
* ParagraphSpacing: [float](#float) = `0` - paragraph spacing.
* Kerning: [float](#float) = `0` - letter spacing.
* BaselineOffset: [float](#float) = `0` - text offset from the baseline.
* LineHeight: [float?](#float) - line spacing.
* Underline: [bool](#bool) = `false` - if the text is underlined.
* Strikethrough: [bool](#bool) = `false` - if the strikethrough option is applied to the text.
* Casing: [CharacterCasing](#CharacterCasing) = `Normal` - character case.

### <a name="StyleBase"></a>StyleBase
Base class for a shared style

* Id: [GUID](#GUID) - unique style ID.
* Name: [string](#string) - style name.
* Version: [int](#int) = `0` - style version.
* FigmaId: [string](#string) - unique Figma Style Id. Used to connect shared libraries and documents imported from figma.

### <a name="Columns"></a>Columns
Defines column settings in a layout guide.

Has all properties of [`LayoutGuideBase`](#LayoutGuideBase), plus:

* _t: [string](#string) = `COLS` - object type.
* Enabled: [bool](#bool) = `false` - if columnns are enabled.
* Align: [LayoutHorizontalAlignment](#LayoutHorizontalAlignment) = `Left` - horizontal alignment settings.
* Offset: [int](#int) = `0` - offset value.
* Count: [int](#int) = `0` - number of columns.
* Gutter: [int](#int) = `0` - gutter value.
* Width: [int](#int) = `0` - column width.
* Color: [Color](#Color) = `00000000` - column color.

### <a name="Grid"></a>Grid
Defines square grid settings for a frame.

Has all properties of [`LayoutGuideBase`](#LayoutGuideBase), plus:

* _t: [string](#string) = `GRID` - object type.
* Enabled: [bool](#bool) = `false` - if the square grid is enabled.
* Color: [Color](#Color) = `00000000` - grid color.
* Size: [int](#int) = `10` - size of grid cells.

<details>
<summary>Sketch compatibility</summary>

* ThickTimes: [int](#int) = `10` - every N line should be thick.
</details>

### <a name="Rows"></a>Rows
Defines row settings in a layout guide.

Has all properties of [`LayoutGuideBase`](#LayoutGuideBase), plus:

* _t: [string](#string) = `ROWS` - object type.
* Enabled: [bool](#bool) = `false` - if rows are enabled.
* Align: [LayoutVerticalAlignment](#LayoutVerticalAlignment) = `Top` - vertical alignment settings.
* Offset: [int](#int) = `0` - offset value.
* Count: [int](#int) = `0` - number of rows.
* Gutter: [int](#int) = `0` - gutter value.
* Width: [int](#int) = `0` - row width.
* Color: [Color](#Color) = `00000000` - row color.

### <a name="LayoutGuideBase"></a>LayoutGuideBase
Defines layout guide settings for a frame.

* _t: [string](#string) - object type.
* Enabled: [bool](#bool) = `false` - if layout guide is enabled.

### <a name="BackAction"></a>BackAction
Action to go to previous frame.

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `BACK` - object type.
* Animation: [FlowAnimation](#FlowAnimation) = `Free.Schema.FlowAnimation` - action animation.

### <a name="CloseOverlayAction"></a>CloseOverlayAction
Action to close current overlay.

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `CLOSE_OVERLAY` - object type.

### <a name="ConditionalAction"></a>ConditionalAction
Set variable theme for a variable collection

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `CONDITION` - object type.
* Condition: [Argument](#Argument) - condition. Usually an expression, but can be a value or variable.
* True: [FlowAction[]](#FlowAction) - actions to perform if condition result is true.
* False: [FlowAction[]](#FlowAction) - actions to perform if condition result is false.

### <a name="NavigateToAction"></a>NavigateToAction
Action to navigate to target frame.

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `NAVIGATE` - object type.
* Target: [GUID?](#GUID) - id of the target frame.
* Animation: [FlowAnimation](#FlowAnimation) = `Free.Schema.FlowAnimation` - id of the target layer.

### <a name="OpenOverlayAction"></a>OpenOverlayAction
Action to open target overlay.

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `OVERLAY` - object type.
* Target: [GUID?](#GUID) - id of the target overlay.
* Animation: [FlowAnimation](#FlowAnimation) = `Free.Schema.FlowAnimation` - action animation.
* Position: [FlowOverlayPosition](#FlowOverlayPosition) = `Centered` - startup location of overlay.
* Offset: [Vector2](#Vector2) = `<0, 0>` - offset from startup location.
* CloseByClick: [bool](#bool) = `false` - close by any click.
* HasBackground: [bool](#bool) = `false` - defines whether the overlay has background.
* Background: [Color](#Color) = `00000000` - overlay background color.

### <a name="OpenUrlAction"></a>OpenUrlAction
Action to open URL.

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `URL` - object type.
* Url: [string](#string) - target URL.

### <a name="ScrollToAction"></a>ScrollToAction
Action to scroll to target layer.

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `SCROLL` - object type.
* Target: [GUID?](#GUID) - id of the target layer.
* Animation: [FlowAnimation](#FlowAnimation) = `Free.Schema.FlowAnimation` - action animation.

### <a name="SetThemeAction"></a>SetThemeAction
Set variable theme for a variable collection

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `THEME` - object type.
* Target: [GUID?](#GUID) - variable Collection Id
* ThemeId: [GUID](#GUID) - variable Theme Id

### <a name="SetVariableAction"></a>SetVariableAction
Action to go to previous frame.

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `SET` - object type.
* Target: [GUID](#GUID) - variable Id
* Value: [Argument](#Argument) - value to set.

### <a name="SwapOverlayAction"></a>SwapOverlayAction
Action to swap current overlay to target overlay.

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `SWAP_OVERLAY` - object type.
* Target: [GUID?](#GUID) - id of the target overlay.
* Animation: [FlowAnimation](#FlowAnimation) = `Free.Schema.FlowAnimation` - action animation.

### <a name="SwitchStateAction"></a>SwitchStateAction
Action to switch state of a target component instance.

Has all properties of [`FlowAction`](#FlowAction), plus:

* _t: [string](#string) = `SWITCH_STATE` - object type.
* Target: [GUID?](#GUID) - id of the target instance.
* Animation: [FlowAnimation](#FlowAnimation) = `Free.Schema.FlowAnimation` - id of the target layer.

### <a name="FlowAction"></a>FlowAction
Base object of prototyping action.

* _t: [string](#string) = `NAVIGATE` - object type.

### <a name="AfterDelayTrigger"></a>AfterDelayTrigger
after delay.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* _t: [string](#string) = `DELAY` - object type.
* Delay: [int](#int) = `0` - delay in ms.

### <a name="ClickTrigger"></a>ClickTrigger
Mouse click.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* _t: [string](#string) = `CLICK` - object type.

### <a name="DragTrigger"></a>DragTrigger
Mouse drag.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* _t: [string](#string) = `DRAG` - object type.

### <a name="HoldTrigger"></a>HoldTrigger
Mouse hold - only while you press and hold a mouse button.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* _t: [string](#string) = `HOLD` - object type.

### <a name="HoverTrigger"></a>HoverTrigger
Mouse hover - only while mouse pointer is over layer.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* _t: [string](#string) = `HOVER` - object type.

### <a name="KeyPressTrigger"></a>KeyPressTrigger
Key down.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* Shortcut: [string](#string) - string representing a keyboard shortcut. Examples: TAB, C, Ctrl+Shift+T, Alt+F3, Win+\.
* Delay: [int](#int) = `0` - delay in ms.

### <a name="MouseDownTrigger"></a>MouseDownTrigger
Mouse down.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* _t: [string](#string) = `MOUSE_DOWN` - object type.
* Delay: [int](#int) = `0` - delay in ms.

### <a name="MouseEnterTrigger"></a>MouseEnterTrigger
Mouse enter.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* _t: [string](#string) = `ENTER` - object type.
* Delay: [int](#int) = `0` - delay in ms.

### <a name="MouseLeaveTrigger"></a>MouseLeaveTrigger
Mouse leave.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* _t: [string](#string) = `LEAVE` - object type.
* Delay: [int](#int) = `0` - delay in ms.

### <a name="MouseUpTrigger"></a>MouseUpTrigger
Mouse up.

Has all properties of [`FlowTrigger`](#FlowTrigger), plus:

* _t: [string](#string) = `MOUSE_UP` - object type.
* Delay: [int](#int) = `0` - delay in ms.

### <a name="FlowTrigger"></a>FlowTrigger
Base object of prototyping trigger.

* _t: [string](#string) = `CLICK` - object type.

### <a name="Argument"></a>Argument
Expression Argument. Value or Variable or Expression.

* Bool: [bool?](#bool) - boolean value
* Number: [float?](#float) - number value
* Text: [string](#string) - text value
* Id: [GUID?](#GUID) - id of a variable. Should be used with a bool/float/string value before id.
* Func: [ExpressionFunction?](#ExpressionFunction) - expression Function. Use only with Args.

### <a name="AutoLayout"></a>AutoLayout
Defines auto layout settings.

* Vertical: [bool](#bool) = `false` - is vertical orientation.
* Spacing: [float](#float) = `0` - spacing value
* WrapSpacing: [float](#float) = `0` - spacing between rows of wrapped content.
* Padding: [Thickness](#Thickness) = `[0,0,0,0]` - padding value.
* Align: [HorizontalAlignment](#HorizontalAlignment) = `Left` - horizontal children alignment
* Valign: [VerticalAlignment](#VerticalAlignment) = `Top` - vertical children alignment
* FixWidth: [bool](#bool) = `false` - is width fixed. False = hug or fill if StretchWidth is true.
* FixHeight: [bool](#bool) = `false` - is height fixed. False = hug or fill if StretchHeight is true.
* TextBaseline: [bool](#bool) = `false` - if text baseline alignment is enabled.
* StrokesIncluded: [bool](#bool) = `false` - if the Include Borders option is enabled.
* ReverseZIndex: [bool](#bool) = `false` - if the Last on Top option is enabled.
* Wrap: [bool](#bool) = `false` - if wrapping is enabled.

### <a name="Bind"></a>Bind
Bind of a variable into layer property.

* Field: [BindField](#BindField) = `Unknown` - target field
* Value: [Argument](#Argument) - bind Value

### <a name="BlurEffect"></a>BlurEffect
Defines the settings of the blur effect.

* Saturation: [float](#float) = `1` - saturation. Only for background blur.
* Radius: [float](#float) = `10` - blur Radius.
* Enabled: [bool](#bool) = `false` - if the blur is enabled.
* Type: [BlurType](#BlurType) = `Gaussian` - sets the blur type.

### <a name="Document"></a>Document
The document's .json structure.

* Id: [GUID](#GUID) - unique document ID.
* Nudge: [Point](#Point) = `[1,10]` - nudge Amount. X - small nudge. Y = large nudge.
* FromFigma: [bool](#bool) = `false` - if the document is imported from Figma.
* CurrentPageIndex: [int](#int) = `0` - index of the currently open page.
* Fonts: [Font[]](#Font) - embedded fonts stored in the document.
* VariableCollections: [VariableCollection[]](#VariableCollection) - variable collections stored in the document.
* FillStyles: [ColorStyle[]](#ColorStyle) - fill styles stored in the document.
* EffectStyles: [EffectStyle[]](#EffectStyle) - effect styles stored in the document.
* TextStyles: [TextStyle[]](#TextStyle) - text styles stored in the document.
* GuideStyles: [GuideStyle[]](#GuideStyle) - guide layout styles stored in the document.
* Slots: [Slot[]](#Slot) - slots of the document.
* Pages: [GUID[]](#GUID) - list of document pages.

<details>
<summary>Sketch compatibility</summary>

* ColorSpace: [ColorSpace](#ColorSpace) = `Unmanaged` - сolor scheme the document uses.
</details>

### <a name="ExportOption"></a>ExportOption
Export settings.

* Format: [string](#string) = `PNG` - export format. Default: PNG.
* Type: [ScaleType](#ScaleType) = `Scale` - defines the scale type: Scale/Width/Height. The Width and Height types are currently not supported.
* Size: [float](#float) = `0` - defines the width/height/scale of the exported object. Dependent on the type of the scale.
* Name: [string](#string) - user-defined suffix/preffix (string) added to the export file name. Default: empty.
* Naming: [NamingScheme](#NamingScheme) = `Suffix` - defines whether a suffix or preffix will be added to the export files name. Default: suffix.

### <a name="Fill"></a>Fill
Defines the fill applied to a layer.

* Enabled: [bool](#bool) = `false` - if a fill is added.
* Color: [Color](#Color) = `00000000` - fill color.
* ColorId: [GUID?](#GUID) - color variable ID.
* Type: [FillType](#FillType) = `Color` - defines the fill type.
* Opacity: [float](#float) = `0` - defines the fill opacity.
* BlendMode: [BlendMode](#BlendMode) = `Normal` - defines the blend mode.
* Pattern: [Pattern](#Pattern) - contains pattern fill properties in case the fill is a pattern fill.
* Gradient: [Gradient](#Gradient) - contains gradient properties in case the fill is a gradient.

### <a name="Flow"></a>Flow
Prototyping interaction element

* Trigger: [FlowTrigger](#FlowTrigger) - trigger that will fire an action. Examples: CLICK, DRAG, HOLD.
* Actions: [FlowAction[]](#FlowAction) - list of Actions. Examples: NAVIGATE, SCROLL, URL, BACK.

### <a name="Font"></a>Font
Embedded fonts stored in the document.

* Data: [string](#string) - name of the font file in the fonts folder.
* Name: [string](#string) - font name.
* FileName: [string](#string) - font file name.
* PostscriptNames: [string[]](#string) - postScript names of the font.

### <a name="Gradient"></a>Gradient
An object that represents a gradient.

* Type: [GradientType](#GradientType) = `Linear` - type of the gradient.
* From: [Point](#Point) = `[0.5,0]` - position of the gradient start point.
* To: [Point](#Point) = `[0.5,1]` - position of the gradient end point.
* Side: [Point](#Point) = `[0,0]` - position of the gradient side point. Valid for radial and angular gragients.
* Stops: [GradientStop[]](#GradientStop) - list of other gradient points.

### <a name="GradientStop"></a>GradientStop
A position-color pair representing a gradient stop.

* Pos: [float](#float) = `0` - value between 0 and 1 representing a position along gradient axis.
* Color: [Color](#Color) = `00000000` - color attached to a corresponding position.
* ColorId: [GUID?](#GUID) - color variable ID.

### <a name="ImageFilters"></a>ImageFilters
Defines filters that can be applied to images.

* Enabled: [bool](#bool) = `false` - if a filter is applied to the image layer.
* Brightness: [float](#float) = `0` - brightness filter.
* Contrast: [float](#float) = `1` - contrast filter.
* Hue: [float](#float) = `0` - hue filter.
* Saturation: [float](#float) = `1` - saturation filter.

### <a name="InlineStyle"></a>InlineStyle
Style (bold, italic, etc.) applied to a part of text or single word within a text block.

* Start: [int](#int) = `0` - position where the style starts.
* Length: [int](#int) = `0` - length of the selection.
* FillsId: [GUID](#GUID) - color Style Id.
* TextStyleId: [GUID](#GUID) - text style id.
* Fill: [Color](#Color) = `00000000` - if there is a single color fill - use this, otherwise use Fills field.
* Fills: [Fill[]](#Fill) - list of fills.
* Font: [string](#string) = `Inter-Regular` - text font.
* FontSize: [float](#float) = `12` - text size.
* ParagraphSpacing: [float](#float) = `0` - paragraph spacing.
* Kerning: [float](#float) = `0` - letter spacing.
* BaselineOffset: [float](#float) = `0` - text offset from the baseline.
* LineHeight: [float?](#float) - line spacing.
* Casing: [CharacterCasing](#CharacterCasing) = `Normal` - character case.
* Align: [TextHorizontalAlignment](#TextHorizontalAlignment) = `Left` - horizontal alignment applied to the text.
* Valign: [TextVerticalAlignment](#TextVerticalAlignment) = `Top` - vertical alignment applied to the text.
* List: [ListMarkerType](#ListMarkerType) = `None` - list type: numbered, bulleted, none.
* Rtl: [bool](#bool) = `false` - if the text is RTL.
* Underline: [bool](#bool) = `false` - if the text is underlined.
* Strikethrough: [bool](#bool) = `false` - if the strikethrough option is applied to the text.
* BaselinePos: [BaselinePosition](#BaselinePosition) = `Normal` - text position against the baseline.

### <a name="Meta"></a>Meta
Contains metadata about the document.

* Version: [int](#int) = `0` - free Format version.
* App: [string](#string) - app name.
* Variant: [string](#string) - app variant: beta/standalone/store/web/etc.
* AppVersion: [string](#string) - app version.

### <a name="Override"></a>Override
Defines overrides for components.

* ComponentId: [GUID?](#GUID) - unique component identifier.
* Image: [string](#string) - defines the image name used as a fill.
* Link: [string](#string) - defines the target frame (prototyping).
* Locked: [bool?](#bool) - if the layer is locked for editing.
* Hidden: [bool?](#bool) - if the layer is hidden.
* ClipContent: [bool?](#bool) - if the clip content feature is enabled.
* LockAspect: [bool?](#bool) - if the aspect ratio is locked.
* Ratio: [float?](#float) - defines the star ratio value.???
* VertexCount: [float?](#float) - the number of vertices.
* ArcAngle: [float?](#float) - end angle for donuts measured clockwise from the X axis.
* ArcRatio: [float?](#float) - inner radius for donuts.
* ArcStartAngle: [float?](#float) - start angle for donuts measured clockwise from the X axis.
* CornerRadius: [float[]](#float) - corner radius value.
* SmoothCorners: [bool?](#bool) - if smooth corners are enabled.
* StyleId: [GUID?](#GUID) - identifier of the style applied to a layer.
* Tint: [Color?](#Color) - defines the tint color.
* TintId: [GUID?](#GUID) - tint identifier.
* Thickness: [Thickness](#Thickness) = `[0,0,0,0]` - defines border thickness.
* CustomThickness: [Thickness](#Thickness) = `[0,0,0,0]` - defines custom border thickness.
* LinePos: [LinePosition](#LinePosition) = `Center` - defines border position.
* LineCap: [LineCap](#LineCap) = `Butt` - defines the shape of line caps.
* LineJoin: [LineJoin](#LineJoin) = `Miter` - defines the appearance of line folds.
* Blur: [BlurEffect](#BlurEffect) - information about blurs.
* ImageFilters: [ImageFilters](#ImageFilters) - filters applied to an image (hue, saturartion, etc.), if any.
* Opacity: [float?](#float) - opacity value.
* BlendMode: [BlendMode?](#BlendMode) - blend mode.
* StartMarker: [Arrowhead?](#Arrowhead) - determines the appearance of the tail of an open path drawn with the Line, Arrow, or Pen/Pencil tool.
* EndMarker: [Arrowhead?](#Arrowhead) - determines the appearance of the head of an open path drawn with the Line, Arrow, or Pen/Pencil tool.
* Text: [string](#string) - content of the text layer.
* TextBehavior: [TextBehavior?](#TextBehavior) - behavior of the text layer size on text value change: flexible, fixed-width, or fixed.
* Size: [Size?](#Size) - text size.
* Vertical: [bool?](#bool) - is vertical autolayout
* Spacing: [float?](#float) - spacing value
* WrapSpacing: [float?](#float) - spacing between rows of wrapped content.
* MinWidth: [float?](#float) - defines the minimum layer width (auto layout).
* MinHeight: [float?](#float) - defines the minimum layer height (auto layout).
* MaxWidth: [float?](#float) - defines the maximum layer width (auto layout).
* MaxHeight: [float?](#float) - defines the maximum layer height (auto layout).
* Padding: [Thickness?](#Thickness) - padding value.
* Align: [HorizontalAlignment?](#HorizontalAlignment) - horizontal children alignment.
* VAlign: [VerticalAlignment?](#VerticalAlignment) - vertical children alignment.
* FixWidth: [bool](#bool) = `false` - is width fixed. False = hug or fill if StretchWidth is true.
* FixHeight: [bool](#bool) = `false` - is height fixed. False = hug or fill if StretchHeight is true.
* TextBaseline: [bool?](#bool) - if text baseline alignment is enabled.
* StrokesIncluded: [bool?](#bool) - if the Include Borders option is enabled.
* ReverseZIndex: [bool?](#bool) - if the Last on Top option is enabled.
* StretchWidth: [bool](#bool) = `false` - determines if the layer should stretch height (auto layout).
* StretchHeight: [bool](#bool) = `false` - determines whether a layer should stretch width (auto layout).
* Wrap: [bool?](#bool) - if text wrapping is enabled.
* Truncate: [bool?](#bool) - trim text with triple dots in the end if content overlaps fixed layer size bounds.
* MaxLines: [byte](#byte) = `0` - count of lines allowed. If the limit is exceeded, the text will be truncated.
* KeepScroll: [bool?](#bool) - if the *Keep scroll position* option is enabled (prototyping).
* ScrollBehavior: [FlowScrollBehavior?](#FlowScrollBehavior) - defines scroll behavior (prototyping).

<details>
<summary>Sketch compatibility</summary>

* LegacyColor: [ColorOverride](#ColorOverride) - color override.
* LegacyTextColor: [TextColorOverride](#TextColorOverride) - text color override.
* LegacyTextWeight: [TextWeightOverride](#TextWeightOverride) - text weight override.
</details>

### <a name="Page"></a>Page
Document page properties.

* Id: [GUID](#GUID) - unique page ID.
* Name: [string](#string) - page name.
* Background: [Color](#Color) = `00000000` - canvas color.
* IsComponentPage: [bool](#bool) = `false` - if the page is used to store components.
* Rulers: [Rulers](#Rulers) - rulers applied by the user.
* Origin: [Point](#Point) = `[0,0]` - point where the user left off the page.
* Zoom: [float](#float) = `0` - zoom scale last applied to the page.
* Layers: [Layer[]](#Layer) - list of layers in the page.

### <a name="Pattern"></a>Pattern
Defines the image fill options.

* Type: [PatternFillType](#PatternFillType) = `Fill` - defines the fill type: tile, fill, stretch, fit, or crop.
* Image: [string](#string) - defines the image name used as a fill.
* Rotation: [float](#float) = `0` - image rotation value, in degrees. Applicable to all types, except for crop.
* TileScale: [float](#float) = `1` - tile scale value. Applicable to the tile type only.
* Transform: [Matrix?](#Matrix) - defines how the image is cropped. Applicable to the crop type only.

### <a name="PrototypeViewport"></a>PrototypeViewport
This is a frame preset. Also used to determine viewport size for a large frame to scroll it properly.

* Id: [GUID](#GUID) - unique frame identifier.
* Name: [string](#string) - frame name.
* Size: [Size](#Size) = `[0,0]` - frame size.
* LibraryId: [GUID](#GUID) - library identifier.

### <a name="Rulers"></a>Rulers
An object containing ruler origins and guideline positions.

* Guides: [int[]](#int) - positions of vertical guidelines on the Horizontal Ruler.
* VGuides: [int[]](#int) - positions of horizontal guidelines on the Vertical Ruler.

<details>
<summary>Sketch compatibility</summary>

* Origin: [Point](#Point) = `[0,0]` - ruler origin. Not supported in Lunacy. Sketch Compatibility
</details>

### <a name="ShadowEffect"></a>ShadowEffect
Defines the shadow options.

* Enabled: [bool](#bool) = `true` - if a shadow effect is enabled.
* Radius: [float](#float) = `0` - radius of the shadow blur.
* Color: [Color](#Color) = `00000000` - shadow color.
* ColorId: [GUID?](#GUID) - color variable ID.
* Spread: [float](#float) = `0` - shadow spread value.
* Offset: [Point](#Point) = `[0,0]` - how far the shadow is projected in the x and y directions.
* BlendMode: [BlendMode](#BlendMode) = `Normal` - shadow blend mode.

### <a name="SharedLibrary"></a>SharedLibrary
Contains components, styles and variables from external library that is used in current document. Every file in the shared folder is Shared Library.

* Id: [GUID](#GUID) - unique library document identifier.
* Variables: [VariableCollection[]](#VariableCollection) - variable collections from a shared library.
* FillStyles: [ColorStyle[]](#ColorStyle) - fill styles stored in the document.
* EffectStyles: [EffectStyle[]](#EffectStyle) - effect styles stored in the document.
* TextStyles: [TextStyle[]](#TextStyle) - text styles stored in the document.
* GuideStyles: [GuideStyle[]](#GuideStyle) - guide layout styles stored in the document.
* Components: [Component[]](#Component) - components from a shared library.
* Slots: [Slot[]](#Slot) - slots from a shared library.

### <a name="StateBind"></a>StateBind
Bind of component property of a states layer to the state name of component.

* Id: [GUID](#GUID) - component Property Id
* Name: [string](#string) - state Name
* NameId: [GUID?](#GUID) - id of string variable with a value

### <a name="ThemeSelection"></a>ThemeSelection
Theme Selection of a layer and it's children for a specific theme.

* Id: [GUID](#GUID) - unique identifier of the collection.
* ThemeId: [GUID](#GUID) - unique identifier of the theme.

### <a name="Color"></a>Color Struct
32-bit ARGB unpremultiplied color value.

* Alpha: [byte](#byte) = `0` - gets the alpha component of the color.
* Red: [byte](#byte) = `0` - gets the red component of the color.
* Green: [byte](#byte) = `0` - gets the green component of the color.
* Blue: [byte](#byte) = `0` - gets the blue component of the color.

### <a name="FlowAnimation"></a>FlowAnimation Struct
Prototyping action animation.

* Enabled: [bool](#bool) = `false` - if animation is enabled.
* Type: [FlowAnimationType](#FlowAnimationType) = `Instant` - animation type.
* Effect: [FlowAnimationEffect](#FlowAnimationEffect) = `Linear` - animation effect.
* Direction: [FlowAnimationDirection](#FlowAnimationDirection) = `Left` - animation direction.
* Duration: [int](#int) - animation duration in ms.
* Curve: [Point[]](#Point) - animation curve point array. Array length is always 2. Point values are between 0 and 1.
* Spring: [Spring?](#Spring) - spring animation parameters.

### <a name="Matrix"></a>Matrix Struct
A transformation matrix is standard way in computer graphics to represent translation and rotation. These are the top two rows of a 3x3 matrix. The bottom row of the matrix is assumed to be [0, 0, 1]. This is known as an affine transform and is enough to represent translation, rotation, and skew. The identity transform is [1, 0, 0,  0, 1, 0]. A translation matrix will typically look like: [1, 0, tx,  0, 1, ty] and a rotation matrix will typically look like: [cos(angle), -sin(angle), 0, sin(angle), cos(angle), 0]

* ScaleX: [float](#float) - scale by x-coord. Usually should be 1. If it's -1 - the layer is flipped horizontally. If it's some random number - it's a cos(angle).
* SkewX: [float](#float) - skew by x-coord. Usually should be 0. If it's some random number - it's a -sin(angle).
* TransX: [float](#float) - translation by x-coord.
* SkewY: [float](#float) - skew by y-coord. Usually should be 0. If it's some random number - it's a sin(angle).
* ScaleY: [float](#float) - scale by y-coord. Usually should be 1. If it's -1 - the layer is flipped vertically. If it's some random number - it's a cos(angle).
* TransY: [float](#float) - translation by y-coord.

### <a name="Point"></a>Point Struct
A utility class to represent a point.

* X: [float](#float) - the x coordinate of the point.
* Y: [float](#float) - the y coordinate of the point.

### <a name="Rect"></a>Rect Struct
A utility class to represent a rectangle.

* Left: [float](#float) - the x coordinate of the top-left corner of the rectangle.
* Top: [float](#float) - the y coordinate of the top-left corner of the rectangle.
* Width: [float](#float) - the width of the rectangle.
* Height: [float](#float) - the height of the rectangle.

### <a name="Size"></a>Size Struct
A utility class to represent layer size.

* Width: [float](#float) - layer width.
* Height: [float](#float) - layer height.

### <a name="Spring"></a>Spring Struct
Spring animation parameters

* Dumping: [float](#float) - spring Dumping, Min 0.01, Max=10000.
* Mass: [float](#float) - spring Mass, Min 0.01, Max=1000.
* Stiffness: [float](#float) - spring Stiffness, Min=0.01, Max=1000000.

### <a name="Thickness"></a>Thickness Struct
Thickness struct. Used for Border thickness and Padding values

* Left: [float](#float) - left thickness.
* Top: [float](#float) - top thickness.
* Right: [float](#float) - right thickness.
* Bottom: [float](#float) - bottom thickness.

### <a name="Vertex"></a>Vertex Struct
The Vertex data type, which defines path points, and has several notation options. It's simply an array of numbers and can include up to eight values: ``[x, y, mode, radius, fromX, fromY, toX, toY]``. If the points on the right end of the array have default values, they are omitted. So, if toX, toY, fromX, fromY are all zeros, the array will look like ``[x,y,mode,radius]``. And if mode and radius are zeros, it becomes ``[x, y]``

* Point: [Point](#Point) = `[0,0]` - base point of a vertex
* From: [Point](#Point) = `[0,0]` - first control point, curve from.
* To: [Point](#Point) = `[0,0]` - second control point, curve to.
* Radius: [float](#float) - corner radius of a vertex point. It's stored in half because we don't need that much precision for corner radius.
* Mode: [CurveMode](#CurveMode) = `None` - mode of vertex.

### <a name="Arrowhead"></a>Arrowhead Enum
Defines the appearance of arrowheads.

* `0` None - no arrowheads.
* `1` Arrow - angle.
* `2` ArrowFilled - triangle.
* `3` Line - perpendicular Line.
* `4` Circle - cirlce arrowhead.
* `5` CircleFilled - filled circle arrowhead.
* `6` Square - square arrowhead.
* `7` SquareFilled - filled square arrowhead.

### <a name="BaselinePosition"></a>BaselinePosition Enum
Defines text position against the baseline.

* `-1` Subscript - text is lowered below the baseline.
* `0` Normal - text is aligned with the baseline.
* `1` Superscript - text is raised above the baseline.

### <a name="BindField"></a>BindField Enum

* `0` Unknown
* `1` Visibility
* `2` Opacity
* `10` Width
* `11` Height
* `12` MinWidth
* `13` MinHeight
* `14` MaxWidth
* `15` MaxHeight
* `20` CornerRadiusLeft
* `21` CornerRadiusTop
* `22` CornerRadiusRight
* `23` CornerRadiusBottom
* `30` ThicknessLeft
* `31` ThicknessTop
* `32` ThicknessRight
* `33` ThicknessBottom
* `40` PaddingLeft
* `41` PaddingTop
* `42` PaddingRight
* `43` PaddingBottom
* `44` SpacingHorizontal
* `45` SpacingVertical
* `50` ParagraphSpacing
* `51` ParagraphIndent
* `52` LineHeight
* `53` LetterSpacing
* `54` FontFamily
* `55` FontStyle
* `56` FontSize
* `57` FontVariations
* `58` Text
* `100` ComponentId
* `101` InstanceVariant
* `102` Hyperlink

### <a name="BlendMode"></a>BlendMode Enum
Defines the type of blend mode applied to a layer.

* `0` Normal
* `1` Darken
* `2` Multiply
* `3` ColorBurn
* `4` Lighten
* `5` Screen
* `6` ColorDodge
* `7` Overlay
* `8` SoftLight
* `9` HardLight
* `10` Difference
* `11` Exclusion
* `12` Hue
* `13` Saturation
* `14` Color
* `15` Luminosity
* `16` PlusDarker
* `17` PlusLighter

### <a name="BlurType"></a>BlurType Enum
Defines the blur type.

* `0` Gaussian - gaussian blur.
* `3` Background - background blur.

### <a name="BoolOp"></a>BoolOp Enum
Types of boolean operations used to combine shapes.

* `-1` None - not set. Works like Difference or like Union depending on the context.
* `0` Union - creates a shape from the sum of the areas of the selected shapes.
* `1` Subtract - the opposite of Union. Removes the overlapping area(s) from the shape layer at the bottom of the selection.
* `2` Intersect - the resulting shape only includes the area where all selected shapes overlap.
* `3` Difference - the opposite of Intersect. Creates a shape from the areas where the selected shapes do not overlap.

### <a name="CharacterCasing"></a>CharacterCasing Enum
Defines letter case.

* `0` Normal - normal letter case.
* `1` UpperCase - upper case.
* `2` LowerCase - lower case.
* `3` TitleCase - title case.

### <a name="ComponentType"></a>ComponentType Enum
Types of components. Currently used for filtering only. Some of the types are not supported yet.

* `0` None
* `10` Button
* `11` RadioButton
* `12` CheckBox
* `13` Toggle
* `14` ToggleButton
* `15` SpinButton
* `16` SplitButton
* `17` SpeedDial
* `18` SocialButton
* `40` TextInput
* `41` TextArea
* `42` TextEditor
* `43` NumberInput
* `44` DateInput
* `45` TimeInput
* `46` DateTimeInput
* `47` PasswordInput
* `48` SearchBar
* `49` DropDownInput
* `70` DropDown
* `71` ProgressBar
* `72` Slider
* `73` Knob
* `74` Rating
* `75` ScrollBar
* `76` Paginator
* `77` Preloader
* `80` NavigationBar
* `81` StatusBar
* `82` ToolBar
* `83` SideBar
* `90` MenuBar
* `91` ContextMenu
* `92` MenuItem
* `100` Breadcrumbs
* `101` List
* `102` ListItem
* `103` Tree
* `104` TreeItem
* `105` TabStrip
* `106` TabItem
* `110` Table
* `111` TreeTable
* `112` TableHeader
* `113` TableRow
* `114` TableCell
* `120` Window
* `121` Dialog
* `122` Popup
* `123` ToolTip
* `124` Notification
* `125` Toast
* `126` Message
* `130` Avatar
* `131` Badge
* `132` Chip
* `133` Skeleton
* `134` Tag
* `135` Card
* `136` DropArea
* `137` Ad
* `140` Expander
* `141` Splitter
* `142` Carousel
* `143` GroupBox
* `150` Map
* `151` Browser
* `152` Calendar
* `153` ColorPicker
* `154` MediaPlayer
* `155` ImageGallery
* `156` Timeline
* `157` Graph
* `158` Diagram
* `159` SourceCode
* `160` Barcode
* `161` Gauge
* `162` Captcha
* `200` Keyboard
* `201` Cursor
* `202` DeviceFrame

### <a name="CurveMode"></a>CurveMode Enum
Defines the types of points on Bézier curves.

* `0` None - undefined.
* `1` Straight - straight point.
* `2` Mirrored - mirrored branches.
* `3` Asymmetric - asymmetric branches.
* `4` Disconnected - disconnected branches.
* `4` OnlyFrom - only From branch.
* `5` OnlyTo - only To branch.

### <a name="ExpressionFunction"></a>ExpressionFunction Enum

* `0` Add
* `1` Subtract
* `2` Multiply
* `3` Divide
* `10` Equals
* `11` NotEqual
* `12` LessThan
* `13` LessThanOrEqual
* `14` GreaterThan
* `15` GreaterThanOrEqual
* `20` And
* `21` Or
* `22` Not
* `23` Negate
* `24` Ternary
* `25` IsTruthy
* `30` Stringify
* `100` ResolveState
* `101` ThemeLookup

### <a name="FillType"></a>FillType Enum
Defines the fill type.

* `0` Color - solid color fill.
* `1` Gradient - gradient fill.
* `4` Pattern - image fill.

### <a name="FlowAnimationDirection"></a>FlowAnimationDirection Enum
Prototyping action animation direction.

* `0` Left
* `1` Right
* `2` Up
* `3` Down
* `4` Scroll

### <a name="FlowAnimationEffect"></a>FlowAnimationEffect Enum
Prototyping action animation effect.

* `0` Linear
* `1` EaseIn
* `2` EaseOut
* `3` EaseInBack
* `4` EaseOutBack
* `5` Gentle
* `6` Quick
* `7` Slow
* `8` Bounce
* `9` Custom
* `10` CustomSpring

### <a name="FlowAnimationType"></a>FlowAnimationType Enum
Prototyping action animation type.

* `0` Instant
* `1` Dissolve
* `2` SmartAnimate
* `3` MoveIn
* `4` MoveOut
* `5` Push
* `6` SlideIn
* `7` SlideOut
* `8` Scroll

### <a name="FlowOverlayPosition"></a>FlowOverlayPosition Enum
Prototyping overlay position.

* `0` Centered
* `1` TopLeft
* `2` TopCenter
* `3` TopRight
* `4` BottomLeft
* `5` BottomCenter
* `6` BottomRight
* `7` Manual

### <a name="FlowScrollBehavior"></a>FlowScrollBehavior Enum
Prototyping scroll behavior of a layer.

* `0` Scroll - regular behavior of a layer.
* `1` Fixed - fixed position on scroll.
* `2` Sticky - stick to the edge on scroll.

### <a name="FlowScrollOverflow"></a>FlowScrollOverflow Enum
Prototyping scroll overflow of a layer.

* `0` NoScrolling
* `1` Horizontal
* `2` Vertical
* `3` Both

### <a name="GradientType"></a>GradientType Enum
List of Gradient types.

* `0` Linear - linear gradient: two colors appear at opposite points of an object and blend, or transition into each other.
* `1` Radial - radial gradient: the transition between color stops is a circular pattern.
* `2` Angular - angular gradient: sweeps around the circumference.

### <a name="HorizontalAlignment"></a>HorizontalAlignment Enum
Defines how a set of layers is aligned horizontally.

* `0` Left - layers are aligned to the left.
* `1` Center - layers are horizontally centered.
* `2` Right - layers are aligned to the right.
* `3` Distribute - layers are horizontally justified.

### <a name="LayoutHorizontalAlignment"></a>LayoutHorizontalAlignment Enum
Defines horizontal alignment settings in layout guide.

* `0` Left
* `1` Center
* `2` Right
* `3` Stretch

### <a name="LayoutVerticalAlignment"></a>LayoutVerticalAlignment Enum
Defines vertical alignment settings in layout guides.

* `0` Top
* `1` Middle
* `2` Bottom
* `3` Stretch

### <a name="LineCap"></a>LineCap Enum
Defines the shape of the end caps of open paths drawn with the Line, Arrow, or Pen/Pencil tools.

* `0` Butt - no cap (default).
* `1` Round - adds a rounded end to a path that extends past the vector point.
* `2` Square - similar to the rounded cap, but with straight edges.

### <a name="LineJoin"></a>LineJoin Enum
Defines the appearance of the corners for arrows and paths with corners drawn with the Pen/Pencil tool.

* `0` Miter - square.
* `1` Round - rounded.
* `2` Bevel - bevelled.

### <a name="LinePosition"></a>LinePosition Enum
Defines the border position.

* `0` Center - center.
* `1` Inside - inside.
* `2` Outside - outside.

### <a name="ListMarkerType"></a>ListMarkerType Enum
Defines the type of a text list.

* `0` None - list without markers.
* `1` Bullet - bulleted list.
* `2` Numbered - numbered list.

### <a name="MaskType"></a>MaskType Enum
Type of a mask.

* `0` Vector - this mode indicated that every pixel inside the layer's fill regions will be fully visible in the masked result.
* `1` Alpha - this mode indicates that the mask layer image's transparency (alpha channel) values should be used as the mask values. This is how masks work in Figma.
* `2` Luminance - this mode indicates that the luminance values of the mask layer image should be used as the mask values. This is how masks work in SVG.

### <a name="PathFillType"></a>PathFillType Enum
Defines the filling options for overlapping paths.

* `0` Winding - applies the non-zero rule.
* `1` EvenOdd - apllies the even-odd rule.

### <a name="PatternFillType"></a>PatternFillType Enum
Defines the image fill type.

* `0` Tile - duplicates the image in a tile pattern to fit the layer. The size of tiles is adjustable.
* `1` Fill - adjusts the image size to the layer’s width.
* `2` Stretch - stretches the image to fit the layer’s width and height.
* `3` Fit - adjusts the image size to fit the layer’s height.
* `4` Crop - crops the image at user's discretion.

### <a name="ScaleType"></a>ScaleType Enum
Defines the scale type for exported objects.

* `0` Scale
* `1` Width
* `2` Height

### <a name="TextBehavior"></a>TextBehavior Enum
Defines textbox behavior options.

* `0` Flexible - both the width and height of the textbox automatically adjusts to fit its content. Characters do not wrap.
* `1` AutoHeight - the width of the textbox is fixed. Characters wrap to fit in the textbox. The height of the textbox automatically adjusts to fit its content.
* `2` Fixed - the size of the textbox is fixed and is independent of its content.

### <a name="TextHorizontalAlignment"></a>TextHorizontalAlignment Enum
Defines how a text is aligned horizontally.

* `0` Left - text is aligned to the left.
* `1` Right - text is aligned to the right.
* `2` Center - text is horizontally centered.
* `3` Justify - text is horizontally justified.

### <a name="TextVerticalAlignment"></a>TextVerticalAlignment Enum
Defines how a text is aligned vertically.

* `0` Top - text is aligned to the top.
* `1` Middle - text is vertically centered.
* `2` Bottom - text is aligned to the bottom.

### <a name="VerticalAlignment"></a>VerticalAlignment Enum
Defines how a set of layers is aligned vertically.

* `0` Top - layers are aligned to the top.
* `1` Center - layers are vertically centered.
* `2` Bottom - layers are aligend to the bottom.
* `3` Distribute - layers are vertically justified.

### <a name="DataInfo"></a>DataInfo
Information about auto generated texts. _//Lunacy Specific_

* Type: [DataType](#DataType) = `Unknown` - category of generated text (person, address, date, etc.).
* Field: [DataFieldType](#DataFieldType) = `Unknown` - type of generated text (full name or first name, city or ZIP code, etc.).
* Format: [string](#string) - format for Data Type. Used for Date/Time values.

### <a name="BackgroundRemovalState"></a>BackgroundRemovalState Enum
Background removal procedure info. _//Lunacy Specific_

* `0` None
* `1` InProgress
* `2` Done
* `3` Failed

### <a name="DataFieldType"></a>DataFieldType Enum
Defines the type of generated text. _//Lunacy Specific_

* `0` Unknown
* `1` FullName
* `2` FirstName
* `3` LastName
* `4` Phone
* `5` Email
* `6` FullAddress
* `7` State
* `8` City
* `9` ZipCode
* `10` Theme
* `11` Header
* `12` Paragraph
* `13` Company
* `14` Department
* `15` JobTitle
* `16` Amount
* `17` CreditCard
* `18` Day
* `19` DayOfWeek
* `20` Year
* `21` Month
* `22` DateSlash
* `23` DateDot
* `24` DateFull
* `25` Time12
* `26` Time24
* `27` Country
* `28` Language
* `29` Url
* `30` UserName
* `31` FileName

### <a name="DataType"></a>DataType Enum
Defines the category of generated text. _//Lunacy Specific_

* `0` Unknown
* `1` Address
* `2` Article
* `3` Business
* `4` Country
* `5` Date
* `6` Language
* `7` Person
* `8` Technology
* `9` Time

### <a name="ColorOverride"></a>ColorOverride
Defines color overrides for components. _//Sketch Compatibility_

* Color: [Color](#Color) = `00000000` - color value.
* ColorId: [GUID?](#GUID) - color variable ID.
* Property: [ColorOverrideType](#ColorOverrideType) = `Unknown` - color override type: none, fill, border, shadow, or inner shadow.
* Index: [int](#int) = `0` - fill index. Starts from 0.

### <a name="TextColorOverride"></a>TextColorOverride
Defines text color overrides for components. _//Sketch Compatibility_

* Color: [Color](#Color) = `00000000` - color value.
* ColorId: [GUID?](#GUID) - color variable ID.

### <a name="TextWeightOverride"></a>TextWeightOverride
Defines text weight overrides for components. _//Sketch Compatibility_

* Slant: [float](#float) = `0`
* Proportion: [float](#float) = `0`
* Symbolic: [float](#float) = `0`
* Weight: [float](#float) = `0`
* PostScriptName: [string](#string)

### <a name="ColorOverrideType"></a>ColorOverrideType Enum
Defines types of color overrides for components. _//Sketch Compatibility_

* `0` Unknown
* `1` Fill
* `2` Border
* `3` Shadow
* `4` InnerShadow

### <a name="ColorSpace"></a>ColorSpace Enum
Сolor scheme the document uses. _//Sketch Compatibility_

* `0` Unmanaged
* `1` sRGB
* `2` P3

### <a name="NamingScheme"></a>NamingScheme Enum
Controls the use of suffixes/prefixes in the names of export files. _//Sketch Compatibility_

* `0` Suffix - indicates that the file name comes with a user-defined suffix.
* `1` SecondaryPrefix - indicates that the file name comes with a user-defined prefix.
* `2` PrimaryPrefix - indicates that the file name comes with a user-defined prefix.

## Changelog

### Version 8 15.03.2026
* Added `SlotComponentProperty`.
* Added `Slot` layer and `Slots` property to `Document` and `SharedLibrary`.
* Added `StateBind` list to `Component`.
* Added `Expression`, `ExpressionFunction`, `Argument`. Also added `Bind` list to `Layer`.
* New flow actions: `ConditionalAction`, `SetVariableAction`, `SetThemeAction`.

### Version 7 20.02.2026
* `FixedHorizontal` and `FixedVertical` are replaced by `FixWidth` and `FixHeight`.
* `StretchHorizontal` and `StretchVertical` are replaced by `StretchWidth` and `StretchHeight`.

### Version 6 - 18.02.2026

* Added `Pos` and `Frame` fields to simplify `Transform` field in usual cases.
* Added `Fill` and `Border` fields to simplify usual case of single color fills and borders.

### Version 5 - 11.07.2025

* New layer types: `Section` and `States`.
* `Hotspot` layer type is removed.
* We are dropping compatibility for sketch smart layout fields, sketch overlay fields, and sketch instance spacing fields.
* New `Custom` field for `Layer`. It is for plugin data and for anything that's not specified in a FREE format.
* `FigmaId` field added to the `Component`.
* `Component` now can be inside any group/frame/section.
* `CornerRadius` and `SmoothCorners` fields are now in `Style` and `Styled` layers.
* Also we are dropping support for `Frame` fields: `HasBackgound`, `Background`, `BackgroundInExport`, `BackgroundInInstance`.
* `Flow` now contains not one, but a list of actions.
* `Border` and `Fill` now sharing the same `Fill` object. `Thickness` and `LinePos` now in the `Layer`. `BorderOptions` are inside `Layer` too.
* `SharedStyle` and `Style` objects is removed. `FillStyle`, `TextStyle`, `EffectStyle`, `GridLayoutStyle` objects are added instead.
* `StyleId` is removed from `Layer`. `FillsId`, `BordersId`, `EffectsId` properties are added to a `Layer`, `GridsId` to `Frame` and `TextStyleId` to `Text` instead.
* New variable types: `BoolVariable`, `StringVariable`, `FloatVariable`. `ColorVariables` properties of a `Document` and `Library` are renamed to `Variables` and now contain a list of `VariableCollection`.
* `Component` and `States` now have `Properties`. `Instance` also has `Assigns` to component properties.
* `TextProperties` `Color` and `ColorId` is replaces with array of `Fill`.
* `InlineStyle` now has `FillsId` and `TextStyleId` fields.
* `LINE` layer type is added. Previously it was saved as `PATH`.
* Added `Connectors`.
* `Container` renamed to `AutoLayout`.
* `Sizing` and `VSizing` are replaced by `FixedHorizontal` and `FixedVertical`.
* `Orientation` replaced by `Vertical` boolean.
* `LayoutStretch` renamed to `StretchHorizontally`.
* `LayoutGrowStretch` renamed to `StretchVertically`.
* `LayoutFixPos` renamed to `FixPos`.
* Added `FlowScrollOverflow`.
* Added `Spring` animation parameters.
* `TextProperties` removed. Now this properties are inside `Text` layer and `InlineStyle`.
* `Size` renamed to `FontSize` where font size is set.
* `Fixed` replaced by `ScrollBehavior`.

### Version 4 - 20.01.2025

* `Link` property is replaced by `Flows` list of prototyping triggers and actions.

### Version 3 - 25.09.2024

* Preview now in `.webp` format, not `.png`. File name is `preview.webp`.
* WEBP is now a preferred format for images. New images created in Lunacy will use `.webp`.

### Version 2 - 11.08.2024

* `Shared.json` is removed. Now all shared libraries data have a new efficient structure and can be found inside `shared` folder.
  Separate file is created for every library source - this will significantly increase document open speed in multithreaded way if document use a lot of components from different shared libraries.
* Now `SharedStyle`s are not grouped by text/layer category. All in one container. To check if style is text style - check if it has text `TextStyle` property.
* `Export` optimized to be a simple list of `ExportOption`. Some sketch-related fields removed.

### Version 1 - 19.03.2024

* Initial Version

by Icons8 LLC 2026