---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Components
description: Increase the speed and productivity of your design workflow with reusable components
icon: 'refresh'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Auto layouts
        url: '/autolayout'
    prev:
        content: Layer and text styles
        url: '/layerstyles'
---

**Components** are reusable elements that you can use throughout your design. The main advantage of components is being able to edit several elements at once, like this:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/component_basics.png" height="auto"><source src="/public/component_basics.mp4" type="video/mp4"></video>

Using components, you can easily create consistent designs and optimize your workflow when working on large designs with repeating or similar elements. 

## [Component basics](component-basics)

These are the basic terms related to components and their functions:

* **Main component**. The original layer that you convert into a component. 

* **Component instance**. You create a component **instance** any time you duplicate a main component. 

    When you edit a main component, the changes apply to all of its instances at once.

* **Override**. When you modify an instance, you create an **override**. 

    The main component won't be affected, and if you edit it later, the changes won't apply to instances with overrides.

* **Component page**. A dedicated document page used for storing main components. Lunacy adds it automatically when you create a component.

* **Component state**. Components from the same category or subcategory are called **component states**. They define the different styles for one component.


* **Nested components**. You can nest several components in a more complex component. 

    This gives you the most freedom and flexibility in editing your designs, and it’s an even more powerful feature when coupled with <a href="https://lunacy.docs.icons8.com/autolayout/#nested-auto-layouts" target="_blank">nested auto layouts</a>. 

## [Creating components](creating-components)

To **create a component**:

1. Select the layer you want to convert into a component.
2. Click `+` in the **Component** section of the right panel or press `Ctrl + Alt + K` (`⌘ + ⌥ + K`).

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/creating_components_methods.png" height="auto"><source src="/public/creating_components_methods.mp4" type="video/mp4"></video>

You can also select a layer and click <embed type="image/svg+xml" alt="go_to_main" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/0yVpQqG2_kmdN0fYegHJ4g.svg" width="16" /> in the context toolbar at the top of the canvas or select the **Create component** option on the context menu.

### Layers vs. Frames

When you create a component from a <a href="https://lunacy.docs.icons8.com/layers/" target="_blank">layer or layer group</a>, Lunacy automatically frames it and transfers it to a separate Components page where it’s stored as a main component. An instance of the newly created component remains on the canvas.

If you create a component out of a <a href="https://lunacy.docs.icons8.com/basics/#frames" target="_blank">frame</a>, it will stay on the canvas as a main component, which you can then copy to create instances.

The difference is shown here:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/component_frame_layer_difference.png" height="auto"><source src="/public/component_frame_layer_difference.mp4" type="video/mp4"></video>

