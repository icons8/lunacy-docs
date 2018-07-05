# Lunacy Release Notes


## Version 3

Version 3 introduced the full-scale editor. We've launched it in March and dedicated the following month fixing the bugs, improving the performance, and developing the remaining features such as gradients.

## 3.7

Download from the [Windows Store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge), the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.7.exe), or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.7.zip)

### **New Features**

- You can rearrange the gradient stops now
- Corner radius thumbs for rectangles
- Text transformation support: upper case, lower case, normal
- Export projects to [Sketch the Ripper](https://icons8.com/articles/sketch-ripper-free-tool-rip-sketch-file-contents/)
- Zoom to area tool

### **Improvements**

- Top panel layout changed
- Property panel's tab selectors moved to the bottom
- Show distance indicator, when moving objects with  Alt + an arrow key

### **Bugs Fixed**

- Fixed bug, when the click event didn't fire when behind the invisible or masked objects
- Minor bug fixes

## 3.6

Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.6.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.6.zip)

### **New Features**

- Linear and radial gradient editors
- Dragging images from the desktop into shapes as image-fill
- Support of sketch files converted from PSD by third-party service
- More [hotkeys](/man/hot-keys)

### **Improvements**

- internal optimizations and refactoring
- better sketch export support

### **Bugs Fixes**

- minor bug fixes


## 3.5

Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.5.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.5.zip)

### **New Features**

- objects render cache (performance improvements, CPU usage decreased)

### **Improvements**

- workspace changes the background color from white to light-gray when artboard added
- resize artboard from top crops content instead of moving it

### **Bugs Fixes**

- image loading from sketch file fixed
- export images fix
- minor bug fixes

## 3.4
Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.4.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.4.zip)

### **New Features**

- sketch v50 format support
- math in numeric text fields

### **Bugs Fixes**

- folder structure fix
- loading from explorer fix

## 3.3

Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.3.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.3.zip)

### **New Features**

- Blur and shadow effects support
- New Avatar tool, which adds random avatar images in one click
- Hotkey for toggling rulers: Ctr+R
- Animation, when select artboard preset

### **Improvements**

- styles and colors of UI controls have a more consistent style
- icons updated
- removed object properties when artboard tool is active
- System fonts and Google Fonts have a single list sorted by name now

### **Bugs Fixes**

- closing the main menu by clicking outside of it
- sketch file loading error when it has extended text objects with inline styles
- file name fix on "Save as" dialog
- fixed object renaming in the layer tree
- text alignment resets when other properties change
- increased color precision when loading and save sketch files

## 3.2
Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.2.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.2.zip)

### **New Features**

- UI for initial shadow support
- saving the state of rulers from the last session
- hotkeys have tooltips now
- Undo/Redo support for text line-height property
- shape override in symbols
- nested symbols support
- blend mode support for objects
- flip(mirror) object tool

### **Improvements**

- guide and distance lines restyled
- scroll to the first object when selecting another page
- new icons for flip tool

### **Bug Fixes**

- right panel layout fixes in the scroll-view mode
- the weight of the text resets after selecting another text object
- constraint calculations fixed
- the height of text calculates correctly now
- default boolean operations in combined shapes perform correctly now
- after resizing a group member,  we drop it  out of its group
- the typeface resets after select text object
- fixed preview image aspect radio when saving to sketch
- performance improvements
- art-board grid tuned

## 3.1
Download the [Installer](https://desktop.icons8.com/lunacy/LunacySetup_3.1.exe) or [Portable](https://desktop.icons8.com/lunacy/LunacyPortable_3.1.zip)

### **New Features**

- cursor sizes changed depend on dpi of display
- escape key can close color picker
- copy paste between lunacy windows

### **Improvements**

- PNG compression on export assets
- new document created with empty page
- improved Export assets to CDN
- improved selection behavior
- a new object is created over to the selected object, instead of on top of the layers list

### **Bug Fixes**

- resize frame not updated after select art-board preset
- auto-size was disabled when text object duplicated or copied
- fixed SVG export (tags sometimes wasn't closed properly)
- decreased fonts loading time
- fixed shadow and blur effects support loaded from sketch file

## Version 2

We've [presented](https://www.producthunt.com/posts/icons8-lunacy-2-0) this version middle 2017. Lunacy version 2 didn't allow editing and served as a handoff tool. It allowed to view the documents, copy the CSS code, and export assets. 

## Version 1

After the meticulous testing with all kinds of Sketch files, we've launched Lunacy as a .sketch viewer. Two weeks after, version 43 came, completely changing the format. We had to rework it from scratch.