# ViteJs + JS + Webflow = ❤️

This is a basic setup with [ViteJs](https://vitejs.dev/) that you can use for your Webflow website.
`jQuery` is already installed and declared as an external dependency.

I'm using [Netlify](https://www.netlify.com/) to build and host my code because it's easy to use, free, and has serverless functions out of the box. Feel free to use your favorite CDN.

**If you prefer TypeScript you can use [this template](https://github.com/armandsalle/vite-typescript-webflow)**

## Live demo

You can find a simple example of a Webflow site using this setup [here](https://vite-javascript.webflow.io/). The code is hosted on Netlify [here](https://vite-javascript-webflow.netlify.app/main.js). If you want to see the Webflow preview, it's [here](https://preview.webflow.com/preview/vite-javascript?utm_medium=preview_link&utm_source=designer&utm_content=vite-javascript&preview=65fac120c82ee6a81780f5a5cd5ecc59&workflow=preview) 👍

## How to use with Webflow

⚠️ if you are using Brave as a web browser or an ad blocker, you will need to disable it on your pre-production Webflow live site. Else it can block the fetching of the js files.

If you are developing the site and coding at the same time, you can just add a script tag on pages that need your code

```html
<script type="module" src="http://localhost:3000/@vite/client"></script>
<script type="module" src="http://localhost:3000/src/main.js"></script>
```

But if you only code and don't have access to the project, you can use this code to check if there is a local dev server running on your machine and switch between production code hosted on `Netlify` or local dev code. **This code is not due to be used in production**.

```html
<script>
  ;(function () {
    const LOCALHOST_URL = [
      'http://localhost:3000/@vite/client',
      'http://localhost:3000/src/main.js',
    ]
    const PROD_URL = ['https://MY-PROJECT.netlify.app/main.js']

    function createScripts(arr, isDevMode) {
      return arr.map(function (url) {
        const s = document.createElement('script')
        s.src = url

        if (isDevMode) {
          s.type = 'module'
        }

        return s
      })
    }

    function insertScript(scriptArr) {
      scriptArr.forEach(function (script) {
        document.body.appendChild(script)
      })
    }

    const localhostScripts = createScripts(LOCALHOST_URL, true)
    const prodScripts = createScripts(PROD_URL, false)

    let choosedScripts = null

    fetch(LOCALHOST_URL[0], {})
      .then(() => {
        choosedScripts = localhostScripts
      })
      .catch((e) => {
        choosedScripts = prodScripts
        console.error(e)
      })
      .finally(() => {
        if (choosedScripts) {
          insertScript(choosedScripts)

          return
        }

        console.error('something went wrong, no scripts loaded')
      })
  })()
</script>
```

For a production-ready code, add a script tag with your production URL.

```html
<script src="https://YOUR_DOMAIN.netlify.app/main.js"></script>
```

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