Find out more about [component pages](#components-page) below.

### Components and instances in the Layer list

<embed type="image/svg+xml" alt="components_instances_in_layer_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/f8iTdn1orUiVLyZVImJClg.svg" width="844" /> 

Main components are bold and colored pink (<embed type="image/svg+xml" alt="color_code_F15085" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/b6VBjbQ0FEaLpb01JY4uEw.svg" width="12" />) in the <a href="https://lunacy.docs.icons8.com/interface/#layer-list" target="_blank">Layer list</a>, and there’s a component symbol (<embed type="image/svg+xml" alt="go_to_main_component" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/Cen_pPCa7E62ECNOB7GoKg.svg" width="16" />) in front of their name.

Component instance names aren’t bold but have the instance symbol (<embed type="image/svg+xml" alt="instance_icon" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/7zBFwNg0JEKWT8fAiIVn9A.svg" width="16" />) and the same pink color. When they’re selected, their properties and options appear in the **Component** section of the right panel.

## [Reusing components](reusing-components)

All the components in your document appear in the **Components tab** in the left panel.

To **add a component instance** to the canvas, drag it from the left panel to where you want to place it:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/reusing_components_left_panel.png" height="auto"><source src="/public/reusing_components_left_panel.mp4" type="video/mp4"></video>

<div class="callout callout--info"> <p><strong>Note:</strong> If you used any components from built-in or manually created <a href="https://lunacy.docs.icons8.com/libraries/#ui-kits" target="_blank">UI kits</a>, they will also appear in the Components tab.</p> </div>

Right-click a component in the left panel to bring up the context menu with these options:

- Rename component
- Edit component
- Delete component
- Duplicate component
- Group
- Expand all
- Collapse all

## [Managing components](managing-components)

### [Main component properties](#main-component-properties)

When you select a main component, the **Component** section in the right panel displays these properties:

<embed type="image/svg+xml" alt="component_main_properties" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/NcGkZHpkfUadWBBYQjj0QA.svg" width="844" /> 

* **Component type**. Select one of the presets to organize your components by type. 

    <div class="callout callout--info"> <p><strong>Note:</strong> This setting currently has no visible effect. It’s reserved for future use in upcoming releases.</p> </div>

* **Resizing behavior**. Choose whether to adjust the content of the component when it’s resized.

* **Color picker, opacity, and visibility**. Set the component’s background color and show/hide it by pressing the <embed type="image/svg+xml" alt="eye_hide" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/Aa8CJl234kaxZXUTplkR4g.svg" width="24" /> / <embed type="image/svg+xml" alt="eye_show" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/y6Qj385WoUu0be9H0CO3lA.svg" width="20" /> icons.

* **Include background in export**. Include/exclude the component’s background when exporting it.

* **Include in instances**. Include/exclude the component’s background in its instances.

### [Components page](components-page)

You can use **Components page** that Lunacy generates automatically to store all of your main components. Alternatively, you can turn any page into a **Components page**:

1. Right-click the page in the **Page list**.
2. Select **Set as Components Page**.

<div class="callout callout--info"> <p><strong>Note:</strong> If you set one of your pages as a Components page, make sure its primary purpose is to store components. You’ll avoid confusion, and it will be easier to organize all of your design elements.</p> </div>

## [Component states](#component-states)

You can create several **states** for a component and switch between them as needed in the **right panel**. 

To **create a component state**:

1. Select a component instance.
2. Click `+` in the **Component** section of the **right panel** or press `Ctrl + Alt + P` / `⌘ + ⌥ + P`.
3. Adjust your component for the new state.
4. Name it.
5. Click on any empty area on the canvas.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/creating_component_state.png" height="auto"><source src="/public/creating_component_state.mp4" type="video/mp4"></video>

A new component will appear near the default main component, defining the new component state. 

Lunacy also changes the name of components when you create new states, automatically placing them into [categories](#organizing-components). You can edit categories anytime in the **Components tab**.

New component states for a distinct component will be displayed in the right panel as you select the component’s instances.

To **switch through component states**:

1. Select a component instance.
2. Choose the new component state in the **right panel**.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/switching-component_state.png" height="auto"><source src="/public/switching-component_state.mp4" type="video/mp4"></video>

<div class="callout callout--info"> <p><strong>Note:</strong> Switching component states doesn’t affect overrides. This means that if you change the component state for an instance with overrides, the overrides you created will stay unchanged.</p> </div>

## Organizing components

As your document grows along with the number of components in it, you'll probably want to organize them so you can quickly find the necessary component when you need it. 

Componenet categories and subcategories in the **Components tab**:

<embed type="image/svg+xml" alt="categories_components" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/TDamndg4PkCuDPWyD2wrEQ.svg" width="844" /> 

They also appear in the **Component state** dropdown menu in the right panel.

You can manually place your components in categories in the left panel (the **Group** option on the context menu) or use `/` in component names, like this: 

`Category name / Subcategory name /Component name`. 

Here's an example with just the category name and component name:

<embed type="image/svg+xml" alt="button_components_categories" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/HwE5IunpnkSNd8NeTlGZ3g.svg" width="844" /> 

Still, the quickest way to categorize your components is to create [component states](#component-states).

### Deleting components

Delete main components from the **Components tab** (using the [context menu](#components-tab-context-menu)) or the **Components page** (simply delete the component frame). 

When you delete a component, all of its instances turn into frames.

## [Editing components](#editing-components)

You can **edit a main component**:

- In the **Component editor**.
- Directly in the **Components page**.

### Making edits in the Component editor

1. Select a component instance and press `Enter` or choose **Edit component** in the context menu.
2. The main component will appear over the selected instance, while the rest of the canvas will be dimmed. The contents of the component will appear in the **Layer list**.
3. Edit the component.
4. Click <embed type="image/svg+xml" alt="exit_component_editor" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/CafkdkTnjUyKoai6_Ky0UQ.svg" width="16" /> on the context toolbar, click anywhere over the dimmed area, or press `Esc` to exit the component editor.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_components_1.png" height="auto"><source src="/public/editing_components_1.mp4" type="video/mp4"></video>

### Making edits in the Components page

1. Right-click on an instance and select **Go to Main Component** in the **right panel** or manually switch to the **Components page**.
2. Edit the required component.
3. Once you’re done:
    - If you used the **Go to Main Component** option, click the **Back to instance** button at the top left corner of the canvas.
    - If you manually opened the Components page, simply switch back to the previous page to continue working with the document.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/editing_components_2.png" height="auto"><source src="/public/editing_components_2.mp4" type="video/mp4"></video>

## [Swapping components](#swapping-components)

Swap between instances from entirely different components:

1. Select the component instance you want to replace.
2. Go to the **Components tab**.
3. Find the required component and click <embed type="image/svg+xml" alt="swap_component Copy" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/FwHiX5HVcE23ZwIlDilhyw.svg" width="16" /> next to it:

     <video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/components_swap_tab.png" height="auto"><source src="/public/components_swap_tab.mp4" type="video/mp4"></video>
    
## [Managing instances](#managing-instances)

We already covered how to create component instances to the canvas from the **Components tab**. You can also duplicate or copy/paste instances directly onto the canvas. 

With a main component or instance selected:

- Press `Ctrl + D` or `Ctrl + C → Ctrl + V`.
- Hold down `Alt`, then drag to place an instance on the canvas.

### Component instance properties

For a component instance, the **Component** section in the **right panel** will look like this:

<embed type="image/svg+xml" alt="properties_instance_right_panel" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/4kDdeg2MFU2IYfMEmxPp9w.svg" width="844" /> 

**Component state menu**. A dropdown menu displaying the current state of the component. When opened, it shows all other components and UI kits available in the document. 

If you didn’t create any component states, this property will read **Default State**. 

**Component states**. Select one of the presets to organize your components by type. Changing this for a component instance will affect its main component and vice versa.

**Detach from component**. Detach the instance from its main component or press `Ctrl + Alt + D` (`⌘ + ⌥ + B`).

**Reset instance size**. If you resized the instance, click this button to revert it to the size of the main component.

**Go to main component**. Redirects you to the instance's main component.

**Component type**. See the corresponding [main component property](#main-component-properties).

Once you modify an instance, the  <embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/PmMyhR72A0GyShZvh91lgA.svg"  width="16" > button appears in this section, indicating that the instance has an override:

<embed type="image/svg+xml" alt="instance_reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/5lHhTwB-kkq7WL8ZYDn_QQ.svg" width="844" /> 

Click it to **reset the override** and revert the instance back to the style of the main component. 


## Creating overrides

To reiterate, an override is any edit you make to a component instance. Let's go over them in detail.

Click `▾` next to the title of a component instance in the Layer list to expand its contents. You can modify all the layers inside it to apply the changes to **this component instance only**, creating an override:

<embed type="image/svg+xml" alt="instance_in_layer_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/qtjn2JJXVkixZRrCeXVMiA.svg" width="844" /> 

Some basic overrides you can make are changes to layer color, text, or image content.

Below, we have a simple example of a card component consisted of an image (an oval with an **Image** fill) and a labeled button. We make three types of overrides to the card, changing the **button color**, the **button label**, and the **image**. 

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/creating_simple_overrides.png" height="auto"><source src="/public/creating_simple_overrides.mp4" type="video/mp4"></video>

You can easily reset all of these overrides by pressing <embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/PmMyhR72A0GyShZvh91lgA.svg"  width="16" > in the **Component** section, like in the demo above. 

Here’s a full list of layers and properties you can create overrides for (depending on the layer types it contains):

- Fills and images
- Text content and properties
- Layer and text styles
- Auto layouts
- Tints
- Hotspots

### Understanding overrides

To understand how all of them work, we'll use a more complex UI. Also, instead of making some overrides (like text and image edits) manually, we'll use some of Lunacy's handy time-saving features like <a href="https://lunacy.docs.icons8.com/text/#text-generation-and-text-snippets" target="_blank">text generation</a> and the <a href="https://lunacy.docs.icons8.com/tools/#avatar-tool" target="_blank">Avatar tool</a>.

To better understand how component overrides work, let’s dive right into practice to see the power and versatility of components firsthand.

Below, we have a profile card UI:

<embed type="image/svg+xml" alt="component_card_ui_elements" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/6BMwQzFTN0iOtpjr70XqOw.svg" width="844"/> 

All the components used in the layout are on the left, and their instances are nested in the profile card frame, which is a component itself.

When using complex components such as this one, you can easily change the states of the nested components, manually edit them, or modify all instances by adjusting the main component. 

 Let’s go over the overrides we can make in these cards step by step.

### Fills and images

The two images in the cards are easily editable. The background behind the profile photo is a simple shape with its **Fill** set to **Image**.

To change it in an instance, you only need to click it, then click the **color icon** in the **Fill** section and choose an image:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/component_fill_image.png" height="auto"><source src="/public/component_fill_image.mp4" type="video/mp4"></video>

You can do the same with the profile picture, provided it's a circle with an **Image** fill. To speed up the process, we recommend using Lunacy’s Avatar tool for placeholder profile pictures: simply press `Q` to place a randomly generated avatar picture directly onto the canvas. 

Now, when you make a component instance, a new avatar is generated automatically:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/component_copying_cards.png" height="auto"><source src="/public/component_copying_cards.mp4" type="video/mp4"></video>


### Text content and properties

You can easily change the text and/or its properties in the component instance text layers. 

Use the **Text** section in the right panel to:

- Change the **content** of the text layer.
- Set new **fonts** and **text colors**.
- Edit **typographic properties**.
- Alter the text’s **advanced settings**.

#### Using generated texts
In the demo above, along with the avatar, nearly all of the texts changed to randomized placeholders as well. This is because most of the texts in the layout were generated by Lunacy’s text generation feature.

An extensive list of text generation options appears whenever you add a text layer using the text tool (`T`). It creates randomized texts for your layouts so you don’t have to do the work yourself. Read in more detail about it <a href="https://lunacy.docs.icons8.com/tips/#text-generation" target="_blank">here</a>.

So, when we were creating component instances, new texts appeared automatically.  

### Layer and text styles

In the main component, we used text and color styles to design our layouts. This is a convenient feature for keeping your designs consistent and easily editable. 

Simply switch styles, create new ones, or edit and delete existing styles in the **Style** section of the right panel:

<embed type="image/svg+xml" alt="style_dropdown_menu" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/_1_XLrY8B0WTqyjneVrQaw.svg" width="844" /> 


### Auto layout overrides

When you modify auto layout settings in instances, a **Reset overrides** button appears in the **Auto layout** section of the right panel:

<embed type="image/svg+xml" alt="component_auto_layout_reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/nfoh4DzycUK4PGMjgu8Xrg.svg" width="844" /> 

Use it to reset **only the auto layout overrides** in an instance:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/component_auto_layout_instance.png" height="auto"><source src="/public/component_auto_layout_instance.mp4" type="video/mp4"></video>

Press the same button in the **Components** section to **reset all overrides** in the instance, **including** auto layout overrides. Read more about this feature <a href="https://lunacy.docs.icons8.com/autolayout/#auto-layout-overrides" target="_blank">here</a>.

### Tint overrides

A **tint** is a property you can add to a layer group or component. It’s useful for adding color to elements with semi-transparent parts or complex icons. Read more about them <a href="https://lunacy.docs.icons8.com/styling/#tints" target="_blank">here</a>.

Tint overrides are useful for designing tabs or panels with elements that can have different states expressed through different colors.

<div class="callout callout--info"> <p><strong>Note:</strong> You'll need add default tints before you can create tint overrides.</p> </div>

The demo below shows three instances of the same component. We applied a tint override to one of them, then moved to the main component and modified the default tint. The change applied only to the instances without the override:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/component_tint_overrides.png" height="auto"><source src="/public/component_tint_overrides.mp4" type="video/mp4"></video>

When you apply an override, the <embed type="image/svg+xml" alt="reset_overrides" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/PmMyhR72A0GyShZvh91lgA.svg"  width="16" > button appears in the **Tint** section of the right panel. Use it to remove only the tint override.

### Hotspot overrides

If there’s a <a href="https://lunacy.docs.icons8.com/prototyping/#hotspots" target="_blank">hotspot</a> in your layout, you can override its target frame.

## Components and auto layouts

You’ve seen how using components makes the design process faster and much easier. Adding auto layouts to the mix speeds things up even more. 

Creating components with auto layout, then nesting those in larger auto layout frames makes it easy to manage complex designs and quickly update them when needed. 

If any spacing or padding distances seem off or you’re still in drafting mode, using components and auto layouts is the fastest way to test different versions of your designs.

For example, there’s quite a few auto layouts in our profile card examples:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/component_auto_layout_main.png" height="auto"><source src="/public/component_auto_layout_main.mp4" type="video/mp4"></video>


## Component-related shortcuts and menu options 

To recap, here’s a list of context menu options and shortcuts you can use to work with components, along with corresponding shortcuts, if available.

### Main component options

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   | Description   | Windows and Linux Shortcut / Menu Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | MacOS Shortcut / Menu Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| -- | -- | ----------------------------- | ----------------------------- |
| **Create Component**           | Create a new component from a layer. You can also click <embed type="image/svg+xml" alt="go_to_main" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/0yVpQqG2_kmdN0fYegHJ4g.svg" width="16" /> in the context toolbar at the top of the canvas.      | `Ctrl + Alt + K`      | `⌘ + ⌥ + K`    |
| **Convert Component to Frame** | Right-click a main component and select the option to convert it into a frame. All of its instances will also turn into frames. | `Ctrl + Shift + Y`     | `⌘ + Shift + Y`              |


### Component instance options

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     | Description    | Windows and Linux Shortcut / Menu Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| MacOS Shortcut / Menu Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  |
| -- | -- | ----------------------------- | ----------------------- |
| **Create New Component State** | Add a new state for the component.                  | `Ctrl + Alt + S`      | `⌘ + ⌥ + S`  |
| **Go to Main Component**       | Brings you to the main component of the selected instance. To return to the instance from the main component, click the **Back to instance** button that appears at the top-left corner of the canvas.   | `Ctrl + Alt + E`       | `⌘ + ⌥ + E`     |
| **Detach from Components**     | When you detach an instance from its main component, it becomes a group. All further changes to the main component will no longer apply to the detached instance.  | `Ctrl + Alt + D`            | `⌘ + ⌥ + B`     |
| **Detach from Library**        | This command only applies to components from <a href="https://lunacy.docs.icons8.com/libraries/#ui-kits" target="_blank">UI kits</a>. Detached components become native to the document and appear on the **Components tab** and the **Components page**. | `-`      | `-`|
| **Reset Instance Size**        | Restore the original size of any component instance.     | `Ctrl + Alt + R`  | `⌘ + ⌥ + R`        |
| **Reset Overrides**  | Use this command to undo all overrides and revert the instance to the style of its main component. You can also use the Reset overrides button in the **Component** section of the right panel.   | `-`   | `-`  |
| **Send to Component page**     | This command only applies to main components and becomes available when a component isn't on the dedicated **Components page**.    | `-`   | `-`         |

