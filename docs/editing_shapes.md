---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Editing shapes
description: Make sure that you know everything about working with shapes in Lunacy
icon: 'pencil-tip'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Text
        url: '/text'
    prev:
        content: Layers
        url: '/layers'
---

**Shapes** are types of layers in Lunacy, typically created with the Shape tools.

<embed type="image/svg+xml" alt="shape_tools" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/MFF7H7DsU0agZi_H2rC16g.svg" width="844" /> 

The tools include several pre-made shapes you can add by selecting the Shape icon on the toolbar — or simply by using shortcuts:

`R` — rectangle<br>
`R`, `R` — rounded rectangle<br>
`L` — line<br>
`L`, `L` — arrow<br>
`O` — oval<br>
`O`, `O` — triangle<br>
`O`, `O`, `O` — polygon<br>
`O`, `O`, `O`, `O` — star

Once you select the shape: 

- **Click** on the canvas to place it as a 100 x 100 shape (works for all shapes except for lines and arrows).
- **Click and drag** to adjust the shape’s size.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/tools_the_shape_tool.png" height="auto"><source src="/public/tools_the_shape_tool.mp4" type="video/mp4"></video>

Find out more about <a href="https://lunacy.docs.icons8.com/tools/#shape-tools" target="_blank">working with different types of shapes</a>.

You can also make shapes using the <a href="https://lunacy.docs.icons8.com/tools/#pen-tool" target="_blank">Pen</a> and <a href="https://lunacy.docs.icons8.com/tools/#pencil-tool" target="_blank">Pencil</a> tools. Create vector paths, then close them to make a shape outline you can then edit.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_drawing_shapes.png" height="auto"><source src="/public/editing_shapes_drawing_shapes.mp4" type="video/mp4"></video>

This section focuses on how to edit and transform the form of vector shapes using the standard layer **Edit mode**, on-canvas controls, Boolean operations, and the right panel. To learn about adding fills, borders, and effects to shapes and other layers, check out the <a href="https://lunacy.docs.icons8.com/styling" target="_blank">Styling</a> page.

**See also:**
<br>
<a href="https://lunacy.docs.icons8.com/tools/" target="_blank">Tools</a><br>
<a href="https://lunacy.docs.icons8.com/layers/" target="_blank">Layers</a>

## Edit mode

The most basic way to edit a shape is to use **Edit mode**:

1. Select the shape you want to edit, and press `Enter`. You can also double-click the shape or select <embed type="image/svg+xml" alt="Vector" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/WyS0eXZYh0an2lsuK79VlQ.svg" width="24" /> on the context toolbar.
2. The cursor will switch over to the **Pen** tool. You can drag the paths and vertices of the shape as you see fit, add new points and adjust their properties in the right panel.
3. Press `Enter` again or click on an empty area on the canvas to exit Edit mode.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_edit_mode.png" height="auto"><source src="/public/editing_shapes_edit_mode.mp4" type="video/mp4"></video>

## On-canvas controls for editing shapes

### Corner radius

**Round the corners** for any shape (except for the triangle) by dragging the handles at the corners of the shape on the canvas.

For **rectangles** or **rounded rectangles**, drag any of the handles at the corners to adjust their radius. To change the radius of an individual rectangle corner, hold `Alt` while dragging.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_rounding_rectangle_corners.png" height="auto"><source src="/public/editing_shapes_rounding_rectangle_corners.mp4" type="video/mp4"></video>

For **stars** and **polygons**, drag the handle below the topmost corner of the shape.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_polygon_star_rounding.png" height="auto"><source src="/public/editing_shapes_polygon_star_rounding.mp4" type="video/mp4"></video>

#### Smooth corner radius

You can create rectangles and frames with perfectly smooth corners like in iOS interfaces.

To **switch between default round and smooth corners**, click <embed type="image/svg+xml" alt="smooth_corners" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/DQW0-LFVuUGjlW_U4pzKmA.svg" width="20" /> next to the corner radius button in the right panel.

<embed type="image/svg+xml" alt="smooth_corner_radius" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/uOkgjIJUBk2x8bZNUnIgig.svg" width="844" /> 

### Arc editor

With the **Arc editor**, you can quickly create rings and semirings, design pie charts or other fancy circular elements.

