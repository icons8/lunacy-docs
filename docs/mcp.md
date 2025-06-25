---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: LLM Integration
description: Using Model Context Protocol (MCP)
icon: 'icons8-new-logo'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: Images
        url: '/images'
    prev:
        content: LLM Integration
        url: '/mcp'
---

# LLM Integration using Model Context Protocol (MCP)

## What is MCP?

The Model Context Protocol (MCP) is an open standard that enables AI assistants to securely connect with external data sources and tools. It provides a standardized way for AI models to access and interact with various applications, databases, and services while maintaining security and user control.

MCP acts as a bridge between AI assistants like Claude and your local applications, allowing them to work together seamlessly. Instead of manually copying and pasting information between applications, MCP enables direct communication and data exchange.

## How MCP Works in Lunacy

Lunacy implements MCP through a local server that runs alongside your Lunacy application. This server provides secure access to your Lunacy projects, allowing AI assistants to:

* Access information about selected objects in your designs
* Retrieve color variables from your design system
* Get details about components and their properties
* Access images and other design assets

The MCP server launches automatically when enabled and runs locally on your machine, ensuring your design data remains secure and private.

## Enabling MCP in Lunacy

To start using MCP with Lunacy:


1. Open Lunacy
2. Navigate to the main menu
3. Select **AI → Model Context Protocol → MCP Server Enabled**
4. The MCP server will start running locally and be ready to accept connections

## Connecting Claude to Lunacy's MCP Server

To connect Claude Desktop to your Lunacy MCP server:

### Step 1: Install Claude Desktop

Download and install Claude Desktop from <https://claude.ai/download>

### Step 2: Get MCP Configuration

In Lunacy, you have two options:

**Option A: Full Configuration (Recommended for new setups)**

* Go to **AI → Model Context Protocol → Copy MCP Servers File**
* This copies a complete JSON configuration file

**Option B: Single Server Entry (For existing MCP setups)**

* Go to **AI → Model Context Protocol → Copy MCP Server Entry**
* This copies just the Lunacy server configuration line

### Step 3: Configure Claude Desktop


1. Open Claude Desktop
2. Open the Settings menu (press Ctrl+, on Windows or Cmd+, on macOS)
3. Navigate to the **Developer** tab
4. Click **Edit Config** - this will open your file manager with the `claude_desktop_config.json` file highlighted
5. Open the highlighted `claude_desktop_config.json` file in any text editor
6. If using Option A: Replace the entire file contents with the copied JSON configuration
7. If using Option B: Add the copied server entry to your existing `mcpServers` section, maintaining valid JSON structure
8. Save the file and restart Claude Desktop completely

Once configured, Claude will be able to interact directly with your Lunacy projects and access design information in real-time.

## Creative Use Cases

The real power of MCP integration comes from combining Lunacy's design data with other MCP servers to create seamless, automated workflows:

**AI-Powered Design-to-Code Pipeline** Select a complex dashboard layout in Lunacy and ask Claude to generate a complete React application with TypeScript, including component structure, state management, API integration points, and even mock data that matches your design specifications. Claude can analyze your color variables and component hierarchy to create a fully functional prototype.

**Intelligent Design System Documentation** Combine Lunacy MCP with file system access to automatically generate comprehensive design system documentation. Claude can analyze your components, extract design patterns, document usage guidelines, and create markdown files with embedded design tokens and component examples - all while maintaining your existing folder structure.

**Cross-Platform Design Consistency** Use multiple MCP servers to ensure design consistency across platforms. Claude can compare your Lunacy designs with existing mobile apps (via screenshots), web implementations (via web scraping), and documentation (via file system access) to identify inconsistencies and suggest improvements.

**Automated Asset Optimization Workflow** Connect Lunacy with file system and image processing MCP servers. Claude can analyze your selected designs, export optimized assets in multiple formats, automatically organize them into proper folder structures, and even generate the corresponding CSS sprites or icon fonts.

**Dynamic Content-Aware Design** Combine Lunacy data with database or API MCP servers to create designs that adapt to real content. Claude can analyze your layout components, fetch actual data from your systems, and suggest design modifications based on content length, image aspect ratios, or data complexity.

**Smart Design Review and Feedback** Use Lunacy MCP with communication tools (Slack, email) and project management systems. Claude can analyze your selected designs, compare them against design guidelines, generate detailed review reports, and automatically distribute them to stakeholders with embedded design previews and actionable feedback.

**Intelligent Brand Compliance Checking** Connect Lunacy with document analysis MCP servers to automatically verify brand guideline compliance. Claude can analyze your designs against brand documentation, check color usage, typography consistency, spacing rules, and generate compliance reports with specific recommendations.

**Automated Handoff Documentation** Combine Lunacy data with development tools MCP servers to create comprehensive developer handoffs. Claude can generate technical specifications, component props documentation, animation guidelines, responsive behavior notes, and integration instructions - all tailored to your specific tech stack.

## Benefits of MCP Integration

* **Seamless Workflow**: No need to manually export or copy design information
* **Real-time Access**: Claude always works with your current project state
* **Enhanced Productivity**: Get instant analysis and suggestions for your designs
* **Secure Connection**: All data remains local and private
* **Context-Aware Assistance**: Claude understands your specific design context

The MCP integration transforms how you work with AI assistance in your design process, making it more efficient and contextually relevant to your actual projects.