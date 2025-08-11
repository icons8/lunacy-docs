---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Release History
description: New features and fixes for each version of Lunacy
icon: 'activity-history'

# Micro navigation
left_menu_off: false
release_note:
    - title: Version 12
      url: 'version-12'
    - title: Version 11
      url: 'version-11'
    - title: Version 10
      url: 'version-10'
    - title: Earlier versions
      url: 'earlier-versions'


page_nav:
    next:
        content: Free format
        url: '/free-format'
    prev:
        content: Contacts
        url: '/contact'
---

<!--

# Version 12

## 12.0 Beta

*Release date: August X, 2025*

<a href="https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge" target="_blank">Microsoft Store</a> \| [Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_11.6.exe) \| <a href="https://apps.apple.com/app/id1582493835" target="_blank">App Store</a> \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_11.6.dmg) \| <a href="https://snapcraft.io/lunacy" target="_blank">Snapcraft</a> \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_11.6.deb)

### Sections

We’ve added **sections**, a new layer type that helps you keep related objects together.

You can:

- Name sections
- Change their fill
- Drag sections along with their contents across the canvas

To create a section, click <embed type="image/svg+xml" alt="Section_icon" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/_rDC1o7Vd0mxeecB4RJcZw.svg" /> 
 on the toolbar or press `Shift+S`.

To select a section, click its label.

### New styles

In addition to color and layer styles, text and layout grid styles are now available. All the styles can be applied to layers separately.

This improves the usability of styles and fixes lots of Figma compatibility issues.

### Skew

You can now skew layers via **Layer → Add Skew**. Adjustments are available in the right panel.

<p><strong>Note:</strong> Some editors may not fully support skewed layers yet (we’re working on it). If you run into issues, reset the skew, make your edits, then reapply it.</p></div>

### Changes to components

#### Component page has left the building (almost)
You can now create components on any page.

The Component page is now created only in two cases and only in local files:

- When you copy a component from another file to a local file
- When you drop on the canvas an element from the GUI tool (button, checkbox, etc.)

#### Enhanced component states UX

You can now create and manage component states right on the canvas (right-panel options are still available).

Under the hood, we've reworked component states for better compatibility with Figma variants, resulting in more accurate Figma imports.

### Import of .fig files

We've deprecated Figma import over API due to its limitations and recurring issues.

Instead, .fig file import ensures higher quality and faster conversion.

### Web version of Lunacy (Alpha)

The web version is coming soon. Follow us on [X](https://x.com/Icons8_Lunacy) (ex-Twitter) to be the first to know when closed testing starts.

### New zooming and panning options
The zoom control in the top-right corner now includes two new features:

**Pan with Right Click** — pan the canvas by dragging while holding the right mouse button

**Zoom with Wheel** — zoom the canvas using the scroll wheel without needing to hold `Ctrl` or `Cmd`

### Lower RAM usage

We've reworked the render logic to handle large pages more efficiently. Huge pages now load progressively at a controlled pace, letting you navigate smoothly without interruptions.

### Variables rollout underway

We’ve started a long-term process to support Figma’s complex variable system. When importing .fig files, new variables and properties may appear to preserve important data. However, these won’t be functional right away. We’ll gradually implement full support for variables, including themes, groups, theme switching, field binding, and more.

-->


# Version 11

## 11.6

*Release date: July 2, 2025*

<a href="https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge" target="_blank">Microsoft Store</a> \| [Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_11.6.exe) \| <a href="https://apps.apple.com/app/id1582493835" target="_blank">App Store</a> \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_11.6.dmg) \| <a href="https://snapcraft.io/lunacy" target="_blank">Snapcraft</a> \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_11.6.deb)

* Now LLM can edit Selection over MCP.
* Fix of Copy/Paste on Windows.

## 11.5

*Release date: June 26, 2025*

[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_11.5.exe) \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_11.5.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_11.5.deb)

* LLM Integration over MCP.
* Fixed Icons8 Icons integration.

## 11.4

*Release date: April 21, 2025*

[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_11.4.exe) \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_11.4.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_11.4.deb)

Fixed 10 app crash reasons.

## 11.3

*Release date: April 18, 2025*

### New selection tools

Two new options are now available in the Action Bar:

- **Select Matching Layers** (<embed type="image/svg+xml" alt="Select Matching Layers" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/BeqBquf35kyy7SV1ydDgnw.svg" /> 
) helps you quickly select layers with the same properties.

