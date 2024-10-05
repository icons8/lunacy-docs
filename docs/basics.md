---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Basics
description: An overview of Lunacy's basic features and capabilities 
icon: 'web-design'

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

## [Working with the canvas](#working-with-the-canvas)

#### Navigation

If your design is taking up too much space on the canvas, use the mouse wheel to scroll vertically. To scroll horizontally, additionally hold down `Shift`.

Another way to navigate the canvas is to hold down `Space` to activate the **Hand** tool and drag the canvas to wherever you need.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/moving_around_canvas.png" height="auto"><source src="/public/moving_around_canvas.mp4" type="video/mp4"></video>

You can always use the scroll bars on the right and bottom of the workspace, but it's not as convenient as the other options.


#### Zooming in and out

The easiest way to **zoom in and out** in Lunacy is by holding down `Ctrl` / `⌘` and moving the mouse wheel. To **zoom slower**, additionally hold down `Shift`.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/zoom_in_canvas.png" height="auto"><source src="/public/zoom_in_canvas.mp4" type="video/mp4"></video>

When the zoom value exceeds 500, Lunacy displays a **pixel grid**. If you want to disable this feature:

1. In the menu bar, select **View → Pixel grid**.
2. Deselect all layers on the canvas and clear the **Show pixel grid** checkbox in the **right panel**.

