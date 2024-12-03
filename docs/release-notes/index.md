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
    - title: Version 10
      url: 'version-10'
    - title: Earlier versions
      url: 'earlier-versions'


page_nav:
    next:
        content: Free format
        url: '/free-format'
    prev:
        content: FAQ and Contacts
        url: '/support'
---

# Version 10


## 10.9

*Release date: December 3, 2024*

<a href="https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge" target="_blank">Microsoft Store</a> \| [Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.9.0.exe) \| <a href="https://apps.apple.com/app/id1582493835" target="_blank">App Store</a> \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.9.0.dmg) \| <a href="https://snapcraft.io/lunacy" target="_blank">Snapcraft</a> \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.9.0.deb)

### Improvements and fixes

- PDF import performance increased. Arrangement of pages to grid, if pages count is more than 8, and all of them have equal size
- SVG import fixes
- Effects rendering issues fixed
- Minor UI improvements
- Better calculation of boolean operations for masks

## 10.8

*Release date: November 29, 2024*


[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.8.0.exe) \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.8.0.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.8.0.deb)

### Improvements and fixes

- New Pages Selector UI
- Ability to translate text layer content with AI into any supported language
- Critical bug fixes

## 10.7

*Release date: November 23, 2024*

[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.7.0.1613.exe) \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.7.0.1613.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.7.0.1613.deb)

### Improvements and fixes

- Improved hardware compatibility.
- Fixed critical bug of images loss on each save.
- Improved startup time on macOS.


## 10.6

*Release date: November 18, 2024*

[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.6.exe) \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.6.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.6.deb)


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

[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.5.exe) \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.5.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.5.deb)

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

[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.4.exe) \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.4.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.4.deb)

- Auto updates in shared libraries. When someone edits a component or style in the library, the changes automatically become available in all files using that library once you reopen them.
- Magnets now work not only with text, but also for adjusting alignment in frames with auto layout.

### Fixes

- Fixed some critical bugs.


## 10.3

*Release date: October 4, 2024*

[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.3.exe) \| [macOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.3.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.3.deb)

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

* [Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.2.exe)
* [MacOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.2.dmg)
* [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.2.deb)

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

[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.1.exe) \| [MacOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.1.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.1.deb)

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

[Windows Installer](https://lcdn.icons8.com/setup/LunacySetup_10.0.1.exe) \| [MacOS Installer](https://lcdn.icons8.com/setup/Lunacy_10.0.1.dmg) \| [Linux Installer](https://lcdn.icons8.com/setup/Lunacy_10.0.1.deb)

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
