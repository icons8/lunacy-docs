---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Prototyping
description: Learn how to create interactive prototypes in Lunacy
icon: 'tree-structure'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Linked design
        url: '/linked_design'
    prev:
        content: Export
        url: '/export'
---

You can build **prototypes** to test and polish the UX of your designs before sending them over to development.

Prototyping is based on linking <a href="https://lunacy.docs.icons8.com/layers/#frames" target="_blank">frames</a> and creating interactive zones, or <a href="https://lunacy.docs.icons8.com/tools/#hotspot-tool" target="_blank">hotspots</a>, on your designs so you can preview how your interface will change based on user actions.

<div class="callout callout--info">
    <p><strong>Note:</strong> If you are planning to add prototyping to your project, the use of frames is a must.</p>
</div>

## Creating a prototype

### [Linking frames](#linking-frames)

The easiest way to **create a prototype** is to add a link from one frame to another.

<embed type="image/svg+xml" alt="simple_prototype" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/3mVfxmKDUU2MYYUwYy24Vg.svg" width="844" /> 

Here’s how it works:

1. On a frame, select a layer for the user to interact with (e.g. a button).
2. In the right panel, click `+` next to the **Prototyping** section. An arrow-shaped prototyping link will appear.
3. Point the arrow to the target frame and click or use the **Target** dropdown list in the **Prototyping** section to set the target frame. With that, you have a basic prototype with a layer linked to a frame.
4. To make it a bit more versatile, we repeat the steps above and create a link from a layer in the second frame to **Frame 1**.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/prototyping_linking_frames.png" height="auto"><source src="/public/prototyping_linking_frames.mp4" type="video/mp4"></video>

## Previewing prototypes

To **preview a prototype**, select the frame you want to start with and click the **Play** button (<embed type="image/svg+xml" alt="Play" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/HD-TYiNcVEy5Npo_ePOa8w.svg" width="20" />) at the top right corner of the interface. The preview window will show up in your default browser.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/prototyping_preview.png" height="auto"><source src="/public/prototyping_preview.mp4" type="video/mp4"></video>

You can link your frames in any sequence you need to test out the user flow for your interfaces.

### Commenting on prototype previews

To **comment on a prototype** right from the browser, log in to your Lunacy account. The **Login** button appears once you hover the cursor at the top of the prototype window to display the top bar.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/prototyping_login.png" height="auto"><source src="/public/prototyping_login.mp4" type="video/mp4"></video>

To comment, click the **Comment** button on the top bar, leave a comment, then click <embed type="image/svg+xml" alt="Sent" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/n8l4ALF8uEizCWAyrGB8oQ.svg" width="20" /> or press `Shift + Enter` to post it.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/prototyping_comment.png" height="auto"><source src="/public/prototyping_comment.mp4" type="video/mp4"></video>

### Scrollable prototypes

To **create a scrollable prototype**, select a <a href="https://lunacy.docs.icons8.com/layers/#adding-frames" target="_blank">frame presets</a> and resize it vertically. 

Resized frames have the label **Resized** in the right panel:

<embed type="image/svg+xml" alt="resized_frame" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/EnFH9_mOfk6clL5HPibl1w.svg" /> 

<div class="callout callout--info">
    <p><strong>Note:</strong> You won't be able to scroll prototypes based on non-resized frames.</p>
</div>

Alternatively, you can <a href="https://lunacy.docs.icons8.com/layers/#custom-presets" target="_blank">create a custom preset</a>, then vertically resize it.

Preview the prototype as usual and scroll down to test out the interface.

## Hotspots

**Hotspots** are another convenient way to link frames for prototyping. These are special types of layers that acts as an interactive zone anywhere on a frame.

Hotspots come in handy when the size of an element you want to make interactive or tappable is too small for comfortable use. By adding a hotspot, you can enlarge the interactive area around the layer.

You can also use hotspots as parts of components and override their targets as needed.

There are two ways to **add a hotspot**:

- Use the <a href="https://lunacy.docs.icons8.com/tools/#hotspot-tool" target="_blank">Hotspot tool</a>.
- Select a layer linked to a frame, then click **Create separate hotspot layer** (<embed type="image/svg+xml" alt="create_separate_hotspot_layer" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/SaJ58Eks1Eqd3YhpYbWFkA.svg" width="20" />) in the **Prototyping** section of the right panel. This creates a hotspot of the same size as the selection frame around the layer. You can resize it as you need by dragging the layer’s bounding box handles.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/prototyping_hotspots.png" height="auto"><source src="/public/prototyping_hotspots.mp4" type="video/mp4"></video>

This is how hotspots and linked layers appear in the Layer list:

<embed type="image/svg+xml" alt="hotspots_in_layer_list" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/KCIGLOOhSUm3ATcGhwPdKw.svg" width="844" /> 

To **hide/show hotspots and prototyping links on the canvas**, enable/disable the **Show prototyping** option in the **Additional options** menu on the top bar:

<embed type="image/svg+xml" alt="prototyping_show_hide" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/kjIhPF4fKkOEfpSpQkaHBg.svg" width="844" /> 

To **delete a hotspot**, select it and press `Del`.

To **see the prototype in action**, you’ll need to preview it.

## Prototyping settings

Here are the settings that appear in the **Prototyping** section of the right panel when you select a layer linked to a frame or a hotspot:

<embed type="image/svg+xml" alt="prototype_settings" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/l5X9rZHOmUuYcNPAOfnRkA.svg" width="844" /> 

**Create separate hotspot layer.** Click it to create a hotspot over the selected layer.

**Remove link from layer.** Deletes the prototyping setting for the selected layer or deletes the selected hotspot.

**Target frame.** Displays the current target frame of the selected layer/hotspot. Open it to change the target frame and view all of the frames available in the document. In multi-page documents, the frames in this list are organized by pages (you can link frames that are on different pages).

Apart from the existing frames, the list has two more options:
- *None* → sets a null target.
- *Previous frame* → clicking a layer with this target redirects you back to the previous view.

**Go to hotspot target.** Clicking this button redirects you to the frame set as the target frame for the selected layer.

**Transition animations.** Determine the type of animation for the transitions between frames in the prototype.

**Fix the frame position on scroll.** Enable this setting if you want the selected layer to preserve its position when you scroll the screen (for instance, a floating button).

**Maintain scroll position after click.** With this checkbox enabled, scrollable frames preserve their position during the prototype preview. When you get back to the frame, it will be in the same position you left it. With the checkbox cleared, the frame will always return to the top.