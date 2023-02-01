---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Basics
description: An overview of Lunacy's basic features and capabilities 
icon: 'full-image'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Cloud documents
        url: '/clouddocs'
    prev:
        content: Interface
        url: '/interface'
---

Learn more about Lunacy's features, interface capabilities, and useful tips and tricks to speed up your design process.

## Working with the canvas

### Navigation

If your design is taking up too much space on the canvas, use the scroll bars located on the right and at the bottom of the workspace to navigate it.

You can also point the cursor anywhere over the canvas and use the mouse wheel to scroll vertically. To scroll horizontally, additionally hold down `Shift`.

Another way to navigate the canvas is to hold down `Space` to activate the **Hand** tool and drag the canvas to wherever you need.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/interface-movingcanvas.png" height="auto"><source src="/public/interface-movingcanvas65.mp4" type="video/mp4"></video>

### Zooming in and out

The easiest way to zoom to a layer in Lunacy is by holding down `Ctrl` / `⌘` and moving the mouse wheel. To zoom in and out slower, additionally hold down `Shift`.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/interface-zoomtoobjectplaceholder.png" height="auto"><source src="/public/interface-zoomtoobject61.mp4" type="video/mp4"></video>

When the zoom value exceeds 500, Lunacy displays a pixel grid. There are two ways to disable this feature:

1. In the menu bar, select **View** > **Pixel grid**.
2. Deselect all layers on the canvas and clear the **Show pixel grid** checkbox in the Inspector.

