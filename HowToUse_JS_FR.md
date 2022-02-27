# 🇫🇷 JavaScript avec Webflow, comment faire ?

**Template ViteJs avec JavaScript 👇**

[https://github.com/armandsalle/vite-javascript-webflow](https://github.com/armandsalle/vite-javascript-webflow)

**Template ViteJs avec TypeScript 👇**

[https://github.com/armandsalle/vite-typescript-webflow](https://github.com/armandsalle/vite-typescript-webflow)

### Les étapes à suivre

📌 Ce tuto nécessite d'avoir les bases avec Git, GitHub et NodeJs.

⚠️ Avant tout, il faut que vous ayez Git, NodeJS et Yarn d'installé sur votre machine. Il vous faudra aussi un IDE comme VSCode pour coder. Si tout ce que je viens de citer est inconnu pour vous, je vous conseil de regarder des vidéos d'introductions sur le JS et son écosystème avant. Un compte GitHub et Netlify sera nécessaire.

⚡ Si vous utilisez un Ad Blocker ou Brave comme navigateur, vous devrez le désactiver sur votre site Webflow en live (pas dans le designer), pour qu'on puisse injecter notre code qui est sur notre machine.
Pour Brave, désactiver le Brave Shield sur la page en cliquant sur la petite tête de lion à droite de l'URL.

**Pour l'instant, ce setup ne fonctionne pas avec Safari !**

## Étape 1 : Installation et initialisation 💽

**1.**

Rendez vous sur le 👉 [template Vite + JavaScript](https://github.com/armandsalle/vite-javascript-webflow) 👈

**2.**

Clonez le repo en cliquant sur "Use this template" et configurer votre nouveau repo avec le nom de votre projet.

**3.**

Sur votre machine, ouvrez le terminal et clonez votre nouveau repo en utilisant l'url SSH affichée dans la dropdown "Code" sur GitHub, avec la commande `git clone <URL>`

**4.**

Déplacez vous dans le dossier fraichement créé par git avec la commande `cd <NOM_DU_PROJET>`

**5.**

Installez les dépendances du projets avec la commande `yarn` . Si vous êtes plus familier avec `npm`, vous pouvez utiliser la commande `npm i`

**6.**

Ouvrez VSCode pour ce projet. `code .` dans votre dossier courant depuis votre terminal.

## Étape 2 : Le lancement 🏏

**1.**

Maintenant, vous pouvez commencer à coder ! Ouvrez le fichier `main.js` dans le dossier `src`

ça sera votre fichier d’entré pour votre projet.

jQuery est déjà installé dans le projet, mais ne sera pas ajouté au code final vu que Webflow l’inclut de base sur chaque site.

**2.**

Pour lancer le serveur de dev du projet, ouvrez un terminal à la racine du projet et lancez la commande `yarn dev`

Vous pouvez voir vos fichiers JS générés par Vite à l'adresse `http://localhost:3000/src/main.js`

## Étape 3 : Intégration avec Webflow 📝

C'est maintenant que les choses vont commencer à être excitante !

Dans Webflow, deux possibilités:

Dans les deux cas, vous avez le HMR (Hot Module Reload) en place, ça permet de rafraichir la page à chaque fois que vous sauvegarder un fichier JS. C'est pratique et ça vous fera gagner du temps.

- Si vous faites le dev Webflow et le JS:
  Coller ce script dans la partie `Before </body> tag` du custom code de Webflow dans les paramètres du projet pour que ça soit chargé sur toutes les pages.
  ```html
  <script type="module" src="http://localhost:3000/@vite/client"></script>
  <script type="module" src="http://localhost:3000/src/main.js"></script>
  ```
- Si vous faites le dev JS mais pas le dev Webflow (**version recommandée**) :
  Coller ce script dans la partie `Before </body> tag` du custom code de Webflow dans les paramètres du projet pour que ça soit chargé sur toutes les pages. On changera l’url de Netlify un peu plus tard pour charger le fichiers de production.
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
  Ce script va permettre de charger le bon fichier JS. Si vous êtes en train de developer et que votre serveur de dev est lancé, il viendra charger les fichiers JS servis sur votre machine. Sinon, il ira les charger depuis Netlify si vous avez poussé votre code en production. Et si ce n'est pas encore en prod sur Netlify, il ne chargera pas de fichier JS.
  Ca vous permet de ne pas à avoir à ping le dev Webflow à chaque fois que vous voulez tester du code, et que vous n'ayez pas besoin de vous connecter au compte Webflow du site.
  ⚠️ **Attention cependant à penser à changer le script une fois que le développement JS est finis et envoyé en production. Cela donnera quelque chose comme ça pour charger les scripts de production**
  ```html
  <script src="https://[votre_domaine].netlify.app/main.js"></script>
  ```
  ## Étape 4 : Mise en production 🚀
  **1.**
  C'est bon votre code est prêt. C'est l'heure de push !
  Pour cette étape il faudra **commit** puis **push** votre code sur **GitHub**.
  **2.**
  Créez un compte sur Netlify et créez un site depuis Git. Sélectionnez le provider GitHub puis votre projet. Ensuite, clickez sur Deploy site pour déployer le site.
  BOUM ! Votre projet est en ligne
  **3.**
  On va pouvoir customiser le nom de domaine généré aléatoirement par Netlify. Pour ça, allez dans les settings, puis dans Domain management. Vous verrez votre domaine suivis d'un bouton Options, qui est en fait un dropdown. Clickez dessus et sélectionnez Edit site name.
  Je vous conseille de mettre le nom du site final, ça sera plus simple pour les différencier plus tard.
  Vous pouvez désormais accéder à vos fichiers JS depuis votre url Netlify 🙌
  `https://[votre_domaine].netlify.app/main.js`
  Et voilà 👾
  Maintenant, dès que vous enverrez du code sur GitHub, Netlify sera prévenu. Il va build et déployer la dernière version de votre code automatiquement.