- **Multi-Edit States** (<embed type="image/svg+xml" alt="Multi Edit Variants" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/RG8Ivhg7QEKZpjUvJNMXlg.svg" /> 
) makes it easier to edit components with multiple states.

### Cloud document management

It is now possible to search documents within a project or team.

Also, you can now move cloud documents between personal space, projects, and teams using **Cut** and **Paste** from the context menu.

<embed type="image/svg+xml" alt="cut-and-paste_docs" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/5qXugRo4r0qsodXWaU-_xQ.svg" /> 


### Home tab updates

We removed the table view from the **Home** tab — it wasn’t popular and hard to maintain. Instead, we added sorting for document tiles in both ascending and descending order.

### Managing extra data from imported files

Some plugins store large amounts of data inside files. To help manage this:

- You can now view this data in the **Export** tab when it's stored on a layer.
- New commands have been added to the context menu search:

    - **Clear Custom Properties**
    - **Add Custom Property**
    - **Deep Clear Custom Properties**

### Legacy Sketch undo stack deprecated

Cloud files that haven’t been opened in 1–2 years may lose up to 50 of their last operations. This is due to the removal of legacy Sketch undo stack support.
To preserve your file history, open those files in Lunacy 11.2 and save them to version history.

### App size reduced

We’ve optimized the disk size of Lunacy. Depending on your platform, it now takes up 20–40MB less space.


## 11.2.1 Hotfix

*Release date: March 27, 2025*

- Reverted recent changes to masks. They now work as before.

## 11.2

*Release date: March 27, 2025*

### Fixes and improvements  
- Added navigation buttons to the Prototype Player.
- Fixed crashes and file access issues on macOS.  
- Vector masks no longer render, aligning with behavior in similar apps. Masks with no fills will also render nothing.

  
## 11.1

*Release date: March 21, 2025*

### Prototyping overlays support 

Added support for overlays in prototypes.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/overlaysrn-ph.png" height="auto"><source src="/public/overlays.mp4" type="video/mp4"></video>


### Manual sync for shared libraries  

You can now disable auto sync for shared libraries and sync them manually when needed. (Manual sync for specific components will be available later.)

<embed type="image/svg+xml" alt="shared_libraries_disable_sync" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/RViQomadXUeQw4MElJetjQ.svg" /> 



### Page separators

You can now add more structure to your document pages using separators. To add a separator, create an empty page named “-” or right-click a page and select **Add Separator** to insert one.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/page-separators-ph.png" height="auto"><source src="/public/page_separators1.mp4" type="video/mp4"></video>


### Options to disable auto Z-index and auto shape colors 

Options to disable **Auto Z-Index** and **Auto Shape Colors** were added to the **AI** menu.

<embed type="image/svg+xml" alt="Disable_Zindex_shape_colors" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/t2WW6cDWtkKuTW1c3rjiCQ.svg" /> 



### Fixes and improvements  
- Improved image rendering to fix antialiasing issues.  
- Fixed drag-and-drop functionality on macOS.  
- Improved rounding of floating values after certain operations.  
- Fixed various SVG import issues.  
- Resolved font loading problems.  
- Minor memory usage and startup time optimizations.

## 11.0

*Release date: March 4, 2025*

### Advanced prototyping

We added new triggers and animations, so you can now create more complex prototypes. See the full details in the updated <a href="https://lunacy.docs.icons8.com/prototyping/" target="_blank">Prototyping guide</a>.



### New font picker

We redesigned the font picker to make working with fonts easier. Now you can:

- Mark fonts as favorites for quick access.
- Filter fonts by Google Fonts, document fonts, or favorites.
- Filter by language (multiselect).
- Show only monospaced fonts.


<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/favfonts2-ph.png" height="auto"><source src="/public/favfonts2.mp4" type="video/mp4"></video>



### Deep unlock

Quickly unlock all locked layers within a selection using `Ctrl/Cmd+Shift+Alt+L` shortcut. You can also use the **Deep Unlock Selection** command from the **Layer** menu or on the context menu search.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/deepunlock-ph.png" height="auto"><source src="/public/deepunlock.mp4" type="video/mp4"></video>


### Deep detach

In a similar manner, you can quickly detach all nested instances with the `Ctrl/Cmd+Shift+Alt+B` shortcut, or use the **Deep Detach Instances** command from the context menu.

### Copy-pasting properties

Save time by copying and pasting these settings:

* Prototyping
* Auto layout
* Layout grids

Find the relevant commands under **Copy as** in the context menu.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/copygrid-ph.png" height="auto"><source src="/public/copygrid.mp4" type="video/mp4"></video>


