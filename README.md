# Capstone Project Loomoneers Web App

This project is a Vue.js web application built with Vite.
This was the web app that I built for my Senior Capstone Project. We used the web app to manually control our robot and make requests to it. 
** The robot control functionality has been removed from this version as it needs to be connected to the robot to work and no access to the robot seeing as capstone has ended. **

- click [here](https://github.com/justicenugo/AreYouDaFeds) for capstone project repo

## Table of Contents

- [Capstone Project Loomoneers Web App](#capstone-project-loomoneers-web-app)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
      - [1. Clone the repository:](#1-clone-the-repository)
      - [2. Navigate to the project directory:](#2-navigate-to-the-project-directory)
      - [3. Install dependencies:](#3-install-dependencies)
  - [Recommended IDE Setup](#recommended-ide-setup)
  - [Configuration](#configuration)
    - [Environment Variables](#environment-variables)
    - [Domain and ClientID](#domain-and-clientid)
  - [Usage](#usage)
      - [1. Project Setup](#1-project-setup)
      - [2. Compile and Run the Auth0 API Server](#2-compile-and-run-the-auth0-api-server)
      - [3. Compile and Hot-Reload for Development](#3-compile-and-hot-reload-for-development)
      - [4. Compile and Minify for Production](#4-compile-and-minify-for-production)
  - [Folder Structure](#folder-structure)
  - [Additional Notes](#additional-notes)
    - [Troubleshooting](#troubleshooting)
      - [1. Dependencies](#1-dependencies)
      - [2. Environment Variables](#2-environment-variables)
      - [3. Clearing Cache](#3-clearing-cache)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v16+) and npm: Install from [https://nodejs.org/](https://nodejs.org/)
- Git: Install from [https://git-scm.com/](https://git-scm.com/)

## Installation

#### 1. Clone the repository:

   ```sh
   git clone https://github.com/justicenugo/AreYouDaFeds.git
   ```

#### 2. Navigate to the project directory:

   ```sh
   cd AreYouDaFeds/frontend/loomoneers-webapp-cap
   ```

#### 3. Install dependencies:

    ```sh
    npm install
    ```
    
    or
    
    ```sh
    yarn install
    ```

    for mac users

    ```sh
    sudo npm install
    ```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

Before running the app, you need to configure a few settings.

### Environment Variables

Create a `.env` file in the root of the project and set the following environment variables:

    ```dotenv
    # .env
    VITE_API_SERVER_URL=http://localhost:6060
    VITE_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
    VITE_AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
    VITE_AUTH0_CALLBACK_URL=http://localhost:6060
    ```

### Domain and ClientID

To obtain a domain and clientID, sign up on [Auth0](https://auth0.com/) and create a new Vue SPA aaplication. Once you have the domain and clientID, set it in the VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID environment variables.

## Usage

   #### 1. Project Setup

        ```sh
        npm install
        ```

   #### 2. Compile and Run the Auth0 API Server

        ```sh
        npm run api
        ```

   #### 3. Compile and Hot-Reload for Development

        ```sh
        npm run dev
        ```

   #### 4. Compile and Minify for Production

        ```sh
        npm run build
        ```


## Folder Structure
```
loomoneers-webapp-cap/
|-- .env
|-- .eslintrc.cjs
|-- .gitignore
|-- .prettierrc.json
|-- README.md
|-- cypress.config.js
|-- index.html
|-- package-lock.json
|-- package.json
|-- vite.config.js
|-- yarn.lock
|-- .vscode
  |-- extensions.json
  |-- settings.json
|-- json-server
  |-- db.json
  |-- routes.json
|-- public
  |-- favicon.ico
  |-- loomoLogo_black.png
  |-- loomo_logo_white.png
|-- src
  |-- App.vue
  |-- main.js
  |-- useWebSocket.js
  |-- router
    |-- router.js
  |-- components
    |-- Navbar.vue
    |-- buttons
      |-- Login-button.vue
      |-- Logout-button.vue
      |-- Signup-button.vue
  |-- views
    |-- Account.vue
    |-- Callback.vue
    |-- Home.vue
    |-- Login.vue
    |-- NotFound.vue
    |-- Operate.vue
    |-- Overview.vue
    |-- Register.vue
    |-- Team.vue
    |-- Members
      |-- alex.vue
      |-- Daniel.vue
      |-- Ezra.vue
      |-- Justice.vue
      |-- Nazar.vue
      |-- Paul.vue
  |-- assets
    |-- gif
      |-- loomo_dark.gif
      |-- loomo_dark_crop.gif
      |-- loomo_light.gif
      |-- loomo_light_unscreen.gif
    |-- img
      |-- background
      |-- alex
      |-- black logo
      |-- bw logo
      |-- daniel
      |-- capstone
      |-- ezra
      |-- justice
      |-- nazar
      |-- paul
      |-- screenshots
      |-- white logo
|-- node_modules

```

## Additional Notes

### Troubleshooting

If you encounter any issues while setting up or running the application, here are some common troubleshooting steps:

#### 1. Dependencies

Ensure that you have the correct Node.js and npm versions installed. This project was developed with Node.js version 18.18.2 and npm version 10.2.4. You can check your current versions by running:

```sh
node -v
npm -v
```

#### 2. Environment Variables

Double-check that your environment variables are correctly set in the .env file. Ensure that sensitive information like API keys is kept secure and not exposed in public repositories.

#### 3. Clearing Cache
If you encounter unexpected behavior, try clearing the Vite cache:
```sh
npm run clear
```

