---
title: Release v3.1
category: Releases
published: 6.4.2018
author: Icons8
---

## Download
---
 [Offline installer](https://desktop.icons8.com/lunacy/LunacySetup_3.1.exe)

 [Get from windows store](https://www.microsoft.com/store/apps/9pnlmkkpcljj?ocid=badge)

 [Portable (no installer)](https://desktop.icons8.com/lunacy/LunacyPortable_3.1.zip)

*Ensure [that VC++ redistributable 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145)
and [Net framework 4.6.1](
https://www.microsoft.com/en-us/download/details.aspx?id=49981) is installed on your machine*

## Changes
---
### Add

- cursor sizes changed depend on dpi of display
- color picker can be closed by escape key
- copy paste between lunacy windows

### Change

- PNG compression on export assets
- new document created with empty page
- improved Export assets to CDN
- improved selection behavior
- new object is created over to selected object, instead of on top of layers list

### Bug fix

- resize frame was not updated after select art-board preset
- auto-size was disabled when text object duplicated or copied
- fixed SVG export (tags sometimes wasn't closed properly)
- decreased fonts loading time
- fixed shadow and blur effects support loaded from sketch file