Draw an oval and use the handles in the middle of the shape to adjust its sweep and ratio. **Sweep** creates a gap in the oval, while **Ratio** changes the oval into an arc. Once you change the sweep, the **Start** handle will also appear on the shape, indicating where the arc begins.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_arc_editor.png" height="auto"><source src="/public/editing_shapes_arc_editor.mp4" type="video/mp4"></video>

### Transforming stars and polygons

You can change the shape of stars and polygons right on the canvas without reaching into the right panel.

To **change the ratio** of a star, drag the handles at the inner intersection points of its sides.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_star_ratio.png" height="auto"><source src="/public/editing_shapes_star_ratio.mp4" type="video/mp4"></video>

To **change the number of corners** in a star or polygon, drag the handle below the shape’s top right corner.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_polygon_star_count.png" height="auto"><source src="/public/editing_shapes_polygon_star_count.mp4" type="video/mp4"></video>

<div class="callout callout--info">
     <p><strong>Note:</strong> For shapes with distinct corners created with the <b>Pen</b> tool, you can only adjust the corner radius. This option will only be available in the right panel, these shapes won’t have any on-canvas handles.</p>
</div>

## Editing shapes through the right panel

Use these fields in the **right panel** to transform shapes: 

<embed type="image/svg+xml" alt="shape_right_panel_controls" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/RrEmGfMEzU6sq11URaYMGg.svg" width="844" /> 

The transform options mirror the on-canvas controls:

**Corner radius.** Rounds the corners of a shape. Available for most of pre-made shapes, except for ovals, triangles, lines, and arrows.

**Count.** Adjusts the number of points for stars/the number of angles for polygons.

**Ratio.** Changes the ratio of a star or oval.

**Sweep.** Creates a gap in an oval.

**Start.** Determines the starting point of an arc made from an oval.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_right_panel.png" height="auto"><source src="/public/editing_shapes_right_panel.mp4" type="video/mp4"></video>


## Vector editing

This section expands on **transforming vector shapes and paths** with **Edit mode**.

<div class="callout callout--info">
     <p><strong>Note:</strong> Before diving in, make sure you have a good understanding of how the Pen tool works. Read about the <a href="https://lunacy.docs.icons8.com/tools/#pen-tool" target="_blank">Pen tool</a> in the <a href="https://lunacy.docs.icons8.com/tools/" target="_blank">Tools</a> page to get a hang of the structure of vector layers, paths, point and curve types.</p>
</div>

In general, vector editing is all about manipulations with points and paths:

<embed type="image/svg+xml" alt="edit_mode_controls" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/9CJx-Y0hRkORso6IgKEemg.svg" width="844"  /> 

- To **select a point**, just click it. To select multiple points, drag over them or hold down `Shift` when clicking several points.
- To **move a point**, select and drag it. This works with multiple points selected as well.
- To **add a new point** to a path, hover the cursor over the path, then click it to place a straight point or double-click to place a mirrored point.
- **Switch between point types** in the **Edit shape** section of the right panel.
- To **bend paths**, use curved points.
- To **round the corner** above a straight point, use the corner radius field. It only becomes active when you select a straight point.
- To **delete a point or several points**, select it/them and press `Delete`.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_vector_editing.png" height="auto"><source src="/public/editing_shapes_vector_editing.mp4" type="video/mp4"></video>

## Boolean operations

Use **Boolean operations** to combine shapes into more complex forms:

<embed type="image/svg+xml" alt="boolean_operations" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/Kx4z4ujxMUu4AQbxm7qLOw.svg" width="844" /> 

1. Select two or more overlapping shapes.
2. On the **context toolbar**, select the Boolean operation you need.

- **Union.** Creates a shape from the sum of the areas of the selected shapes (`Ctrl + Shift + U` / `Ctrl + Shift + U`).
- **Subtract.** The opposite of Union. Removes the overlapping area(s) from the shape layer at the bottom of the selection (`Ctrl + Shift + P` / `Ctrl + Shift + P`).
- **Intersect.** The resulting shape only includes the area where all selected shapes overlap (`Ctrl + Shift + I` / `Ctrl + Shift + I`).
- **Difference.** The opposite of Intersect. Creates a shape from the areas where the selected shapes do not overlap (`Ctrl + Shift + X` / `Ctrl + Shift + X`).

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_boolean.png" height="auto"><source src="/public/editing_shapes_boolean.mp4" type="video/mp4"></video>

