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
micro_nav: false

page_nav:
    prev:
        content: Support
        url: '/support'

---



# Version 3

One of the substantial improvements introduced in Version 3 was the full-scale editor. Version 3 was launched in March, though it took us a few months to actually make it more or less complete. During these months of work, our team efforts were mainly focused on fixing bugs, improving performance, and implementing the remaining features such as gradients, guidelines, etc.

## 3.16.4
_RELEASED 15 May, 2019_  

### Features
- [**Integration with icons8 Icons**](https://a.icons8.com/fbgSbXYW/NaN2e2/image.png)
- [**Justify alignment**](https://a.icons8.com/fbgSbXYW/Bej7Fd/image.png) in text
- Editing [**multiple**](https://a.icons8.com/jgOZsuaZ/q6GQsX/image.png) text blocks
- [**Search**](https://a.icons8.com/ddZWpfcb/9CvBqG/image.png) by document structure
- Enabling and disabling effects
- Size indicator near creating or editing object
- Window position and state saving
- Added new interface language: Serbian (Latin)

### Improvements
- Improved of export and import to **SVG**
- Improved work with the parameter Line height in the text
- Improved tab support in text
- Improved correctness of drawing effects for text
- Added update font weights when changing font family
- Added the ability to apply shortcuts to text without entering edit mode
- Improved the use of styles in the text on shortcuts Ctrl+B, Ctrl+I
- Added new shortcuts for text (тут ссылка на документацию)
- Display CSS for several selected objects
- The ability to apply Paragraph spacing to the selected paragraph in the text
- While adding objects if an element inside group is selected, new object is created inside the same group
- Improved work with mixed content in the text and object transformations
- Added new templates for artboards
- Improved work with distance lines (alt behaviour)
- Added possibility to move points of editing object with arrow keys
- Improved work with zoom field and grid settings
- Corrected window size and panel state saving
- Corrected vector tool Esc behaviour 

### Bug Fixes
- Fixed the error of exporting objects with long names to a local file
- Fixed the problem of selecting artboards by title
- Fixed most errors of working with text
- Fixed inner shadow rendering
- Fixed properties and effects view in right panel
- Fixed problem with ghost artboard frames after removing page with them from project or just changing it
- Some undo behaviour fixes
- Fixed some issues with selection in tree 
- Fixed UI bugs including some buttons behaviours, cursors changings etc
- And many other bugs were fixed


## 3.15.3
_RELEASED 07 March, 2019_  

Download from the [Microsoft Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.15.3.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.15.3.zip)

### Bug Fixes
- Fixed various problems with input fields
- Fixed problem with editing text in Symbols instance
- Fixed problem with loading Google fonts
- Fixed problem of switching interface language for Installer version
- Fixed problem of incorrect saving of some sketch files
- Fixed the problem of rewriting the font parameter for text blocks having the missing font

## 3.15.2
_RELEASED 15 February, 2019_  

Download from the [Microsoft Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.15.2.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.15.2.zip)

### Features
- Ability to add more settings for the stroke: [**Folds, Caps, Nozzles**](https://a.icons8.com/mwlQoYtb/F3iscZ/image.png)
- Added [**acrylic effect**](https://a.icons8.com/ccYVnZUh/LiOFMS/image.png) for application Window (supported from Windows 10 1803 version)
- Added feature to [**underline**](https://a.icons8.com/acSkXaER/jVOEMz/image.png) text
- Added font support with the [**Stretch**](https://a.icons8.com/acSkXaER/X91VbE/image.png) parameter
- Added ability to change the transparency of objects using the keys 1-9
- Added new interface language: Turkish

### Improvements
- Added **correct line editor**
- Updated [**Symbols panel**](https://a.icons8.com/QQhXVZYO/bAcczk/image.png) design
- Improved [**header cropping**](https://a.icons8.com/TQffnlXP/0mj7cr/image.png) at Artboards
- Added the ability to change the order of pages in the page list
- Improved export to XAML. Exported more objects
- Improved animation. Now when saving a file it no longer blocks the application(moved to taskbar)
- Improved CSS builder. Now it does not display a parameter if it has a default value
- Reduced input field sensitivity

### Bug Fixes
- Fixed fonts reading error
- Fixed snappin
- Fixed bugs with flip of objects
- Fixed import of some svg files
- Fixed most errors of working with vector tool
- Reduced application freezing when selecting multiple objects
- Fixed errors of working with select tool
- Fixed rotation angle error and object visibility
- Fixed reading of some sketch files
- And many other bugs were fixed


## 3.14
_RELEASED 21 December, 2018_  

Download from the [Microsoft Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.14.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.14.zip)

### Features
- The **Grids** is configured for the [workspace](https://a.icons8.com/2TdZnnJc/6Wy1Kf/image.png) and for [artboard separately](https://a.icons8.com/cjiWecVu/1MMsGf/image.png)
- [**Layouts**](https://a.icons8.com/inMb0Spa/EB0kao/image.png) for artboards
- **Automatic font switching** for text block when typing languages (Chinese, Korean, Japanese, etc.)
- [Presentation mode](https://a.icons8.com/inMb0Spa/mzb96T/image.png) **(Ctrl + .)**
- The ability to [**apply effects to images**](https://a.icons8.com/2TdZnnJc/B9ouCF/image.png)
- The ability to [**copy / paste layer style**](https://a.icons8.com/oVWbeead/xEzCR0/image.png)
- Interface languages added:  
— Portuguese  
— Chinese  
— Deutsch  
— Japanese  
— Polish  
### Improvements
- Improved **export to XAML**
- Corrected display of Japanese, Chinese, Korean characters in artboard title
- Improved Symbols items behavior when the size of the left panel is changing
- Reduced ruler size
- Added the ability to collapse all items in the tree **(Ctrl + ~)**
- The distance between the original object and its copy is displayed while copying the object with Alt pressed 
- List building behavior changed. Creation of a marker is ignored when moving to the next line with Shift or Ctrl pressed
- The ruler adapts to the selected objects
- Added the ability to move guides using the arrows on the keyboard
- Optimized opening speed of some files
- Added the ability to use the grid in increments of 1 pixel.
- Expanded area on the border of the artboard on which it can be selected
- If a file is not saved in the window title, an asterisk (\*) will be displayed
- When exporting a single object to a file, you can change the name of the file being exported.
- The state of the left panel is remembered after the application is closed
### Bug Fixes
- Fixed most errors of working with text
- Fixed errors when opening many sketch files
- Fixed most errors of working with symbols
- Fixed most errors of working with artboards
- Fixed most errors of working with effects
- Fixed most errors of importing images
- Fixed interface behavior error
- Fixed most errors with selection of objects
- Fixed most errors with duplication of objects through Alt
- Fixed most errors of working with guidelines
- And many other minor bugs are fixed

*The ability to save to the .lunacy format is disabled. No further support is planned for this format. You will be able to open .luancy format and resave it to the .sketch format.*

Here's the fantastic review of our features. A designer called Kavin Prasath recorded a review of the features that we've introduced in the last 7 months:
<iframe width="560" height="315" src="https://www.youtube.com/embed/a6X0qtjpZiI?start=53" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 3.13
_RELEASED 26 October, 2018_  

Download from the [Microsoft Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.13.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.13.zip)

### Features
- Added support for sketch files created in **version 52**
- Added support for reading foreign symbols
- **Multilingual interface.**  
Languages:  
— English  
— Spanish  
— Indonesian  
— Italian  
— French  
— Russian  
— Ukrainian    
**[Help us improve the translation of Lunacy for other languages](http://docs.icons8.com/localization/)**  
### Improvements
- Added **Return to Instance** symbol button 
- Added functionality to change and delete symbols from symbols panel
### Bug Fixes
- Fixed app crash bug caused by deselecting test blocks
- Fixed a bug related to text alignment in text blocks caused by building lists
- Fixed app crash bug caused by removing symbols
- Fixed a bug related to applying the blur effect while the stroke effect is active
- Fixed a bug related to displaying a set of effects in the inspector while selecting several dissimilar objects

## 3.12
_RELEASED 19 October, 2018_  

Download from the [Microsoft Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.12.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.12.zip)

### Features
- Added functionality to work with **Symbols** (beta)
- Added **Override symbol** context menu item for nested symbols
- Added functionality to build **Lists in text**
- Added **Fill** and **Stroke** effects for text
- Added **Interal Shadow** effect
- Added **Guidelines**

### Improvements

- Added functionality **to enter text** into a text block of such languages as: Japanese, Chinese, Korean
- Improved performance of Undo / Redo operations
- Accelerated processing of large images
- Added automatic hide of the left panel
- Improved navigation. Now, when an item is selected in the tree, arrow buttons there is a capability to move selected item within working area rather that navigating along the tree.
- Improved saving experience. A progress ring animation is displayed now while saving files
- Font size can be changed now by 10 with Shift pressed
- When saving an empty project, the .sketch extension is used now as default, instead of .lunacy
- When loading / saving files, the last position of the workspace is used
- Added additional features for the Line tool
- Improved support for reading sketch files

### Bug Fixes

- Fixed bugs related to duplication and dragging objects
- Fixed color preview in borderes. Now, color preview in borders displays gradients instead of displaying solid color of the first stop as it was before
- Fixed bug that caused app crash when saving an empty file in .sketch format
- Fixed bug related to redrawing of object effects while blur effect is active
- Fixed bug while moving objects in edit mode
- Fixed bug related to situations when applied effects are clipped while exporting to PNG
- Fixed errors associated with reading of some Sketch files that caused crashes in previous versions
- Various minor fixes


## 3.11

Download from the [Microsoft Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.11.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.11.zip)

### Features

- Added dash patterns option for lines and borders
- Added social media section to artboard presets

### Bug Fixes

- Fixed functionality to select locked objects
- Fixed pattern fill behavior for various pattern types
- Fixed the error caused by clicking to locked group 
- Fixed a bug related conversion of symbol objects into artboards while saving into sketch format
- Fixed erroneous scrollbar behavior on properties tab

### Improvements

- Improved Lunacy to Reaper interaction format
- Improved object size manipulation. Now, you can change an object size symmetrically with Alt key pressed
- Improved thumbs visibility. Now, resize thumbs visibility changed depending on selection bounds size and viewport zoom
- Improved text editing functionality. Now it's possible to change styles and type text at the same time
- Improved the precision in shape editing. A snapping step in the amount of 0.5 px for vertices in shape editing is reached


## 3.10

Download from the [Windows Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.10.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.10.zip)

### Features

- Added auto-resize of text
- Added strikethrough text option
- Added report a bug feature to the menu
- Added ability to import .svg files with the use of Image Tool
- Added scrollbars function to the workspace
- Added ability to create new window for the new document while the current document is been changing
- Added Undo-Redo for the corner-radius changes

### Bug Fixes

- Fixed bugs associated with displaying content of .sketch files
- Fixed the order and position of the elements after copying/pasting while using keyboard shortcuts, context menu and - - -duplication
- Fixed colour autoselection. Now, after opening the gradients in the color picker the first slider is active
- Fixed behavior of the rounding radius on rectangles. It is not decreasing anymore while size of a figure is decreasing
- Fixed Undo-Redo function for Send Backward/Send-to-back operations
- Fixed Undo-Redo function for creating artboards from templates
- Fixed the bug associated with the app crashing in the case when exported file names contained inappropriate elements: symbols, quotes, slashes, etc.
- Fixed the bug related to the case when the order of elements was broken while grouping objects
- Fixed corners rounding behaviour. Now, the input field for the roundings of the corners doesn’t disappear in case if not all of the corners have the same value
- Removed unnecessary files generated in AppData folder


### Improvements

- Improved functionality of typography panel
- Added license agreement (EULA) and Privacy policy to the About window
- Added minor changes to the design of the menu and the About window
- The export panel has been redesigned: all the export options are located in the same place now
- Improved color picker design. Now, color picker redesigned to be more compact
- Improved expaned panel behaviour. Now, expanded pages panel size can be changed


## 3.9.1 Hotfix

Download from the [Windows Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.9.1.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.9.1.zip)

### Bug Fixes

- Fixed space key malfunctioning in text edit mode
- Fixed scaling issue of resizing thumbs


## 3.9

Download from the [Windows Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.9.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.9.zip)

### Features

- Added shadow spread support
- Updated behavior of zoom tool. Now, double click to zoom tool button sets zoom to 100%
- Each object now highlights by a separate frame when several objects are selected
- Now you can reset an image to its original size with the link on the right panel
- Letter spacing and paragraph spacing support in text blocks


### Bug Fixes

- Several bugs in the text editor have been fixed
- Text style and weight change error have been resolved
- Color picker closing bug have been fixed
- Duplicated font names are transferred in dropdown list
- Selection frame disappearing after opening some sketch files have been resolved
- Fixed bug related to the malfunctioning of undo/redo for multiple selected objects while moving by arrow keys
- Sticking in scroll mode have been fixed
- Minor bugs have been fixed


### Improvements

- Better support for text blocks in sketch files have been achieved
- Initial window size now is being changed depending on screen scale and size
- Snapping support for objects outside of artboards have been introduced
- Image overrides and opacity support for symbol objects have been added


## 3.8

Download from the [Windows Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.8.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.8.zip)

### Features

- Vector tool! You can create and edit the polygons and Bezier curves. 

![Vector tool](Images/VectorTool.png)

- [Help!](https://docs.icons8.com) 
- Symbols: we’ve just started to provide the basic functionality for saving symbols in output files! Expect the extended set of operations with symbols in the upcoming releases.
- Added functionality to add, delete, and rename pages.
- Added vertical alignment for text
- Lowercase and UPPERCASE parameters are now fully supported in the .sketch files now (in previous version there was ability to read, but not to save them)
- Added constraints for the objects on an artboard (in previous version these constraints could only be applied to groups)
- Introduced new setting to artboards named as "Adjust content on resize". When enabled, objects could be moved; otherwise - cropped.

### Bug Fixes

- Horizontal scroll is fixed! Sorry for breaking it in the last release.
- If an object partially crosses an artboard, it's nested in the artboard now
- Uploading to the cloud fixed
- Crash fixed when an object had the dimensions of less than 1 px
- Crash fixed when you delete an object while moving it
- Other weird crashes 
- When you delete an artboard with a grid, the grid deletes too now

### Improvements


- We save the window size on exit and restore it on start
- On small screens, the window opens full size
- Uploading to the cloud shows the progress now
- The grid button is disabled when there are no artboards on the screen
- On the first install, the list of recent files doesn't show empty now

## 3.7

Download from the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.7.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.7.zip)

### New Features
 
- You can rearrange the gradient stops now
- Corner radius thumbs for rectangles
- Text transformation support: upper case, lower case, normal
- Export projects to [Sketch the Ripper](https://icons8.com/articles/sketch-ripper-free-tool-rip-sketch-file-contents/)
- Zoom to area tool

### Improvements

- Top panel layout changed
- Property panel's tab selectors moved to the bottom
- Show distance indicator, when moving objects with  `Alt` + an arrow key

### Bugs Fixed

- Fixed bug, when the click event didn't fire when behind the invisible or masked objects
- Minor bug fixes

## 3.6

Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.6.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.6.zip)

### New Features

- Linear and radial gradient editors
- Dragging images from the desktop into shapes as image-fill
- Support of sketch files converted from PSD by third-party service
- More [hotkeys](/man/hot-keys)

### Improvements

- Internal optimizations and refactoring
- Better sketch export support

### Bugs Fixes

- Minor bug fixes


## 3.5

Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.5.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.5.zip)

### New Features

- Objects render cache (performance improvements, CPU usage decreased)

### Improvements

- Workspace changes the background color from white to light-gray when artboard added
- Resize artboard from top crops content instead of moving it

### Bugs Fixes

- Image loading from sketch file fixed
- Export images fix
- Minor bug fixes

## 3.4
Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.4.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.4.zip)

### New Features

- Sketch v50 format support
- Math in numeric text fields

### Bugs Fixes

- Folder structure fix
- Loading from explorer fix

## 3.3

Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.3.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.3.zip)

### New Features

- Blur and shadow effects support
- New Avatar tool, which adds random avatar images in one click
- Hotkey for toggling rulers: Ctr+R
- Animation, when select artboard preset

### Improvements

- Styles and colors of UI controls have a more consistent style
- Icons updated
- Removed object properties when artboard tool is active
- System fonts and Google Fonts have a single list sorted by name now

### Bugs Fixes

- Closing the main menu by clicking outside of it
- Sketch file loading error when it has extended text objects with inline styles
- File name fix on "Save as" dialog
- Fixed object renaming in the layer tree
- Text alignment resets when other properties change
- Increased color precision when loading and save sketch files

## 3.2
Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.2.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.2.zip)

### New Features

- UI for initial shadow support
- Saving the state of rulers from the last session
- Hotkeys have tooltips now
- Undo/Redo support for text line-height property
- Shape override in symbols
- Nested symbols support
- Blend mode support for objects
- Flip(mirror) object tool

### Improvements

- Guide and distance lines restyled
- Scroll to the first object when selecting another page
- New icons for flip tool

### Bug Fixes

- Right panel layout fixes in the scroll-view mode
- The weight of the text resets after selecting another text object
- Constraint calculations fixed
- The height of text calculates correctly now
- Default boolean operations in combined shapes perform correctly now
- After resizing a group member,  we drop it  out of its group
- The typeface resets after select text object
- Fixed preview image aspect radio when saving to sketch
- Performance improvements
- Art-board grid tuned

## 3.1
Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.1.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.1.zip)

### New Features

- Cursor sizes changed depend on dpi of display
- Escape key can close color picker
- Copy paste between lunacy windows

### Improvements

- PNG compression on export assets
- New document created with empty page
- Improved Export assets to CDN
- Improved selection behavior
- A new object is created over to the selected object, instead of on top of the layers list

### Bug Fixes

- Resize frame not updated after select art-board preset
- Auto-size was disabled when text object duplicated or copied
- Fixed SVG export (tags sometimes wasn't closed properly)
- Decreased fonts loading time
- Fixed shadow and blur effects support loaded from sketch file

# Version 2

We've [presented](https://www.producthunt.com/posts/icons8-lunacy-2-0) this version middle 2017. Lunacy version 2 didn't allow editing and served as a handoff tool. It allowed to view the documents, copy the CSS code, and export assets. 

# Version 1

After the meticulous testing with all kinds of Sketch files, we've launched Lunacy as a .sketch viewer. Two weeks after, version 43 came, completely changing the format. We had to rework it from scratch.
