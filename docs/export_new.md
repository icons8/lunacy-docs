---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Export
description: Learn all about Lunacy’s export options and settings
icon: 'folder-invoices'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Prototyping
        url: '/prototyping'
    prev:
        content: Images
        url: '/images'
---

## Overview

Export your designs from Lunacy using the **Export** tab in the **right panel**:

<embed type="image/svg+xml" alt="export_tab" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/5Glmgh3KIk63h85RxmQHKg.svg" width="844" /> 

You can export:

- Individual or multiple layers (separately or as a single image)
- The content inside frames (with and without the frame background)
- Content within slices
- Document pages
- Entire documents

With a single export operation, you can get multiple files of different formats and sizes. You can save exported files to **your computer** or **Lunacy Cloud**.

Supported formats include:

| Format type | Supported formats                  |
| ----------- | ---------------------------------- |
| Raster      | `PNG`, `JPG`, `ICO`, `WEBP`, `GIF` |
| Vector      | `SVG`, `PDF`                       |

### Basic export rules

1. During export, Lunacy **ignores:**
    - Guides
    - Square and layout grids
    - Frame names
    - Prototyping arrows
    - Canvas color (not to be confused with frame background color)
    
    There is no way to include these elements into exported files.
    
2. If there is **at least one frame** in your document, when you use the **Export Document** option, Lunacy will ignore all **layers located outside of frames**, as well as **main components**.
3. The **maximum height and width** of resulting raster files is **16,000 pixels**.

## Export settings

Open the **Export** tab to export a layer or the entire document: 

1. Select a layer (or several) or deselect all layers if you’d like to export the document.
2. Click `+` next to the **Export**/**Export document** section.
3. Adjust the export options, then click the **Export Selected**/**Export Document** button.

All export options, including advanced export settings, are displayed in the **Export** section. Its appearance depends on what you select on the canvas. 

With a layer selected, you will see these settings:

<embed type="image/svg+xml" alt="export_section_layer" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/fcCzjZUPCUK2tQ8KtEPPdA.svg" width="844" /> 


* **Export size**


    By default, Lunacy exports layers at their original size (**1x**). 

    You can change it to any of the preset scales or set your own (e.g., 8x, 10x, or 0.3x).

* **Prefix/Suffix**


    Defines the suffix or prefix of the export's file name. 

    For any export size larger than **1x**, Lunacy generates a default a default `@<size>` suffix, but you can enter your own in the input field (use only letters and numbers).

* **Format**


    Choose any of the available export formats.

    When exporting to `SVG` or `PDF`, you won’t be able to adjust the export size. It will be 1x by default.

