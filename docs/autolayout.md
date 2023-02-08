---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Auto layout
description: Learn how to create dynamic designs with auto layout
icon: 'document-body'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Components
        url: '/components'
    prev:
        content: Styling
        url: '/styling'
---


## Overview

**Auto layout** is a powerful feature you can use to create dynamic designs that adapt to the size of their contents.

For instance, if you create a labeled button with auto layout, changing the button text will resize the button depending on the width of the text:

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_button.png" height="auto"><source src="/public/autolayout_button.mp4" type="video/mp4"></video>

The option to enable auto layout appears in the <a href="https://lunacy.docs.icons8.com/basics/#working_with_the_inspector" target="_blank">Inspector</a> whenever you select a frame:

<embed type="image/svg+xml" alt="autolayout_inactive" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/eY5XRYyYUki7-MyMV1QUpA.svg" width="844" /> 


In Lunacy, you can apply auto layout to:


- **Layers in individual frames**

    Auto layout settings apply to the layers inside the frame. Resizing these layers will affect the size of the frame (unless you specify otherwise).

- **Several frames**

    To do this, put several frames into a container frame, then add auto layout. You can then define the arrangement of the child frames relative to each other.  

    <div class="callout callout--info">
        <p><strong>Note:</strong> Resizing the child frames will affect the container frame, but changes to layers inside the child frames won’t impact the container — unless the frames have auto layouts themselves, like in the following case.</p>
    </div>

- **Several auto layout frames**
    
    You’ll be able to change auto layout properties for each frame — as well as the container frame they are nested* in.

    The overall layout will dynamically respond to changes inside the child frames.

<div class="callout callout--info">
    <p><strong>* Note:</strong> Nesting auto layout frames is a convenient option for creating complex designs that seamlessly adapt to any changes to individual layers. Learn all about how to combine auto layout frames this way <a href="https://lunacy.docs.icons8.com/autolayout/#combining-auto-layouts">below</a>.</p>
</div>

For now, let’s cover the basics.

## [Auto layout basics](#auto-layout-basics)

This section goes over the main auto layout operations and properties. You’ll learn how to add, arrange, and remove elements inside an auto layout.

Some things to keep in mind before we get into it:

1. All available auto layout properties are displayed in the Inspector:

    <embed type="image/svg+xml" alt="auto_layout_active" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/dT4dMIt8EUOtCnzmCkg_Zg.svg" width="844" /> 

    To view the settings for any auto layout frame, simply select it and refer to this section.


2. Before you apply auto layout to a frame, make sure you have coherently <a href="https://lunacy.docs.icons8.com/layers/#grouping-layers" target="_blank">grouped</a> or framed your layers, otherwise your layout might get messed up. 

    In the example below, the top frame features two buttons with their text and background **ungrouped**. The bottom frame has **two groups** containing the elements for both buttons. Here’s how auto layout works for these frames:
    
    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_grouping.png" height="auto"><source src="/public/autolayout_grouping.mp4" type="video/mp4"></video>

    Nothing unfixable by `Ctrl + Z`, but still an inconvenience.