### TIFF support
Lunacy now supports TIFF files. Import, edit, and export TIFFs without conversion.

### Fixes

- Fixed nearly 200 bugs.

# Version 10

## 10.11

*Release date: January 15, 2025*

### Improvements and fixes

- Fixed server connection issues.

## 10.10

*Release date: December 13, 2024*

### Improvements and fixes

- Major rendering performance boost, achieving 60fps where it was previously 1-10fps.
- Resolved critical file-saving issue on macOS.
- Enhanced app update process on macOS for smoother experience.

## 10.9

*Release date: December 3, 2024*

### Improvements and fixes

- PDF import is now faster. If a document has more than eight pages of equal size, they are arranged in a grid.  
- Boolean operations for masks are now calculated more accurately.
- Various minor UI improvements.
- Effects now render correctly.
- Fixed SVG import issues.  

## 10.8

*Release date: November 29, 2024*

### Improvements and fixes

- New document page selector.
- Text layers can now be translated into any supported language using AI. 
- Several critical bugs were fixed.

## 10.7

*Release date: November 23, 2024*

### Improvements and fixes

- Improved hardware compatibility.
- Improved startup time on macOS.
- A critical bug causing image losses was fixed.


## 10.6

*Release date: November 18, 2024*

### Color variables

We've introduced the **Variables** tab in the left panel, where you can now manage **color variables**. Soon, we’ll be adding other variable types too.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/colorvariables_ph.png" height="auto"><source src="/public/colorvariables_rn.mp4" type="video/mp4"></video>

For details about color variables, click <a href="https://lunacy.docs.icons8.com/variables/" target="_blank">here</a>.

<div class="callout callout--info">
<p><strong>Note:</strong> The color palette also moved to the <b>Variables</b> tab, so now all the color variables are in the same place.</p></div>

### Improvements and fixes

- Some improvements to the *AI Name Layer* feature.
- Reworked the code behind the input fields for better user experience.



## 10.5

*Release date: October 23, 2024*

In this version, we're introducing a preview of a few experimental AI-based features. All the features are accessible through the main and context menus.

Give them a try and feel free to share your feedback that will help us improve them.

<div class="callout callout--info">
<p><strong>Note:</strong> Free users will have limited attempts to try the AI features. To continue using them, you will need a subscription to Lunacy Cloud.</p></div>

#### AI auto layout

Select a frame without auto layout, and let AI assign auto layout properties. The feature works through all nested elements, and can save you a lot of time.

For better results, make sure that layers are grouped into logical elements (buttons, profile cards, etc.).

<embed type="image/svg+xml" alt="AI_autolayout_RN" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/u3qBOZ5-a0SUMH35sLh86w.svg" /> 


#### AI layer naming

Automatically assign meaningful names to your layers with the help of AI.

<embed type="image/svg+xml" alt="AI_naming_RN" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/5Mpne2gqQ0G2O7bpGXEpkQ.svg" /> 


#### AI text content

You can now use preset and custom prompts to edit text content with the help of AI.

<embed type="image/svg+xml" alt="AI_text_RN" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/lv3bxRDDHUW0C15YcWh6bg.svg" /> 



### Improvements and fixes

- Improved inner shadow rendering for higher quality.
- Fixed numerous issues with the Text on Path feature.
- Fixed SVG export issues.





## 10.4

*Release date: October 15, 2024*

- Auto updates in shared libraries. When someone edits a component or style in the library, the changes automatically become available in all files using that library once you reopen them.
- Magnets now work not only with text, but also for adjusting alignment in frames with auto layout.

### Fixes

- Fixed some critical bugs.


## 10.3

*Release date: October 4, 2024*

#### Text on path

You can now bend text in any way you want:

1. Create a text.
2. Create a path. Make sure that the path is below the text in the Layer list. Also, make sure that the text box and the bounding box of the path overlap.
3. With the text selected, click ![textoptions](/public/textoptions.png) (**Text options**) on the right panel. Then select the **Text on Path** checkbox.
4. To move the text along the path, drag the text block horizontally.
5. (Optional) If you want glyphs to adjust their appearance to the bends, select the **Warp glyphs** checkbox in **Text options**.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/textonpath.png" height="auto"><source src="/public/textonpath.mp4" type="video/mp4"></video>

#### Text truncate and Max lines

You can now truncate overflowing text with an ellipsis (`…`) when it exceeds the bounds of a text box. This keeps your designs clean and readable without manually resizing text layers.

Also, you can use the **Max lines** parameter to define the number of lines before the text truncates. This can be useful when working with auto layouts.

