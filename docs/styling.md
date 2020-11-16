---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Styling
description: Learn about tools that will help you create your unique style
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

## Introduction

Styling options that you can apply to objects in Lunacy include:

* Fills (solid, gradient and image fills)
* Borders
* Outer shadows
* Inner shadows
* Blurs (Gaussian and background)

They appear in the Inspector when you select an object. A combination of styling options applied to an object is called a layer style. You can save layer styles for further use (read <a href="https://docs.icons8.com/layerstyles/" target="_blank">here</a> for details).

You can apply styling options to all <a href="https://docs.icons8.com/objects/#introduction" target="_blank">types of objects</a>, except for technical ones (such as artboards, hotspots and slices). However, the only option applicable to group objects and components is the outer shadow.

In addition to the above, text objects feature typography settings, such as font, font size, line spacing, etc. Combined with the common styling options (or without them) they make up <a href="https://docs.icons8.com/layerstyles/#text-styles" target="_blank">text styles</a>.

The details about using each of the options you will find in the sections below. But first of all let us review some common things.

## Adding, deleting and managing styling options

To apply a fill, border or any other styling to an object:

1. Select the required object.
2. Click the + button next to the respective styling section in the Inspector. A row of controls appears.
3. Use these controls to define the required styling parameters (see the demo below).

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling-commondemoph1.png" height="auto"><source src="/public/styling-commondemo1.mp4" type="video/mp4"></video>

The things that you should know:

* Each object can have multiple styling options of the same type (except for blurs). For instance, you can apply an image fill to an object and a semi-transparent solid fill on top of it. Also, an object can have several borders or shadows. Just click the + icon to add another row of settings.

* You can drag these rows of settings up and down to adjust the position of their instances on the canvas.

* You can temporarily disable some of the settings, by clicking the eye icon in front of the row.

* To delete a row of settings, select it and click the trash icon.

All these things are shown in the next demo. It presents an object with a single fill and three borders.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling-commondemoph.png" height="auto"><source src="/public/styling-commondemo.mp4" type="video/mp4"></video>

## [Color controls](#color-controls)

Color controls appear in all styling sections (except for blurs) and serve for defining the color of the selected object or its borders or shadows.

![Opening the color picker](public/styling-colorctrl.png)

You can:

