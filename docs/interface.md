---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Interface
description: Explore the Lunacy interface
icon: 'full-image'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Basics
        url: '/basics'
    prev:
        content: System requirements
        url: '/sysreq'
---

Lunacy's interface is intuitive and minimal. It won't take long for you to learn how to interact with it.

This section is a brief overview of the app's interface. Get acquainted with the basics so you can get started with your designs right away.

## Overview

These are the main elements of the interface:

<embed type="image/svg+xml" alt="interface_overview" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/1jBfi42THUuARoHsnZnpLQ.svg" width="844" /> 

* **Сontent tabs**. Use them to switch between:

    * The Layer list
    * Document assets (<a href="https://lunacy.docs.icons8.com/components" target="_blank">components</a>, layer and text <a href="https://lunacy.docs.icons8.com/layerstyles/" target="_blank">styles</a>)
    * Built-in <a href="https://lunacy.docs.icons8.com/libraries/" target="_blank">libraries</a> of icons, photos, vector images, as well as <a href="https://lunacy.docs.icons8.com/libraries/#ui-kits" target="_blank">UI kits</a> and <a href="https://lunacy.docs.icons8.com/plugins" target="_blank">plugins</a>
    * The list of <a href="https://lunacy.docs.icons8.com/shortcuts" target="_blank">shortcuts</a>

    Shrink the width of the content tabs panel by dragging its border to the left:

    <video autoplay="" muted="" loop="" playsinline="" width="100%" poster="/public/show_hide_content_tabs.png" height="auto"><source src="/public/show_hide_content_tabs.mp4" type="video/mp4"></video>
    
* **The left panel**. Displays the contents of the selected tab. 

    Toggle the display of the panel on and off by pressing the shortcut corresponding to each of the 7 tabs: `Alt + 1` / `⌥ + 1` ... `Alt + 7` / `⌥ + 7`. 
    
    You can also use `Shift + F1` or **View** > **Left Panel** in the menu bar.

* **The toolbar**. Features all the primary design tools you'll need. Read more about each tool <a href="https://lunacy.docs.icons8.com/tools/" target="_blank">here</a>. 

    If you need more space or prefer to use shortcuts, you can hide the toolbar by clicking (**View** > **Toolbar**) in the menu bar.

* **The canvas**. This is your working area. Find out more about it <a href="https://lunacy.docs.icons8.com/basics/#moving-around-the-canvas" target="_blank">here</a>.

