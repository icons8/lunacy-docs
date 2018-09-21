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



We release Lunacy once in two week. Take part! Vote for the next features.


# Version 3

Version 3 introduced the full-scale editor. We've launched it in March and dedicated the following month fixing the bugs, improving the performance, and developing the remaining features such as gradients.

## 3.11

Download from the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.11.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.11.zip)

### Features

- Dash patterns option for lines and borders added
- Added social media section to artboard presets

### Bug Fixes

- Ability to select locked objects fixed
- Fixed pattern fill behavior for various pattern types
- An error happened when clicked to the locked group fixed
- Symbol objects were converted into artboards when saved into sketch format
- Scrollbar behavior on properties tab fixed

### Improvements

- Lunacy to Reaper interaction format changed
- Now you can change object size symmetrically with Alt key pressed
- Resize thumbs visibility changed depend on selection bounds size and viewport zoom
- Now it's possible to change styles and type text at the same time
- 0.5px snapping step for vertexes in shape editing

## 3.10

Download from the [Windows Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.10.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.10.zip)

### Features

- Autoresize added for text
- Strikethrough text option added
- Added Report a bug feature to the menu
- Import .svg files with the Image Tool
- Scrollbars added to the workspace
- Create the new window for the new document when the current document was changed

### Bug Fixes

- Fixed bugs in displaying the content of .sketch files
- Fixed the order and position of the elements after copying/pasting when using keyboard shortcuts, context menu, duplication
- When opening the gradients in the color picker now the first slider is active 
- The behavior of the rounding radius on rectangles changed: it does not decrease when the size of the figure decreases
- Fixed Undo-Redo for Send Backward/Send to back operations
- Fixed Undo-Redo for creating artboards from templates 
- Fixed the bug when the app was crashing if exported file names contained inappropriate elements: symbols, quotes, slashes, etc.
- Fixed the bug when the order of elements was broken when grouping the objects
- The input field for the roundings of the corners now doesn’t disappear if not all of the corners have the same value
- Added Undo-Redo for the corner-radius changes
- Removed unnecessary files generated in AppData folder

### Improvements

- Typography panel changed
- Added the license information (EULA) and Privacy policy to the About window
- Slightly changed the design of the menu and the About window
- The export panel redesigned, the export options now are all in one place
- Color picker redesigned to be more compact
- Now you can change the size of expanded pages panel

## 3.9.1 Hotfix

Download from the [Windows Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.9.1.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.9.1.zip)

### Bug Fixes

- Space key is not working in text edit mode
- Scaling issue of resizing thumbs

## 3.9

Download from the [Windows Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.9.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.9.zip)

### Features

- Shadow spread support
- Double click to zoom tool button sets zoom to 100%
- Each object now highlights by a separate frame when several objects are selected
- Now you can reset the image to its original size with the link on the right panel
- Letter spacing and paragraph spacing support in text blocks

### Bug Fixes

- Several bugs in the text editor fixed
- Text style and weight change error
- Color picker closing bug
- Duplicated font names are removed in dropdown list
- Selection frame was disappearing after opening some sketch files
- Undo/redo for multiple selected objects worked wrong on when moving by arrow keys
- Sticking in scroll mode
- Minor bug fixes

### Improvements

- Better support for text blocks in sketch file
- Initial window size now is being changed depending on screen scale and size
- Snapping support for objects outside of artboards
- Image overrides and opacity support for symbol objects

## 3.8

Download from the [Windows Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.8.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.8.zip)

### Features

- Vector tool! You can create and edit the polygons and Bezier curves. 

![Vector tool](Images/VectorTool.png)

- [Help!](https://docs.icons8.com) 
- Symbols: we started saving the symbols! If you open a file and there're some symbols, Lunacy preserves these symbols on saving. Expect the complete support of symbols in the next release.
- You can add, delete, and rename the pages now. 
- Vertical align for text
- We fully support lowercase and UPPERCASE parameters in the .sketch files now (before, we were reading, but not saving them) 
- The objects on an artboard have the constraints now (we only had it for the groups before)
- The artboards have the "Adjust content on resize" setting now. When enabled, the objects move; if not, crop.

### Bug Fixes

- Horizontal scroll! Sorry for breaking it in the last release.
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
