---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Layer and text styles
description: Learn how to speed up your work with layer and text styles
icon: 'rich-text-converter'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Libraries
        url: '/libraries'
    prev:
        content: Components
        url: '/components'
---

Layer and text styles are predefined sets of object and text properties that you can reuse in your designs. With the help of styles you can dramatically save your time and make your designs look more professional and consistent.  When you modify a style, Lunacy immediately applies them to all the objects using this style.

You will store your custom layer and text styles on the **Styles** tab.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/layerstyles-mainview.png" height="auto"><source src="/public/styles-mainview.mp4" type="video/mp4"></video>


## [Layer styles](#layer-styles)

Layer style properties include:

* Fills
* Borders
* Shadows
* Inner shadows
* Blurs

They appear in the Inspector when you select an object.

![Layer properties](public/properties_new1.png)

For details on styling properties, refer to the <a href="https://docs.icons8.com/styling" target="_blank">Styling</a> section of our documentation.

### Adding a layer style

There are two ways of adding layer styles.

**Way 1.** By clicking the plus icon in the left panel and defining all the required properties in the Inspector.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/layerstyles-wayoneph.png" height="auto"><source src="/public/layerstyles-wayone.mp4" type="video/mp4"></video>

**Way 2.** By first defining the properties of an object and then saving them as a style. 

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/layerstyles-waytwoph.png" height="auto"><source src="/public/layerstyles-waytwo.mp4" type="video/mp4"></video>


### Applying styles to objects

Click the required object and select the style you want to apply to it from the menu in the Inspector.

![Applying styles](public/applyingstyles_new1.png)

Optionally, after selecting the object you can click the required style in the left panel and then click the replacement icon as shown below.

![Applying styles. Way 2](public/applyingstyles2_new1.png)

You can also apply a style to multiple selected objects at a time (see the demo below).

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/layerstyles-applyph.png" height="auto"><source src="/public/layerstyles-apply.mp4" type="video/mp4"></video>


### Modifying a layer style

There are two ways to modify a style.

**Way 1.**

1. Swith to the **Styles** tab, then click the style you want to modify. The **Edit Layer Style** panel appears on the right.
2. Use the panel to make the required changes.
3. Click the **Save** button below the preview window. To discard all changes that you have made but have not saved yet, use the **Reset** button.

![Modifying a layer style](public/modifystyle_new11.png)

**Way 2.**

1. Select an object using the style you want to modify.
2. Make the required changes in the Inspector. When you are done, you will see an asterisk (*) next to the style name in the Inspector. It indicates that changes have been made to the style.

    ![Modifying a layer style](public/modifystyle_new22.png)

3. Use one of the following options:

    * **Create New Layer Style** (1): Saves the changes to a new style.
    * **Update Style** (2): Saves the changes to the existing style.
    * **Reset Style** (3) : Discards all changes that you have made.


### Detaching a style

Select the required object and click the **Detach style** button shown below.

![Detaching a style](public/detaching1.png)

The appearance of the object remains the same, but it is no longer associated with the style and further changes to the style will not affect the object.

### Organizing styles

It is a good practice to organize styles into categories similar to those shown in the figure below.

![Layer style categories](public/layers-organizing1.png)

To divide your styles into categories, consider the following format of style names:

`Category name / Subcategory name / Style name`  

For example, to organize your styles of backgrounds, you can give them the following names:

* Backgrounds / Light
* Backgrounds / Dark
* etc.

You don't need to manually create categories and subcategories. Lunacy will show them automatically based on style names. The number of nesting levels for subcategories is not limited.

To rename a style:

1. In the left panel, right-click the style and select **Rename** on the displayed menu or press  `F2`, if you prefer shortcuts.
2. Type the new name and press `Enter`.

To rename a style category, right-click the category you want to rename and select the respective command on the displayed menu.

Style categories and styles appear in the A-Z order in the left panel.

To unfold/fold the content of all style categories, right-click anywhere over the category list and select **Expand All/Collapse All** on the displayed menu.

### Duplicating styles

You can duplicate your existing styles and quickly create new ones based on their parents.

To duplicate a style:

* Click the style in the list and press `Ctrl + D`.

    OR
* Right-click the style in the list and select **Duplicate** on the displayed menu.

Also, you can select and duplicate several styles at a time.

### Copying styles between documents

To copy styles between documents:

1. Select one or several styles in the source document (hold down `Ctrl` or `Shift` to select multiple items).
2. Right-click and select **Copy style** on the displayed menu.
3. Switch to the target document.
4. Open the **Styles** tab.
5. Right-click over the left panel and select **Paste style** on the displayed menu.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layerstyles-copyph.png" height="auto"><source src="/public/layerstyles-copy.mp4" type="video/mp4"></video>

### Deleting styles and categories

To delete a style:

* Click the style in the list and press `Delete`.

    OR
* Right-click the style in the list and select **Delete** on the displayed menu.

To delete a style category, right-click the category you want to delete and select the respective command on the displayed menu.

Also, you can select and delete several styles at a time.

## Text styles

The only difference between text styles and [layer styles](#layer-styles)  is that in addition to such properties as fills, shadows and blurs, text styles also feature a set of typography properties that include font size, font family, line spacing and others. All the procedures with text styles are the same as in layer styles.

![Text styles](public/layerstyles-text.png)

See also the <a href="https://docs.icons8.com/text/" target="_blank">Text</a> section for tips on working with text objects.

## External styles

You can make use of layer and text styles from UI kits supplied with Lunacy or your own files. In the latter case you should first add this file to the **UI Kits** library. For details about UI kits, click <a href="https://docs.icons8.com/libraries/#ui-kits" target="_blank">here</a>.

To apply an external style to an object:

1. Select the object on the canvas.
2. In the **Appearance** section of the Inspector, click the down arrowhead to invoke the menu.
3. In the **UI kits** section of the menu, navigate to the required style.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/layerstyles-externalph.png" height="auto"><source src="/public/layerstyles-external.mp4" type="video/mp4"></video>

You cannot make changes to external styles, but you can use the **Unlink from Library** feature. This feature will add a copy of the style you need to your document assets, i.e. to the list of your layer or text styles. After that, you can do whatever you want with the unlinked style as with any other style within your document.

There are two ways to unlink styles:

**Way 1.** Select an object with the style you want to unlink, then click **Unlink from Library** in the Inspector.

**Way 2.** Select a style or several styles in a UI kit, then right-click and select **Unlink from Library** on the context menu.

The demo below shows both these methods.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/layerstyles-externalunlinkph.png" height="auto"><source src="/public/layerstyles-externalunlink.mp4" type="video/mp4"></video>

