# Release notes

## Version 3.3

### **Added**

- blur and shadow effects support
- new Avatar tool, which add random avatar images in one click
- hotkey for toggling rulers: Ctr+R
- animation, when select artboard preset

### **Changed**

- styles and colors of UI controls became more consistent
- icons updated
- removed object properties when artboard tool is active
- fonts from different sources are sorted by name in fonts dropdown list

### **Bugs fixed**

- closing main menu by clicking outside of it
- sketch file loading error when it has long text objects with inline styles
- file name fix on "Save as" dialog
- fixed object renaming in layer tree
- text alignment was reset when other properties was changed
- increased color precision when loading and save sketch files

## Version 3.2

### **Add**

- UI for initial shadow support
- saving state of rulers from last session
- hotkeys now shown in tooltips
- Undo/Redo support for text line height property
- shape override in symbols
- nested symbols support
- blend mode support for objects
- flip(mirror) object tool

### **Change**

- guide and distance lines restyled
- scroll to first object when select another page
- new icons for flip tool

### **Bug fix**

- right panel layout fixes in scroll-view mode
- weight of text was broken after first select of text object
- constraint calculations fixed
- text objects height calculation fixed
- default Boolean operations in combined shapes fixed in sketch files [image]
- after group member resized it was dropped out of it's group
- typeface was reset after select text object
- fixed preview image aspect radio when saving to sketch
- performance improvements
- art-board grid tuned

## Version 3.1

### **Add**

- cursor sizes changed depend on dpi of display
- color picker can be closed by escape key
- copy paste between lunacy windows

### **Change**

- PNG compression on export assets
- new document created with empty page
- improved Export assets to CDN
- improved selection behavior
- new object is created over to selected object, instead of on top of layers list

### **Bug fix**

- resize frame was not updated after select art-board preset
- auto-size was disabled when text object duplicated or copied
- fixed SVG export (tags sometimes wasn't closed properly)
- decreased fonts loading time
- fixed shadow and blur effects support loaded from sketch file