Find out about other zooming options [below](#zooming-options).

### Changing the canvas color

1. Deselect all layers.
2. Use the **Workspace color** control in the Inspector.

<embed type="image/svg+xml" alt="canvas_color" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/TmFrkSpmxEi2Rb3deQBoLA.svg" width="844" /> 


## [Inspector properties](#inspector-properties)

There are three tabs at the top of the Inspector: **Design**, **Export**, and **Code**. 

The **Design** tab is the one you'll interact with the most when working on your designs.

The set of controls and settings it displays depends on the type of the selected layer. These Inspector properties are universal for almost all layer types:

| Inspector properties&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |   
|-----------------------------|-------------------------|
| <embed type="image/svg+xml" alt="alignment" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/DmwgUeA720CJZI1lz-PJ9w.svg" width="500" />  | **Alignment and distribution controls** appear when you select two or more layers. |
|  <embed type="image/svg+xml" alt="layer_position_size" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/s3beB96toEGEkauAALbBGA.svg" width="500" />  |  **Layer size and position.** Change the size of your layers and their position on the canvas. Use the buttons next to the position controls to flip your images and toggle the lock button on and off to preserve aspect ratio when resizing.  Controls vary depending on the selected layer.   |
| <embed type="image/svg+xml" alt="rotate_corner" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/EWKB-3JAmEWF1tsSA8CWHw.svg" width="500" />  | **Rotation and corner radius.** Rotate your layers and change their corner radius properties. |
| <embed type="image/svg+xml" alt="component" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/kv1070nxoEG0xJn6p3EqCQ.svg" width="500" /> |   **Component options.** Click `+` to create a reusable component out of your layer.  Learn more about components <a href="https://lunacy.docs.icons8.com/components" target="_blank">here</a>.  |
|  <embed type="image/svg+xml" alt="appearance" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/PKGjyL5hCUi_SQXFpxBVWQ.svg" width="500" />   |   The   **Appearance** section displays the styles applied to your layer (text styles, color styles, effect styles, etc.)  You can add styles from presets, create your own, and detach layers from applied styles. |
|  <embed type="image/svg+xml" alt="opacity_blend" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/jU4eHkw6H0aRu54WtjdtlQ.svg" width="500" />   |   **Opacity and blend mode settings.** Set the overall opacity of a layer and its blending mode.   |
|  <embed type="image/svg+xml" alt="fills" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/fIXEmqXID02zbOWgEcQtOA.svg" width="500" />   |   **Fills.**  Change the color of your layer.  |
|  <embed type="image/svg+xml" alt="borders" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/hCg84E6xQ02xJxqoFK17hg.svg" width="500" />   |   **Borders.**  Add borders to your layers. |
|  <embed type="image/svg+xml" alt="effects" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/UmOMNRV4XESuD2JDMXvi6Q.svg" width="500" />   |     **Effects.**  Add effects (shadows, blurs) to your layers. |
|  <embed type="image/svg+xml" alt="prototyping" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/NJc1I6eaxk21Auc91YH7XA.svg" width="500" />   |   **Prototyping.**   Activate prototyping options and turn your static designs into interactive prototypes. Here's <a href="https://lunacy.docs.icons8.com/prototyping/" target="_blank">how it works</a>. |

Click on the **Export** tab to open up export settings for your entire project or click individual/multiple layers to export just them.  For details about export options, read <a href="https://lunacy.docs.icons8.com/export" target="_blank">here</a>. You can also use the Linked Design option to include embed links to Lunacy layers directly into website code: when you update them in Lunacy, they'll be automatically updated on your website. Learn more about linked design <a href="https://lunacy.docs.icons8.com/linked_design/" target="_blank">in this section</a>.

The **Code** tab displays the code corresponding to your layers.

### Inspector properties with no selected layers

When all layers are deselected, the Inspector shows these settings:

<embed type="image/svg+xml" alt="inspector_no_layers" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/e7AGem3y7EyT38xi2QO2DA.svg" width="844" /> 

* **Workspace color.**. Change the color of the canvas.
* **Show pixel grid.** Toggles the pixel grid on/off when the zoom value exceeds 500.
* **Nudge amount settings.** Nudge layers by moving arrow keys and set custom values for small nudges (using just the arrow keys) and big ones (arrow keys + `Shift`).
* **Color palette section.** Use it to generate various base color palettes for your documents.

If you need more space, you can hide the Inspector panel by selecting **View** > **Inspector** on the menu bar.

### Changing values in the Inspector

To change values in the Inspector input fields:

* Type a value manually.
* Click over a field and use the mouse wheel to gradually increase or decrease the value.
* Hover the cursor over a field, wait a moment until the cursor turns into a double-headed arrow, and drag the cursor up or down.
* Enter an arithmetic operation.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/interface-inspectortipsplaceholder.png" height="auto"><source src="/public/interface-inspectortips.mp4" type="video/mp4"></video>


## [Frames](#frames)

Frames are a special types of layers that work like containers for your designs. 

Using frames is optional, but they come in handy when you’re designing for a specific screen size or device. 

To create a frame, use the <a href="https://lunacy.docs.icons8.com/tools/#frame-tool" target="_blank">frame tool</a>. You can create a custom size frame or to select a preset from the right panel. This list features presets for popular devices, screen resolutions, and social media templates. 

<div class="callout callout--info">
    <p><strong>Note:</strong> You can also a <a href="https://lunacy.docs.icons8.com/basics/#adding-custom-presets" target="_blank">add your custom presets</a> to this list.</p>
</div>

To create a frame:

1. Select the frame tool on the toolbar or press `A`.
2. Click and drag to add a custom frame or use a preset from the Inspector.

<embed type="image/svg+xml" alt="frame_tool_presets" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/5fuv5gIKSU-PMS4ZWGy5Aw.svg" width="844" /> 

<div class="callout callout--info">
    <p><strong>Tip:</strong> When you're creating a frame on the canvas, blue <code>+</code> signs will appear around the borders, indicating pre-existing presets. Drag the corner of the frame you're creating to a <code>+</code> to snap it to a preset (the name of the preset will appear in the Layer list).</p>
</div>


You can gather layers into frames by drawing a frame over them. This is how frames appear in the Layer list:

<embed type="image/svg+xml" alt="frames_layer_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/2DFQ_UkoJE-xNA5RZ63EXA.svg" width=844 /> 


Inspector properties for frames are more or less identical to [layer properties](#inspector-properties), except frames don't have appearance and prototyping options. They also have these additional properties:

| Inspector properties&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Description |   
|--------|---------|
|  <embed type="image/svg+xml" alt="frame_preset_size" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/AQrMrq0BdkG833S3rs16TQ.svg" width="500" />  |  **Frame preset, size, and position.** The same options as for layers — and you can also change your frame size preset.  |
|  <embed type="image/svg+xml" alt="clip_content" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/jz6OnY46_Uy-ATZtsevRLA.svg" width="500" />  |     **Clip content.**  Select this checkbox to hide content outside of the frame boundaries. |
|   <embed type="image/svg+xml" alt="autolayout" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/eISP8OqKv0GXUBdKyvBdww.svg" width="500" />  |     **Auto layout.**  Align your design elements with auto layout. With them, your designs will adjust to content changes automatically. Set the distance between elements, between elements and frame boundaries, change distribution options, stacking options, and whether auto layout includes frame borders. |
|  <embed type="image/svg+xml" alt="frame_color_adjust" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/ZWhmOvSgV0Wn2tLg80A-Ug.svg" width="500" />    |     **Background color and content behavior.** Change the frame background and choose whether its content changes as you resize it. |
|  <embed type="image/svg+xml" alt="layout_grid" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/9-2Cn2UMuU-1oe_XPYabqQ.svg" width="500" /> |     **Layout grid.**  Add a layout grid to the frame.|
| <embed type="image/svg+xml" alt="square_grid" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/15ZcB9kEdkmu1y7FAZHefQ.svg" width="500" />  |     **Grid.**  Add a square grid to the frame. |
|  <embed type="image/svg+xml" alt="selection_properties" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/-zycpFIau0603lT5epFZFQ.svg" width="500" />  |     **Selection properties.**  Shows the colors and fonts used in the layers inside of the frame. |


### [Adding custom frame presets](#adding-custom-presets)

To add a custom frame to the list of presets:

1. Select the custom frame.
2. Click the **Create Frame Preset** button in the **Preset size and orientation** section.

<embed type="image/svg+xml" alt="custom_frame" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/oSB3aZSbokmkFORi-TWUtw.svg" width=844 /> 


3. Name the preset and press `Enter`.

From now on, the custom frame preset will appear at the bottom of the preset list in the right panel.


## [Rulers and guides](#rulers-and-guides)

Rulers and guides help to position and align layers. 

### [Rulers](#rulers)

Rulers are enabled by default and use pixels as a measurement unit. They appear at the top and on the left side of the canvas. 

To toggle rulers on and off, use the `Ctrl + R` / `⌘ + R` shortcut or select **View** > **Rulers** on the menu bar.

### [Guides](#guides)

To create a guide, click anywhere on a ruler and drag the guide onto the canvas. You can now position layers along the guide. Moving a layer close to it snaps the layer to the guide.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/interface-guides.png" height="auto"><source src="/public/inteface-guides61.mp4" type="video/mp4"></video>

To move a guide, drag it to another position or select it and use arrow keys to nudge it. To remove a guide, click it (hold down `Shift` to select multiple guides) and press `Delete`. 

You can also open up all of these guide settings by right-clicking over a ruler:

<embed type="image/svg+xml" alt="ruler_options" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/ZqUEc3AmlEqw1gm3TaeWVQ.svg" width=844 /> 



## [Grids](#grids)

Lunacy has square and layout grids. If needed, you can display both of them at the same time.

### [Square grid](#square-grid)

If there are no frames on the canvas, Lunacy displays a square grid. Toggle it on and off by clicking the **Show/Hide grid** button on the right panel or pressing `Ctrl + '` / `⌘ + '`.

If you have frames on the canvas, use the same button to toggle grids on and off:

* For each frame. To do this, deselect all frames and layers on the canvas, then press **Show/Hide grid**.
* For each individual frame. Do the same with a frame or layer selected.

To set the size of grid cells, enter the desired value in the **Grid size** field.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/interface-sqgridplaceholder.png" height="auto"><source src="/public/interface-sqgrid.mp4" type="video/mp4"></video>

#### [Layout grid](#layout-grid)

Layout grids are useful for positioning design elements within your [frame](#frames). If you have several frames on a page, you can toggle layout grids on and off for them just like with sqaure grids, using the corresponding button in the right panel.

Each frame can have its own layout grid settings:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/interface-layoutgridplaceholder.png" height="auto"><source src="/public/interface-layoutgridvid.mp4" type="video/mp4"></video>

## Measuring distances

Lunacy offers a variety of options for measuring distances between elements. The measurement option depends on whether a layer is distinct, grouped with other layers, or nested in a frame.


### Individual layers

To measure the distance between two separate layers:

1. Select the first layer.
2. Hold down `Alt` / `⌥`.
2. Hover the cursor over the other layer.

To measure the distance from a layer within a frame to the frame's boundaries:

* Hover the cursor over the layer and hold down `Alt` / `⌥`.
* Select the layer, hover the cursor over an empty area within the frame, and hold down `Alt` / `⌥`.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/interface-measuringplaceholder.png" height="auto"><source src="/public/interface-measuring.mp4" type="video/mp4"></video>

You can also position layers in a precise location or relative to one another:

1. Select one of the layers.
2. Point the cursor over an empty area or over another layer.
3. Hold down `Alt`/ `⌥` and move the selected layer using the arrow keys.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/interface-groupmeasure3ph.png" height="auto"><source src="/public/interface-groupmeasure3.mp4" type="video/mp4"></video>

### Grouped layers

Use the steps described above to measure the distances between:

* A grouped layer and layer.
* Two layers inside the same group.
* A grouped layer and the frame boundaries.

To measure the distance between a layer inside a group and the group's boundaries:

1. Point the cursor over a grouped layer.
2. Hold down `Ctrl + Alt` / `⌘ + ⌥`. 

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/interface-groupmeasure1ph.png" height="auto"><source src="/public/interface-groupmeasure1.mp4" type="video/mp4"></video>

To measure the distance between a layer inside a group and the borders of the frame where it's nested:

1. Select a grouped layer.
2. Hold down `Alt` / `⌥`.
3. Point the cursor anywhere outside the other grouped layers.

To measure the distance between two layers in different groups:

1. Select a grouped layer.
2. Hold down `Alt` / `⌥`.
3. Hover the cursor over a layer in the other group.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/interface-groupmeasure2ph.png" height="auto"><source src="/public/interface-groupmeasure2.mp4" type="video/mp4"></video>

Here's a handy shortcut list for all of the distance measurement options:

| Element types         | Measurement option           |
| -------------------------- | --------------------- | 
| Two separate layers     | Select the first layer, hold down `Alt` / `⌥`, and hover the cursor over the other layer.  |
| A layer inside a frame → the frame’s boundaries        | 1. Hover the cursor over the layer and hold down `Alt` / `⌥`.<br>2. Select the layer, hover the cursor over an empty area within the frame, and hold down `Alt` / `⌥`. |
| A grouped layer → individual layer         | Select the grouped layer, hold down `Alt` / `⌥`, and hover the cursor over the other layer. |
| Two layers inside the same group | Select the first layer in the group, hold down `Alt` / `⌥`, and hover the cursor over the other layer in the group.    |
| A grouped layer → frame boundaries    | Select the first layer in the group, hold down `Alt` / `⌥`, and hover the cursor over an empty area within the frame.            |
| A layer inside a group → the group’s boundaries         | Point the cursor over a grouped layer and hold down `Ctrl + Alt` / `⌘ + ⌥`. |
| A layer inside a group → the boundaries of the frame where it’s nested | Select a grouped layer, hold down `Alt` / `⌥`, and hover the cursor anywhere outside the other grouped layers.                   |
| Two layers in different groups   | Select a grouped layer hold down `Alt` / `⌥`, hover the cursor over a layer in another group.               |



## Zooming options

Use the Zoom tool and the Zoom controls to explore more of Lunacy's zooming options.

### The Zoom tool
The Zoom tool enables you to zoom in to a selected layer or canvas area. To use the tool:

1. Press and hold `Z`.
2. Click on a layer or drag over an area on the canvas (the smaller the area, the higher the zoom value).
3. To zoom out, hold down `Z + Alt` / `Z + ⌥` and click or drag over the layer/area.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/tool-zoomplaceholder.png" height="auto"><source src="/public/tool-zoom61.mp4" type="video/mp4"></video>

### The Zoom control

The zoom control is on the right of the document tabs. To change the zoom value, you can:

* Manually enter a zoom value.
* Hover the cursor over the zoom control field, wait a moment until the cursor turns into a double-headed arrow, and drag the cursor up or down.
* Click over the zoom control field and move the mouse wheel.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/interface-zoomtoobjectplaceholder.png" height="auto"><source src="/public/interface-zoomctrl61.mp4" type="video/mp4"></video>

You can also alter zoom options using preset values:

<embed type="image/svg+xml" alt="zoom_control" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/E-VwOWodqUSaWk-_v6o86g.svg" width="844" /> 

Here are the essential zoom options:

| Operation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       | Description   | Windows shortcut      |        Mac shortcut       |
| -------------|-------------|-------------|--------|
| Zoom in/out | Zooms the canvas in/out. |  	`+/-` / `Ctrl + "+/-"`  |    `⌘ + "+/-"`        |
| Zoom to 100% | Sets the zoom value to 100%. | `Ctrl + 0` |       `⌘ + 0`       |
| Zoom to All Layers | Shows all the layers on the page. | `Ctrl + 1` | `⌘ + 1`            |
| Zoom to Selection | Zooms in and displays the selected layer in the center of the screen. | `Ctrl + 2`  | `⌘ + 2`            |
| Zoom to fit width | Zooms the canvas so that all horizontally distributed layers fit the screens. | `Ctrl + 3` | `⌘ + 3`          |
| Zoom to fit height | Zooms the canvas so that all vertically distributed layers fit the screen. | `Ctrl + 4`  | `⌘ + 4`        |

These options are also accessible through the **View** section on the menu bar:

<embed type="image/svg+xml" alt="zoom_to" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/_0flAx2EaESsh5HNYbRCig.svg" width="844"/> 


### [Show pixels on zoom](#show-pixels-on-zoom)

By default, Lunacy displays the canvas in the **vector mode**, which means that all layers (except for rasterized ones) will preserve their quality regardless of the zoom value. If you need to see individual pixels, you can use the **Show pixels on zoom** button. It displays pixels when the zoom value exceeds 100. 

Here is the same layer with the feature disabled (left) and enabled (right):

<embed type="image/svg+xml" alt="show_pixels" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/hjIJYiahiUaGtxr99Y6lGQ.svg" width="844" /> 


You can also toggle this feature on and off in the menu bar by selecting **View** > **Pixels on Zoom**.

## [Context menu](#the-context-menu)

The context menu is a pop-up list of commands and options for basic operations with layers. 

It appears when you right-click on a layer. The items on the menu vary depending on the layer you select. Each context menu option is accompanied by a shortcut you can use to speed up your workflow:

<embed type="image/svg+xml" alt="context_menu" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/HSn_3x7Vhk-8MfiM3MjqkQ.svg" width="844" /> 


These context menu options are universal for almost all layer types: 

| Context menu button | Description | 
|---|---|
| <embed type="image/svg+xml" alt="Copy" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/hgirwJVu70qeG38ARiD5hQ.svg" width="24" />  | Copy the layer. |
| <embed type="image/svg+xml" alt="Paste here" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/1F3Ipf6wM0qK5Saqv5Co3g.svg" width="24" /> | Paste an element at the position of the cursor. |
| <embed type="image/svg+xml" alt="Duplicate" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/t-tMVYz1C0iX9YGOrhm_NA.svg" width="32" />      | Duplicate the selected layer.  |
| <embed type="image/svg+xml" alt="Lock" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/BSGfdkIrBEOLaHjPnybBhw.svg" width="24" />             | Protect the layer from accidental edits.   |
| <embed type="image/svg+xml" alt="Hide" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/kFaGjr3Qu0C8W7_Y_UjOXA.svg" width="32" />             | Hide the layer from the canvas.     |
| <embed type="image/svg+xml" alt="Delete" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/7XSmNDmTIEu8s16n3TAT8w.svg" width="24" />           | Deletes the selected layer.   |
| Paste over   | Paste an element over the layer.   |
| Cut   | Cut the selected layer.   |
| Rename   | Rename the layer.   |
| Comment | Comment on the layer. |
| Copy/Paste as      | Opens a submenu with copy/paste options.      |
| Move to page      | Move the layer to another page in the document.      |
| Send to Back    | Move the layer to the bottom of the Layer list.      |
| Bring Forward   | Move a layer one step higher in the Layer list.   |
| Group Selection | Group two or more selected layers together. |
| Ungroup         | Ungroup a selected group of layers.  |
| Create component | Create a reusable component from the layer. |

<div class="callout callout--info">
    <p><strong>Note:</strong> When you right-click on an empty area on the canvas or a frame, the only command available on the context menu is <b>Paste here</b>. </p>
</div>