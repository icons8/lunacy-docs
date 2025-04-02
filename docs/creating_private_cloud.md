---
# Page settings
layout: default
keywords:
comments: false

# Hero section
title: Creating a private Lunacy cloud 
description: For clients with internet connection and local data storage
icon: 'document-body'

# Micro navigation
micro_nav: false

# Page navigation
page_nav:
    next:
        content: 
        url: 
    prev:
        content: 
        url:
---

## Prerequisites

You should have Docker installed on your system. You can download it [here](https://docs.docker.com/get-docker/).

## System requirements

- 2-4 CPU cores
- 2-8 GB of RAM (based on users count)
- 50-100GB of disk space if connected to cloud storage, or 1TB+ if all data is stored on a single server

## **Installation**

**1. Create a Docker compose file**

If you’re going to store your design data locally, create a file named compose.yaml with the following content:

```yaml
    services:
      db:
        image: postgres:17
        restart: always
        environment:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: 123
          POSTGRES_PORT: 5432
        volumes:
          - data:/var/lib/postgresql/data
        networks:
          - lunacy-net
      app:
        image: lunacyd
        environment:
          FORCE_HTTPS: false
        ports: 
          - "5555:80"
        volumes:
          - bucket:/root/bucket
          - changes:/root/wwwroot/DocumentsChanges
        networks:
          - lunacy-net
        depends_on:
          - db
        restart: always
    volumes:
      data:
      bucket:
      changes:
    networks:
      lunacy-net: {}
```
If you prefer to store data in AWS S3 instead of locally, use the following compose.yaml file:

```yaml
    services:
      db:
        image: postgres:17
        restart: always
        environment:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: 123
          POSTGRES_PORT: 5432
        volumes:
          - data:/var/lib/postgresql/data
        networks:
          - lunacy-net
      app:
        image: lunacyd
        environment:
          FORCE_HTTPS: false
          S3_ENDPOINT: "<Insert Endpoint like this: eu-central-1>"
          S3_APPKEY: "<Insert AppKey>"
          S3_KEYID: "<Insert KeyID>"
        ports: 
          - "5555:80"
        volumes:
          - bucket:/root/bucket
          - changes:/root/wwwroot/DocumentsChanges
        networks:
          - lunacy-net
        depends_on:
          - db
        restart: always
    volumes:
      data:
      bucket:
      changes:
    networks:
      lunacy-net: {}
```
If you will use a domain name for your server with enabled TLS - set `FORCE_HTTPS` to true.

**2. Deploy Lunacy cloud**

In the compose.yaml file directory, run the following command:

```
    docker compose up
```
The server will start and register with the licensing server.

**3. Contact Icons8**

Contact us at sales@icons8.com after the server is up and running, and we will provide you with a license.

## **Initial server setup**

**1. Access the server**

Navigate to `http://localhost:5555/` in your web browser.

**2. Register an Administrator account**

Create an administrator account. This account is separate from the Lunacy user accounts and is used only for administrative purposes.

**3. Create Lunacy users**

Go to the **Users** tab and create user accounts for Lunacy.
You can now connect to the dedicated server from the Lunacy app.

**4. Configure firewall**

Allow connection to the Lunacy License Server from your intranet `https://lu.icons8.com` `116.203.33.165:443`. 

<div class="callout callout--info">
    <p><strong>Note:</strong> The Lunacy dedicated server must be connected to the License server for several purposes:</p>
    <ol>
        <li>Check License information</li>
        <li>Check Cloud Server updates</li>
        <li>Check Lunacy updates</li>
        <li>Ensure 24/7 in-app support</li>
    </ol>
    <p>All data is encrypted and transmitted through a single endpoint, using a single data stream/connection. Updates are downloaded and applied only after the administrator's approval.</p>
</div>


## **Connecting Lunacy to the server**

**1. Open Lunacy**

**2. Log Out**

If you are currently logged in, log out of your Icons8 account.

**3. Connect to the server**

Navigate to **Home** > **Log in** > **Dedicated** and enter the following details:

- http:\\[your_ip_address]:5555 OR https://your_domain.com/ (if you’ve configured a domain name)
- username configured in the previous step
- password

Click **Connect**. Lunacy will connect to the private cloud.




