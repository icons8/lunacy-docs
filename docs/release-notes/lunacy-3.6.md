# Release notes

## Version v3.6

### New Features

- linear and radial gradient editors
- dragging images from the desktop into shapes as image-fill
- support of sketch files converted from PSD by third-party service
- more [hotkeys](/man/hot-keys)

### Improvements

- internal optimizations and refactoring
- better sketch export support

### Bugs fixes

- minor bug fixes


## Version 3.5

### New Features

- objects render cache (performance improvements, CPU usage decreased)

### Improvements

- workspace changes the background color from white to light-gray when artboard added
- resize artboard from top crops content instead of moving it

### Bugs Fixes

- image loading from sketch file fixed
- export images fix
- minor bug fixes

## Version 3.4

### New Features

- sketch v50 format support
- math in numeric text fields

### Bugs Fixes

- folder structure fix
- loading from explorer fix

## Version 3.3

### New Features

- blur and shadow effects support
- new Avatar tool, which adds random avatar images in one click
- hotkey for toggling rulers: `Ctrl`+R
- animation, when select artboard preset

### Improvements

- styles and colors of UI controls have a more consistent style
- icons updated
- removed object properties when artboard tool is active
- System fonts and Google Fonts have a single list sorted by name now

### Bugs Fixes

- closing the main menu by clicking outside of it
- sketch file loading error when it has extended text objects with inline styles
- file name fix on "Save as" dialog
- fixed object renaming in the layer tree
- text alignment resets when other properties change
- increased color precision when loading and save sketch files

## Version 3.2

### New Features

- UI for initial shadow support
- saving the state of rulers from the last session
- hotkeys have tooltips now
- Undo/Redo support for text line-height property
- shape override in symbols
- nested symbols support
- blend mode support for objects
- flip(mirror) object tool

### Improvements

- guide and distance lines restyled
- scroll to the first object when selecting another page
- new icons for flip tool

### Bug Fixes

- right panel layout fixes in the scroll-view mode
- the weight of the text resets after selecting another text object
- constraint calculations fixed
- the height of text calculates properly now
- default Boolean operations in combined shapes fixed in sketch files 
- after group member resized it was dropped out of its group
- the typeface was reset after select text object
- fixed preview image aspect radio when saving to sketch
- performance improvements
- art-board grid tuned

## Version 3.1

### New Features

- cursor sizes changed depend on dpi of display
- color picker can be closed by escape key
- copy paste between lunacy windows

### Improvements

- PNG compression on export assets
- new document created with empty page
- improved Export assets to CDN
- improved selection behavior
- the new object is created over to the selected object, instead of on top of the layers list

### Bug Fixes

- resize frame was not updated after select art-board preset
- auto-size was disabled when text object duplicated or copied
- fixed SVG export (tags sometimes wasn't closed properly)
- decreased fonts loading time
- fixed shadow and blur effects support loaded from sketch file
