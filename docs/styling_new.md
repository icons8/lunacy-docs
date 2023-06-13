---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Fills, borders, effects
description: Learn how to work with styling options in Lunacy
icon: 'design'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Components
        url: '/components'
    prev:
        content: Text
        url: '/text'
---

Use **styling options** to define the color and effects of a layer, including:

- **Fills and tints.** Choose from solid, gradient, or image fills and apply tints to customize the colors.
- **Borders.** Add them to your layers to create clear distinctions or define boundaries.
- **Shadows.** Experiment with outer and inner shadows to add depth and dimension to your elements.
- **Blurs.** Add Gaussian or background blurs to your layers.

These options appear in the right panel whenever you select layer. 

<embed type="image/svg+xml" alt="styling_options" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/B5lyWRr6i0CpxecjtRet_w.svg" width="844" /> 

You can apply them to all <a href="https://lunacy.docs.icons8.com/layers/#introduction" target="_blank">types of layers</a>, except for <a href="https://lunacy.docs.icons8.com/tools/#hotspot-tool" target="_blank">hotspots</a>, and <a href="https://lunacy.docs.icons8.com/tools/#slice-tool" target="_blank">slices</a>, though not all layers have all of the styling options available. For example, groups have [tints](#tints) instead of [fills](#fills), and <a href="https://lunacy.docs.icons8.com/components/#managing-instances" target="_blank">component instances</a> have both these options.

Save time by <a href="https://lunacy.docs.icons8.com/layerstyles/" target="_blank">creating layer styles</a> for individual or multiple styling options. You can easily reuse them across different layers, keeping your designs consistent.

**See also:**<br>
<a href="https://lunacy.docs.icons8.com/layerstyles/" target="_blank">Layer and text styles</a>

## Adding styling options

To **apply a fill, border, or any other styling option** to a layer:

1. Select a layer.
2. Click `+` next to the required styling section in the **right panel**.
3. Adjust the settings to define styling parameters for the layer.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_adding_fills_borders_effects.png" height="auto"><source src="/public/styling_adding_fills_borders_effects.mp4" type="video/mp4"></video>

### Managing and deleting styling options

Each layer can have multiple styling options of the same type (except for blurs). For example, you can apply an image fill to a layer and a semi-transparent solid fill on top of it. Also, a layer can have several borders or shadows. Just click the `+` icon to add another styling setting.

To adjust a layer’s appearance, rearrange the order of the styling settings within each section.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_moving_fills.png" height="auto"><source src="/public/styling_moving_fills.mp4" type="video/mp4"></video>

You can temporarily hide some of the settings by clicking <embed type="image/svg+xml" alt="eye_hide" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/QgphXanfmEC4xSEHsd4zpQ.svg" width="24" />. To delete a styling setting, click <embed type="image/svg+xml" alt="Delete" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/atwbWW7Xe0W7xOC5ILLNhQ.svg" width="16" />.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_hide_delete.png" height="auto"><source src="/public/styling_hide_delete.mp4" type="video/mp4"></video>

### Applying styling options to multiple layers

To apply styling options to multiple layers, select them and click `+` next to any of the styling sections in the right panel.

<embed type="image/svg+xml" alt="effects_to_multiple_layers" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/sPPKm0BlvkOi4bgdTX9PVw.svg" width="844" /> 

If you see **Click + to replace mixed content** in any of the styling sections in the right panel, it means that the selected layers already have different settings for this option. 

Click `+` to override the current settings and apply the same styling option to the selected layers.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_to_multiple_layers.png" height="auto"><source src="/public/styling_to_multiple_layers.mp4" type="video/mp4"></video>

## [Fills](#fills)

**Fills** define the color of a layer. Fill options are available in all styling sections (except for blurs) and define the color of the selected layer, borders, or shadows. 

There are several ways to change the fill color. With your layer selected:

- Open the color picker/slider by clicking the color swatch in the **Fill** section. 
- Use the **Eyedropper tool** (`I`) and click on a color you want to use for your layer.
- Pick a color variable or a preset color.
- Inside the color picker, paste the HEX, RGBA, HSB, or HLS value for a solid fill into the color code input field. 
- Enter the HEX value for solid fills manually into the color text box in the **Fill** section or the color picker.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_applying_color.png" height="auto"><source src="/public/styling_applying_color.mp4" type="video/mp4"></video>

<div class="callout callout--info">
    <p><strong>Note:</strong> The methods below work for solid fills or parts of a gradient. </p>
</div>

### Color picker

To open the **color picker**, click the color swatch in one of the styling sections in the right panel.

<embed type="image/svg+xml" alt="open_color_picker" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/nTP37iWiQ0GKG-KXLZgqzg.svg" width="844"  /> 

The color picker displays these settings:

<embed type="image/svg+xml" alt="fill_settings" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/1sUgxgbqe0SwBtKhg63UQw.svg" width="844" /> 

**Fill type.** Available for the **Fill** and **Border** color pickers only.

**Color selection box.** This is where you select the color.

**The eyedropper tool.** Click it and use the tool to sample colors from other layers or the interface.

**Color selection slider.** Slide along the bar to switch colors.

**Opacity slider.** Slide along the bar to adjust the opacity.

**Color code.** Displays the code of the currently selected color:<br>
- HEX
- RGB
- HSB
- HSL

**Color code input field.** Paste HEX, RGBA, HSB, or HLS values here for maximum accuracy.

**The opacity entry field.** Manually enter the opacity percentage.

**Create color variable.** This button opens the color variable editing mode.

**Preset colors.** To speed up your work with colors, you can save them here and select them directly from this panel later. There are two types of preset colors:<br>
- **Global** colors appear in the color picker in all documents.<br>
- **Document** colors are available in the current document only.

**Global and document presets.** To switch between global and document colors, open the dropdown menu. To delete a color preset, right-click over it, then select **Remove**.

**Switch view.** Use this button to switch the presets between list and grid views. In list view, you’ll be able to rename colors: right-click a color, then select **Rename**.

**Add color preset.** Use this button to add the currently selected color to **Global** or **Document** presets.

### Color variables

With **color variables**, you can efficiently manage colors in your documents and instantly recolor all the layers using the same variable. You can use color variables for fills, borders, and shadows.

In the right panel, color variables appear as round color swatches, while regular fills, border and shadow colors appear as square swatches.

<embed type="image/svg+xml" alt="regular_colors_and_variables" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/xetAMkTRekO9pykOhzt32g.svg" width="844" /> 

To **create a color variable**:

1. Select a layer.
2. Open up the color picker by clicking the color swatch in the right panel.
3. Choose a color.
4. Click **Create Color Variable**.

<embed type="image/svg+xml" alt="create_color_variable" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/Dd0LiF8lzkOIx0qX7qof6w.svg" width="844" /> 

To **apply an existing color variable** to a layer:

1. Select a layer.
2. Open up the color dropdown menu.
3. Select the required color variable.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_applying_color_variable.png" height="auto"><source src="/public/styling_applying_color_variable.mp4" type="video/mp4"></video>

To **edit a color variable**, open up the color dropdown menu, and click <embed type="image/svg+xml" alt="Group 4" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/EzR_O8DAKkeQ_xZBwCq5rA.svg" width="20" /> to edit the color.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_edit_variable.png" height="auto"><source src="/public/styling_edit_variable.mp4" type="video/mp4"></video>

With a layer selected, use one of these ways to **detach a layer from a color variable**:

- [Change its color](#fills).
- Click `+` in the right panel to add a new fill and delete the color variable fill.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_detach_variable.png" height="auto"><source src="/public/styling_detach_variable.mp4" type="video/mp4"></video>

### Color palettes and auto shape colors

All newly created documents have a color palette which includes document color variables for main, accent, background, and text colors.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_color_palettes.png" height="auto"><source src="/public/styling_color_palettes.mp4" type="video/mp4"></video>

To **see the entire palette**, deselect all layers. 

To **generate a new one**, press <embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/w29IHdVZY06gaocLrc13Dw.svg" width="20" />. 

To **change palette colors manually**, click on the color swatches to open the color picker.

Using the document color palette, Lunacy applies color to shapes automatically depending on their size and predicted purpose. Larger shapes have background colors while smaller elements are assigned primary or accent colors.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_auto_shape.png" height="auto"><source src="/public/styling_auto_shape.mp4" type="video/mp4"></video>

If you want the default shape color to be the usual gray, **delete all palette colors** by pressing <embed type="image/svg+xml" alt="Delete_button" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/mzlutszh_UmV3L0QGqvUfg.svg" width="20" > next to each one.

### Fill types

There are three major types of fills:

1. **Solid fills** (default)
2. **Gradient fills**:
    - Linear
    - Radial
    - Angular
3. **Image fills**

You can set these fills for a layer and adjust them in the **Fill** section of the right panel.

<embed type="image/svg+xml" alt="fill_settings" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/z1-bS8V5Q0yciSJ1pW3kxA.svg" width="844" /> 

**Color picker.** The color swatch matches the color of the selected layer. Click it to open the color picker.

**HEX color code.** Displays the HEX code of a fill. Alternatively, this field shows the name of the color variable applied to the layer. 

**Color variables.** Opens the dropdown menu to view the list of document color variables.

**Fill opacity.** The opacity of the fill. You can also adjust the opacity inside the color picker itself.

**Show/hide fill.** Hides the fill.

**Delete fill.** Removes the fill from the layer.

**Add fill.** Adds another fill on top of the current one. You can move fills around by dragging the leftmost part of a fill up or down.

**Fill properties.** This button opens the panel where you can select between the <a href="https://en.wikipedia.org/wiki/Nonzero-rule" target="_blank">Non-Zero</a> and <a href="https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule" target="_blank">Even-Odd</a> options for filling overlapping paths.

**Blend mode.** Blend mode determines how the fill blends with the layer underneath. Activate it to set the blend mode for a fill (when active, the option will replace the **Hide** and **Delete** buttons) and click it again to hide it. 

<div class="callout callout--info">
     <p><strong>Note:</strong> Understanding blend modes is mainly a matter of practice and experimenting, but here’s a <a href="https://en.wikipedia.org/wiki/Blend_modes" target="_blank">rundown of the theory</a>.</p>
</div>


#### Solid fills

To **define a solid fill**, use [any of the ways described in the section above](#fills).

#### Gradients

**Gradients** are combinations of two or more colors blended into each other inside the same fill layer.

To **add a gradient fill**:

1. In the **Fills** section of the right panel, click the color swatch to open up the color picker.
2. At the top of the color picker, click one of these buttons to select the gradient type: <embed type="image/svg+xml" alt="linear_gradient" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/ucBlC-G4FkGfihMcQeu-hg.svg" width="20"/> — linear, <embed type="image/svg+xml" alt="radial_gradient" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/VI1Nwhu1AkyQwtPO8_4wfg.svg" width="20"/> — radial, <embed type="image/svg+xml" alt="angular_gradient" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/pZ1KZ-MEKU6F_f96xtFiVw.svg" width="20"/> — angular.
3. The gradient bar with two handles will show up in the color picker.
4. Also, you will see a gradient control with two color points over the layer. The appearance of the gradient control depends on the selected gradient type.
5. Use the gradient control and/or the gradient bar to get the desired effect. 

<embed type="image/svg+xml" alt="gradient_settings" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/nA3UtzRRd0OMaPHkErHd8w.svg" width="844" /> 

Here’s a list of actions applicable to all types of gradients:

- **Change the color of a gradient point** by clicking it (or the corresponding gradient bar handle) and selecting the required color.
- To **add a color to a gradient**, just click over the gradient bar or the gradient control. To adjust the color, move the handles or the color points.
- To **delete a gradient color**, point the cursor over the respective color point or handle, then press `Del`.
- To **save a gradient as a color preset**, select the variable type (Global or Document) and click `+`.
- To **invert a gradient**, use the <embed type="image/svg+xml" alt="gradient_invert" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/HNAsjFFLjkKabeS0xaIeYw.svg" width="20" /> button next to the gradient bar.

##### Linear gradients

Working with linear gradients is pretty straight-forward.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_linear.png" height="auto"><source src="/public/styling_linear.mp4" type="video/mp4"></video>

##### Radial gradients

When you select the radial type, the gradient control is the radius of a circle. You can:

- Select the edge color point to change the size of the circle.
- Select the center color point and drag it to reposition the origin point of the gradient.
- Drag the square handles on the edge of the circle to resize or reshape it into an ellipse.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_radial.png" height="auto"><source src="/public/styling_radial.mp4" type="video/mp4"></video>

##### Angular gradients

When you select an angular gradient, the gradient control takes the form of a circle with color points on its edges. Drag the points around the circle to get the desired gradient effect and add some extra color points if needed.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_angular.png" height="auto"><source src="/public/styling_angular.mp4" type="video/mp4"></video>

#### Image fills

To **create an image fill**:

1. Click the color swatch.
2. In the top bar of the color picker, click <embed type="image/svg+xml" alt="image_fill" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/UaEWmyqIP0iiZAIkJTe_pQ.svg" width="20" />.
3. Click **Choose image**.
4. Select an image from on your computer and click **Open**.
5. Use the drop-down list below the **Choose image** button to select the fill method:
    - **Fill.** Adjusts the image size to the layer’s width.
    - **Fit.** Adjusts the image size to fit the layer’s height.
    - **Stretch.** Stretches the image to fit the layer’s width and height.
    - **Tile.** Duplicates the image in a tile pattern to fit the layer. The size of tiles is adjustable.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_image_fill.png" height="auto"><source src="/public/styling_image_fill.mp4" type="video/mp4"></video>

You can also quickly replace an image fill by holding down `Ctrl` / `⌘` and dropping an image from your desktop or the **Photos** library in the left panel onto a layer, like in the demo below.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_ctrl_image_replacement.png" height="auto"><source src="/public/styling_ctrl_image_replacement.mp4" type="video/mp4"></video>

**See also:**<br>
<a href="https://lunacy.docs.icons8.com/tools/#avatar-tool" target="_blank">Avatar tool</a><br>
<a href="https://lunacy.docs.icons8.com/tips/" target="_blank">Tips and tricks</a>

### Tints

Tints are a quick and easy way to apply a color to groups and component instances. They are particularly useful when you need to adjust the color of a semi-filled layer or a complex icon.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_tints.png" height="auto"><source src="/public/styling_tints.mp4" type="video/mp4"></video>

The **Tints** section only appears in the right panel when you select a group or a component instance.

Unlike other styling options, you can only apply one tint to a layer.

#### Tint overrides

Overrides to tints added to component instances are useful when you are designing tabs or panels with elements that have different states expressed through different colors.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/component_tint_overrides.png" height="auto"><source src="/public/component_tint_overrides.mp4" type="video/mp4"></video>

<div class="callout callout--info">
    <p><strong>Note:</strong> You need to add default tints before you can create tint overrides.</p>
</div>

When you override a tint, the <embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/w29IHdVZY06gaocLrc13Dw.svg" width="20" /> button appears in the **Tint** section of the right panel. Clicking it removes only the tint override, while all other overrides stay unchanged.

Read <a href="https://lunacy.docs.icons8.com/components/#tint-overrides" target="_blank">more about tint overrides</a> in the <a href="https://lunacy.docs.icons8.com/components/" target="_blank">Components</a> page.

## Borders

You can add borders to any layer except for hotspots and slices.

The **Border** section opens up in the right panel when you add a border to an element. Here, you can adjust a border’s color, thickness, and shape. In this same section, you can adjust the appearance of lines, curves, arrows, and other open paths since they work more or less like partial borders.

<embed type="image/svg+xml" alt="border_settings" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/67iEFdMtKEqsGm6tLZkmWQ.svg" width="844" /> 

**Color swatch.** The color swatch matches the color of the border. Click it to open the border color picker.

**HEX color code.** Shows the name of a color variable or the HEX code of a fill. Open the dropdown menu to view the list of document color variables.

**Color variables.** Opens the dropdown menu to view the list of document color variables.

**Border position.** You can choose to place borders on the inside, outside, or center (default) of the layer’s bounding box. The only option available for open paths (lines, arrows, curves, etc.) is center.<br>
<embed type="image/svg+xml" alt="border_position" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/jfsfC2XTOke_nYUnftNKjQ.svg" width="844" /> 

**Show/hide border.** Hides the border.

**Borders thickness.** Determines the thickness of a border or an open path.

**Advanced border settings.** More adjustment options for the shape and appearance of a border. Read more about advanced settings for borders below.

**Add border.** Adds another border on top of the current one. You can move borders around by dragging the leftmost part of a border up or down.

**Delete border.** Removes the border from the layer.

### Advanced border settings

<embed type="image/svg+xml" alt="advanced_border_settings" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/WOPyBI7ChUalh-reMW6l3w.svg" width="844" /> 

Advanced border settings include:

- **Caps.** Define the shape of the caps of open paths: no caps, round, or square. Open paths include those created with the Line, Arrow, or Pen/Pencil tools.

- **Folds.** Adjust the appearance of the corners for arrows and paths with corners drawn with the Pen/Pencil tool.

- **Start and End.** Determine the appearance of the ends of open paths drawn with the Line, Arrow, or Pen/Pencil tools.<br>
<embed type="image/svg+xml" alt="start_end" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/dUfYC480VE-0X2q-gX0Y9Q.svg" width="844" /> 

- **Dash and Gap.** Create dashed lines or borders. Define the length of the dashes and the gaps between them in the corresponding input fields. To turn the border into a solid line, set all the values to 0.<br>
<embed type="image/svg+xml" alt="dash_gap" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/2wYx6kpGQ0aqmKR0P27Ibg.svg" width="844" /> 

## Effects

Open up the **Effects** section in the right panel to add shadows or blurs to your layers:

1. Click `+` next to **Effects** in the right panel.
2. Select an effect from the dropdown menu.
3. Click <embed type="image/svg+xml" alt="effect_settings" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/EzR_O8DAKkeQ_xZBwCq5rA.svg" width="20" /> to open up the effect settings and adjust them as you need.

<embed type="image/svg+xml" alt="types_of_shadow" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/cws84rQm1EaaJ32RPGrPZQ.svg" width="844" /> 

### Shadows

You can add drop shadows and inner shadows to your layers. Both types have the same settings that include **color**, **X and Y offsets**, **blur**, and **spread**. You can overlay multiple shadows of the same or different types in one layer.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_shadow.png" height="auto"><source src="/public/styling_shadow.mp4" type="video/mp4"></video>

### Blurs

There are two types of blur effects you can add to layers:

**Gaussian** — blurs the selected layer.

**Background** — blurs the layer underneath the selected layer. To see the background blur effect, delete or hide the fill of the selected layer or bring its **fill opacity** below 100%. When using this type of blur, you can also adjust the **saturation** of the blurred layer.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling_blur.png" height="auto"><source src="/public/styling_blur.mp4" type="video/mp4"></video>

<div class="callout callout--info">
    <p><strong>Note:</strong> Blur is quite a demanding effect in terms of computing resources. Avoid excessive usage of blurs within a document. For this reason, we limited the maximum blur value that you can set using the slider to 50. Manually, you can set values up to 10,000.</p>
</div>
