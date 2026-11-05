---
layout: default
permalink: /plugin-ui/
keywords:
comments: false
title: Plugin UI guide
description: Build plugin dialogs with native fields, values and lifecycle events
icon: 'icons8-new-logo'
micro_nav: false
page_nav:
    prev:
        content: Plugins
        url: '/plugins'
    next:
        content: MCP
        url: '/mcp'
---

This complete reference is synchronized from the [lunacy-plugins article](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/PLUGIN_UI_GUIDE.md) at commit `7b82b781`, checked on November 5, 2026. See [Plugins](https://lunacy.docs.icons8.com/plugins/) for installation and manifests.

Complete guide to creating user interfaces for Lunacy plugins, including toast notifications,
dynamic UI forms, and external applications.

The UI protocol remains compatible with the new preview [Automation API v2](https://lunacy.docs.icons8.com/plugin-api-v2/).
Use its [workflows](https://lunacy.docs.icons8.com/plugin-workflows/) for document, component, style and variable
operations behind your UI. The [legacy reference](https://lunacy.docs.icons8.com/plugin-api/#plugin-ui-http-api)
summarizes exact UI request/response and event shapes. UI values are strings; check
the `success` property of UI responses as well as HTTP status, and re-register after
each WebSocket handshake/reconnect.

## Table of Contents

- [Toast Notifications](#toast-notifications)
- [Dynamic UI System](#dynamic-ui-system)
  - [Overview](#overview)
  - [Lifecycle](#lifecycle)
  - [API Endpoints](#api-endpoints)
  - [WebSocket Events](#websocket-events)
  - [Field Types](#field-types)
  - [Complete Examples](#complete-examples)
  - [Common Pitfalls](#common-pitfalls)
- [External UI](#external-ui)
- [Best Practices](#best-practices)

---

## Toast Notifications

Display status messages inside Lunacy without creating a full UI dialog.

### Basic Usage

```javascript
await axios.post('http://localhost:31415/showtoast', {
  text: 'Export complete!',
  iconType: 2
});
```

### Icon Types

| Type | Icon | Use Case |
|------|------|----------|
| 0 | None | Neutral message |
| 1 | Copy | Copy operation |
| 2 | CheckDone | Completed successfully |
| 3 | Document | Document-related |
| 4 | Warning | Warning/Error |
| 5 | Update | Loading/In progress |
| 6 | Love | Favorites/Like |
| 7 | Human | User-related |
| 8 | Trash | Delete operation |
| 9 | Smile | Positive feedback |
| 10 | CloudDisconnect | Sync/Connection issues |
| 11 | Message | Notifications |
| 12 | Copyright | License/Copyright |
| 13 | Stars | Featured/Special |

### Toast Options

```javascript
await axios.post('http://localhost:31415/showtoast', {
  text: 'Processing...',
  iconType: 5,
  priority: 5,
  durationSeconds: 7,
  isContinuable: true,
  isSkippable: false,
  isAttention: false
});
```

**Fields:**

- `text` (string, required) - Message to display
- `iconType` (number) - Icon type from table above (default: 0)
- `priority` (number) - Priority level, higher shows first (default: 5)
- `durationSeconds` (number) - Display duration in seconds (default: 7)
- `isContinuable` (boolean) - Can be paused on hover (default: true)
- `isSkippable` (boolean) - Can be skipped by newer toasts (default: false)
- `isAttention` (boolean) - Attention-grabbing toast (default: false)

### Progress Updates

Show progress during long operations:

```javascript
for (let i = 0; i < layers.length; i++) {
  await axios.post('http://localhost:31415/showtoast', {
    text: `Processing ${i + 1} of ${layers.length}...`,
    iconType: 5,
    isContinuable: true
  });
  await processLayer(layers[i]);
}

await axios.post('http://localhost:31415/showtoast', {
  text: 'Complete!',
  iconType: 2
});
```

---

## Dynamic UI System

Plugin registers UI definition via API, Lunacy renders interactive dialog.

### Overview

**Architecture:**

```
Plugin → POST /registerui → Lunacy displays dialog
Plugin ← WebSocket events ← User interacts with UI
Plugin → POST /getpluginuivalues → Get user input
Plugin → POST /unregisterui → Close dialog
```

**Key Components:**

- **Service plugins** - MUST use WebSocket for UI lifecycle events
- **Utility plugins** - Can use WebSocket or polling (WebSocket recommended)
- **Field types** - 9 field types available (text, number, slider, etc.)
- **Events** - Real-time notifications when UI is opened/closed/interacted

---

## Lifecycle

```
┌──────────────┐                    ┌──────────────┐
│   Plugin     │                    │   Lunacy     │
└──────┬───────┘                    └──────┬───────┘
       │                                   │
       │ 1. WebSocket connect              │
       ├──────────────────────────────────►│
       │                                   │
       │ 2. plugin_register                │
       ├──────────────────────────────────►│
       │                                   │
       │ 3. plugin_initialized             │
       │◄──────────────────────────────────┤
       │                                   │
       │ 4. POST /registerui               │
       ├──────────────────────────────────►│
       │                                   │ UI registered
       │                           User opens plugin UI
       │                                   │
       │ 5. show_ui event                  │
       │◄──────────────────────────────────┤
       │                                   │
       │ (optional) POST /updateuifields   │
       ├──────────────────────────────────►│
       │                                   │ Fields updated
       │                           User clicks Apply/OK
       │                                   │
       │ 6. ui_field_event (click)         │
       │◄──────────────────────────────────┤
       │                                   │
       │ 7. POST /getpluginuivalues        │
       ├──────────────────────────────────►│
       │                                   │
       │ { field values }                  │
       │◄──────────────────────────────────┤
       │                                   │
       │ 8. Process values                 │
       │                           User closes dialog
       │                                   │
       │ 9. close_ui event                 │
       │◄──────────────────────────────────┤
       │                                   │
       │ 10. POST /unregisterui            │
       ├──────────────────────────────────►│
       │                                   │ UI closed
```

**Important Notes:**

1. **Register UI only AFTER `plugin_initialized` event**
2. **Always unregister UI** when done (cleanup)
3. **Listen to `show_ui`/`close_ui` events** for proper lifecycle handling
4. **Parse all values** - they come as strings

---

## API Endpoints

### POST /registerui

Register plugin UI definition.

**Request:**

```json
{
  "pluginId": "my-plugin",
  "title": "Plugin Settings",
  "fields": [
    {
      "id": "format",
      "type": "select",
      "label": "Format",
      "value": "PNG",
      "options": ["PNG", "JPEG", "SVG"],
      "description": "Export format"
    },
    {
      "id": "quality",
      "type": "slider",
      "label": "Quality",
      "value": "80",
      "min": 0,
      "max": 100,
      "step": 5,
      "description": "Export quality (0-100%)"
    }
  ]
}
```

**Response:** `200 OK` with `{"success":true,"message":"UI registered successfully"}`.

### POST /getpluginuivalues

Retrieve current field values from UI.

**Request Body:**

```json
"my-plugin"
```

**Response:**

```json
{
  "format": "PNG",
  "quality": "80"
}
```

**Note:** All values returned as strings - parse numbers/booleans!

### POST /updateuifields

Update field values programmatically while UI is open.

**Request:**

```json
{
  "pluginId": "my-plugin",
  "updates": {
    "format": "JPEG",
    "quality": "95"
  }
}
```

**Response:**

```json
{
  "success": true,
  "message": "UI fields updated successfully"
}
```

**Use Cases:**

- Apply presets (change all fields at once)
- Sync dependent fields automatically
- Reset preset to "Custom" when user changes value
- Calculate optimal values based on selection

### POST /unregisterui

Clean up and close UI.

**Request:**

```json
"my-plugin"
```

**Response:** `200 OK` with a `success`/`message` object. `success:false` means the plugin UI was not found.

---

## WebSocket Events

### Connection

```javascript
const ws = new WebSocket('ws://localhost:31416');
```

### Plugin Registration

**Send after connecting (required):**

```json
{
  "type": "plugin_register",
  "pluginId": "my-plugin"
}
```

**Lunacy responds with:**

```json
{
  "type": "plugin_initialized",
  "timestamp": "2025-01-20T12:34:56.789Z"
}
```

**⚠️ CRITICAL:** Only call `/registerui` AFTER receiving `plugin_initialized`!

### UI Lifecycle Events

**show_ui** - Dialog opened by user:

```json
{
  "type": "show_ui",
  "pluginId": "my-plugin",
  "timestamp": "2025-01-20T12:34:56.789Z"
}
```

**close_ui** - Dialog closed by user:

```json
{
  "type": "close_ui",
  "pluginId": "my-plugin",
  "timestamp": "2025-01-20T12:34:56.789Z"
}
```

**ui_field_event** - User interacted with field:

Button click:

```json
{
  "type": "ui_field_event",
  "pluginId": "my-plugin",
  "fieldId": "apply",
  "eventType": "click",
  "timestamp": "2025-01-20T12:34:56.789Z"
}
```

Value change:

```json
{
  "type": "ui_field_event",
  "pluginId": "my-plugin",
  "fieldId": "preset",
  "eventType": "value_change",
  "value": "High Quality",
  "timestamp": "2025-01-20T12:34:56.789Z"
}
```

**Event Types:**

- `"click"` - Button clicks
- `"value_change"` - Field value changes (text, number, slider, checkbox, select)

---

## Field Types

### text

Single-line or multi-line text input.

```json
{
  "id": "filename",
  "type": "text",
  "label": "File Name",
  "value": "export",
  "placeholder": "Enter file name",
  "description": "Output file name without extension",
  "multiline": false
}
```

**Properties:**

- `id` (string, required)
- `type` = "text"
- `label` (string, required)
- `value` (string) - Initial value
- `placeholder` (string) - Placeholder text
- `description` (string) - Tooltip on hover
- `multiline` (boolean) - Enable textarea (default: false)

**Returns:** String

---

### number

Numeric input with constraints, supports math expressions.

```json
{
  "id": "count",
  "type": "number",
  "label": "Count",
  "value": "10",
  "min": 1,
  "max": 100,
  "step": 1,
  "description": "Number of copies"
}
```

**Properties:**

- `id` (string, required)
- `type` = "number"
- `label` (string, required)
- `value` (string) - Initial value as string
- `min` (number) - Minimum value
- `max` (number) - Maximum value
- `step` (number) - Increment step
- `description` (string) - Tooltip on hover

**Features:**

- Supports decimal precision (up to 10 places)
- Allows math expressions: "10*2", "50/4"
- Enforces min/max boundaries

**Returns:** String (parse with `parseInt()` or `parseFloat()`)

**When to use:** Exact numeric input without visual feedback needed.

---

### slider

Combined slider + numeric input for visual parameter adjustment.

```json
{
  "id": "opacity",
  "type": "slider",
  "label": "Opacity",
  "value": "100",
  "min": 0,
  "max": 100,
  "step": 5,
  "description": "Layer opacity (0-100%)"
}
```

**Properties:**

- `id` (string, required)
- `type` = "slider"
- `label` (string, required)
- `value` (string) - Initial value as string
- `min` (number, required) - Minimum value
- `max` (number, required) - Maximum value
- `step` (number) - Increment step
- `description` (string) - Tooltip on hover

**Behavior:**

- Dual control: Slider (left) + NumericBox (right)
- Both controls stay synchronized
- Slider provides visual feedback
- NumericBox allows precise input with math expressions

**Returns:** String (parse with `parseFloat()`)

**When to use:** Parameters that benefit from visual feedback (opacity, thresholds, quality).

---

### checkbox

Boolean checkbox.

```json
{
  "id": "includeHidden",
  "type": "checkbox",
  "label": "Include Hidden Layers",
  "value": "false",
  "description": "Process hidden layers"
}
```

**Properties:**

- `id` (string, required)
- `type` = "checkbox"
- `label` (string, required)
- `value` (string) - "true" or "false"
- `description` (string) - Tooltip on hover

**Returns:** String "true" or "false" (check with `=== 'true'`)

---

### select

Dropdown menu with predefined options.

```json
{
  "id": "format",
  "type": "select",
  "label": "Format",
  "value": "PNG",
  "options": ["PNG", "JPEG", "SVG", "PDF"],
  "description": "Export format"
}
```

**Properties:**

- `id` (string, required)
- `type` = "select"
- `label` (string, required)
- `value` (string) - Initially selected option
- `options` (`string[]`, required) - Available options
- `description` (string) - Tooltip on hover

**Returns:** String (selected option)

---

### button

Clickable button that sends events.

```json
{
  "id": "apply",
  "type": "button",
  "label": "Apply Changes",
  "description": "Apply settings and close"
}
```

**Properties:**

- `id` (string, required)
- `type` = "button"
- `label` (string, required) - Button text
- `description` (string) - Tooltip on hover

**Behavior:** On click → sends `ui_field_event` with `eventType: "click"`

**No return value** - listen for WebSocket event

---

### linkButton

Hyperlink-styled button that opens URLs.

```json
{
  "id": "docs",
  "type": "linkButton",
  "label": "View Documentation",
  "value": "https://github.com/user/plugin#readme",
  "description": "Open plugin documentation"
}
```

**Properties:**

- `id` (string, required)
- `type` = "linkButton"
- `label` (string, required) - Link text
- `value` (string) - URL to open
- `description` (string) - Tooltip on hover

**Behavior:**

- Opens URL in default browser
- No event sent to plugin (handled by Lunacy)
- URL is automatically decoded

**When to use:** Documentation links, repository URLs, donation pages.

---

### label

Read-only static text display.

```json
{
  "type": "label",
  "value": "Plugin v1.2.3 | Engine v0.6.4",
  "description": "Current versions"
}
```

**Properties:**

- `type` = "label"
- `value` (string) - Text to display
- `description` (string) - Tooltip on hover
- `id` not required (not interactive)

**Behavior:**

- Static, non-editable text
- Automatic text wrapping
- Adapts to light/dark theme

**When to use:** Version info, warnings, descriptions, static context.

**Multi-line example:**

```json
{
  "type": "label",
  "value": "⚠️ High precision settings may take longer to process.\nRecommended for final output only."
}
```

---

### separator

Visual separator (horizontal line).

```json
{
  "type": "separator",
  "label": "Advanced Options"
}
```

**Properties:**

- `type` = "separator"
- `label` (string, optional) - Section title
- `id` not required

**When to use:** Group related fields visually.

---

## Complete Examples

### Service Plugin with UI (Node.js)

```javascript
const axios = require('axios');
const WebSocket = require('ws');

const API = 'http://localhost:31415';
const WS_URL = 'ws://localhost:31416';
const PLUGIN_ID = 'my-plugin';

let ws;

async function registerUi() {
  await axios.post(`${API}/registerui`, {
    pluginId: PLUGIN_ID,
    title: 'Export Settings',
    fields: [
      {
        id: 'preset',
        type: 'select',
        label: 'Preset',
        value: 'Standard',
        options: ['Draft', 'Standard', 'High Quality'],
        description: 'Quality preset'
      },
      {
        type: 'separator',
        label: 'Export Options'
      },
      {
        id: 'format',
        type: 'select',
        label: 'Format',
        value: 'PNG',
        options: ['PNG', 'JPEG', 'SVG']
      },
      {
        id: 'quality',
        type: 'slider',
        label: 'Quality',
        value: '80',
        min: 0,
        max: 100,
        step: 5
      },
      {
        type: 'separator'
      },
      {
        id: 'apply',
        type: 'button',
        label: 'Export'
      }
    ]
  });
  console.log('✓ UI registered');
}

async function unregisterUi() {
  try {
    await axios.post(`${API}/unregisterui`, PLUGIN_ID);
    console.log('✓ UI unregistered');
  } catch (error) {
    console.error('Failed to unregister UI:', error.message);
  }
}

async function getFieldValues() {
  try {
    const response = await axios.post(`${API}/getpluginuivalues`, PLUGIN_ID);
    return response.data;
  } catch (error) {
    console.error('Failed to get values:', error.message);
    return {};
  }
}

async function applyPreset(presetName) {
  const presets = {
    'Draft': { quality: '50' },
    'Standard': { quality: '80' },
    'High Quality': { quality: '95' }
  };
  
  const preset = presets[presetName];
  if (preset) {
    await axios.post(`${API}/updateuifields`, {
      pluginId: PLUGIN_ID,
      updates: preset
    });
  }
}

async function performExport(values) {
  const format = values.format;
  const quality = parseFloat(values.quality);
  
  console.log(`Exporting as ${format} with quality ${quality}...`);
  
  await axios.post(`${API}/showtoast`, {
    text: `Exporting as ${format}...`,
    iconType: 5
  });
  
  // Export logic here...
  
  await axios.post(`${API}/showtoast`, {
    text: 'Export complete!',
    iconType: 2
  });
}

function onMessage(message) {
  try {
    const event = JSON.parse(message);
    
    if (event.type === 'plugin_initialized') {
      console.log('✓ Plugin initialized');
      registerUi();
    }
    else if (event.type === 'show_ui' && event.pluginId === PLUGIN_ID) {
      console.log('✓ UI opened by user');
    }
    else if (event.type === 'close_ui' && event.pluginId === PLUGIN_ID) {
      console.log('✓ UI closed by user');
    }
    else if (event.type === 'ui_field_event' && event.pluginId === PLUGIN_ID) {
      const fieldId = event.fieldId;
      const eventType = event.eventType;
      
      if (fieldId === 'preset' && eventType === 'value_change') {
        console.log(`Preset changed to: ${event.value}`);
        applyPreset(event.value);
      }
      else if (fieldId === 'apply' && eventType === 'click') {
        console.log('Apply clicked - getting values...');
        getFieldValues().then(values => {
          performExport(values);
        });
      }
    }
  } catch (error) {
    console.error('Error processing message:', error.message);
  }
}

function start() {
  ws = new WebSocket(WS_URL);
  
  ws.on('open', () => {
    console.log('✓ WebSocket connected');
    ws.send(JSON.stringify({
      type: 'plugin_register',
      pluginId: PLUGIN_ID
    }));
    console.log('✓ Sent plugin registration');
  });
  
  ws.on('message', (data) => {
    onMessage(data.toString());
  });
  
  ws.on('error', (error) => {
    console.error('WebSocket error:', error.message);
  });
  
  ws.on('close', () => {
    console.log('WebSocket closed');
  });
}

process.on('SIGTERM', async () => {
  console.log('Shutting down...');
  await unregisterUi();
  if (ws) ws.close();
  process.exit(0);
});

start();
```

### Service Plugin with UI (Python)

```python
#!/usr/bin/env python3
import requests
import json
import asyncio
import websockets

LUNACY_API = "http://localhost:31415"
LUNACY_WS = "ws://localhost:31416"
PLUGIN_ID = "my-plugin"

def register_ui():
    ui_definition = {
        "pluginId": PLUGIN_ID,
        "title": "Export Settings",
        "fields": [
            {
                "id": "format",
                "type": "select",
                "label": "Format",
                "value": "PNG",
                "options": ["PNG", "JPEG", "SVG"],
                "description": "Export format"
            },
            {
                "id": "quality",
                "type": "slider",
                "label": "Quality",
                "value": "80",
                "min": 0,
                "max": 100,
                "step": 5,
                "description": "Export quality (0-100%)"
            },
            {
                "type": "separator"
            },
            {
                "id": "apply",
                "type": "button",
                "label": "Export"
            }
        ]
    }
    
    try:
        response = requests.post(
            f"{LUNACY_API}/registerui",
            json=ui_definition,
            headers={'Content-Type': 'application/json'},
            timeout=5
        )
        response.raise_for_status()
        print("✓ UI registered")
    except Exception as e:
        print(f"Failed to register UI: {e}")

def unregister_ui():
    try:
        requests.post(
            f"{LUNACY_API}/unregisterui",
            json=PLUGIN_ID,
            headers={'Content-Type': 'application/json'},
            timeout=5
        )
        print("✓ UI unregistered")
    except Exception as e:
        print(f"Failed to unregister UI: {e}")

def get_field_values():
    try:
        response = requests.post(
            f"{LUNACY_API}/getpluginuivalues",
            json=PLUGIN_ID,
            headers={'Content-Type': 'application/json'},
            timeout=5
        )
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Failed to get values: {e}")
        return {}

def perform_export(values):
    format_val = values.get('format', 'PNG')
    quality = float(values.get('quality', 80))
    
    print(f"Exporting as {format_val} with quality {quality}...")
    
    requests.post(f"{LUNACY_API}/showtoast", json={
        "text": f"Exporting as {format_val}...",
        "iconType": 5
    })
    
    # Export logic here...
    
    requests.post(f"{LUNACY_API}/showtoast", json={
        "text": "Export complete!",
        "iconType": 2
    })

async def handle_websocket():
    async with websockets.connect(LUNACY_WS) as ws:
        print("✓ WebSocket connected")
        
        await ws.send(json.dumps({
            "type": "plugin_register",
            "pluginId": PLUGIN_ID
        }))
        print("✓ Sent plugin registration")
        
        async for message in ws:
            try:
                event = json.loads(message)
                event_type = event.get('type')
                
                if event_type == 'plugin_initialized':
                    print("✓ Plugin initialized")
                    register_ui()
                
                elif event_type == 'show_ui' and event.get('pluginId') == PLUGIN_ID:
                    print("✓ UI opened by user")
                
                elif event_type == 'close_ui' and event.get('pluginId') == PLUGIN_ID:
                    print("✓ UI closed by user")
                
                elif event_type == 'ui_field_event' and event.get('pluginId') == PLUGIN_ID:
                    field_id = event.get('fieldId')
                    event_type_detail = event.get('eventType')
                    
                    if field_id == 'apply' and event_type_detail == 'click':
                        print("Apply clicked - getting values...")
                        values = get_field_values()
                        perform_export(values)
                        
            except Exception as e:
                print(f"Error processing message: {e}")

def main():
    print("Starting Plugin starting...")
    
    try:
        asyncio.run(handle_websocket())
    except KeyboardInterrupt:
        print("\n🛑 Shutting down...")
        unregister_ui()
    except Exception as e:
        print(f"Error: {e}")
        unregister_ui()
    finally:
        print("👋 Plugin stopped")

if __name__ == "__main__":
    main()
```

---

## Common Pitfalls

### ❌ Registering UI Too Early

**Incorrect:**

```python
def main():
    register_ui()  # TOO EARLY!
    asyncio.run(handle_websocket())
```

**Correct:**

```python
async def handle_websocket():
    async with websockets.connect(WS_URL) as ws:
        async for message in ws:
            event = json.loads(message)
            if event.get('type') == 'plugin_initialized':
                register_ui()  # Register AFTER initialization
```

**Why:** Lunacy's plugin system isn't ready yet. Always wait for `plugin_initialized`.

---

### ❌ Wrong Event Field Names

**Incorrect:**

```json
{ "event": "show_ui", "pluginId": "..." }
```

**Correct:**

```json
{ "type": "show_ui", "pluginId": "..." }
```

All events use `"type"` field, not `"event"`.

---

### ❌ Wrong HTTP Method for getpluginuivalues

**Incorrect:**

```python
response = requests.get(f"{API}/getpluginuivalues?pluginId={PLUGIN_ID}")
```

**Correct:**

```python
response = requests.post(f"{API}/getpluginuivalues", json=PLUGIN_ID)
```

Use POST with pluginId in body, not GET with query string.

---

### ❌ Not Parsing Values

**Incorrect:**

```javascript
const quality = values.quality;  // String "80"
if (quality > 50) { ... }  // String comparison!
```

**Correct:**

```javascript
const quality = parseFloat(values.quality);  // Number 80
if (quality > 50) { ... }  // Numeric comparison
```

All field values are strings - always parse numbers/booleans.

---

### ❌ Not Unregistering UI

**Incorrect:**

```javascript
await processValues();
process.exit(0);  // Dialog stays open!
```

**Correct:**

```javascript
try {
  await processValues();
} finally {
  await axios.post(`${API}/unregisterui`, PLUGIN_ID);
}
```

Always cleanup UI before exiting.

---

### ❌ Not Checking eventType

**Incorrect:**

```javascript
if (fieldId === 'apply') {
  doSomething();
}
```

**Correct:**

```javascript
if (fieldId === 'apply' && eventType === 'click') {
  doSomething();
}
```

Always verify both `fieldId` and `eventType`.

---

### ❌ PluginId Mismatch

**Incorrect:**

```javascript
await axios.post(`${API}/registerui`, { pluginId: 'my-plugin', ... });
const values = await axios.post(`${API}/getpluginuivalues`, "myPlugin");  // Mismatch!
```

**Correct:**

```javascript
const PLUGIN_ID = 'my-plugin';
await axios.post(`${API}/registerui`, { pluginId: PLUGIN_ID, ... });
const values = await axios.post(`${API}/getpluginuivalues`, PLUGIN_ID);
```

Use constant to avoid typos.

---

## External UI

Plugin can launch external UI as separate application.

### Web UI (Express + Browser)

```javascript
const express = require('express');
const axios = require('axios');
const open = require('open');

const app = express();
const LUNACY_API = 'http://localhost:31415';

app.use(express.json());
app.use(express.static('public'));

app.get('/api/selection', async (req, res) => {
  const response = await axios.get(`${LUNACY_API}/getselected`);
  res.json(response.data);
});

app.post('/api/update', async (req, res) => {
  await axios.post(`${LUNACY_API}/updatelayers`, req.body.layers);
  res.json({ success: true });
});

app.listen(3000, async () => {
  console.log('Web UI running on http://localhost:3000');
  await open('http://localhost:3000');
});
```

### Desktop UI (Electron)

```javascript
const { app, BrowserWindow, ipcMain } = require('electron');
const axios = require('axios');

const LUNACY_API = 'http://localhost:31415';

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  
  win.loadFile('index.html');
});

ipcMain.handle('lunacy:get-selection', async () => {
  const response = await axios.get(`${LUNACY_API}/getselected`);
  return response.data;
});

ipcMain.handle('lunacy:update', async (event, layers) => {
  await axios.post(`${LUNACY_API}/updatelayers`, layers);
});
```

### Real-Time Updates (WebSocket Proxy)

Proxy Lunacy events to web clients:

```javascript
const WebSocket = require('ws');

const lunacyWs = new WebSocket('ws://localhost:31416');
const webClients = new Set();

lunacyWs.on('message', (data) => {
  const event = JSON.parse(data);
  
  // Forward to all web clients
  webClients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(event));
    }
  });
});

const wsServer = new WebSocket.Server({ port: 3001 });
wsServer.on('connection', (ws) => {
  webClients.add(ws);
  ws.on('close', () => webClients.delete(ws));
});
```

---

## Best Practices

### Parse Values Correctly

All field values are strings:

```javascript
const quality = parseFloat(values.quality);
const includeHidden = values.includeHidden === 'true';
const count = parseInt(values.count);
```

### Always Unregister UI

```javascript
try {
  await performWork();
} finally {
  await axios.post(`${API}/unregisterui`, PLUGIN_ID);
}
```

### Use Descriptive Labels

```javascript
// Good
{ label: "Export Quality (0-100%)" }
{ label: "Include Hidden Layers" }

// Bad
{ label: "Quality" }
{ label: "Hidden" }
```

### Group Related Fields

```javascript
fields: [
  { id: 'format', type: 'select', label: 'Format', options: ['PNG', 'JPEG'] },
  { id: 'quality', type: 'slider', label: 'Quality', min: 0, max: 100 },
  
  { type: 'separator', label: 'Output Options' },
  
  { id: 'filename', type: 'text', label: 'File Name' },
  { id: 'path', type: 'text', label: 'Output Path' }
]
```

### Set Sensible Defaults

```javascript
{ id: 'quality', type: 'slider', value: '80', min: 0, max: 100 }
{ id: 'scale', type: 'number', value: '2', min: 0.5, max: 4 }
```

### Use Tooltips

Add descriptions to help users:

```javascript
{
  id: 'quality',
  type: 'slider',
  label: 'Quality',
  value: '80',
  description: 'Export quality (0-100%). Higher values produce larger files.'
}
```

### Handle Presets Properly

When implementing preset system:

1. **Apply preset** - Update all fields via `/updateuifields`
2. **Detect manual changes** - Reset preset to "Custom" when user modifies field
3. **Listen to value_change events** - Track when user overrides preset

---

## Additional Resources

- [Quick Start Guide](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/QUICK_START.md) - Your first plugin in 5 minutes
- [Quick Start UI Guide](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/QUICK_START_UI.md) - Smart Duplicate tutorial
- [Plugin Development Guide](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/PLUGIN_DEVELOPMENT_GUIDE.md) - Complete REST API reference
- [API Reference](https://lunacy.docs.icons8.com/plugin-api/) - Full endpoint documentation
- [Best Practices](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/BEST_PRACTICES.md) - Development patterns
- [Examples](https://github.com/icons8/lunacy-plugins/tree/7b82b78118e2c66a474f3d556b171903af12bcbc/examples) - Working plugin examples