* Click the color box and use the [color picker](#color-picker).
* Manually enter or paste the HEX value of the required solid fill.
* Copy the HEX, RGBA or HLS value of the current solid fill. For this, right-click over the text box and select the required option on the displayed menu as shown in the figure below.

The last two options do not apply to shadows as they don't have the color text box.

![Opening the color picker](public/styling-copycode.png)

## [Color picker](#color-picker)

To open the color picker, click the color box in the styling section you are working with.

![Opening the color picker](public/styling-colorbox.png)

The figure below shows a view of the color picker invoked from the fills section.

![Color picker](public/styling-colorpicker1.png)

It features the following controls:

1. Fill type buttons. Available on the fill and border color pickers only.
2. Color selection box. That is where you will select colors.
3. Color selection bar. Allows you to quickly navigate through colors.
4. Opacity controls.
5. The eyedropper tool. For details about using it, read <a href="https://docs.icons8.com/tools/#eyedropper-tool" target="_blank">here</a>.
6. The color code box. Displays the code of the currently selected color (HEX or RGB).
7. The panel of preset colors. To speed up your work with colors, you can save them for further use and select them directly from this panel. There are two types of preset colors:
    * **Global** colors appear on the color picker in all documents.
    * **Document** colors belong only to the current document.
    
    To switch between the panels of global and document colors click the panel name. To delete a preset, right-click over it, then select **Remove** on the displayed menu.
8. Use this button to add the currently selected color to **Global** or **Document** presets.
9. Use this button to switch the panel of presets between the list and grid view. In the list view, you can give names to colors: right-click a color and select **Rename** on the displayed menu (see the demo below).

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling-pickerph.png" height="auto"><source src="/public/styling-picker.mp4" type="video/mp4"></video>

## Fills

There are three major types of fills:

1. Solid fills (default).
2. Gradient fills that can be:
    * Linear
    * Radial and 
    * Angular
3. Image fills.

The figure below shows a view of settings in the **Fills** section.

![Fill controls](public/styling-fills.png)

The section features the following controls:

1. The [color control](#color-controls) for setting fills.
2. The blend mode control. Blend modes determine, in case of multiple fills, how the top fill blends with the fill underneath. Understanding blend modes is mainly a matter of practice and experimenting, but if you need some theory, you can read it <a href="https://en.wikipedia.org/wiki/Blend_modes" target="_blank">here</a>.

### Solid fills

To define a solid fill:

* Click the color box in the color control and use the [color picker](#color-picker) to define the required color.

  OR
* Type or paste the HEX code of the required color in the edit field and press `Enter`.
 
### Gradients

Gradients are combinations of two or more colors blended into each other within the same fill layer.

To add a gradient fill:

1. In the **Fills** section of the Inspector, click the color box. The [color picker](#color-picker) appears.
2. At the top of the color picker click one the following buttons (1) to select the gradient type:

    * ![Linear gradient button](public/styling-linear.png) - linear
    * ![Radial gradient button](public/styling-linear.png) - radial
    * ![Angular gradient button](public/styling-angular.png) - angular

    As you do it, the gradient bar (2) with two handles gets displayed in the color picker. Also, you will see a gradient control with two color points (3) over the object. The appearance of the gradient control depends on the selected gradient type. The next figure shows a linear gradient (see also the demos below).

    ![Gradient controls](public/styling-colorpickergrad1.png)

3. Use the gradient control and/or the gradient bar to get the desired effect. The handles on the gradient bar correspond to color points over the object. Actions applicable to all types of gradients:

    * To change the color of a color point click it (or its respective handle on the gradient bar), and select the required color in the color selection box (4).  
    * To add a color to a gradient, just click over the gradient bar  or the gradient control. To adjust the color position move the handles or color points.
    * To delete a color, point the cursor over the respective color point or handle and press `Del`.

4. (optional) To save a gradient to presets, select the preset type (*Global* or *Document*) and click the plus icon.
5. (optional) To invert a gradient use the button (5) next to the gradient bar.
6. Close the color picker when you are done.

#### Linear gradients

The demo below shows what you can do when adding a linear gradient.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling-lineargradph.png" height="auto"><source src="/public/styling-lineargrad.mp4" type="video/mp4"></video>

#### Radial gradients

When you select the radial type, the gradient control becomes a radius of a circle. You can:

* Select the edge color point to change the size of the circle.
* Select the center color point and drag it to reposition the origin of the gradient.
* Drag the square handles on the edge of the circle to resize or reshape it into an ellipse.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling-radialgradph.png" height="auto"><source src="/public/styling-radialgrad.mp4" type="video/mp4"></video>

#### Angular gradients

When you select the angular type, the gradient control takes the form of a circle with color points sitting on its edge. Drag the points around the circle to get the desired gradient. Add some extra color points, if needed.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling-angularph.png" height="auto"><source src="/public/styling-angular.mp4" type="video/mp4"></video>

### Image fills

To create an image fill:

1. Click the color box.
2. In the top bar of the color picker, click ![Image fill button](public/styling-imagefillbtn.png).
3. Click **Choose image**.
4. In the displayed dialog box, select the required image on your computer and click **Open**. See also the tip below.
5. Use the drop-down list below the **Choose image** button to select the fill method:
    
     * **Fill**. Adjusts the image size to the object's width.
     * **Fit**. Adjusts the image size  to fit the object's height.
     * **Stretch**.  Stretches the image for it to fit the object's height and width.
     * **Tile**. Tiles the image to fit the object. The size of tiles is adjustable (see the demo below).
6. Close the color picker, when you are through.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling-imagefillph1.png" height="auto"><source src="/public/styling-imagefill1.mp4" type="video/mp4"></video>


**Tip:** You can also create an image fill by dropping an image from the Lunacy library or your desktop directly on to the object as shown in the demo below. As a matter of fact, what the <a href="https://docs.icons8.com/tools/#avatar-tool" target="_blank">avatar tool</a> does is that it creates rounded rectangles with image fills, where images are random photos of people.  

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/styling-imagefillph.png" height="auto"><source src="/public/styling-imagefill.mp4" type="video/mp4"></video>

## Borders

As the name of this styling section suggests, here you will manage the appearance of borders in shapes. But it is also the place where you will define the color, thickness and other parameters of lines, curves, arrows and other open paths.

The figure below shows a view of settings in the **Borders** section.

![Border controls](public/styling-borderctrls.png)

The section features the following controls:

1. The [color control](#color-controls) for setting border colors. You can apply both solid and gradient fills to borders.
2. The border position control. Available for closed paths (shapes) only. You can choose between the inside, outside or center (default) of the outline. The difference between these options is shown in the figure below. The only option available for open paths (lines, arrows, curves, etc.) is the *center*.
3. The borders thickness control. Sets the thickness of a border or an open path in pixels.
4. This icon opens the advanced border settings (see below).

![Border position](public/styling-borderdiff.png)

{:.image-info}
From top to bottom: outside, center, inside borders

### Advanced border settings

![Advanced border controls](public/styling-borderadvanced.png)

The advanced border settings include:

* **Caps**. Applicable to open paths only. Use these controls to define the shape of endings of open paths: no endings, round or square (see the demo below).
* **Folds**. Use these controls to adjust the appearance of border or open path corners: square, rounded, beveled (see the demo below).

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling-capsfoldsph.png" height="auto"><source src="/public/styling-capsfolds.mp4" type="video/mp4"></video>

* **Nozzles**. Applicable to open paths only. Use this group of controls to set arrowheads.
* **Dotted line**. Use these controls to create dashed lines and borders. Define the length of dashes and gaps between them in respective text boxes. To restore a solid line/border, set all the values to *0*.

![Dashed border](public/styling-dashes.png)

## Shadows

You can apply both outer and inner shadows to objects. Both these types have the same controls that include color, X and Y offsets, blur and spread. There can be multiple shadows of the same type.

![Shadows](public/styling-avatarshadow.png)

## Blurs

Lunacy provides two types of blurs:

* **Gaussian** - blurs the selected object.
* **Background** - blurs the object underneath the selected object. To see the background blur effect, you should delete or hide the fill of the selected object or set its fill opacity to less than 100%. When working with this type of blur, in addition to the blur value you can also adjust the saturation of the blurred object.

To switch between blur types, click the down arrowhead next to a blur name and select the required option.

![Switching blur types](public/styling-switchingblur.png)

In the demo below, we first applied a Gaussian blur to an image, removed it and then applied a background blur to a rectangle above the image.


<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/styling-blursph.png" height="auto"><source src="/public/styling-blurs1.mp4" type="video/mp4"></video>


**Note:** Blur is quite a demanding effect in terms of computing resources. Avoid excessive use of blurs within a document. For the same reason, we limited the maximum blur value to *50*.

## Applying styling options to multiple objects

You can apply styling options to multiple selected objects at the same time. If you see the *Click + to replace mixed content* caption under any of the options, it means that the selected objects have different settings for this option. A click over the plus icon will replace current settings with new ones common for all selected objects. In the figure below, this caption appears under the **Fills** section.

![Applying styling options to multiple objects](public/styling-mult.png)

## Tints

Tints are a quick and easy way to apply a color to grouped objects and component instances. They are particularly useful when you need to adjust the color of a semi-filled object or a complex icon (see the demo below).

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/styling-tintsph.png" height="auto"><source src="/public/styling-tints.mp4" type="video/mp4"></video>

The **Tints** section appears in the Inspector only when you select a group object or a component.

Unlike other styling options, you can apply only one tint to an object.

### Tint Overrides

Tint overrides can be handy, for instance, when you are designing tabs or panels with elements that can have different states expressed through different colors.

Note that before using tint overrides you should add default tints.

The demo below shows three instances of the same component. We first applied a tint override to a nested element, then switched to the <a href="https://docs.icons8.com/components/#editing-main-components" target="_blank">component edit mode</a> and modified the default tint. In the latter case, the change applied only to the instances without the override.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/tintoverridesph2.png" height="auto"><source src="/public/tintoverrides2.mp4" type="video/mp4"></video>

When you apply an override, the reset button appears in the **Tint** section of the Inspector. Use this button to remove the override.

![Reset overrides button](public/reset-overridetint.png)

For details about overrides, read <a href="https://docs.icons8.com/components/#overrides" target="_blank">here</a>.


## Suggestions panel

The suggestions panel appears when you select a shape or an open path. It displays suggestions of styling options based on your previous actions and choices. In case you've just started using Lunacy, the panel will provide some preset styles.

Also, the list of suggested options depends on the background: Lunacy excludes options that would be scarcely visible against the current background.

A view of the panel is shown in the figure below.

![Suggestions panel](public/sugg-panelview2.png)

It features a set of independently scrollable columns that include:

* **Layer styles** (1). Each style is a combination of two or more styling options (fills, borders, shadows and blurs).
* **Fill styles** (2). A collection of fills. If you don't see the required color, double-click over any of the suggested colors. It opens the Color Picker where you can select a color of your choice.
* **Border styles** (3). A collection of border and outline styles.
* **Effect styles** (4). A collection of inner and outer shadows and blurs. Unlike the other columns, the content of this column does not change.
* **Corner radius** (5). Available for rectangles only. Values appear in the ascending order. If you don't see the required value, double-click over any of the values, type the required one and press `Enter` to submit.
* **Background**. Disabled by default. Sets the color of the object overlapped by at least of 50% percent of the surface of the selection. If you don't see the required color, double-click over any of the suggested colors. It opens the Color Picker where you can select a color of your choice.

### Changing the position of the panel

If you want to change the position of the suggestions panel, click the handle at the top-left corner of the panel and drag it up or down. Lunacy remembers the position of the panel individually for each object.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/sugg-positionph.png" height="auto"><source src="/public/sugg-position.mp4" type="video/mp4"></video>

### Resizing the panel

You can resize the panel to your liking by dragging its lower and right borders. Note that dragging by the right border extends the right-most column, while dragging by the lower-right corner of the panel extends the left-most column of the panel.

To change the size of other columns, hover the cursor between two columns and drag to the right or left when the cursor turns into a double-headed arrow (see the demo below).

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/sugg-resizeph.png" height="auto"><source src="/public/sugg-resize.mp4" type="video/mp4"></video>

### Managing the content of the panel

A right-click over the suggestions panel invokes a context menu that allows you to:

* Pin your favorite items to the top of the list. Pinned items appear with a dark triangle at the lower-right corner.
* Delete items that you no longer need or will never use. For this, use the **Don't show this again** command.
* Hide/show some of the columns by clearing/selecting the respective option on the menu (see the figure below).

![Managing the content of the panel](public/sugg-menu.png)

### Disabling the panel

To disable the suggestions panel, use the `Ctrl+Space` shortcut or click the bulb button on the action bar (see the figure below).

![Disabling the suggestions panel](public/sugg-disable1.png)

Also, you can unselect the **Suggestions** option in the **View** menu.

![Disabling the suggestions panel](public/sugg-disable.png)
