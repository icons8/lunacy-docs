---
layout: default
permalink: /ai-chat/
keywords:
comments: false
title: AI Chat
description: Use an AI assistant inside Lunacy to inspect and edit your designs
icon: 'icons8-new-logo'
micro_nav: false
page_nav:
    prev:
        content: MCP
        url: '/mcp'
    next:
        content: Free format
        url: '/free-format'
---

## What AI Chat can do

AI Chat is Lunacy's built-in conversation panel. In a build with the grouped automation update, it uses the same 11 domain tools as [MCP](https://lunacy.docs.icons8.com/mcp/): components, styles, variables, documents, pages, libraries, layers, images, history, session, and documentation. The model can inspect existing designs, propose changes, execute native operations, and read the results.

The grouped catalog requires a matching build. Older releases can expose a smaller set of chat functions. The public references on this site describe the current development API, checked on November 5, 2026; do not assume every released build includes it.

Chat also has its own web-fetch, question, and todo tools, plus optional skills. Those helpers are separate from the 11 shared automation groups.

## Set up a provider

1. Ensure AI Chat is enabled in Lunacy's Privacy settings, then open the chat panel.
2. Open the panel's settings.
3. Enter your provider's OpenAI-compatible base URL and API key, when that provider requires one.
4. Apply the connection settings and check the connection status.
5. Choose a main model. A separate small model can be used for secondary tasks; if appropriate, select the same model for both.
6. Start a conversation attached to the document you want to edit.

Use the base URL required by your provider. Lunacy's client sends chat-completions requests; a model name or API key from another endpoint does not by itself make that endpoint compatible. The chosen model must support streaming tool calls to perform editor operations. To analyze screenshots, it must also support image input.

Changing base URL or token creates unapplied settings until you use Apply. Model selection and reasoning options depend on the models exposed by the configured provider. A failed connection check or empty model list needs to be resolved before expecting document automation to work.

AI Chat uses application handlers directly inside Lunacy. It does not require you to enable the external MCP listener or configure another desktop AI client.

## Ask for a bounded task

Good requests identify the document area, intended result, and what should be preserved. For example:

- “Inspect this dialog and list the components and variables it already uses.”
- “Create a reusable primary button from these layers, retaining the existing colors and typography.”
- “Add a dark theme to the existing brand collection and show how the selected frame changes.”
- “Update the heading style in this document, then show a screenshot of the affected area.”
- “Create a second page for the mobile design and keep the current desktop page.”

For destructive work, be explicit about deleting, detaching, overwriting files, or discarding unsaved changes. Otherwise the assistant should inspect and validate first and preserve unrelated content.

The assistant can ask a short batch of questions when essential information is missing. It can also maintain a todo list during a larger change. A conversation response alone is not evidence that an operation succeeded: the tool result and document state are the relevant outcomes.

## How document targeting works

A conversation has an attached document identity. If another tab becomes active, the assistant's context identifies that difference rather than presenting the other tab as the chat's document.

New typed operations require a live `documentHandle`. The assistant discovers it from the session and tab list. A persisted document ID, visible tab ID, and live handle are different identifiers. Mutations also require the current revision and a unique request ID.

Legacy layer, image, and history calls without a supplied handle use the chat's attached document. If that document is no longer available, the call fails instead of redirecting to the active tab. An explicitly supplied handle can intentionally target another accessible document.

Closing/reopening a document expires its old live handle. The assistant must rediscover it before editing. When a revision is stale, it should reread current state and rebuild the intended edit rather than repeatedly resubmitting the old revision.

## Inspect, reuse, validate, apply

The normal editing workflow is:

1. Read the session, find the intended document, and inspect its selected layers or explicit IDs.
2. Search existing components, styles, collections, themes, and variables.
3. Read relevant definitions and usages instead of creating duplicates with matching names.
4. Validate a complex typed batch with `validateOnly:true`.
5. Commit with a fresh request ID and current revision.
6. Read back the changed assets/context and obtain a screenshot when appearance matters.

Components, styles, and variables each use one tool with search/read/usage/apply operations. Typed apply batches keep native undo behavior: one successful committed batch is one undo operation; an equal-value no-op creates no history. Dependent domains use separate calls in variable, style, then component order.

The assistant should preserve existing layer IDs when editing geometry. Replacing an object with a new ID can break component, prototype, or selection references.

## Themes, inheritance, and libraries

Collection theme selection is an inspector preview. A layer's selected theme controls its canvas evaluation; otherwise the collection default applies. Those are distinct operations, so a changed preview does not necessarily mean the canvas should change.

Component instances can inherit values from their source or own explicit overrides. Some generated text/property edits require a native override representation. Unsupported edits should produce a clear error or lead to inspecting the source, not silently freezing unrelated inherited properties.

Imported library definitions remain read-only. To edit one, open its source as an editable document and target that source. Connecting, importing, refreshing, or using an asset does not grant publishing rights. Persistent library connections apply to editable cloud targets; local documents can inspect/import explicitly available assets.

## Images, files, and help

You can attach supported images or text files as context. Image descriptions do not grant arbitrary filesystem access: use the provided attachments and native file-access workflow.

Screenshot and image results from automation retain their image bytes in tool history. PNG, JPEG, WebP and GIF results can reach a vision-capable model as image input. Other exports remain stored file data rather than screenshot input. A provider that only accepts text cannot visually verify a screenshot merely because the image tool succeeded.

The assistant can request focused help for components, styles, variables, documents, and libraries. The complete [FREE format reference](https://lunacy.docs.icons8.com/free-format/) is fetched on demand for unfamiliar geometry fields, rather than inserted into every conversation request.

## Save, undo, and interrupted work

Use native undo/redo to review or revert committed document changes. Undo is different from cancelling a model request that may already have submitted an operation.

If delivery is uncertain, the assistant can query request status or retry the same retained ID and payload. Once status is `unknown`, it should inspect the current document before choosing another ID. A fresh ID could repeat the operation.

Local save reports the actual written destination and saved revision. Cloud synchronization distinguishes pending/sent work from durable server completion. An unsaved document closes under the default fail policy only when the contract allows it; saving or discarding requires an explicit policy.

## Data and access

The selected provider receives the conversation, attached content, requested document data and supported screenshots used in the model request. Direct in-process tool execution does not make the model provider local. Your provider's endpoint and account settings determine where that model request goes.

The assistant still uses Lunacy's document access, read-only, filesystem-grant and library-permission checks. It cannot manufacture a live handle for an unavailable document or use a deleted variable as a live binding.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| Provider connection fails | Base URL, key, network access, and whether the endpoint implements the expected chat interface. |
| Models are missing | Apply connection settings, confirm the provider's model list is available, and select a valid model. |
| The assistant answers without editing | The selected model must support tool calls and the installed build must expose the needed tools. |
| Screenshot cannot be analyzed | Use a vision-capable model and a supported raster output. |
| `RevisionConflict` | Reread the target and use its current revision. |
| `Busy` | Wait for the relevant operation, text layout, or native work to finish. |
| File access denied | Grant access through the normal application open/save workflow. |
| A generated binding/override is unsupported | Inspect the target's native representation or edit the accessible source asset. |

The [MCP tool catalog](https://lunacy.docs.icons8.com/mcp/) explains the shared operation names. For exact request fields and developer examples, use the [complete Plugin API v2 reference](https://lunacy.docs.icons8.com/plugin-api-v2/) and the [repository workflow article](https://github.com/icons8/lunacy-plugins/blob/7b82b78118e2c66a474f3d556b171903af12bcbc/docs/AUTOMATION_WORKFLOWS.md).