<embed type="image/svg+xml" alt="text_truncate" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/Uu0BTJ7BK0WPezodsiisIw.svg" />

#### Context menu search

* The context menu search now recognizes both English and your selected interface language.
* You can now search by the first letters of commands. For example, typing 'cs' or 'c s' will return *Copy Style*.


### Fixes

* Fixed a bug with the app interface scaling upon startup.
* Fixed a bug causing double context menus.
* Fixed an issue with TouchID authentication via Apple ID.
* Fixed file saving issues on macOS.


## 10.2

*Release date: September 24, 2024*

#### Context menu search

You can now quickly find and run almost any command through the context menu.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/contextmenusearch1.png" height="auto"><source src="/public/contextmenusearch1.mp4" type="video/mp4"></video>

In future updates, this field will also be used for contextual AI-related commands.

#### Fixes

* Fixed file saving issues on macOS
* Fixed several PDF export issues
* Fixed SVG import issues
* Fixed various auto layout issues
* Fixed gradient editor issues

## 10.1

*Release date: September 13, 2024*

#### PDF and AI files import

You can now import PDF and Adobe Illustrator (.ai) files into Lunacy.

#### New select options

New shortcuts for easier layer selection:

- Press `Enter` to select all nested layers one level down.
- Press `Shift + Enter` to select parent layers.
- Use `⌘ + Right Click` / `Ctrl + Right Click` to open the layer selection menu.

#### Alpha and luminance masks

You can now change mask type from *vector* to *alpha* or *luminance*.

#### Oblique and simulated bold font styles 

Added *Simulated Bold* and *Oblique* styles for single-weight fonts.


### Improvements

* Numerous SVG import improvements.


## 10.0.1 

*Release date: August 27, 2024*

#### Redesigned left sidebar

We redesigned the left sidebar to give you more space on the canvas:

* Adjustable panel
* Vertical toolbar is back
* New stylish icons for the content tabs

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/rnv10_interfaceph.png" height="auto"><source src="/public/rnv10_interface.mp4" type="video/mp4"></video>

#### In-app prototype player

You can now play prototypes directly on the canvas. Press `G` or click ![play](/public/playbtnblue.png) on the toolbar. In the prototype mode, you can also make tweaks to the design on the fly.

#### Web prototype player

If you're working on a cloud document, you can now copy a link to its prototype in the **Share** panel and share it with your client or teammate.

<div class="callout callout--info">
    <p><strong>Note:</strong> Actually, this is a teaser of the Lunacy web version. The full web version is coming soon.</p>
</div>

#### Rotate Copies tool

With this tool, you can now create multiple rotated copies of any shape around a central point. Perfect for designing patterns, circular layouts, and symmetrical artwork.

<video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/rnv10-rotatecopy.png" height="auto"><source src="/public/rnv10_rotatecopy.mp4" type="video/mp4"></video>

#### Shared libraries

If you're working on a cloud document, you can now connect another Lunacy cloud document to it and use its styles and components as a UI kit. The UI kits that were available in the previous versions are deprecated.


### Improvements

* Reworked SVG import and export.
* New export option: **Export Text as Path**. The option is enabled by default. Disable it to prevent converting text to paths during SVG export.
* You can now edit x/y positions of control points in the Path Editor.
* Improved corner radius logic for complex paths.
* A series of improvements to eliminate issues with undo operations in some cases could not be restored after restarting the app.
* You can now set percentage values in numeric fields (e.g., 50%, 25%, or even 50%+25).
* Removed numerical naming for layers in the tree. No more “Group Copy 12 Copy 25345.”
* The **Invert zoom** option for the scroll wheel is now available in the **View** menu.
* A double click over a corner radius handle now sets the radius of the shape corners to the value set by the **Big nudge** parameter. `Alt`+`double click` will change the radius of this corner only. `Shift `+`double click` will set the corner radius to the latest value you applied.
* You can now double-click over a rotation handle to turn a layer 90  degrees clockwise.
* You can now reorder grid layouts by dragging their settings up and down in the right panel.
* Improvements to address issues where undo operations were sometimes not restored after restarting the app.
* The **Adjust content on resize** frame setting is now deprecated. When resizing a frame, its content will automatically adjust to fit the new size. To resize only the frame and keep its content unchanged, hold down  `Ctrl`/`⌘` while resizing.

### Bug fixes

* Over 400 bugs fixed.

# Earlier versions

To view release notes for earlier versions of Lunacy, click [here](https://lunacy.docs.icons8.com/rn_before_v10/).
