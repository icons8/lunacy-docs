---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Layers
description: Learn how to work with different types of layers in Lunacy
icon: 'ungroup-objects'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Layer and text styles
        url: '/layerstyles'
    prev:
        content: Tools
        url: '/tools'
---

A **layer** is any element you see on the canvas.

There are several types of layers in Lunacy:
* <a href="https://lunacy.docs.icons8.com/interface/#frames" target="_blank">Frames</a>
* <a href="https://lunacy.docs.icons8.com/text/" target="_blank">Text layers</a>
* <a href="https://lunacy.docs.icons8.com/tools/#pen-tool" target="_blank">Vectors</a>
* <a href="https://lunacy.docs.icons8.com/tools/#shape-tools" target="_blank">Shapes</a>
* <a href="https://lunacy.docs.icons8.com/tools/#image-tool" target="_blank">Images</a>
* <a href="https://lunacy.docs.icons8.com/components/" target="_blank">Components and component instances</a>
* <a href="https://lunacy.docs.icons8.com/tools/#icon-tool" target="_blank">Icons</a> 
* <a href="https://lunacy.docs.icons8.com/tools/#hotspot-tool" target="_blank">Hotspots</a> 
* <a href="https://lunacy.docs.icons8.com/tools/#slice-tool" target="_blank">Slices</a> 

Follow the links above to learn how to work with specific layers in detail. In this section, we’ll go over the basics: how to create, edit, and organize layers on the canvas and the <a href="https://lunacy.docs.icons8.com/interface/#layer-list" target="_blank">Layer list</a>.

## Adding layers

**Add layers** to the canvas using the corresponding tools on the toolbar:

<embed type="image/svg+xml" alt="lunacy_toolbar Copy" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/on88vuNDlEGTTKZXKd1qTA.svg" width="844" /> 

For most of the tools (except for the <a href="https://lunacy.docs.icons8.com/tools/#select-tool" target="_blank">Select</a>, <a href="https://lunacy.docs.icons8.com/tools/#hand-tool" target="_blank">Hand</a>, <a href="https://lunacy.docs.icons8.com/tools/#eyedropper-tool" target="_blank">Eyedropper</a>, and <a href="https://lunacy.docs.icons8.com/tools/#comment-tool" target="_blank">Comment</a> tools), all you need to do is:

1. Enable them (use shortcuts for a faster workflow). 
2. **Click** or **click and drag** on the canvas to add the respective layer. 

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_tools_demo.png" height="auto"><source src="/public/layers_tools_demo.mp4" type="video/mp4"></video>

Note the different icons these layers have before their titles in the Layer list.

**See also:**
<br>
<a href="https://lunacy.docs.icons8.com/tools" target="_blank">Tools</a>

### [Layer properties](#layer-properties)

The properties displayed in the <a href="https://lunacy.docs.icons8.com/interface/#the-right-panel" target="_blank">right panel</a> when a layer is selected depend on the type of layer. The ones listed below are universal for almost all layer types:

| Right panel properties &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |   
|---------------------------------------------------|-------------------------------------------------------|
| <embed type="image/svg+xml" alt="alignment" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/DmwgUeA720CJZI1lz-PJ9w.svg" width="500" />  | **Alignment and distribution controls** appear when you select two or more layers. |
|  <embed type="image/svg+xml" alt="layer_position_size" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/s3beB96toEGEkauAALbBGA.svg" width="500" />  |  **Layer size and position.** Change the size of your layers and their position on the canvas. Use the buttons next to the position controls to flip your images and toggle the lock button on and off to preserve aspect ratio when resizing.  Controls vary depending on the selected layer.   |
| <embed type="image/svg+xml" alt="rotate_corner" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/EWKB-3JAmEWF1tsSA8CWHw.svg" width="500" />  | **Rotation and corner radius.** Rotate your layers and change their corner radius properties. |
| <embed type="image/svg+xml" alt="component" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/kv1070nxoEG0xJn6p3EqCQ.svg" width="500" /> |   **Component options.** Use this section to manage <a href="https://lunacy.docs.icons8.com/components/">components</a>. Create new component states, switch between them, and detach instances from main components.  |
|  <embed type="image/svg+xml" alt="style_section" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/M7sKosLblUis17slSInjjg.svg" width="500" />     |   The   **Style** section displays the styles applied to your layer (text styles, color styles, effect styles, etc.)  You can add styles from <a href="https://lunacy.docs.icons8.com/libraries/#ui-kits">UI kits</a>, create your own, and detach layers from applied styles. |
|  <embed type="image/svg+xml" alt="opacity_blend" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/jU4eHkw6H0aRu54WtjdtlQ.svg" width="500" />   |   **Opacity and blend mode settings.** Set the overall opacity of a layer and its blending mode.   |
|  <embed type="image/svg+xml" alt="fills" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/fIXEmqXID02zbOWgEcQtOA.svg" width="500" />   |   **Fills.**  Change the color of your layer.  |
|  <embed type="image/svg+xml" alt="borders" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/hCg84E6xQ02xJxqoFK17hg.svg" width="500" />   |   **Borders.**  Add borders to your layers. |
|  <embed type="image/svg+xml" alt="effects" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/UmOMNRV4XESuD2JDMXvi6Q.svg" width="500" />   |     **Effects.**  Add effects (shadows, blurs) to your layers. |
|  <embed type="image/svg+xml" alt="prototyping" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/NJc1I6eaxk21Auc91YH7XA.svg" width="500" />   |   **Prototyping.**   Activate prototyping options and turn your static designs into interactive prototypes. Here's <a href="https://lunacy.docs.icons8.com/prototyping/" target="_blank">how it works</a>. |
| <embed type="image/svg+xml" alt="selection_properties" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/-zycpFIau0603lT5epFZFQ.svg" width="500" />  |     **Selection properties.**  Shows the colors and fonts used in selected layers. |

### Locking and hiding layers

**Lock layers** to protect them from accidental edits using the `Ctrl + Shift + L` / `⌘ + Shift + L` shortcuts.

To **hide a layer** from the canvas, press `Ctrl + Shift + H` / `⌘ + Shift + H`.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_lock_hide.png" height="auto"><source src="/public/layers_lock_hide.mp4" type="video/mp4"></video>

## [Frames](#frames)

**Frames** are special types of layers that work like containers for your designs.

Using frames is optional, but they come in handy when you’re designing for a specific screen size or device, and they are a must for <a href="https://lunacy.docs.icons8.com/prototyping/" target="_blank">prototyping</a>. 

This is how frames appear in the **Layer list**:

<embed type="image/svg+xml" alt="frames_layer_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/2DFQ_UkoJE-xNA5RZ63EXA.svg" width=844 /> 

### Adding frames

To **create a frame**:

1. Press `A` or select the **Frame tool** on the toolbar.
2. **Click and drag** to add a custom frame or **choose a preset** from the right panel. The list features presets for popular devices, screen resolutions, and social media templates.

<div class="callout callout--info">
    <p><strong>Tip:</strong> When you're creating a frame on the canvas, blue <code>+</code> signs will appear around the borders, indicating pre-existing presets. Drag the corner of the frame you're creating to a <code>+</code> to snap it to a preset (the name of the preset will appear in the Layer list). To hide the + signs, hold down <code>Ctrl</code> / <code>⌘</code>.</p>
</div>

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_adding_frames.png" height="auto"><source src="/public/layers_adding_frames.mp4" type="video/mp4"></video>

You can place layers inside frames by:

- Selecting one or several layers and pressing `Ctrl + Alt + G` / `⌘ + ⌥ + G`.
- Drawing a frame over them.

To **remove a frame**, use the ungroup shortcut: `Ctrl + Shift + G` / `⌘ + Shift + G`.

Check out the <a href="https://lunacy.docs.icons8.com/shortcuts/" target="_blank">full list of handy Lunacy shortcuts</a>.