When you apply a Boolean operation, the selected shapes become a Boolean group, this is how it looks in the Layer list:

<embed type="image/svg+xml" alt="boolean_group_in_layer_list" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/VOb_mVLhFEysnYBkItrHcg.svg" width="844" /> 

The icon next to the title of the shape layers indicates the type of the Boolean operation applied to the layer. Click it to open up a menu where you can select another operation or remove Boolean operations entirely.

You can select individual shapes within the group through the Layer list or on the canvas. If necessary, you can move and resize them on the canvas to modify the resulting shape.

<div class="callout callout--info">
     <p><strong>Tip:</strong> There is no button or shortcut to disassemble a Boolean group, but you can drag shapes out of the group in the Layer list. Read the full list of useful Lunacy tips and tricks.</p>
</div>

## Flatten selection

The **Flatten selection** operation is another method of creating complex forms by combining two or more primitive shapes. It’s similar to the Boolean Union operation, the difference being that the result of flattening is a single layer that cannot be disconnected.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_flatten_selection.png" height="auto"><source src="/public/editing_shapes_flatten_selection.mp4" type="video/mp4"></video>

The **Flatten selection** option appears on the **context toolbar** and is also available in the **Layer** section of the **menu bar**.

<embed type="image/svg+xml" alt="flatten" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/2kTVePjMxUW4h91CwQ6mww.svg" width="844" /> 

## Masks

Use **masks** to display parts of layers and hide the rest.

To **create a mask**:

1. Add the shape you want to use as a mask to the canvas.
2. Place it below the layers that will be masked (you can leave it on top if it's a photo).
3. Select the mask shape and the target layer(s).
4. On the **context toolbar**, click the **Toggle mask** button (<embed type="image/svg+xml" alt="toggle_masks" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/7jpzF3Z3aUqytnbWOY6_jw.svg" width="20" /> 
) or press `Ctrl + M` / `⌘ + M`. The option is also available on the context menu.

<div class="callout callout--info">
     <p><strong>Note:</strong> When you're masking a shape with another shape, the layer you want to act as a mask should be placed below the layer that will be masked. If you're masking out part of a photo, however, you can leave the masking shape on top. </p>
</div>

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_mask.png" height="auto"><source src="/public/editing_shapes_mask.mp4" type="video/mp4"></video>

When you apply a mask, Lunacy creates a mask group:

<embed type="image/svg+xml" alt="mask_in_layer_list" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/8POOmnt8DkyVzP9Q8QDI0w.svg" width="844" /> 

You can select the mask shape right within the group and move, edit, or resize the mask.

To remove a mask, select the mask group in the **Layer list** or on the canvas and press `Ctrl + M` / `⌘ + M`.

### Outline stroke

The **Outline stroke** command (`Ctrl + Shift + O` / `⌘ + Shift + O`), when applied to shapes, converts borders into separate layer. It appears on the context menu when you select a shape that has a border (you can also find the option in the **Layer** section of the **menu bar**).

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_shapes_outline_stroke.png" height="auto"><source src="/public/editing_shapes_outline_stroke.mp4" type="video/mp4"></video>

You can also use this command to <a href="https://lunacy.docs.icons8.com/text/#converting-text-to-outlines" target="_blank">convert text layers to vector outlines</a>.

## Rasterizing vector shapes

You can rasterize any vector layer in Lunacy to create pixel images (when you need elements as simple images, for example).

<embed type="image/svg+xml" alt="rasterize_selection" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/B949r6KJQkCQKUS2Lvo40w.svg" width="844" /> 

To **rasterize any shape** (or path):

1. Select it.
2. Right-click the selection, then select **Rasterize selection** on the context menu.

This option is also available in the **Layer** section of the **menu bar**.


<div class="callout callout--info">
     <p><strong>Note:</strong> Keep in mind that you cannot convert a raster back into a vector shape. <code>Ctrl + Z</code> / <code>⌘ + Z</code> will always help you out, though.</p>
</div>

**See also:**
<br>
<a href="https://lunacy.docs.icons8.com/basics/#show-pixels-on-zoom" target="_blank">Show pixels on zoom</a>
