# Prototyping

> Learn how to create interactive prototypes in Lunacy


Prototypes make your design interactive, letting you communicate both aesthetics and user experience.

## Creating a prototype

<div class="callout callout--info">
    <p><strong>Note:</strong> If you are planning to add prototyping to your project, the use of frames is a must.</p>
</div>

To create a prototype, you typically need three key elements:  

- **Hotspot** – an interactive zone that triggers an action. It can be an entire frame or a specific element within a frame, like a button or menu option. You can turn any selected frame or element into a hotspot by pressing `H` or clicking `+` in the Prototyping section of the right panel.  

  You can also create dedicated hotspot layers, which are useful when an element is too small to interact with comfortably. By adding a hotspot layer over it, you can enlarge the clickable area. To do this, select the **Hotspot tool** from the toolbar (or press `H` when nothing is selected) and draw the hotspot layer wherever needed.  

- **Connection** – a visual arrow that links the hotspot to its destination, defining the flow of the interaction.  

- **Destination** – the target frame or a specific location within a frame where the interaction will take the user.  


The video below shows an example of creating a simple prototype.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/prototyping_linking_frames.png" height="auto"><source src="/public/simpleprototypev11.mp4" type="video/mp4"></video>

What happens in the video:  

1. We select **Frame 1**, click `+` in the **Prototyping** section, and link it to **Frame 2**. This makes the entire frame interactive—clicking anywhere on it (default action) navigates to Frame 2.  
2. In **Frame 2**, we create a **hotspot** over the icon and text block, grouping them into a single interactive zone. We then link this hotspot back to **Frame 1**.  
3. Pressing `F5` opens the **prototype player**. Clicking anywhere in Frame 1 takes us to Frame 2. If we click outside the interactive zone in Frame 2, the player highlights the clickable area.  
4. Pressing `Esc` exits the prototype player.  

The **Prototyping** section offers various settings to help you design more complex prototypes with diverse animations, transitions, and interaction flows.

## Prototyping settings

When setting up an interaction in your prototype, think of it as answering a few key questions:

* **On what event?** (Trigger)
* **What happens?** (Action)
* **If it moves, where to?** (Destination)
* **What does it look like?** (Animation)
* **What happens if it is scrolled?** (Behavior on scroll)


The figure below explains the prototyping settings. Experimenting with these options will bring your designs to life with natural interactions.

<embed type="image/svg+xml" alt="prototyping_settingsv11" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/y4w8lTEO4UeyEQCWaUYfmA.svg" /> 


### Triggers

Triggers define what starts an interaction in your prototype.

