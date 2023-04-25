---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Text
description: Learn how to work with text in Lunacy
icon: 'document'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Styling
        url: '/styling'
    prev:
        content: Layers
        url: '/layers'
---

This section describes how to add and modify text layers in Lunacy, and how to use the built-in placeholder text generation tool.

## Adding text layers

To **add a text layer**, press `T` or press <embed type="image/svg+xml" alt="Union 2" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/hfMjzS0lpUy6zmVsPVMJdg.svg" width="24" /> on the toolbar to activate the **Text tool**, then:

- **Click anywhere on the canvas** to place the text layer. You can either type your own text or use the generated text options that appear in the dropdown menu as you create the layer.

- **Click and drag** to place a text layer with your custom size. Placeholder texts will appear inside the layer you’re creating, with their font size set automatically.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_add_text.png" height="auto"><source src="/public/text_add_text.mp4" type="video/mp4"></video>

Generated text options include names, job titles, emails, countries, headings, paragraphs, and over a dozen more placeholders for you to choose from. 

Read more about [working with generated text content](#text-generation) below.

### Text-related menus

Lunacy has a wide range of text editing options, all located in their respective menus:

<embed type="image/svg+xml" alt="text_menus" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/HOLOcZijpk2JFp76wTIDyQ.svg" width="844" /> 

- **Text layer properties in the right panel.** The **Text** section appears in the right panel whenever you select a text layer. It’s a more convenient way to access all the text options available on the menu bar, including fonts, their weight and size, line and paragraph spacing, advanced text options such as text case, list styling, and others.
- **Text style menu.** Also located in the right panel. It contains the list of all applicable text styles in the document.
- **Text options** **on the menu bar.** Open the **Text** tab on the menu bar to access all the text options available in the right panel, as well as the **Fonts embedding** and **Emoji style** options. Read more about embedding fonts and working with emojis below.

## Editing text

To **edit a text layer**:

1. Click the layer on the canvas or select it in the **Layer list**.
2. Press `Enter` or click the **Edit Layer** button (<embed type="image/svg+xml" alt="edit_layer" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/7QXug2EMM0OE7EyRtqiBBw.svg" width="24" />) on the context toolbar to enable **Edit mode**.
3. Type a new text or edit the existing one and modify any text properties in the **Text** section of the right panel.
4. Once you’re done, press `Esc` to exit the edit mode.

Editing a layer with generated texts won’t detach it from the generated content. You’ll still be able to refresh it.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_edit_text.png" height="auto"><source src="/public/text_edit_text.mp4" type="video/mp4"></video>

## Text settings

Once you add and select a text layer, the **Text** section appears in the right panel, displaying all the available text settings and formatting options:

<embed type="image/svg+xml" alt="text_settings" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/0tDtN6hqLUOXVjw9ieUjpA.svg" width="844"/> 

<div class="callout callout--info">
     <p><strong>Note:</strong> You can apply different font settings of the same type (fonts, font size, color, text size) to a text within a layer. In this case, when this layer is selected, the fields in the right panel will display <b>Mix</b>.</p>
</div>

- **Font list.** To change fonts, click on the font list menu in the **right panel**, then:
    - Type the font family name in the field.
    - Expand the dropdown menu with the list of available fonts, then select one from the list.
    
    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_change_font.png" height="auto"><source src="/public/text_change_font.mp4" type="video/mp4"></video>
    
    The font list displays available fonts and their samples, with your three most recently used fonts displayed at the top. If a font name is too long and seems truncated, hover a cursor over it to view the full name.

    You can filter fonts using the buttons above the list:
    - **All**: Shows the full list of available fonts.
    - **System**: Shows the list of fonts installed on your computer.
    - **Google**: Shows the list of fonts available in the [Google Fonts](https://fonts.google.com/) library.
    
    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_filtering_font_list.png" height="auto"><source src="/public/text_filtering_font_list.mp4" type="video/mp4"></video>
    
    Lunacy’s integration with Google Fonts solves most problems with missing fonts. Before you apply a Google font for the first time, it appears without a matching sample. Click on a Google font for Lunacy to automatically download and apply it to the selected text layer.

    <div class="callout callout--info">
     <p><strong>Note:</strong> You might experience a slight loading delay when applying a Google font for the first time. Also, if your computer is not connected to the internet, the list of Google fonts only includes the fonts that you have already used.</p> </div>
    
- **Font style.** Open the font style dropdown menu to change a text’s styling properties (**Bold**, *Italic*, ***Bold Italic***, etc.) If a font only has one style, this menu will be grayed out.

    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_block_formatting.png" height="auto"><source src="/public/text_block_formatting.mp4" type="video/mp4"></video>

    To change the properties of an individual word, you don’t necessarily have to select it. Just set the cursor anywhere inside or at the end of a word and change the properties. If you set the cursor at the very end of the text, the formatting options will be applied to the entire text. You can also use standard text editor shortcuts to speed things up:
    - `Ctrl + B` / `⌘ + B` — **Bold**
    - `Ctrl + I` / `⌘ + I` — *Italic*
    - `Ctrl + U` / `⌘ + U` — Underline
    
    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_individual_word_formatting.png" height="auto"><source src="/public/text_block_formatting.mp4" type="video/mp4"></video>
    
- **Font size.** Use this field to **set the font size** or press `Ctrl + Alt + "+"` / `⌥ + ⌘ + "+"` and `Ctrl + Alt + "-"`/`⌥ + ⌘ + "-"` to increase and decrease the font size respectively.

    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_change_font_size.png" height="auto"><source src="/public/text_change_font_size.mp4" type="video/mp4"></video>
    
    **See also:**
    <br>
    <a href="https://lunacy.docs.icons8.com/basics/#right-panel-properties" target="_blank">Right panel properties</a>
    
- **Line, letter, and paragraph spacing.** Use these settings to adjust the spacing between lines, letters, and paragraphs.

    The default **line spacing** depends on the selected font, as well as its style and size. It appears grayed out, but you can change the value manually anytime. To **restore the default line spacing value**, delete the current value and press `Enter`.
    
    The default **letter** and **paragraph spacing** is set to `0`.
    
    You can **change spacing values** by:
    - Selecting the required font size from the list.
    - Entering a value in the input field.
    - Hovering over the input field and scrolling with the middle mouse button.
    - Using shortcuts:
        - `Ctrl + Alt + >` / `⌥ + ⌘ + >` or `Ctrl + Alt + <` / `⌥ + ⌘ + <` — increase or decrease line spacing.
        - `Ctrl + Shift + >` / `⌘ + Shift + >` or `Ctrl + Shift + <` / `⌘ + Shift + <` — increase or decrease letter spacing.
        - There is no shortcut for paragraph spacing.
        
        <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_line_letter_paragraph_spacing.png" height="auto"><source src="/public/text_line_letter_paragraph_spacing.mp4" type="video/mp4"></video>
            
- **Text color.** Use this field to **change the text color**:
    - Click on the color circle to open up the standard color picker.
    - Choose a color style from the document colors.
    - Enter a color code manually.

    <div class="callout callout--info">
     <p><strong>Tip:</strong> When you add a text layer on top of a layer, Lunacy automatically sets a text color that contrasts with the background to save you a couple of clicks.</p> </div>
    
    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_change_font_color.png" height="auto"><source src="/public/text_change_font_color.mp4" type="video/mp4"></video>

    **See also:** 
    <br>
    <a href="https://lunacy.docs.icons8.com/layerstyles/" target="_blank">Layer and text styles</a>
    
- **Text layer resizing options.** These three buttons determine how text boxes change in size depending on the content:
    - **Horizontal resize**: The text box expands horizontally to fit the text content on a single line.
    - **Vertical resize**: The text box adjusts vertically to fit the text content, while the width of the text box remains unchanged.
    - **Fixed size**: In this mode, the size of the text box is fixed and does not adjust to fit the text content.
    
    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_resizing_options.png" height="auto"><source src="/public/text_resizing_options.mp4" type="video/mp4"></video>
    
    **Some notes:**
    - If you drag and shrink a text box around a single-line text, the resize mode will adjust automatically. Double-click on it to reset the box to horizontal resize mode and transform the multiline text into a single line again.
    
    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_single_line_resizing.png" height="auto"><source src="/public/text_single_line_resizing.mp4" type="video/mp4"></video>
        
    - If your text box is larger than the text inside it, click on the text box borders to enable auto-resize mode and make the text box fit snugly around the text.
    
    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_double_click_to_resize.png" height="auto"><source src="/public/text_double_click_to_resize.mp4" type="video/mp4"></video>
        
- **Text alignment.** Use these buttons to align text inside the text box or use these shortcuts:
    - `Ctrl + Alt + {` / `⌥ + ⌘ + {` — align text to the left
    - `Ctrl + Alt + }` / `⌥ + ⌘ + }` — align text to the right
    - `Ctrl + Alt + T` / `⌥ + ⌘ + T` — center text
    - `Ctrl + Alt + J` / `⌥ + ⌘ + J` — justify

    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_aligning_text.png" height="auto"><source src="/public/text_aligning_text.mp4" type="video/mp4"></video>
    
    You can also align text within text boxes using the **alignment magnets** that appear around the text box when you select it. They combine the functions of text alignment and text position so you can position your text right on the canvas.


    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_alignment_magnets.png" height="auto"><source src="/public/text_alignment_magnets.mp4" type="video/mp4"></video>
    
    If you want to hide the magnets, uncheck the **Text Alignment Magnets** option in the **View** section of the menu bar.


- **Text position.** Adjust the position of text content within the text box:
    - Position text to the top border (default option)
    - Position text to the bottom border
    - Center the text within the layer
    
    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_position.png" height="auto"><source src="/public/text_position.mp4" type="video/mp4"></video>

- **Additional text options**

    Click <embed type="image/svg+xml" alt="Group 4" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/EzR_O8DAKkeQ_xZBwCq5rA.svg" width="24" /> in the **Text** section of the right panel to access additional text formatting options. They include:

    - **Transform options.** Choose the letter case for your text:
        - **Aa**: Title Case 
        - **AA**: UPPER CASE
        - **aa**: lower case
    - **Decorations.** Apply underline or strikethrough effects.
    - **List type.** Choose from numbered or bullet point list styles.
    - **Features.** Add special features like subscript and superscript to your text.

    <video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_additional_options.png" height="auto"><source src="/public/text_additional_options.mp4" type="video/mp4"></video>

<div class="callout callout--info">
     <p><strong>Tip:</strong> If you select several text layers, the <b>Selection fonts and colors</b> section in the right panel will display all the <b>fonts</b> and <b>colors</b> present in the selected layers, so you can adjust these properties for several texts at a time.</p>
</div>

**See also:**
<br>
<a href="https://lunacy.docs.icons8.com/layers/#selection-fonts-and-colors" target="_blank">Selection fonts and colors</a>


## [Text generation](#text-generation)

When you need to add placeholder text to your designs, there’s no need to leave the app to google them or think of anything yourself: Lunacy does the work for you. Generated texts include names, job titles, various types of contact information, headings and paragraphs, as well as over a dozen more options.

To use text generation, activate the **Text tool** (`T`) and click on the canvas, then:

- Choose one of the text generation options that appear in the dropdown menu below the cursor.
- Start typing the desired placeholder option (“name,” “paragraph,” “email,” etc.) and choose from the narrowed list of options. 

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_add_text_select.png" height="auto"><source src="/public/text_add_text_select.mp4" type="video/mp4"></video>

When you click and drag to create a custom size text layer, Lunacy automatically fills the layer with placeholder texts. **Auto font size** sets the size of the text depending on the width and height of the text box: Lunacy guesses whether you’re creating a heading, paragraph, email field, and so on. You can either leave these texts or go ahead with your own options.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_add_text_drag.png" height="auto"><source src="/public/text_add_text_drag.mp4" type="video/mp4"></video>

### Auto refresh

To refresh the generated text, click <embed type="image/svg+xml" alt="Refresh/Normal" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/Wrpud5KNLUe9hzSDiwGnew.svg" width="24" /> or press `Shift + R`. 

Also, anytime you copy a layer with generated text, a new generated placeholder will appear in the duplicate.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_auto_refresh.png" height="auto"><source src="/public/text_auto_refresh.mp4" type="video/mp4"></video>

This happens due to **Auto Refresh**, which you can turn off by selecting **Detach from Generated Content** in the layer context menu or in the **Layer** > **Content Generation** section of the menu bar.

Combine text generation with other handy Lunacy features, like the <a href="https://lunacy.docs.icons8.com/tools/#avatar-tool" target="_blank">Avatar tool</a> and <a href="https://lunacy.docs.icons8.com/layers/#repeat-grid" target="_blank">Repeat grid</a> so your design process stays distraction-free:

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_avatar_text_repeat_grid.png" height="auto"><source src="/public/text_avatar_text_repeat_grid.mp4" type="video/mp4"></video>

## Text styles and effects

In addition to text settings, you can also apply standard layer effects to your text layers, including:

- Fills
- Borders
- Shadows
- Inner shadows
- Blurs

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_adding_effects.png" height="auto"><source src="/public/text_adding_effects.mp4" type="video/mp4"></video>

You can save combinations of layer effects and text settings as **text styles** which you can reuse across your document. Text styles appear alongside other layer styles in the dropdown menu of the **Style** section in the right panel.

<div class="callout callout--info">
     <p><strong>Note:</strong> When you edit a text layer that includes effects, Lunacy hides layer styling effects and will show them again once you finish and exit <b>Edit mode</b>. This makes it easier to edit heavily styled text layers, like the one below.</p>
</div>

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_editing_text_with_effects.png" height="auto"><source src="/public/text_editing_text_with_effects.mp4" type="video/mp4"></video>

**See also:**
<br>
<a href="https://lunacy.docs.icons8.com/styling/" target="_blank">Styling</a>
<br>
<a href="https://lunacy.docs.icons8.com/layerstyles/" target="_blank">Layer and text styles</a>

## Text and shapes

### Adding text to shapes

You can add a perfectly centered text layer to a shape by selecting the shape, then pressing `T` to activate the text tool. Lunacy will group the shape and the resulting text layer. The text you enter in the layer will be in **Fixed size** mode, restricted by the borders.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_to_shape.png" height="auto"><source src="/public/text_to_shape.mp4" type="video/mp4"></video>

This is useful for designing buttons, menus, and similar UI elements, especially when coupled with [text generation](#text-generation).

### Converting text to outlines

You can **convert text into outlines**, so that every letter becomes a vector shape:

- Press `Ctrl + Shift + O` / `⌘ + Shift + O`.
- Select **Outline stroke** on the context menu.
- Select **Text** > **Convert to Outlines** on the menu bar.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_to_outlines.png" height="auto"><source src="/public/text_to_outlines.mp4" type="video/mp4"></video>

<div class="callout callout--info">
     <p><strong>Note:</strong> Keep in mind that text-to-outline operations are demanding for system resources. Attempts to convert large portions of text may slow Lunacy down.</p>
</div>

## More text options

### Missing fonts

When you open a document, Lunacy checks whether all the required fonts are available on your computer. If some of them are missing but they are available in the Google Fonts library, Lunacy will download and apply them, provided your computer is connected to the internet.

If they aren’t part of Google Fonts, the missing fonts button (<embed type="image/svg+xml" alt="Subtract" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/kNCv3_mGnU2nETcTBVN0dg.svg" width="24" />) appears on the top bar. Lunacy renders the text layers using the default Inter font, and when you select these layers, the name of the missing font appears in red in the font menu.

Click the missing fonts button to open up a dialog box with options to replace the missing fonts with alternatives so you can edit the layers.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_missing_fonts.png" height="auto"><source src="/public/text_missing_fonts.mp4" type="video/mp4"></video>

### Fonts embedding

You can embed fonts into your document before sharing it with other people to ensure that the text layers will look exactly as you designed them, even on computers without the fonts used in the document.

To **embed fonts**:

1. Go to **Text > Fonts Embedding** on the menu bar.
2. Select the required fonts and click **Embed fonts**.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/text_fonts_embedding.png" height="auto"><source src="/public/text_fonts_embedding.mp4" type="video/mp4"></video>

<div class="callout callout--info">
     <p><strong>Note:</strong> By embedding a font, you confirm that you have a license allowing you to distribute the font.</p>
</div>

### Working with emojis

You can add emojis to text layers in any convenient way by using the emoji keyboard on your OS or pasting them into the text box. The emoji styles in Lunacy include Apple, Microsoft, and Noto style emojis. 

Switch through them by selecting **Text > Emoji Style** on the menu bar.

<embed type="image/svg+xml" alt="style_of_emojis" src="https://cdn-eu.icons8.com/docs/Dko8QE6mZ06fz2gAGGUBbA/9xgNwMCTMUKVQ3ABwzuoAA.svg" width="844" /> 