Find out about other [zooming options](#zooming-options).

#### Changing the canvas color

1. Deselect all layers.
2. Use the **Workspace color** control in the right panel.

<embed type="image/svg+xml" alt="canvas_color" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/TmFrkSpmxEi2Rb3deQBoLA.svg" width="844" /> 

Press <embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/PmMyhR72A0GyShZvh91lgA.svg" width="16" /> to reset the canvas to the default color.

You can also set the canvas color opacity to 0 so it becomes transparent. You'll see a checkerboard pattern instead of a fill.

## [Layer list](#layer-list)

Open the **Layer list** by clicking on the **Layers** content tab. It will display the layers on the current page:

<embed type="image/svg+xml" alt="layer_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/PuPEDNTYvEKC5atXX-ylxQ.svg" width="844" /> 

Press <embed type="image/svg+xml" alt="smart_layer_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/3uDOUlA760igh6dc4pOLLg.svg" width=16 /> to toggle the **Smart Layer list**, which displays only the layers you currently see on the canvas. It's convenient when you want to see only the layers you're working on in the Layer list.

Lunacy automatically assigns names to new layers and layer groups. You can always rename them if you like. 

If a layer name doesn't fit in the Layer list, you can change the width of the panel this way:

<video autoplay="" muted="" loop="" playsinline="" width="" poster="/public/resize_layer_list.png" height="auto"><source src="/public/resize_layer_list.mp4" type="video/mp4"></video>

Using the Layer list, you can:

|   Action    | Description |
|---------------------------------------|------------------|
|   Select layers      |    To select a layer or layer group, click its name in the Layer list. A selection frame will appear around the layer. To select multiple items hold down the `Ctrl` / `⌘` or `Shift` keys and click on the layers.    |
|   Search for layers                                 |    To locate a layer, start typing its name in the search field above the Layer list.    |
|   Arrange layers                |     Change the order of the layers in the list by dragging them up or down. Organize layers as you see fit and position them in the order you want them to be stacked if they're overlapping on the canvas. |
|  Hide layers                    |   To hide layers, layer groups, or individual items inside layer groups, select a layer and click the eye icon next to its name. You can also hide layers by using the `Ctrl + H` / `⌘ + H` shortcut or the corresponding option on the context menu.     |
|    Lock layers            |     Lock layers, grouped layers, or individual layers within a group to protect them from accidental edits. To do this, select a layer in the Layer list and click the lock icon, press `Ctrl + L` / `⌘ + L`, or use the corresponding option on the context menu. To select locked layers and edit their properties in the right panel, right-click them on the canvas or select them in the Layer list. |

Other basic operations with layers are available on the <a href="https://lunacy.docs.icons8.com/basics/#the-context-menu" target="_blank">context menu</a>.

#### Useful tips

To **collapse all layers** in the Layer list, press `Ctrl + ~` / `⌘ + ~`.

To quickly **move to a specific layer** in large projects: 
1. Find it by typing its name in the search field.
2. Select it in the Layer list.
3. Press <code>Ctrl + 2</code> / <code>⌘ + 2</code> or double-click the icon in front of the layer name to use the <a href="https://lunacy.docs.icons8.com/tips/#zoom-to-selection" target="_blank">zoom to selection</a> feature.

<p>Find out about <a href="https://lunacy.docs.icons8.com/tips/" target="_blank">more useful tips and tricks</a>.</p>

## [Right panel](#right-panel)

There are two tabs at the top of the right panel: **Design** and **Export**. 

#### Design tab
The **Design** tab is the one you'll interact with the most when working on your designs. The set of controls and settings it displays depends on the type of the selected layer. These properties are universal for almost all layer types:

| Right panel properties &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |   
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

#### Export tab

Click on the **Export** tab to open up export settings for your entire project or select individual/multiple layers to export just them.  Read in detail about <a href="https://lunacy.docs.icons8.com/export_new/#export-settings" target="_blank">export settings</a>. 

Use the **Linked Design** option to include embed links to your designs directly into website code: when you update them in Lunacy, they'll be automatically updated on your website. Learn more about linked design <a href="https://lunacy.docs.icons8.com/linked_design/" target="_blank">in this section</a>.

Also, on the **Export** tab, you can see the <a href="https://lunacy.docs.icons8.com/export/#code-preview-and-linked-design" target="_blank">displays the code corresponding</a> to selected layers.

#### Right panel properties with no selected layers

When all layers are deselected, the right panel shows these settings:

<embed type="image/svg+xml" alt="inspector_no_layers" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/e7AGem3y7EyT38xi2QO2DA.svg" width="844" /> 

* **Workspace color.** Change the color of the canvas.
* **Show pixel grid.** Toggles the pixel grid on/off when the zoom value exceeds 500.
* **Nudge amount settings.** Nudge layers by moving arrow keys and set custom values for small nudges (using just the arrow keys) and big ones (arrow keys + `Shift`).
* **Color palette section.** Use it to generate various base color palettes for your documents.

If you need more space, you can hide the right panel panel by selecting **View → Right Panel** on the menu bar.

#### Changing values in the right panel

To **change values in the right panel** input fields:

* Type a value manually.
* Click over a field and use the mouse wheel to gradually increase or decrease the value.
* Hover the cursor over a field, wait a moment until the cursor turns into a double-headed arrow, and drag the cursor up or down.
* Enter an arithmetic operation.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/changing_values_in_rightpanel.png" height="auto"><source src="/public/changing_values_in_rightpanel.mp4" type="video/mp4"></video>

## [Rulers and guides](#rulers-and-guides)

**Rulers** and **guides** help to position and align layers. 

#### [Rulers](#rulers)

Rulers are enabled by default and use pixels as a measurement unit. They appear at the top and on the left side of the canvas. 

To toggle rulers on and off, use the `Ctrl + R` / `⌘ + R` shortcut or select **View → Rulers** on the menu bar.

#### [Guides](#guides)

To create a guide, click anywhere on a ruler and drag the guide onto the canvas. You can now position layers along the guide. Moving a layer close to it snaps the layer to the guide.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/guides_on_canvas.png" height="auto"><source src="/public/guides_on_canvas.mp4" type="video/mp4"></video>

To move a guide, drag it to another position or select it and use arrow keys to nudge it. To remove a guide, click it (hold down `Shift` to select multiple guides) and press `Delete`. 

You can also open up all of these guide settings by right-clicking over a ruler:

<embed type="image/svg+xml" alt="ruler_options" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/ZqUEc3AmlEqw1gm3TaeWVQ.svg" width=844 /> 

## [Grids](#grids)

Lunacy has **square** and **layout grids**. If needed, you can display both of them at the same time.

#### [Square grid](#square-grid)

If there are no frames on the canvas, Lunacy displays a square grid. Toggle it on and off by clicking the **Show/Hide grid** button on the right panel or pressing `Ctrl + '` / `⌘ + '`.

If you have frames on the canvas, use the same button to toggle grids on and off:

* **For each frame**. To do this, deselect all frames and layers on the canvas, then press **Show/Hide grid**.
* **For an individual frame**. Do the same with a frame or layer selected.

To set the size of grid cells, enter the desired value in the **Grid size** field.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/square_grid.png" height="auto"><source src="/public/square_grid.mp4" type="video/mp4"></video>

#### [Layout grid](#layout-grid)

Layout grids are useful for positioning design elements within your [frame](#frames). If you have several frames on a page, you can toggle layout grids on and off for them just like with sqaure grids, using the corresponding button in the right panel.

Each frame can have its own layout grid settings:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/layout_grid.png" height="auto"><source src="/public/layout_grid.mp4" type="video/mp4"></video>

## Measuring distances

Lunacy has a variety of options for measuring distances between elements. The measurement option depends on whether a layer is distinct, grouped with other layers, or nested in a frame.


#### Individual layers

To **measure the distance between two layers**:

1. Select the first layer.
2. Hold down `Alt` / `⌥`.
2. Hover the cursor over the other layer.

To measure the **distance from a layer within a frame to the frame's boundaries**:

* Hover the cursor over the layer and hold down `Alt` / `⌥`.
* Select the layer, hover the cursor over an empty area within the frame, and hold down `Alt` / `⌥`.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/measuring_distances_using_alt.png" height="auto"><source src="/public/measuring_distances_using_alt.mp4" type="video/mp4"></video>

You can also use this function to **position layers in a precise location or relative to one another**:

1. Select one of the layers.
2. Point the cursor over an empty area or over another layer.
3. Hold down `Alt`/ `⌥` and move the selected layer using the arrow keys.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/aligning_using_alt.png" height="auto"><source src="/public/aligning_using_alt.mp4" type="video/mp4"></video>

#### Grouped layers

Use the steps described above to measure the distances between:

* A grouped layer and layer.
* Two layers inside the same group.
* A grouped layer and the frame boundaries.

To measure the **distance between a layer inside a group and the group's boundaries**:

1. Point the cursor over a grouped layer.
2. Hold down `Ctrl + Alt` / `⌘ + ⌥`. 

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/measuring_group_elements_to_group_border.png" height="auto"><source src="/public/measuring_group_elements_to_group_border.mp4" type="video/mp4"></video>

To measure the **distance between a layer inside a group and the borders of the frame where it's nested**:

1. Select a grouped layer.
2. Hold down `Alt` / `⌥`.
3. Point the cursor anywhere outside the other grouped layers.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/measuring_group_elements_to_frame_border.png" height="auto"><source src="/public/measuring_group_elements_to_frame_border.mp4" type="video/mp4"></video>

To measure the **distance between two layers in different groups**:

1. Select a grouped layer.
2. Hold down `Alt + Shift` / `⌥ + Shift`.
3. Hover the cursor over a layer in the other group.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/measuring_distances_different_groups.png" height="auto"><source src="/public/measuring_distances_different_groups.mp4" type="video/mp4"></video>

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

Use the **Zoom tool** and the **Zoom control** to explore more of Lunacy's zooming options.

The **Zoom tool** enables you to zoom in to a selected layer or canvas area. To use the tool:

1. Press and hold `Z`.
2. Click on a layer or drag over an area on the canvas (the smaller the area, the higher the zoom value).
3. To zoom out, hold down `Alt + Z` / `⌥ + Z` and click or drag over the layer/area.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/zoom_tool_options.png" height="auto"><source src="/public/zoom_tool_options.mp4" type="video/mp4"></video>

The **zoom control** is on the right of the document tabs. To change the zoom value, you can:

* Manually enter a zoom value.
* Hover the cursor over the zoom control field, wait a moment until the cursor turns into a double-headed arrow, and drag the cursor up or down.
* Click over the zoom control field and move the mouse wheel.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/zoom_control.png" height="auto"><source src="/public/zoom_control.mp4" type="video/mp4"></video>

You can also alter zoom options using preset values:

<embed type="image/svg+xml" alt="zoom_control" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/E-VwOWodqUSaWk-_v6o86g.svg" width="844" /> 

Here are all the essential zoom options and corresponding shortcuts:

| Operation     | Description   | Windows shortcut      |        Mac shortcut       |
| -------------|-------------|-------------|--------|
| Zoom in/out | Zooms the canvas in/out. |  	`+/-` / `Ctrl + "+/-"`  |    `⌘ + "+/-"`        |
| Zoom to 100% | Sets the zoom value to 100%. | `Ctrl + 0` |       `⌘ + 0`       |
| Zoom to All Layers | Shows all the layers on the page. | `Ctrl + 1` | `⌘ + 1`            |
| Zoom to Selection | Zooms in and displays the selected layer in the center of the screen. | `Ctrl + 2`  | `⌘ + 2`            |
| Zoom to fit width | Zooms the canvas so that all horizontally distributed layers fit the screens. | `Ctrl + 3` | `⌘ + 3`          |
| Zoom to fit height | Zooms the canvas so that all vertically distributed layers fit the screen. | `Ctrl + 4`  | `⌘ + 4`        |

These options are also accessible through the **View** section on the menu bar:

<embed type="image/svg+xml" alt="zoom_to" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/_0flAx2EaESsh5HNYbRCig.svg" width="844"/> 


#### [Show pixels on zoom](#show-pixels-on-zoom)

By default, Lunacy displays the canvas in the **vector mode**, which means that all layers (except for rasterized ones) will preserve their quality regardless of the zoom value. If you need to see individual pixels, you can use the **Show pixels on zoom** button. It displays pixels when the zoom value exceeds 100. 

Here is the same layer with the feature disabled (left) and enabled (right):

<embed type="image/svg+xml" alt="show_pixels" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/hjIJYiahiUaGtxr99Y6lGQ.svg" width="844" /> 


You can also toggle this feature on and off in the menu bar by selecting **View → Pixels on Zoom**.

## [Context menu](#the-context-menu)

The **context menu** appears when you right-click on a layer. The items on the menu vary depending on the layer you select. Almost all context menu options have shortcuts you can use to speed up your workflow.

<embed type="image/svg+xml" alt="contextmenu" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/yDxxG6jz50yulSue63mF-g.svg" /> 



These context menu options are universal for almost all layer types: 

| Context menu button | Description | 
|---|---|
| <embed type="image/svg+xml" alt="Copy" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/hgirwJVu70qeG38ARiD5hQ.svg" width="16" />  | Copy the layer. |
| <embed type="image/svg+xml" alt="Paste here" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/1F3Ipf6wM0qK5Saqv5Co3g.svg" width="16" /> | Paste an element at the position of the cursor. |
| <embed type="image/svg+xml" alt="Duplicate" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/t-tMVYz1C0iX9YGOrhm_NA.svg" width="20" />      | Duplicate the selected layer.  |
| <embed type="image/svg+xml" alt="Lock" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/BSGfdkIrBEOLaHjPnybBhw.svg" width="16" />             | Protect the layer from accidental edits.   |
| <embed type="image/svg+xml" alt="Hide" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/kFaGjr3Qu0C8W7_Y_UjOXA.svg" width="20" />             | Hide the layer from the canvas.     |
| <embed type="image/svg+xml" alt="Delete" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/7XSmNDmTIEu8s16n3TAT8w.svg" width="16" />           | Deletes the selected layer.   |
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

When you right-click on an empty area on the canvas or a frame, the only option available on the context menu is **Paste here**.

### Context menu search

To quickly find the required menu option, you can use the search field at the top of the context menu. The search recognizes both English and your selected interface language.

<div class="callout callout--info">
    <p><strong>Tip:</strong> With the context menu search, you can find almost any command or shortcut, even those not related to the selected layer. You can even search by the first letters of commands. For example, typing 'cs' or 'c s' will return <i>Copy style</i>.</p>
</div>

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/contextmenusearchman.png" height="auto"><source src="/public/contextmenusearchman.mp4" type="video/mp4"></video>


## Document pages

There can be any number of **pages** in a document. 

You can keep all your work on a single page or split it between several pages. For instance, when designing a website, you can keep the desktop and mobile versions on separate pages. 

Additionally, you can duplicate a page to save a version of your current design and experiment with the copy. It's completely up to you to decide which approach to choose. 

Here's what the **Page list** looks like: 

<embed type="image/svg+xml" alt="page_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/TgMw_XxCa025DzYKz7eF5Q.svg" width="844" /> 

It shows up above the **Layer list** when the **Layers** content tab is selected.

Use the Page list to:

* Add pages
* Rename pages
* Change the order of the pages
* Duplicate pages (with their content)
* Copy and paste pages into other documents
* Delete pages

To **add a new page** to the document:

1. Click the `+` icon above the Layer list.
2. Name the new page.
3. Press `Enter`.

To **change the position of a page** in the list, simply drag it to where you want it to be.

The rest of the actions are accessible through the **context menu**, which you can access by right-clicking a page name.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/page_add_rename.png" height="auto"><source src="/page_add_rename.mp4" type="video/mp4"></video>

There is also a special type of page — the **Components** page. It stores the reusable <a href="https://lunacy.docs.icons8.com/components" target="_blank">components</a>. you can create in your designs.

## Advanced privacy settings 

Turn off some or all of these features for a completely private experience:

<embed type="image/svg+xml" alt="privacy_settings_advanced" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/vjjf-gYhsUGP7whMFN7eCw.svg" width="844" />

All users can disable Google Analytics and Google Fonts, and you can disable the rest of the features <a href="https://lunacy.docs.icons8.com/subscriptions/#personal-cloud-plan" target="_blank">with a subscription</a>. 
