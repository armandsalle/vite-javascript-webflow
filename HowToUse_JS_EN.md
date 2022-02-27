# 🇬🇧 How to JavaScript in Webflow?

**ViteJs template with JavaScript 👇**

[https://github.com/armandsalle/vite-javascript-webflow](https://github.com/armandsalle/vite-javascript-webflow)

**ViteJs template withTypeScript 👇**

[https://github.com/armandsalle/vite-typescript-webflow](https://github.com/armandsalle/vite-typescript-webflow)

### Steps to follow

📌 This tutorial requires you to have the basics with Git, GitHub and NodeJs.

⚠️ First of all, you need to have Git, NodeJS and Yarn installed on your machine. You will also need an IDE like VSCode to code with. If everything I just mentioned is unknown to you, I suggest you to watch some tutorials about JS and its ecosystem before. A GitHub and Netlify account will be required.

⚡ If you are using an Ad Blocker or Brave as a browser, you will need to disable it on your live Webflow site (not in the designer), so that we can inject our code that is on our machine. For Brave, disable the Brave Shield on the page by clicking on the little lion head on the right of the URL.

**For the moment, this setup does not work with Safari!**

## Step 1: Installation and initialization 💽

**1.**

Go to the 👉 [Vite JavaScript template](https://github.com/armandsalle/vite-javascript-webflow) 👈

**2.**

Clone the repo by clicking on "Use this template" and configure your new repo with the name of your project

**3.**

On your machine, open the terminal and clone your new repo using the SSH url displayed in the "Code" dropdown on GitHub, with the command `git clone <URL>`

**4.**

Move to the folder freshly created by git with the command `cd <PROJECT_NAME>`

**5.**

Install the project dependencies with the `yarn` command. If you are more familiar with `npm`, you can use the `npm i` command

**6.**

Open VSCode for this project. `code .` in your current folder from your terminal

## Step 2: coding 🏏

**1.**

Now you can start coding! Open the `main.js` file in the `src` folder.

This will be your input file for your project.

jQuery is already included in the project, but will not be added to the final code as Webflow includes it as standard on every site.

**2.**

To start the dev server, open a terminal at the root of the project and run the `yarn dev` command

You can see your generated JS files at `http://localhost:3000/src/main.js`

## Step 3: Integration with Webflow 📝

Now things are going to start getting exciting!

In Webflow, there are two possibilities:

In both cases, you have the HMR (Hot Module Reload) in place, it allows you to refresh the page each time you save a JS file. It's convenient and it will save you time.

- If you do both Webflow dev and JS:

  Paste this script into the `Before </body> tag` part of the Webflow custom code in the project settings so that it loads on all pages.

  ```html
  <script type="module" src="http://localhost:3000/@vite/client"></script>
  <script type="module" src="http://localhost:3000/src/main.js"></script>
  ```

- If you are doing the JS dev but not the Webflow dev (**recommended version**):

  Paste this script in the `Before </body> tag` part of the Webflow custom code in the project settings so that it loads on all pages. We will change the url of Netlify later to load the production files.

  ```jsx
  <script>
    (function () {
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

  This script will load the right JS file. If you are developing and your dev server is running, it will load the JS files served on your machine. Otherwise, it will load them from Netlify if you have pushed your code to production. And if it's not yet in production on Netlify, it won't load any JS file.
  That way you don't have to ping the Webflow dev every time you want to test some code, and you don't have to connect to the Webflow account of the site.

  ⚠️ **Be careful though to remember to change the script once the JS development is finished and sent to production. It will look like this to load the production scripts**

  ```html
  <script src="https://[votre_domaine].netlify.app/main.js"></script>
  ```

  ## Step 4: Going into production 🚀

  **1.**
  Your code is ready. It's time to push!
  For this step you will need to **commit** and then **push** your code to **GitHub**.

  **2.**
  Create an account on Netlify and create a site from Git. Select the GitHub provider and your project. Then click on Deploy site to deploy the site.
  BOOM! Your project is online

  **3.**
  We can customize the domain name randomly generated by Netlify. To do this, go to settings, then Domain management. You will see your domain followed by an Options button, which is in fact a dropdown. Click on it and select Edit site name.
  I suggest you to put the name of the final site, it will be easier to differentiate them later.
  You can now access your JS files from your Netlify url 🙌

  `https://[votre_domaine].netlify.app/main.js`

  And voilà 👾

  Now, as soon as you push code to GitHub, Netlify will be notified. It will build and deploy the latest version of your code automatically.