* **Publish to Web**


    Publish any layer to **Lunacy Cloud** and get a shareable link to it. Once you publish a layer to the web, the **Cloud Uploads** subsection will appear:

    It displays all of the cloud uploads across your documents. For each link, you’ll have the option to copy it or delete the upload from our servers. 

    Read more about working with cloud uploads [below](#cloud-export).

* **Show all cloud uploads**


    Click <embed type="image/svg+xml" alt="export_show_uploads" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/zJT7IKTmPkmdulIMGf5Zag.svg" width="20" />  next to the **Export** section title to open up the **Cloud Uploads** subsection.

* **Add export option**


    Click `+` to add another export option. This lets you export the same element in different formats, sizes, and other settings. 

* **Remove export option**


    Click <embed type="image/svg+xml" alt="delete_button" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/kZ6IazBibE-dMPVUiDhphA.svg" width="16" /> next to an export option to remove it.

* **Additional export options**


    Click <embed type="image/svg+xml" alt="additional_settings" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/__EaplTjMEWsdoU7Lq0nSg.svg" width="16" /> to open up additional export options. Here, you can:

    - Choose a preexisting export preset.
    - Create a custom export preset.
    - Remove all export options.
    - Create a slice to export a part of the selected layer or frame. 

<div class="callout callout--info"> <p><strong>Note:</strong> When nothing is selected, the <b>Export document</b> section opens up. All the settings are the same, except for the <b>Upload to Cloud</b> option, which isn't available.</p> </div>

### Export presets

An **export preset** defines specific export settings that you can reuse across your documents. You can use built-in presets or create your own.

Presets are especially useful when, for example, you consistently need to export UI prototypes in specific formats and sizes for your clients, you won't need to manually adjust the settings each time you export the designs. 

To create an export preset:

- Save current export settings as a preset.
- Define export settings for the preset in the **Additional settings** menu.

#### Save current export settings

1. Define the required export settings for your design in the **Export** section of the right panel.
2. Click <embed type="image/svg+xml" alt="additional_settings" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/__EaplTjMEWsdoU7Lq0nSg.svg" width="12" /> next to the section title to open up additional options.
3. Select **Create preset**, name it, and click **Save**.

#### Define export settings for a preset

1. Click <embed type="image/svg+xml" alt="additional_settings" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/__EaplTjMEWsdoU7Lq0nSg.svg" width="12" />  next to the **Export section** title. 
2. Select **Create preset**.
3. Define the export settings, name your preset, and click **Save**. Create as many presets as you need.
4. You can use the preset for the current and future exports.

<embed type="image/svg+xml" alt="export_preset_editor" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/goHqEjhd8kqHbGYRFOxKHw.svg" width="844" /> 


## Exporting layers

To export a layer:

1. Select the layer.
2. Open the **Export** tab and click `+`.
3. Define the **export settings** or use a **preset**.
4. Click `+` again to more export options if needed.
5. Click **Export Selected**.
6. Choose the export folder.
7. Once the export is complete, you’ll get an ‘Export completed’ popup with the prompt to open the file location so you can view the resulting exports.

### Exporting multiple layers or frames

Exporting multiple items is no different. However, when you select multiple layers that already have defined export settings, you will see a **Click `+` to replace mixed content** message in the **Export** tab:

<embed type="image/svg+xml" alt="export_several_layers" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/Mulz2YadzECPlxNGERfNRw.svg" width="844" /> 

Click `+` to clear the export settings for all layers and define new ones.

You can also export multiple layers or frames as a single image so that they’re all rendered into one file.

### Including frame backgrounds in exports

When you set a background for a frame, its properties in the **Design** tab will have the **Include in export** checkbox. Clear it if you don’t want it to be visible in the exported file.


## Using slices for export

**Slices** are special layers you can use to export certain parts of your designs.

You can add a slice to the canvas and quickly export everything that falls within its borders:

- Select the **Slice** tool in the toolbar or press `E`. The icon appears only when you select a single layer. Clicking it creates a slice around the frame which you can adjust to include just the parts you need to export.
- When defining export options for a layer, select **Create slice** in the **Additional export options** menu.

When you select a slice, two additional settings appear in the **Export** section:

<embed type="image/svg+xml" alt="export_slices" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/NottP8HlE0SSMVVRZs9AYw.svg" width="844" /> 

* **Trim Transparent Pixels**


    With this option enabled, Lunacy crops out unnecessary transparent pixels within the slice. This can be useful when you’re creating slices by hand using the **Slice** tool.

* **Background**


    Defines the background color that appears in place of transparent pixels in the export file.

    To export the content of a slice:

    1. Select one or multiple slices.
    2. Export it just like a layer, taking into account the **additional settings** for slices.

To show/hide slices on the canvas, select or deselect the **Slices** option in the **Additional options** menu from the top bar:

<embed type="image/svg+xml" alt="export_slices_enable_disable" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/vbxh7ACcEUKpMIgdJ7ccVA.svg" width="844" /> 


## Exporting document pages

To export all of the content in a document page:

1. Use the `Ctrl + A` / `⌘ + A` shortcut to select all layers and frames on the page, **except for locked layers**.
2. Export it just like a layer.

## Exporting documents

To export a document, there has to be at least one frame inside it. 

Also, keep in mind that when exporting a document, Lunacy **ignores**:

- Layers that are not framed
- Main components

When exporting documents, Lunacy creates folders with names corresponding to the names of the **document pages**. Inside these folders, Lunacy creates **separate files for each layer** available on the respective page. Grouped layers and component instances are considered single layers.

To export a document:

1. Press `Esc` to deselect all layers. 
2. Click `+` next to **Export Document** in the **Export** tab.
3. Export it just like a layer.

The **Suffix/Prefix** and **Publish to Web** options are unavailable for document exports.


## [Cloud export](#cloud-export)

You can upload your designs to Lunacy Cloud and instantly share them with other people:
1. Select the layer you want to export.
2. Define the **export settings** or use a **preset**.
3. In the **Export** section of the **right panel**, press the **Publish to Web** button (<embed type="image/svg+xml" alt="export_upload_to_cloud" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/RZuTFd-iZ0mo25jqpPuRGg.svg" width="24" />). 
4. The **Cloud export history** list will appear below, displaying all previous uploads, starting from the most recent.
5. Click the copy link icon (<embed type="image/svg+xml" alt="export_copy_upload_link" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/GPNevuqpmEmBvILFhVFtyg.svg" width="20" />) next to the uploaded layer and share it:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/export_copy_cloud.png" height="auto"><source src="/public/export_copy_cloud.mp4" type="video/mp4"></video>

Alternatively, select a layer or frame and press `Alt + С + C` / `⌥ + С + C` to instantly upload it to Lunacy Cloud. Lunacy will automatically copy the link, so all you have to do is paste it anywhere to share it. This option is also available on the context menu.

For more tips and tricks, click <a href="https://lunacy.docs.icons8.com/tips/" target="_blank">here</a>.

### Cloud export history

Lunacy keeps a history of your cloud uploads. It opens up whenever you upload a layer to cloud, and you can view it anytime by clicking the **Show all cloud uploads** button in the **Export** section. 

### Deleting cloud uploads

To delete a link from the history *and* our cloud servers, click the trashcan icon (<embed type="image/svg+xml" alt="delete_button" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/kZ6IazBibE-dMPVUiDhphA.svg" width="12" />) next to it:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/export_delete_cloud.png" height="auto"><source src="/public/export_delete_cloud.mp4" type="video/mp4"></video>

You can also right-click the link and select **Remove this file from Lunacy servers**.

To **delete all cloud uploads**, click <embed type="image/svg+xml" alt="delete_button" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/kZ6IazBibE-dMPVUiDhphA.svg" width="12" /> next to the **Cloud uploads** title.


<div class="callout callout--info"> <p><strong>Note:</strong> We do not read or analyze the files that you upload to cloud. The guaranteed storage period of uploaded files is <bold>60 days</bold>. After that, they can be deleted from our servers without prior notice. Deleted files cannot be restored.</p> </div>

## Code preview and Linked design

The **Export** tab already displays the basic CSS properties of your selection at the top, as well as its **Linked design** code. 

<embed type="image/svg+xml" alt="export_linked" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/us8UQrMzE0qpgYFHj_byqQ.svg" width="844" /> 

<div class="callout callout--info"> <p><strong>Tip:</strong> Using <b>Linked design</b>, you can export your layouts for use on live websites simply by pasting a link directly from Lunacy into website code. This way, when you update the linked frame in Lunacy, the changes will be instantly reflected on the webpage — no need to bother the developer team. Learn more about this time-saving feature <a href="https://lunacy.docs.icons8.com/linked_design/" target="_blank">here</a>.</p> </div>

To see more code properties and options, open the **Code** tab, where you can view and copy the CSS, XAML, and SVG code for any layer in your document:

1. Select a layer.
2. Open the **Code** tab in the **right panel**.

The tab displays CSS code by default. Switch the code language in the dropdown menu at the bottom right corner of the panel:

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/export_code_panel.png" height="auto"><source src="/public/export_code_panel.mp4" type="video/mp4"></video>