#### Custom presets

You can also a **add custom presets** to this list:

1. Select the custom frame.
2. Click the **Create Frame Preset** button in the Preset size and orientation section.
3. Name the preset and press `Enter`.

<embed type="image/svg+xml" alt="custom_frame" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/oSB3aZSbokmkFORi-TWUtw.svg" width=844 />

From now on, the custom frame preset will appear at the bottom of the preset list in the right panel.

### Frame properties

Right panel properties for frames are more or less identical to [layer properties](#layer-properties), except frames don’t have Style and Prototyping options.

They also have these additional properties:

| Right panel properties &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Description |   
|--------------------------------------------------------------------|--------------------------------------------------------------------|
|  <embed type="image/svg+xml" alt="frame_preset_size" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/AQrMrq0BdkG833S3rs16TQ.svg" width="500" />  |  **Frame preset, size, and position.** The same options as for layers. You can also change your frame size preset.  |
|  <embed type="image/svg+xml" alt="clip_content" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/jz6OnY46_Uy-ATZtsevRLA.svg" width="500" />  |     **Clip content.**  Select this checkbox to hide content outside of the frame boundaries. |
|   <embed type="image/svg+xml" alt="autolayout" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/VVkJQG7mZESrsh2vQBoruA.svg" width="500" />   |   **Auto layout.**  A set of parameters for configuring <a href="https://lunacy.docs.icons8.com/autolayout/" target="_blank">auto layouts</a>. |
|  <embed type="image/svg+xml" alt="frame_color_adjust" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/ZWhmOvSgV0Wn2tLg80A-Ug.svg" width="500" />    |     **Background color and content behavior.** Change the frame background and choose whether its content changes as you resize it. |
|  <embed type="image/svg+xml" alt="layout_grid" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/9-2Cn2UMuU-1oe_XPYabqQ.svg" width="500" /> |     **Layout grid.**  Add a <a href="https://lunacy.docs.icons8.com/basics/#layout-grid" target="_blank">layout grid</a> to the frame.|
| <embed type="image/svg+xml" alt="square_grid" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/15ZcB9kEdkmu1y7FAZHefQ.svg" width="500" />  |     **Grid.**  Add a <a href="https://lunacy.docs.icons8.com/basics/#square-grid" target="_blank">square grid</a> to the frame. |


## [Working with layers](#working-with-layers)

This section covers basic operations with layers, including [selecting](#selecting-layers), [grouping](#grouping-layers), [duplicating](#duplicating-layers), [arranging](#arranging-layers), [moving](#moving-layers), and [resizing](#resizing-layers) layers.

### [Selecting layers](#selecting-layers)

You can **select layers** in the **Layer list** or directly on the canvas.

To **select a layer on the canvas**, click on it when the **Select tool** (`V`) is active. Hold `Shift` to select several layers. You can also drag to create a selection around one or several layers.

Clicking on a [group of layers](#grouping-layers) selects the entire group. To select individual layers inside it, hold down `Ctrl` / `⌘` as you click, or first click to select the group, then double click to select the layer. Read more about [groups](#grouping-layers) below. 

To **select all layers** on the canvas (except for locked layers), press `Ctrl + A` / `⌘ + A`.

To **select a layer in the Layer list**, find it in the list and click on it.

Hold down `Shift` or `Ctrl` / `⌘` to **select multiple layers**.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_selecting.png" height="auto"><source src="/public/layers_selecting.mp4" type="video/mp4"></video>

**See also:**
<br>
<a href="https://lunacy.docs.icons8.com/tools/#select-tool" target="_blank">Select tool</a>

#### [Selection fonts and colors](#selection-fonts-and-colors)

When you select two or more layers, the right panel displays all of the **fonts and colors** used in those layers in the right panel. This way, you can quickly switch fonts and colors for several layers at a time.

<embed type="image/svg+xml" alt="selection_fonts_colors" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/SOMTdAZ_10CZcQAHxB9snA.svg" width="844" /> 

Click the target icon (<embed type="image/svg+xml" alt="Vector 2" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/oXeqn7keHUWVaWWBnC9dyg.svg" width="16" />) next to a property to select just the layers using this color/font.

### [Grouping layers](#grouping-layers)

You can combine multiple layers together in a **group**. You can then modify the group and resize it along with the elements it contains.

[Frames](#frames) are more versatile, but groups are also a great way to organize the **Layer list**, which can include hundreds of items or more in some projects. You can **nest groups** in other groups or inside frames in whatever way is most convenient to you.

To **create a group**, select two or more layers and press `Ctrl + G` / `⌘ + G` or click the **Group** button (<embed type="image/svg+xml" alt="group_button" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/5r_SYxtNb0W0vCtkeKg73w.svg" width="16"/>) on the **context toolbar** at the top of the canvas.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_grouping.png" height="auto"><source src="/public/layers_grouping.mp4" type="video/mp4"></video>

To **select a layer inside** a group:

- Hold down the `Ctrl` key and click the required layer.

    OR

- Click to select the group, then double click to select the layer.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_grouping_selecting.png" height="auto"><source src="/public/layers_grouping_selecting.mp4" type="video/mp4"></video>

After you select a layer within a group, you can switch to other layers of that group simply by clicking them. 

If needed, you can also enable the **Select group's content on click** option in the right panel, so a click over a group automatically selects the layers inside it.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_select_content_on_click.png" height="auto"><source src="/public/layers_select_content_on_click.mp4" type="video/mp4"></video>

Alternatively, you can select layers inside groups through the **Layer list**, which may be more convenient in some cases (for example, when handling fully overlapping layers).

You can **move layers into or out of a group** by dragging them in the Layer list.

To **ungroup layers**, select the group and press `Ctrl + Shift + G` / `⌘ + Shift + G` or click the Ungroup (<embed type="image/svg+xml" alt="ungroup_button" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/AGCFPZ8tpUeYoHbgEWlT_Q.svg" width="16" />) button on the **context toolbar**.

### [Duplicating layers](#duplicating-layers)

To **duplicate a layer**:

- Select it and press `Ctrl + D` / `⌘ + D`.
    
    OR

- Hold down `Alt`, select the layer, and drag to where you want to place the copy.


You can also use the standard `Ctrl` / `⌘` + `C` / `V` shortcuts, but in this case, the layer copies will appear right on top of the original.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_copying_duplicating.png" height="auto"><source src="/public/layers_copying_duplicating.mp4" type="video/mp4"></video>

<div class="callout callout--info">
    <p><strong>Tip:</strong> Lunacy remembers the offset of the latest duplicate. So, if you press <code>Ctrl + D</code> / <code>⌘ + D</code> shortly after you create a duplicate of a layer, Lunacy adds new duplicates with the same offset as the previous one.</p>
</div>

If copied layers include generated content, like <a href="https://lunacy.docs.icons8.com/tools/#avatar-tool" target="_blank">avatars</a> or <a href="https://lunacy.docs.icons8.com/text/#text-generation" target="_blank">generated texts</a>, duplicates will appear with new content (provided the <a href="https://lunacy.docs.icons8.com/text/#auto-refresh" target="_blank">Auto refresh</a> option is enabled).

#### Repeat grid

Another convenient way to duplicate elements is to use the **Repeat grid** feature. You select two or more layers, drag the <embed type="image/svg+xml" alt="repeat_grid" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/arkPFiXr3U-oF3BIzB96uQ.svg" width="20" /> near the lower-right corner of the bounding box to duplicate the elements in a grid.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_repeat_grid_demo.png" height="auto"><source src="/public/layers_repeat_grid_demo.mp4" type="video/mp4"></video>

Combining **Repeat grid** with the <a href="https://lunacy.docs.icons8.com/tools/#avatar-tool" target="_blank">Avatar tool</a> and <a href="https://lunacy.docs.icons8.com/text/#text-generation" target="_blank">generated texts</a> can save you a lot of time when designing UIs with placeholder elements.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_repeat_grid.png" height="auto"><source src="/public/layers_repeat_grid.mp4" type="video/mp4"></video>

#### Copy/Paste style

You can quickly **copy and paste styling properties** (fills, borders, effects) between layers. 

To **copy the properties of a layer**:

1. Press `Ctrl + Alt + C` / `⌘ + ⌥ + C`. 
2. Select another layer and press `Ctrl + Alt + V` / `⌘ + ⌥ + V`.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_copy_pasting_style.png" height="auto"><source src="/public/layers_copy_pasting_style.mp4" type="video/mp4"></video>

#### Copy/paste context menu options

Various copy/paste options are also available on the context menu:

| Menu option    | Shortcut &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Description   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Copy    | `Ctrl + C` / `⌘ + C`| Copies the selected layer.|
| Cut     | `Ctrl + X` / `⌘ + X`| Cuts the selected layer and copies it to the clipboard.      |
| Paste   | `Ctrl + V` / `⌘ + V`| Pastes the content of the clipboard onto the canvas.  |
| Paste here     |   - | Pastes the content of the clipboard onto the canvas, depending on where the cursor is.   |
| Paste over     | - | Pastes the content of the clipboard over the selected layer. |
| Copy as Text   | - | Only available for text layers. Copies only the text content of the layer, excluding its properties.   |
| Copy as CSS/SVG/XAML/PNG     | - | These options allow you to copy the code of the selected layer in the required format.   |
| Copy style/Paste style| `Ctrl + Alt + C` / `⌘ + ⌥ + C`<br>`Ctrl + Alt + V` / `⌘ + ⌥ + V`     |  These options allow you to copy the style of the selected layer and apply them to another layer. |  
| Export as PNG to cloud, Copy URL    | `Alt + C` / `⌥ + C` | Exports the selection to the Icons8 cloud and copies the link to your clipboard. You can share the link to your design with other people. |

### [Arranging layers](#arranging-layers)

#### Auto Z-index

Lunacy automatically determines the order of layers (the Z-index) on the canvas depending on their size. For example, if you drag a smaller layer (that’s at the bottom of the layer list) over a larger one, Lunacy places the small layer on top.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_auto_z_index.png" height="auto"><source src="/public/layers_auto_z_index.mp4" type="video/mp4"></video>

You can **adjust layer order manually** in the **Layer list** and also use shortcuts or context menu commands:

| Context menu command | Description    | Windows/Linux shortcut &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | MacOS shortcut  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| -------------------- | ---------------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------|
| Bring forward   | Moves the selected layer one step forward.| `Ctrl + ]`   |  `⌘ + ]`    |
| Bring to front  | Places the selected layer at the top of the stack, above all other elements. | `Ctrl + Shift + ]`  | `⌘ + Shift + ]` |
| Send backward   | Moves the selected layer one step backward.    | `Ctrl + [`   |  `⌘ + [`    |
| Send to back    | Places the selected layer to the bottom of the stack.    | `Ctrl + Shift + [` | `⌘ + Shift + [` |

#### Aligning and distributing layers

To quickly align and distribute layers on the canvas, use the Align and Distribute spacing controls in the top row of the right panel.

<embed type="image/svg+xml" alt="alignment_controls" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/_OCR-ofHFkeTMk_2FFX7kw.svg" width="844" /> 

They become active when you select two or more layers on the canvas or when you select a single layer on a frame (in this case, Lunacy will align the layer relative to the borders of the frame).

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_alignment_controls.png" height="auto"><source src="/public/layers_alignment_controls.mp4" type="video/mp4"></video>

| Icon | Description     | Windows/Linux shortcut &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | MacOS shortcut &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | --------------- |
|   <embed type="image/svg+xml" alt="Layout Align Left" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/6fcQiog8pEehVGrgeaASVQ.svg" />    | **Align left.** Aligns the selected layers to the left of the selection.        | `Ctrl + Shift + ←`     | `⌘ + Shift + ←` |
|   <embed type="image/svg+xml" alt="Layout Align Horizontal" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/100h8edvnUG_1lTv1X1rww.svg" />   | **Align horizontally.** Horizontally centers the selected layers.         | `Ctrl + Shift + -`     | `⌘ + Shift + -` |
|  <embed type="image/svg+xml" alt="Layout Align Right" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/kJ3usXpiQ0ilqx-uQ-v23g.svg" />    | **Align right.** Aligns the selected layers to the right of the selection.       | `Ctrl + Shift + →`     | `⌘ + Shift + →` |
|   <embed type="image/svg+xml" alt="Layout Distribute Vertical" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/t7NIJ6VDP0KlGPHyBjCIjQ.svg" />    | **Distribute vertical spacing.** Distributes vertical spacing evenly between the selected layers. The layers at the top and on the bottom of the selection always preserve their original position, while the layers between them adjust their positions so that the spacing between all elements is equal.      | `Ctrl + Shift + V`     | `⌘ + Shift + V` |
|   <embed type="image/svg+xml" alt="Layout Align Top" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/_pCMiljvhEKjpHvXiZIr_w.svg" />    | **Align top.** Aligns the selected layers to the top of the selection.       | `Ctrl + Shift + ↑`     | `⌘ + Shift + ↑` |
|  <embed type="image/svg+xml" alt="Layout Align Vertical" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/fhNGONVix0e8Kk7a_rqQSQ.svg" />     | **Align vertically.** Vertically centers the selected layers.         | `Ctrl + Shift + |`     | `⌘ + Shift + |` |
|   <embed type="image/svg+xml" alt="Layout Align Bot" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/8xQfQfteqk6ZDXRBj3oREQ.svg" />    | **Align bottom.** Aligns the selected layers to the bottom of the selection.     | `Ctrl + Shift + ↓`     | `⌘ + Shift + ↓` |
|   <embed type="image/svg+xml" alt="Layout Distribute Horizontal" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/8WhoMWQRXUazCIDiYkG7kQ.svg" />    | **Distribute horizontal spacing.** Distributes horizontal spacing evenly between the selected layers. The layers at the right and left borders of the selection always preserve their original position, while the layers between them adjust their positions so that the spacing between all elements is equal. | `Ctrl + Shift + H`     | `⌘ + Shift + H` |

##### Smart distribute

Use **Smart distribute** to arrange multiple layers into grids with equal spacing between rows and columns. The **Tidy up** button becomes active when you select two or more layers on the canvas and either looks like three straight lines (<embed type="image/svg+xml" alt="Tidy_up_1" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/o2MZGYTQkkaYQTF987Kiig.svg" width="16" />) or a grid (<embed type="image/svg+xml" alt="Tidy_up_2" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/kah22MhN2EqajOQ4ebdYiQ.svg" width="16" />) icon:   


<embed type="image/svg+xml" alt="tidy_up_button" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/dUQwjuRvAEK7D68xLK4Csg.svg" width="844" /> 

To use **Smart distribute**:

1. Select the required layers.
2. Click <embed type="image/svg+xml" alt="Vector 2" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/K-hAbTZwSU-b8Xh8WIzrgw.svg" width="16" /> / <embed type="image/svg+xml" alt="Vector 3" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/BvNKlqbncUWbW0Nlg_ZcGQ.svg" width="16" />
3. Once the layers get organized, pink controls appear in the middle of the layers and between them. Click and drag them to rearrange the layers or adjust the spacing between them.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_smart_distribute.png" height="auto"><source src="/public/layers_smart_distribute.mp4" type="video/mp4"></video>
        
#### Creating hyperlinks between layers

You can **create hyperlinks** from one layer to another in your document, even if the layers are on different pages. his can be useful, for example, for simplifying navigation in large documents.

To do this:

1. Select the target layer and press `Ctrl + L` / `⌘ + L` (or select **Copy/Paste as** > **Copy link** on the context menu).
2. Select the layer that should lead to the target layer.
3. Press `F2` to rename the layer, paste the target layer link from your clipboard, and press `Enter`.
4. Hold down `Ctrl` / `⌘` and click the layer you renamed, and you’ll be redirected to the target layer.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_hyperlinks.png" height="auto"><source src="/public/layers_hyperlinks.mp4" type="video/mp4"></video>

### [Moving layers](#moving-layers)

To **move a layer**, just click and drag it.

If you want to **restrict layer movement to the X or Y axis**, hold down `Shift` while you’re moving the layer.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_moving.png" height="auto"><source src="/public/layers_moving.mp4" type="video/mp4"></video>

For precise positioning, use the arrow keys. Each keystroke moves a layer by one pixel. Holding down `Shift` increases each step to 10px.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_move_arrow_keys.png" height="auto"><source src="/public/layers_move_arrow_keys.mp4" type="video/mp4"></video>

You can also adjust a layer’s position on the canvas or frame using the **X and Y controls in the right panel**:

- If a layer is on the canvas, the values in the X and Y fields show the absolute coordinates of its top-left selection handle.
- If a layer is a part of a frame, X and Y display the coordinates of its top-left selection handle relative to the frame’s top-left corner.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_moving_right_panel.png" height="auto"><source src="/public/layers_moving_right_panel.mp4" type="video/mp4"></video>

<div class="callout callout--info">
    <p><strong>Tip:</strong> Measuring distances between layers can also help with positioning them more accurately. Simply select a layer, press <code>Alt</code> / <code>⌥</code>, and hover the cursor over another layer to measure the distance between them. Read about all <a href="https://lunacy.docs.icons8.com/basics/#measuring-distances" target="_blank">measurement options</a> in Lunacy in the <a href="https://lunacy.docs.icons8.com/basics/" target="_blank">Basics</a> page.</p>
</div>

**See also:**
<br>
<a href="https://lunacy.docs.icons8.com/basics/#changing-values-in-the-right-panel" target="_blank">Changing values in the right panel</a>

#### Rotating layers

To **rotate a layer**, select it, then:

- Hover the cursor somewhere any corner of the bounding box. The cursor will turn into a bent double-headed arrow, which you can drag left or right.

    OR

- Change the value in the rotation angle field in the right panel and press `Enter`.

To quickly return the layer into its initial position, type `0` in the angle rotation field of the right panel and press `Enter`. You can also hold down `Shift` when rotating the layer to rotate at 90° or 45° angles to quickly get it to its original orientation.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_rotating_resetting.png" height="auto"><source src="/public/layers_rotating_resetting.mp4" type="video/mp4"></video>

#### Flipping layers

To flip a layer, use the **Flip horizontally** (<embed type="image/svg+xml" alt="flip_horizontal" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/_zeiHNxlRkGVVIfMvHuRGw.svg" width="16" />) and **Flip vertically** (<embed type="image/svg+xml" alt="flip_vertical" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/W2egL4YoiEqEbxKd7Psy7A.svg" width="16" />) buttons that appear on the context toolbar (also available in the **Layer** section on the menu bar).

You can also use these shortcuts:

- `Ctrl + →` and `Ctrl + ←` / `⌘ + →` and `⌘ + ←` — horizontal flip
- `Ctrl + ↑` and `Ctrl + ↓` / `⌘ + ↑` and `⌘ + ↓` — vertical flip

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_flipping_buttons_shortcuts.png" height="auto"><source src="/public/layers_flipping_buttons_shortcuts.mp4" type="video/mp4"></video>

Another way to flip a layer is to drag selection handles like in the demo below.
<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_flipping_handles.png" height="auto"><source src="/public/layers_flipping_handles.mp4" type="video/mp4"></video>

### [Resizing layers](#resizing-layers)

There are several ways to resize a layer:

- [Dragging its selection handles](#resizing-by-dragging-selection-handles)
- [Using arrow keys](#resizing-using-arrow-keys)
- [Changing right panel properties](#resizing-by-adjusting-right-panel-properties)
- [With the Scale tool](#scaling-layers)

#### [Resizing by dragging selection handles](#resizing-by-dragging-selection-handles)

To **resize a layer**, drag any of its selection handles at the corners to adjust its height and width or drag the sides of the bounding box to resize a layer vertically or horizontally.

Hold down `Shift` while dragging to preserve the layer’s aspect ratio. Also, you can hold down `Alt` / `⌥` while dragging to **resize the layer from the center**, rather than from the edge you are dragging.

The `Alt + Shift + drag` / `⌥ + Shift + drag` shortcut resizes a layer from the center *and* preserves its aspect ratio.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_resizing.png" height="auto"><source src="/public/layers_resizing.mp4" type="video/mp4"></video>

When resizing a frame, if you want the layers on it to adjust to the size of the frame:

1. Select the frame through the **Layer list** or by clicking its name on the canvas.
2. In the right panel, select the **Adjust content on resize** checkbox.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_adjust_content_on_resize.png" height="auto"><source src="/public/layers_adjust_content_on_resize.mp4" type="video/mp4"></video>

#### [Resizing using arrow keys](#resizing-using-arrow-keys)

Select the layer and use the shortcuts `Ctrl + arrow keys` / `⌘ + arrow keys` to resize by 1px or `Ctrl + Shift + arrow keys` / `⌘ + Shift + arrow keys` to resize by 10px.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_resizing_arrow_keys.png" height="auto"><source src="/public/layers_resizing_arrow_keys.mp4" type="video/mp4"></video>

#### [Resizing by adjusting right panel properties](#resizing-by-adjusting-right-panel-properties)

Select a layer and change the values in the the **W (width)** and **H (height)** fields in the right panel to precisely define its size.

Click the **Lock aspect ratio** button (<embed type="image/svg+xml" alt="lock_aspect_ratio" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/4GvxWU5LIUGH6eaZaP3Vpw.svg" width ="16" />) to preserve the layer’s aspect ratio.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_resizing_right_panel.png" height="auto"><source src="/public/layers_resizing_right_panel.mp4" type="video/mp4"></video>

#### [Scaling layers](#scaling-layers)

Use the **Scale tool** to resize a layer while preserving the aspect ratio and adjusting the size of any borders/effects applied to the layer.

To **scale a layer**:
1. Select the layer.
2. Press `K` or select the **Scale tool** (<embed type="image/svg+xml" alt="scale_tool" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/scm-lgqtykigv546NkSUrQ.svg" width="16" />) on the toolbar.
3. Drag the bounding box to resize it.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_scaling.png" height="auto"><source src="/public/layers_scaling.mp4" type="video/mp4"></video>

When the **Scale tool** is selected, changing layer size values in the right panel will also scale the layer and all its effects proportionally.

#### Resizing constraints

With **resizing constraints**, you can determine the behavior of a layer when resizing a group, component, or frame containing the layer. This can be very useful when you need to design a user interface for different screen sizes or devices.

You can adjust the individual resizing behavior for each layer in the **Constraints** section of the **right panel**:
- The **Pin to edge** control, which pins the layer to one or several edges of the group/component/frame. So, when you resize the container, Lunacy won’t change the distance between the layer and the edges it is pinned to.
- The **Fix width** and **Fix size** checkboxes restrict the change of the layer’s width or height so they don’t change as you resize the layer.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layers_resizing_constraints.png" height="auto"><source src="/public/layers_resizing_constraints.mp4" type="video/mp4"></video>

<div class="callout callout--info">
    <p><strong>Note:</strong> Resizing constraints aren’t available for layers in an auto layout frame unless the layer has an absolute position.</p>
</div>

**See also:**
<br>
<a href="https://lunacy.docs.icons8.com/autolayout/#resizing-auto-layout-elements">Resizing auto layout elements</a>