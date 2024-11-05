---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Color variables
description: How to create and manage color variables
icon: 'paint-palette'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Layer and text styles
        url: '/layerstyles'
    prev:
        content: Styling
        url: '/styling'
---


Color variables are reusable **solid** color presets that help you maintain color consistency across your designs. Once you create a color variable, you can apply it to multiple layers. If you update the variable, all layers using that color will update automatically, making it easier to manage themes and ensure uniformity.

Color variables can also be organized into groups, similar to <a href="https://lunacy.docs.icons8.com/components/" target="_blank">components</a> and <a href="https://lunacy.docs.icons8.com/layerstyles/" target="_blank">styles</a>, making it simple to switch or edit colors across your design project.

By default, the **Variables** tab is populated with the variables from the document <a href="https://lunacy.docs.icons8.com/layerstyles/#color-palettes-and-auto-shape-colors" target="_blank">palette</a>. However, you're free to delete them, and create your own color variables.


## Creating a color variable

1. Select a layer and open the **Color Picker**.
2. Choose your desired color, then click **Create Color Variable**.
3. Enter a name for the variable, or keep the auto-assigned one (you can rename it anytime).

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/colorvariables_ph.png" height="auto"><source src="/public/colorvariables.mp4" type="video/mp4"></video>

## Applying a color variable to a Layer

1. Select the layer you want to style.
2. Choose the color variable from the color dropdown in the right panel (see the polygon in the video above).


## Organizing color variables

For convenience, you can organize color variables into groups.

To create groups:

* Use slashes in the variable names. For example, `Group name / Variable name` or `Group name / Subgroup name / Variable name`, etc.

  OR

* Holding down `Shift`, select the variables in the left panel, then open the context menu and click **Group**.


## Editing and managing variables

- To edit a variable, click ![settings icon](/public/settingsicon.png) next to it in the left panel.
- To delete or rename a variable or group, right-click the variable in the left panel and choose the desired option from the context menu.

<embed type="image/svg+xml" alt="managing_color variables" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/t1HQ0MFTT0GYedRnK3ODZw.svg" /> 


<div class="callout callout--info">
    <p><strong>Note:</strong> If a color variable has an auto-assigned name, it will update automatically when you edit the color. If you’ve set a custom name, the name will stay the same. </p>
</div>