3. You can add auto layouts to any frame with any kind of content: the frame can include just layers or a mix of <a href="https://lunacy.docs.icons8.com/layers/" target="_blank">layers</a>, <a href="https://lunacy.docs.icons8.com/basics/#frames" target="_blank">frames</a>, and <a href="https://lunacy.docs.icons8.com/components/" target="_blank">components</a>. All these elements will be affected by auto layout settings unless you exclude them (for example, using absolute position, which we will go over below.

## [Creating an auto layout frame](#creating-auto-layout)

To add auto layout to a frame:

1. Select the frame.
2. Click `+` next to **Auto layout** in the Inspector.

The auto layout section will open up, displaying the various properties you can apply to your frame. 

You can also select elements within the frame to change their individual auto layout settings:

- If you select a nested auto layout frame, you’ll see the usual Auto layout section in the Inspector.
- If you select an ordinary layer, frame, or component inside an auto layout you’ll see its individual properties, which look like this:

<embed type="image/svg+xml" alt="autolayout_individual_settings" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/5o5Spa20qE-AcIjvo1QSrA.svg" width="844" /> 


## [Auto layout properties](#auto-layout-properties)

<embed type="image/svg+xml" alt="autolayout_properties" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/-0uKI9FjT0iW1CMX9CCYKg.svg" width="844" /> 

### Resizing options
Determine how the container frame responds to changes made to layers inside it:

- Set it to **Hug** if you want the frame to be resized depending on the size of its contents.
- Set height or width (or both) to **Fixed** if you want the frame to remain unchanged regardless of the size of its contents.

### Layout orientation
Set a **vertical** or **horizontal orientation** for elements in an auto layout. 

Vertical orientation arranges elements along the **Y axis**, and horizontal orientation places them on the **X axis**. 

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_orientation.png" height="auto"><source src="/public/autolayout_orientation.mp4" type="video/mp4"></video>

<div class="callout callout--info">
    <p><strong>* Note:</strong> To combine both these options, you’ll need to nest auto layout frames in a larger frame.</p>
</div>


### Alignment controls
Align your layers within the auto layout. 

Note that in an auto layout frame, you can’t control the alignment of individual layers, so this section of the Inspector will be grayed out:

<embed type="image/svg+xml" alt="alignment_inactive" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/xijK96Ci_E6igWt3wRrGYA.svg" width="844" /> 

Change alignment by: 

- Clicking on the sections of the square outline or the lines in the middle.
- Dragging the alignment blocks to the border you need.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_alignment.png" height="auto"><source src="/public/autolayout_alignment.mp4" type="video/mp4"></video>

### Element spacing
Define the spacing between elements in an auto layout by:

- Entering the values in the **Spacing** fields.
- Dragging the values in the fields up or down.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_spacing.png" height="auto"><source src="/public/autolayout_spacing.mp4" type="video/mp4"></video>

### Padding
Determine the distance from elements to the borders of the container frame.

Like with element spacing:

- Enter the values in the **Padding** fields.
- Drag the values in the fields up or down.


### Lock/unlock right and bottom padding
When you change left or top padding, right and bottom padding will mirror the new values. 

To change padding for individual sides, click <embed type="image/svg+xml" alt="locked" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/9r2_b8ypjUKmhaDAULXaGQ.svg" width="16" />. 

<div class="callout callout--info">
    <p><strong>Note:</strong> If you lock the padding again (click <embed type="image/svg+xml" alt="unlocked" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/6oF1SM54uUez1oG4Dm50rA.svg" width="16" />) after changing values for individual sides, the altered padding values won't revert back to match the opposite side. Enter a matching value on one side of the padding to synchronize the values once more.</p>
</div>


### Distribution options
Control the way elements are distributed within the auto layout:

- With the **Packed** option active, you can freely change the spacing between elements and the padding around them. 
- **Distribute** creates equal spacing between elements depending on the padding. You will only be able to change padding values, while element spacing will be set automatically.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_distribute.png" height="auto"><source src="/public/autolayout_distribute.mp4" type="video/mp4"></video>

### Stacking behavior
Determine how elements are stacked when spacing between them is negative. 

This is useful for designing elements that may overlap in a layout: avatar pictures, images, slides, cards, and so on.

The default stacking option is **First on top**, meaning that the top layer in the <a href="https://lunacy.docs.icons8.com/interface/#layer-list" target="_blank">Layer list</a> will be placed first in a stack. To reverse the order, set this option to **Last on top**:

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_stacking.png" height="auto"><source src="/public/autolayout_stacking.mp4" type="video/mp4"></video>

### Border inclusion 
Include or exclude borders from an auto layout. 

This is useful when, for instance, you have shapes with thick borders in your design: you can set auto layout to apply to just the shapes while ignoring their borders. 

If borders are included, they will be considered as parts of the shapes:

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_borders.png" height="auto"><source src="/public/autolayout_borders.mp4" type="video/mp4"></video>

<div class="callout callout--info">
    <p><strong>Note:</strong> This setting only affects the borders of the elements inside the auto layout, not the borders of the container frame.</p>
</div>
 

### Remove auto layout
Remove auto layout from the frame. 

The auto layout settings you applied to the frame will remain, but any further edits won’t have auto layout properties unless you enable the feature again.

### Individual layer properties
You can also change the properties of layers within your auto layout.

To do this, select a layer to open up its individual Auto layout properties. Here, you can:

- **Define the layer’s horizontal and vertical resizing behavior.**
    
    **Fixed** is the default option. You can freely change the size of the layer, and the auto layout will respond accordingly. 
    
    **Fill** makes the layer change its size proportionally when the container frame is resized. You won’t be able to manually resize the layer like with the Fixed option.

- **Set the layer to have an absolute position.**

    With [absolute position](#absolute-position) enabled, you can freely move the layer anywhere you want within the auto layout regardless of its general settings. It won’t be affected by any auto layout properties unless you disable it. 

<div class="callout callout--info">
    <p><strong>Note:</strong> Once a layer has an absolute position, you’ll be able to set constraint options for it. Read in detail about those <a href="https://lunacy.docs.icons8.com/autolayout/#constraint-options">below</a>.</p>
</div>


## [Removing elements from an auto layout](#removing-elements-from-auto-layout)

To remove an element from an auto layout frame:

- Click on it and drag it out of the frame. The remaining elements will adapt to the change based on the auto layout properties.
- Select the element in the Layer list and press `Del`.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_remove.png" height="auto"><source src="/public/autolayout_remove.mp4" type="video/mp4"></video>

## [Changing elements in auto layouts](#changing-elements-in-auto-layout)

This section will go over:

- How changes in individual elements affect the overall auto layout.
- The absolute position feature and how it excludes elements from auto layouts while keeping them in the frame.
- Constraint options and how they influence the behavior of elements in an auto layout.
- Resetting component overrides in an auto layout.

### [Changing auto layout elements](#changing-auto-layout-elements)

Auto layout frames will adapt to changes in child element size based on your settings. 

Here are a few examples of how an auto layout changes depending on the resizing options set for the container frame:


1. The width and height of the auto layout frame are set to **Hug**, so they change depending on the size of the layers inside it:

    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_changes_1.png" height="auto"><source src="/public/autolayout_changes_1.mp4" type="video/mp4"></video>

2. Width is **Fixed**, and height is set to **Hug**. When the width of the elements changes, the width of the parent frame stays the same:

    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_changes_2.png" height="auto"><source src="/public/autolayout_changes_2.mp4" type="video/mp4"></video>

    Meanwhile, the frame’s height adapts dynamically when the height of the elements changes:

3. The width and height of the auto layout frame are **Fixed**, so they stay static regardless of the changing width and height of the layers:

    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_changes_3.png" height="auto"><source src="/public/autolayout_changes_3.mp4" type="video/mp4"></video>

### [Absolute position](#absolute-position)

If you need an element in an auto layout to remain independent from auto layout settings:

1. Select it in the Layer list or on the frame.
2. Click <embed type="image/svg+xml" alt="absolute_position" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/Qrn3aEpOwUKPFIlbhOJ_AQ.svg" width="16" /> in the Inspector. 

The element now has an absolute position. You can move it freely within the auto layout and keep it static regardless of any resizing changes, like in the video below.

Here, we're adding a logo to an article preview card. At first, we just dragged the logo into the frame. It became part of the auto layout, perfectly aligned along the existing text layers. However, we needed the logo at the top of the card, a bit to the left of the main layout with the texts:


<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_absolute.png" height="auto"><source src="/public/autolayout_absolute.mp4" type="video/mp4"></video>

To position a layer in any location inside an auto layout:

1. Select the layer and enable absolute position for it by clicking <embed type="image/svg+xml" alt="absolute_position" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/Qrn3aEpOwUKPFIlbhOJ_AQ.svg" width="16" />. It will be detached from the auto layout while staying in the frame, and you can then freely move it around the layout.
2. Drag the layer wherever you want and leave it be. Now, when you edit anything else in the frame, the layer will be unaffected.

### [Constraint options](#constraint-options)

<a href="https://lunacy.docs.icons8.com/layers/#resizing-constraints" target="_blank">Constraints</a> define resizing behavior for layers in groups, components, or frames. They are also accessible for elements in auto layout frames that are set to absolute position.

Once you set a layer to have an absolute position, the Constraints section will open up in the Inspector:

<embed type="image/svg+xml" alt="autolayout_constraint_options" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/waaLr-Ma_0GZevvfTChSOA.svg" width="844" /> 

- The **Pin to Edge** controls pin a layer to one or several edges of the auto layout frame. This means that when you resize the frame, the distance between the layer and the edges it is pinned to will not change.
- The **Fix width** and **Fix height** checkboxes do just that: fix the width and/or height of an element in the auto layout. Whenever you resize the parent frame, the checked off properties won’t be altered. 


### [Resetting overrides](#resetting-overrides)

When working with components and creating their instances, you can reset overrides for component instances. This means that, if you made changes to a component instance, you can reset it to match its main component once more.

When you’re working with an auto layout frame that itself is also a component or contains component instances, you'll have two override buttons (<embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/49CEooqv1U6WWWTQz7oAbg.svg" width="16" />) in the Inspector. Don’t let them confuse you:

- The Reset overrides (<embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/49CEooqv1U6WWWTQz7oAbg.svg" width="16" />)  button appears in the Auto layout section when you make changes to the **auto layout properties** of a component. Click it to reset these properties and return them to the defaults of the main component.
- The same button appears in the **Component** section when you make changes to the **auto layout properties of a component** and/or to **distinct components in the auto layout** frame. Use it to reset **all overrides** for the component: both the auto layout properties and any individual component changes.

Here’s how it works:

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/autolayout_reset_overrides.png" height="auto"><source src="/public/autolayout_reset_overrides.mp4" type="video/mp4"></video>

In the video, there are three component instances nested in a frame that itself is a component. We duplicate it and make changes to the new frame:

1. Changing the element spacing.
2. Changing the padding.
3. Changing one of the button instances' color.

We then press <embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/49CEooqv1U6WWWTQz7oAbg.svg" width="16" /> in the **Auto layout** section to reset just the auto layout overrides (spacing and padding). We undo this, then press <embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/49CEooqv1U6WWWTQz7oAbg.svg" width="16" /> in the **Components** section to reset all overrides (spacing, padding, **and** the button color.)

## [Combining auto layouts](#combining-auto-layouts)

You can combine several auto layouts and nest simple auto layouts to build complex, responsive interfaces. This way, you’ll be able to select any distinct element of your design and alter its settings so that the overall layout adapts to changes based on the settings you choose.

Here’s an example of how you can combine auto layouts for a simple news website:

<embed type="image/svg+xml" alt="autolayout_nesting" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/hmBh764fmkKAeJu4K6ZGVw.svg" width="844" /> 

From the top down:

1. The **header** is a horizontal auto layout containing the logo, the top menu, and the search button. 
2. A smaller auto layout is nested in the header: the **top menu**, which contains links to the other pages of the website.
3. The **left sidebar** is a vertical auto layout.
4. More vertical auto layouts appear in the middle of the website: **news post previews** follow a strict format consisting of a picture, a title, and a subtitle.
5. Several **posts in a row** form a 4-post horizontal auto layout.

Auto layouts are even more powerful when paired with reusable components and are closely connected to layer and frame properties. Check out these sections of the documentation for information on those:

<a href="https://lunacy.docs.icons8.com/components/" target="_blank">Components</a>

<a href="https://lunacy.docs.icons8.com/basics/#frames" target="_blank">Frames</a>

<a href="https://lunacy.docs.icons8.com/layers/" target="_blank">Layers</a>