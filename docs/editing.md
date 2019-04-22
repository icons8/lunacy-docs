---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Editing
description: Learn about tools that will help you create shapes you want
icon: 'pencil-tip'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Objects
        url: '/objects'
    prev:
        content: Interface
        url: '/interface'
---



## Selecting

Selecting objects in Lunacy is easy: You just click on an object in your canvas. Once the object is selected, you should see eight little handles along its outline; one in each corner and one in the center of each edge.

![Select an object and see its properties](public/editing_select_single_object.gif)

{:.image-info}
Sheep selected for breeding

Alternatively, you can use the Layer list to select an object. Clicking an object's name in the list selects it on the canvas.

You can select multiple objects by holding down the `Shift` key on the keyboard and clicking on other objects.

{:.is-big}
![Use the Layer List to select an object](public/editing_select_multiple_objects.gif)

{:.image-info}
The whole flock of sheep can be selected in the Objects list

### Selecting Group vs. Object

If you click on an object within a group, Lunacy selects the whole group. This is usually quite handy: You can easily move around whole components in your design.

Sometimes you need to choose a single object though. To do so, hold `Ctrl` when choosing the object.

## Adding

The most common type of objects in your document will be shapes. The easiest way to add a shape is to pick one of the standard shapes from the toolbar. There is a wide variety of default shapes provided by Lunacy; these include ovals, rectangles, lines and more.

## Moving

### Moving With Keyboard

* Hit the arrow keys to move an object by one pixel
* `Shift` with `←` `↑` `↓` `→` moves objects by 10 pixels

**Using keyboard is handy when you either**

* Need precision
* Or need to move objects just a little bit (as designers, we spend 50% of our time making these small adjustments)

### Moving Horizontally and Vertically

Hold `Shift` while moving an object. Lunacy will lock one of the axes and move the object either horizontally or vertically.

## Duplicating

Hold `Alt` and move the object. Lunacy will create a copy. Another way to create a copy, is by pressing `Ctrl` `D`

## Grouping

Grouping objects is a good way to organize a document. After creating a group, you can move, scale, and duplicate the group as a single object.

Designers use grouping a lot. One can even say that designers turn their documents into a series of nested groups.

![Grouping objects](public/editing_grouping.png)

{:.image-info}
Designers use grouping a lot

## Resizing

Each object in Lunacy has eight handles that become visible when you select objects. Those handles don't just indicate selection; you can also use them to resize a layer. Grab any of the handles and drag them to resize an object.

![Resize objects](public/editing_resizing.gif)

{:.image-info}
Use handles to resize in any direction

### Notice the Group Resizing Option.

Imagine you've got an object inside a group. When you resize this group, how the object should behave? Should it resize or stay locked?

![Resize groups](public/editing_constraints.png)

{:.image-info}
It calls Constraints

For example, when **_Fix Height_** is enabled, the height remains intact when you resize the parent vertically.

{:.is-big}
![How constraints works](public/editing_constraints_example.gif)

{:.image-info}
Note how in the second group the sun is still at his position, even after group resizing

You only see this option if you selected an object inside a group or an artboard.

## Rotating

You can rotate an object using the rotate clock. As rotation is a value measured in degrees, it can be edited via Lunacy's Inspector.

{:.is-big}
![Rotate objects](public/editing_rotating.gif)

{:.image-info}
You Spin Me Round!


## Z-Axis Position

Each object on your artboard can be located on the Z-axis. You can:
* Bring objects forward (keyboard shortcut `Ctrl` `]`
* Bring it to the front (keyboard shortcut `Shift` `Ctrl` `]`
* Send objects backward (keyboard shortcut `Ctrl` `[`
* Send an object directly to the back (keyboard shortcut `Shift` `Ctrl` `[`

{:.is-big}
![Change Z-axis position for elements](public/editing_positioning.png)

{:.image-info}
Also, you can use the power of contextual menu, for moving objects on the Z-axis

## Align and Distribute

In a bar at the very top of the canvas, you will find the buttons for aligning and distributing objects. These buttons will become active when you have more than one object selected.



| Button | Action | Shortcut |
|---|---|---|---|---|
| ![Align left](public/editing_align_left.png) | Align left | `Shift` `Ctrl` `←` |
| ![Center vertically](public/editing_align_center_v.png) | Center vertically | `Shift` `Ctrl` `-` |
| ![Align right](public/editing_align_right.png) | Align right | `Shift` `Ctrl` `→` |
| ![Align top](public/editing_align_top.png) | Align top | `Shift` `Ctrl` `↑` |
| ![Center horizontally](public/editing_align_center_h.png) | Center horizontally | `Shift` `Ctrl` `|` |
| ![Align bottom](public/editing_align_bottom.png) | Align bottom | `Shift` `Ctrl` `↓` |
| ![Distribute horizontally](public/editing_distribute_horizontally.png) | Distribute horizontally | `Shift` `Ctrl` `H` |
| ![Distribute vertically](public/editing_distribute_vertically.png) | Distribute vertically | `Shift` `Ctrl` `V` |




## Edit Shape

For some objects, like the rectangle, it’s possible to edit the shape. To activate Edit shape mode, you need to double click on the object. This option allows you to modify properties like Corner radius for a rectangle.

{:.is-big}
![Editing shapes](public/editing_edit_shape.png)

{:.image-info}
Select and edit vector points of the shape
