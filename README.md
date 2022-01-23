# ViteJs + JS + Webflow = ❤️

This is a basic setup with [ViteJs](https://vitejs.dev/) that you can use for your Webflow website.
`jQuery` is already installed and declared as an external dependency.

I'm using [Netlify](https://www.netlify.com/) to build and host my code because it's easy to use, free, and has serverless functions out of the box. Feel free to use your favorite CDN.

**If you prefer TypeScript you can use [this template](https://github.com/armandsalle/vite-typescript-webflow)**

<br />

## Live demo

You can find a simple example of a Webflow site using this setup [here](https://vite-javascript.webflow.io/). The code is hosted on Netlify [here](https://vite-javascript-webflow.netlify.app/main.js). If you want to see the Webflow preview, it's [here](https://preview.webflow.com/preview/vite-javascript?utm_medium=preview_link&utm_source=designer&utm_content=vite-javascript&preview=65fac120c82ee6a81780f5a5cd5ecc59&workflow=preview) 👍

<br />

## How to use with Webflow

### 🇫🇷 French
The doc is [here](https://github.com/armandsalle/vite-javascript-webflow/blob/main/HowToUse_JS_FR.md) 

### 🇬🇧 English
The doc is [here](https://github.com/armandsalle/vite-javascript-webflow/blob/main/HowToUse_JS_EN.md) 

<br />

## Building and running on localhost

This project is using `yarn`.

First, install dependencies:

```sh
yarn
```

To launch a local dev server:

```sh
yarn dev
```

To create a production build:

```sh
yarn build
```

To clean the local `/dist` folder:

```sh
yarn clean
```

To lint the code with ESLint and Prettier:

```sh
yarn lint:fix
```
