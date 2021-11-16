# SkiCycleRun

A beacon for knowledge and exploration

## Active URL

[https://skicyclerun.com](https://skicyclerun.com)

## AWS DevOps


Using GitHub actions vs. https://dev.azure.com/timothyhalley/

## Amplify Web Apps


## Github Actions
https://github.com/timothyhalley/skicyclerun

## Installation

1. Install Gridsome CLI tool: `npm install --global @gridsome/cli`
2. Clone the repo: `git clone https://github.com/timothyhalley/cascadezen_www.git www`
3. `cd www`
4. `npm i` & `npm audit fix`
5. `./grun.sh` to build and develop (display file to see actions first)
6. click and launch preferred browser --> `http://localhost:8080`

## GITHUB - setup github and add to existing repo for this project

- Setup project in github
    - In terminal at root directory - run the following commands:
        - git init
        - git add .
        - git commit -m "satus novum iter"

    - Add project to your github repo
        - go to github & create a new repo, button top right area.
        - create new repo empty - without README.md as you should have one in project
        - note the help from github on adding files to new repo via commands starting with git remote
        - git remote add origin https://github.com/[repo-owner]/[repo-name].git
        - git push -u origin master
        - one should now have a new [master --> master] branch ready for use

    - Setup Static Web app - clean
        - goto Azure Portal and create a new resource: static web app
        - select required details: name; region, SKU
        - Sign in with GitHub
        - Enter in necessary Source Control Details: Organization (you), repo, branch
        - Next: Build >
            - App location = /
            - API location = api
            - App artifiact = dist (use same as your build scripts)
        - Next: tags >
        - Review & Create >
        - Review & create
            - Details
                - Subscription = [number]
                - Resource Group = CascadeZen
                - Name = www
                - Region = westus2
                - SKU = Free
                - Repository = https://github.com/timothyhalley/www.cascadezen.com
                - Branch = master
                - App location = /
                - API location = api
                - App artifact location = dist
        - Add Custom Domain to Web App
            - Custom Domain
                - review the CNAME value and create/update in your DNS settings the record for this value
                - DNS Zone - update the alias of your CNAME record with the webapp value
                - Return to Web App Custom domain once positive confirmation is received to continue
                - Be aware of any changes may take awhile (up to 48 hours)

        - Static web app is not liked to Github repo for builds!

## Sources & Ideas
- Help and gridsome docs
    - https://gridsome.org/docs/

- MDN Web Docs
    - https://developer.mozilla.org/en-US/docs/Web/API

- Deploy with GITHUB Actions to Azure
    - https://www.giftegwuenu.com/deploy-a-gridsome-app-on-azure-static-web-apps/

- Awesome gridsome
    - https://github.com/lokecarlsson/awesome-gridsome

- Awesome VueJS
    - https://awesome-vue.js.org/components-and-libraries/ui-components.html

- Tailwinds (a gridsome CSS plugin)
    - https://tailwindcss.com

- Origin branch
    - https://github.com/drehimself/gridsome-portfolio-starter.git
    - https://www.youtube.com/watch?v=uF3K3IpRfhE

- Inspirational
    - https://en.wikipedia.org/wiki/Siddhartha_(novel)

- Javascript
    - https://github.com/lydiahallie/javascript-questions#readme
    - https://www.w3docs.com/snippets/javascript.html

## API data store
- Solar System data
    - https://api.le-systeme-solaire.net/rest/bodies
    - http://skyserver.sdss.org/dr12/en/help/docs/api.aspx
    

## SVG Help
- SVG imgage repo:
    - https://svgsilh.com/
- SVG repo
    - https://www.svgrepo.com/
- Viso / Mural like too for SVG diags
    - https://vecta.io
- NPM module for Bitmap --> SVG:
    - https://www.npmjs.com/package/imagetracerjs
- NPM package for image converter
    - https://www.npmjs.com/package/gulp-image


        
## Notes

 - Illustrations from [unDraw](https://undraw.co)
 - Search is based on [Fuse.js](https://fusejs.io) and [vue-fuse](https://github.com/shayneo/vue-fuse). It only searches the title and summary of posts for now. Some tweaking may be necessary to get it to search to your liking. Check out the fuse documentation for search settings. [This PR](https://github.com/drehimself/gridsome-portfolio-starter/pull/104) added the ability to search both "Post" and "Documentation" types.
 - Other Gridsome Starters and BPs:
    - [Gridsome Starter Blog](https://github.com/gridsome/gridsome-starter-blog)
    - [Gridsome Starter Bleda](https://github.com/cossssmin/gridsome-starter-bleda)
    - [Jigsaw Starter Blog](https://jigsaw.tighten.co/docs/starter-templates/) - I got a lot of design inspiration from this starter theme.

# NPM sites
- https://node.dev/post/11-simple-npm-tricks-that-will-knock-your-wombat-socks-off