* **The right panel**. This panel lets you see and adjust the properties of the selected layer. The view of the right panel varies depends on the layer type. 

    For details, read [below](#the-right-panel).

* **The menu bar**. Displays the options and commands related to files, layers, editing, etc. 

    It also features the <embed type="image/svg+xml" alt="home" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/U0XDSMpAf0a3pPx08RsYUA.svg" width="16" /> button, which opens up the [Home tab](#home-tab).

* **The context toolbar**. The set of controls displayed on the context toolbar depends on the type of the currently selected layer. 

    Hover the cursor over a tool icon to see a pop-up explaining what it does.

* **Document tabs**. The tabs of currently open files are displayed on the right of the Home button. 

    Click on the tabs to switch between them or press `Ctrl + Tab` / `⌘ + Tab` and `Ctrl + Shift + Tab` / `⌘ + Shift + Tab`.

* **The Play button**. Starts the prototype previewer. 

    For details about prototyping in Lunacy, read <a href="https://lunacy.docs.icons8.com/prototyping" target="_blank">here</a>.

* **Additional options**. This button opens up a menu with these options:

| Button | Description | Windows and Linux Shortcut / Menu Option &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |  MacOS Shortcut / Menu Option |
|---|---|---|---|
| <embed type="image/svg+xml" alt="ruler_options" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/bkTBcjYY-kyIXxUN9M74Bg.svg" width="24" />  | The Show/Hide rulers button toggles rulers on and off. For details, read below. | `Ctrl + R`  | `⌘ + R` |
| <embed type="image/svg+xml" alt="square_grid" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/VeNN3bHygkW709kYJw0WBQ.svg" width="24" />  | The Show grid button enables the display of the square grid. Learn more about grids here. | `Ctrl + '` | `⌘ + '` |
| <embed type="image/svg+xml" alt="layout" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/i0isEF3sxUyjktCmMDT4Jw.svg" width="24" />  | The Layout button controls the display of the layout grid and is available only when there is a frame on the canvas. For details, read here. | `Ctrl + \`  | `⌘ + \` |
| <embed type="image/svg+xml" alt="prototyping" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/eutHauiFwUuQ4jRcv6LFVQ.svg" width="24" /> | The Show prototyping button controls the display of hotspots and prototyping arrows. | **View**  > **Prototyping**   |
| <embed type="image/svg+xml" alt="slices" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/5tkaoATGgUK2NjnzbPlsTg.svg" width="24" /> | With the Slice tool, you can to select a specific area on your design and export it. | **View** > **Slices**  |
| <embed type="image/svg+xml" alt="zoom_options" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/X_2I4Sz63kOqcKi5fQ5Hmw.svg" width="24" />  | The Pixels on Zoom option shows pixels when the zoom value exceeds 100. | **View** > **Pixels on Zoom** |
| <embed type="image/svg+xml" alt="comment" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/LZSDhkDI6EWCctCje5pfpQ.svg" width="24" />  | Toggle the display of document comments in the right panel on and off. | `-` |

* **The Zoom control**. Read about zooming options [below](#zooming-options).

* **Theme switch**. Use it to switch between the light and dark themes.


## [Canvas](#canvas)

The **canvas** is your working area. Add layers to it and place them wherever you want. 

If you need to work within certain boundaries, add <a href="https://lunacy.docs.icons8.com/basics/#frames" target="_blank">frames</a> to the canvas. To position layers and frames more precisely, you can add <a href="https://lunacy.docs.icons8.com/basics/#rulers">rulers</a>, <a href="https://lunacy.docs.icons8.com/basics/#guides">guides</a>, and <a href="https://lunacy.docs.icons8.com/basics/#grids">grids</a>.

Read in detail about working with the canvas in the <a href="https://lunacy.docs.icons8.com/basics" target="_blank">Basics</a> section.

## [Layer list](#layer-list)

Open the **Layer list** by clicking on the **Layers** content tab. It will display the layers on the current page:

<embed type="image/svg+xml" alt="layer_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/PuPEDNTYvEKC5atXX-ylxQ.svg" width="844" /> 

Press <embed type="image/svg+xml" alt="smart_layer_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/3uDOUlA760igh6dc4pOLLg.svg" width=16 /> to toggle the **Smart Layer list**, which displays only the layers you currently see on the canvas. It's convenient when you want to see only the layers you're working on in the Layer list.

Lunacy automatically assigns names to new layers and layer groups. You can always rename them if you like. 

If a layer name doesn't fit in the Layer list, you can change the width of the panel this way:

<video autoplay="" muted="" loop="" playsinline="" width="" poster="/public/resize_layer_list.png" height="auto"><source src="/public/resize_layer_list.mp4" type="video/mp4"></video>

Using the Layer list, you can:

|   Action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       | Description |
|---------------------------------------|------------------|
|   Select layers      |    To select a layer or layer group, click its name in the Layer list. A selection frame will appear around the layer. To select multiple items hold down the `Ctrl` / `⌘` or `Shift` keys and click on the layers.    |
|   Search for layers                                 |    To locate a layer, start typing its name in the search field above the Layer list.    |
|   Arrange layers                |     Change the order of the layers in the list by dragging them up or down. Organize layers as you see fit and position them in the order you want them to be stacked if they're overlapping on the canvas. |
|  Hide layers                    |   To hide layers, layer groups, or individual items inside layer groups, select a layer and click the eye icon next to its name. You can also hide layers by using the `Ctrl + H` / `⌘ + H` shortcut or the corresponding option on the context menu.     |
|    Lock layers            |     Lock layers, grouped layers, or individual layers within a group to protect them from accidental edits. To do this, select a layer in the Layer list and click the lock icon, press `Ctrl + L` / `⌘ + L`, or use the corresponding option on the context menu. To select locked layers and edit their properties in the right panel, right-click them on the canvas or select them in the Layer list. |

Other basic operations with layers are available on the <a href="https://lunacy.docs.icons8.com/basics/#the-context-menu" target="_blank">context menu</a>.

### Useful tips

To **collapse all layers** in the Layer list, press `Ctrl + ~` / `⌘ + ~`.

To quickly **move to a specific layer** in large projects: 
1. Find it by typing its name in the search field.
2. Select it in the Layer list.
3. Press <code>Ctrl + 2</code> / <code>⌘ + 2</code> or double-click the icon in front of the layer name to use the <a href="https://lunacy.docs.icons8.com/tips/#zoom-to-selection" target="_blank">zoom to selection</a> feature.

<p>Find more useful Lunacy tips and tricks <a href="https://lunacy.docs.icons8.com/tips/" target="_blank">here</a>.</p>


## [The right panel](#the-right-panel)

The **right panel** appears on the right of the Lunacy interface when you select a layer.

When you create a new document, the first thing you'll see on the right is a list of <a href="https://lunacy.docs.icons8.com/basics/#frames" target="_blank">frame</a> presets. Once you add a frame or layer, the right panel will open up and display its properties. If you deselect all frames and layers, you will see general workspace settings and options.

Learn more about the right panel <a href="https://lunacy.docs.icons8.com/basics/#right-panel-properties" target="_blank">here</a>.

## Document pages

There can be any number of **pages** in a document. 

You can keep all your work on a single page or split it between several pages. For instance, when designing a website, you can keep the desktop and mobile versions on separate pages. 

Additionally, you can duplicate a page to save a version of your current design and experiment with the copy. It's completely up to you to decide which approach to choose. 

Here's what the **Page list** looks like: 

<embed type="image/svg+xml" alt="page_list" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/TgMw_XxCa025DzYKz7eF5Q.svg" width="844" /> 

It shows up above the **Layer list** when the **Layers** content tab is selected.

Use the Page list to:

* Add pages
* Rename pages
* Change the order of the pages
* Duplicate pages (with their content)
* Copy and paste pages into other documents
* Delete pages

To **add a new page** to the document:

1. Click the `+` icon above the Layer list.
2. Name the new page.
3. Press `Enter`.

To **change the position of a page** in the list, simply drag it to where you want it to be.

The rest of the actions are accessible through the **context menu**, which you can access by right-clicking a page name.

<video autoplay="" muted="" loop="" playsinline="" width="auto" poster="/public/page_add_rename.png" height="auto"><source src="/page_add_rename.mp4" type="video/mp4"></video>

There is also a special type of page — the **Components** page. It stores the reusable components you can create in your designs. Learn more about working with components <a href="https://lunacy.docs.icons8.com/components/#components-page" target="_blank">here</a>.


## [Home Tab](#home-tab)

In the **Home tab**, you can manage your:

* Personal documents (both local and cloud).
* Teams and team projects.
* Account and profile information.

The Home tab opens up when you start Lunacy if you don’t have any previously opened documents in the app. Otherwise, you’ll see your most recently edited document on startup.

You can access the Home tab from within a document by clicking <embed type="image/svg+xml" alt="home" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/U0XDSMpAf0a3pPx08RsYUA.svg" width="16" /> on the menu bar.

These are the **main sections** of the Home tab:

<embed type="image/svg+xml" alt="home_tab_overview_" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/RPTKRCfSnEeskiEEtP73cg.svg" width="844" /> 


1. **The Sidebar.** Access your account page, navigate through documents, and manage your team projects. At the bottom of the sidebar, you will find links to the onboarding tutorial, Lunacy documentation, and social media.
2. **Action Bar.** Use it to create, open, and import documents. Switch between grid and list views, and sort documents as you like. Use the Search field to find documents.
3. **Document Viewer.** This section of the Home tab displays previews of your documents and team projects.

### Working with documents

The Home tab makes it easy to create, manage, and organize all of your personal and team docments. 


#### Creating documents

To **create a new document**, use any of the following ways depending on the document type:

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Local &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Cloud &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|---------------------------------------|-----------------------|----------------------------|
| On the Home Tab, click | **New Document** | **New Cloud Document** |
| On the menu bar, select | **File** > **New Document** | **File** > **New Cloud Document** |
| Anywhere in Lunacy, press | `Ctrl + N` / `⌘ + N` | `Ctrl + Shift + N` / `⌘ + Shift + N` |
| Anywhere in Lunacy, click | `+` on the right of the document tabs at the top of the screen |

<div class="callout callout--info">
    <p><strong>Note:</strong> Find out more about local and cloud documents <a href="https://lunacy.docs.icons8.com/clouddocs/" target="_blank">here</a>.</p>
</div>


#### Opening documents

To **open a cloud document**, click on its thumbnail on the Home tab. 

As for other options, use any of these to **open local documents**:

* Press `Ctrl + O` / `⌘ + O`.
* Click the **Open** button on the action bar.
* Click **File** > **Open** on the menu bar.

Supported formats include `sketch`, `svg`, `png`, `jpg`, `jpeg`, `bmp`, `webp`, `ico`, and `gif`.

To **open a cloud document shared with you**:
1. Copy the link to the document.
2. Press `Ctrl + V` / `⌘ + V` anywhere in the app.
3. Click **File** > **Open URL From Clipboard**.

#### Importing documents

You can import:

- Local `.sketch` documents to **Lunacy Cloud**
- **Figma documents** to local `.sketch` documents (which you can then upload to Lunacy Cloud)

##### Importing local `.sketch` files to cloud
- In the action bar, click **Import to Cloud**.
- At the top right corner of a local document, click <embed type="image/svg+xml" alt="send_cloud" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/hDgRI0Dx_EaYjQ2uo5PrTg.svg" width="16" /> .

##### Importing Figma documents to `.sketch`

1. In Figma, set your file’s sharing options to **Anyone with the link → can view/edit**.
2. Copy the link to the file.
3. Use `Ctrl + V` / `⌘ + V` anywhere in the Lunacy app to open it.

To import **private** Figma files, you’ll have to enter its link as well as a **personal access token** generated in Figma for third-party app integrations.

To **generate a personal access token** in Figma:

1. Click your profile icon in the file browser and choose **Settings**. 
2. Scroll down to the **Personal access token** section.
3. Enter a brief description for the token, and press `Enter`.
4. Copy the token and return to Lunacy.
5. Click **Import from Figma** or **File** > **Import from Figma** in the menu bar and enter the file’s share link and the personal access token in the corresponding fields:

<embed type="image/svg+xml" alt="import_figma" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/fTNhrJIe1kSwsrpR_CeFvQ.svg" width="844" /> 


<div class="callout callout--info">
    <p><strong>Note:</strong> Some elements, such as component variants and complex vector shapes, may be displayed differently when imported into Lunacy. The article <a href="https://blog.icons8.com/articles/figma-import-in-lunacy/" target="_blank">here</a> lists all of the nuances of Figma import.</p>
</div>


#### Browsing documents

In the sidebar, your documents are divided into three categories: 

* **Recent**. All of your local and cloud documents, as well as documents shared with you by others.
* **My Cloud**. Your cloud documents.
* **Deleted**. Deleted cloud documents. 


<div class="callout callout--info">
    <p><strong>Note:</strong> If you’re on the <a href="https://lunacy.docs.icons8.com/subscriptions/#personal-cloud-plan" target="_blank">free plan</a>, deleted documents are stored for 30 days, then they are deleted permanently.</p>
</div>

In any of these sections, you can right-click on a document preview to open the context menu:

<embed type="image/svg+xml" alt="doc_context" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/2Bo5PpAb9USo1V7RQ5euhA.svg" width="844" /> 


To **search for documents** by keyword, use the search field in the action bar:

<embed type="image/svg+xml" alt="search_home" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/bALioCg9eEaKUJr28zHwgg.svg" width="844" /> 


Use the buttons on the right of the search bar to **sort documents** and **switch views**.

#### Managing teams and projects

You can create **teams** for collaborating with others. Create **projects** inside teams and use them like folders to organize your documents.


Find out more about teams and projects <a href="https://lunacy.docs.icons8.com/teams/" target="_blank">here</a>. 

### Account and profile

Log in to your account to get full access to our graphics, create teams and projects to collaborate with other people, and share your portfolio online.

#### Logging in to your account

In the Home tab, click **Log In** at the top of the sidebar. Use your existing Icons8 account or via another service:

<embed type="image/svg+xml" alt="login_page_home" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/JQ21nLcS5UqrU2IcXLCEgg.svg" width="844" /> 


To create a new account, click **Register**.

#### Account information and actions

Once you’re logged in, you will see your **profile page**:

<embed type="image/svg+xml" alt="profile_page_home" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/kRDaG5owI0WF97WzI1Y9pw.svg" width="844" /> 

Use this page to:
* Manage your profile information
* Publish documents to your web profile
* Subscribe to paid plans
* Log out and delete your account
    
##### Managing your profile

Edit your name, profile description, and profile picture. 
        
Your profile information shows up here and is visible to people with access to your cloud documents, as well as the the members of your team. 


##### Publish documents to your web profile

Personal cloud documents show up on your profile page in the app with a **Publish/Unpublish** button. Click it to add or remove documents from your **web profile**, a public page where you can showcase your designs. 

Use it as a portfolio of your works:
1. Click <embed type="image/svg+xml" alt="acc_menu" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/lNGoYW9qskKXXlM4ZSXRWA.svg" width="16" /> at the top right corner of your profile  page.
2. Select **Web Profile**. This will open your public web profile in the browser.
3. Copy the link in the address bar.
4. Share it anywhere you like!

<div class="callout callout--info">
    <p><strong>Note: </strong>If the link recipient doesn’t have Lunacy yet, they will be prompted to install it.</p>
</div>


##### Subscribe to paid plans

Icons8 graphics are free for personal and commercial use as long as you include an attribution link to us. 

SVG files and high-resolution photos are unavailable on the free plan. To get these options and use our graphics without mandatory attribution, consider a paid graphics subscription. 

You can also upgrade to a **cloud** or **team** plan for more freedom with cloud documents, team creation, and document management. 

Read more about the subscriptions we offer <a href="https://lunacy.docs.icons8.com/subscriptions/" target="_blank">here</a>.

You can also access the list of our graphics subscriptions by **Unlock All Assets** on your profile page, then **See Pricing**.
To see all product and subscription options available to you, as well as your Downloads (assets you’ve previously downloaded), click <embed type="image/svg+xml" alt="acc_menu" src="https://cdn-eu.icons8.com/docs/M9n6bSgrBEaWHOHZwLkY3A/lNGoYW9qskKXXlM4ZSXRWA.svg" width="16" /> and select **Billing**.


##### Log out and delete your account

Exit your account by clicking the **Log out** button at the top right corner of the account page.
To delete your account, open the context menu and click **Delete account**.
<div class="callout callout--warning">
    <p><strong>Warning:</strong> Account deletion is permanent and completely erases your data. You won’t be able to recover it.</p>
</div>