| **Trigger**        | **What it does**                                    | **Example use case**                         |
|--------------------|--------------------------------------------------|--------------------------------------------|
| **On click**      | Activates when the user clicks on an element.     | Toggle a dropdown menu when clicking a button. |
| **On drag**       | Triggers when an element is dragged.              | Swipe between frames.             |
| **While hovering** | Runs as long as the cursor stays over an element. | Change the color of a button when hovered. (You'll need to have a component with different states to switch between them)|
| **While pressing**| Active while the user holds down a click or key.  | Show an animation while pressing a button. |
| **Key**           | Responds to a specific keyboard input.            | Press "Esc" to close a popup window.       |
| **Mouse enter**   | Fires when the cursor moves over an element.      | Expand a sidebar when the cursor enters its area. |
| **Mouse leave**   | Fires when the cursor moves away from an element. | Collapse a sidebar when the cursor leaves it. |
| **Mouse up**      | Triggers when a pressed mouse button is released. | Releasing the mouse dismisses a pop-up window. |
| **Mouse down**    | Triggers when a mouse button is pressed.          | Pressing a card makes it pop out slightly. |
| **After delay**   | Runs automatically after a set time.              | Show a notification after a few seconds.   |

### Actions
The action determines what happens next in the prototype after a trigger.

| **Action type**    | **What it does**                              | **Example use case**                                  |
|-------------------|----------------------------------|--------------------------------------------------|
| **Navigate to**   | Moves the user to another frame.          | Clicking a button takes the user to a different screen. |
| **Scroll to**     | Scrolls to a specific section within the same frame. | Clicking "Back to top" smoothly scrolls to the top of the page. |
| **Open URL**      | Opens an external link in a browser.       | Clicking a "Learn more" button takes the user to a website. |
| **Back**         | Returns to the previous screen. This action type requires no links.        | A "Back" button navigates to the last visited frame. |
| **Open overlay**  | Displays a floating layer over the current screen. | Tapping "Delete" opens a warning. |
| **Swap overlay**  | Replaces the current overlay with another one. | Switching between different steps of a multi-step form. |
| **Close overlay** | Hides the currently active overlay.       | Clicking "X" closes  a pop-up window. |


### Destinations

The destinations dropdown (<embed type="image/svg+xml" alt="Icon 24" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/eADidnPOo0GeElwzqXhkFg.svg" />) lists all available frames in the document, including those on other pages. Keeping frame names clear and organized is a good practice, especially in large projects—it will save you time when selecting the right frame.

<div class="callout callout--info">
    <p><strong>Tip:</strong> Hovering over a frame in the list will automatically zoom to it.</p>
</div>

### Animations

Animations define how transitions between frames happen, adding fluidity to interactions. Below is a breakdown of the available animation types and their configuration options.

| **Animation type**  | **What it does**                                       | **Example use case**                                    | **Adjustable settings** |
|--------------------|------------------------------------------------|------------------------------------------------|------------------|
| **Instant**       | Changes the frame immediately, with no transition. | Best for quick jumps between screens without visual effects. | None |
| **Dissolve**      | Fades the current frame into the next one.         | Smooth transitions for modals, pop-ups, or scene changes. | - Effects  <br> - Duration |
| **Move In / Out** | Moves the new frame in or the old frame out from a specified direction. | Creating a slide-in menu or overlay effect. | - Effects  <br> - Direction  <br> - Duration |
| **Push**         | Shifts the current frame out while bringing in the new one from the same direction. | Mimicking page transitions in mobile apps. | - Effects  <br> - Direction  <br> - Duration |
| **Slide In / Out** | Slides a frame into or out of view without affecting other elements. | Great for sidebars, notifications, or contextual menus. | - Effects  <br> - Direction  <br> - Duration |

You can preview how an animation will look and feel by hovering over the preview pane in the prototyping settings.


#### Animation effects

You can choose between the following animation effects:  
- **Linear** – moves at a steady pace without acceleration.  
- **Ease In** – starts slow and gradually speeds up.  
- **Ease Out** – moves quickly at first, then slows down before stopping.  
- **Ease In and Out** – combines both effects: begins slowly, accelerates in the middle, and slows down again.
- **Gentle** – creates a smooth, gradual transition for a soft feel.  
- **Quick** – moves rapidly for a snappy, responsive effect.  
- **Slow** – prolongs the transition for a more relaxed motion.  
- **Bouncy** – adds a playful, spring-like motion to the animation.   
- **Custom** – opens the Bézier curve editor, allowing you to fine-tune the acceleration and deceleration of an animation.

### **Behavior on scroll**  

These options determine how an element behaves when users scroll the prototype:  

- **Scroll** – the element moves along with the rest of the content as users scroll.  
- **Fixed** – the element stays in place while the background scrolls (e.g., floating buttons, support chat bubbles).  
- **Sticky** – the element scrolls normally but becomes fixed once it reaches the top of the prototype.  
- **Keep Scroll Position** – selecting this checkbox, ensures the prototype maintains the current [scroll position](#scrollable-prototypes) when navigating between screens, preventing it from resetting to the top.  

### Scrollable prototypes

<div class="callout callout--info">
    <p><strong>Note:</strong> Scrollable prototypes work only with frames based on <a href="https://lunacy.docs.icons8.com/raw/layers.md#adding-frames" target="_blank">frame presets</a> (Full HD, iMac, iPhone, etc.).</p>
    <p>If the list of preset frames does not include a frame of the required size, you can <a href="https://lunacy.docs.icons8.com/raw/layers.md#custom-presets" target="_blank">create a custom preset</a>.</p>
</div>

To **create a scrollable prototype**:

1. Create a frame using a preset.
2. Resize the frame vertically. Resized frames have the label **Resized** in the right panel:

    <embed type="image/svg+xml" alt="Rezsized frame" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/GOdSpBpfskmcQGujzSMcPA.svg" /> 

3. Fill the frame with content and link it with other frames.

Preview the prototype as usual and scroll down to test out the interface.

## Previewing prototypes

To **preview a prototype**, select the frame you want to start with and click the **Play** button (<embed type="image/svg+xml" alt="Play" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/HD-TYiNcVEy5Npo_ePOa8w.svg" width="20" />) at the top right corner of the interface.

If you want to always preview your prototype from a certain frame:

1. Left-click over the frame.
2. On the context menu, select **Set as Start Point**.
3. Before running the prototype player, make sure that nothing is selected.

<div class="callout callout--info">
    <p><strong>Note:</strong> Selected frames override start points.</p>
</div>

To exit the prototype player, click <embed type="image/svg+xml" alt="Play" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/HD-TYiNcVEy5Npo_ePOa8w.svg" width="20" /> again, or press `Esc`.


## Sharing prototype previews

<div class="callout callout--info">
    <p><strong>Note:</strong> This feature is available only in cloud documents. To turn a local document into cloud, click <embed type="image/svg+xml" alt="Upload to cloud" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/mhDIDVDjc0yEpQTt-4nylQ.svg" /> 
on the top panel.</p>
</div>

To share a prototype on the web:

1. Click <embed type="image/svg+xml" alt="Play" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/HD-TYiNcVEy5Npo_ePOa8w.svg" width="20" /> or press `F5` to start the prototype player.
2. In the top right corner of the player click **Share**, then click **Copy prototype link** to add the link to your clipboard.
3. Send the link to your teammate or reviewer.

<embed type="image/svg+xml" alt="Sharing prototype" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/coRUmvl4DU2CZJWjxg8jCA.svg" /> 


People working with the web prototype can leave comments. Before doing this, they will need to log in or sign up.


