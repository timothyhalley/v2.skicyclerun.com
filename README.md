# skicyclerun.com

Simple album gallery highlighting trips and moments seen by skicyclerun...

## Features

## Getting Started

## Installation
## Demo URL
[https://skicyclerun.com](https://skicyclerun.com)

## Testing

End-to-end tests using [Cypress](https://cypress.io). Test script located in repo under --> `/cypress/integration/tests.js`.

To run tests, first make sure your dev server is running with `gridsome develop`. I'm assuming you're using the default port of 8080. If not, change the `baseUrl` key in the `cypress.json` file.

After your dev server is running, you can run `npm run test` or `./node_modules/.bin/cypress open` to start Cypress. The Cypress electron app will run. Click the `tests.js` file and the tests will run in an automated browser.

npx cypress would do the trick here... need to validate this hunch.

## Bugs and Issues

## Creator

skicyclerun is maintained by **[Timothy Halley](https://www.linkedin.com/in/timothyhalley)**

## Copyright and License

<p>Copyright &copy; all things skicyclerun - 2021</p>


### Cypress Amplify Test attemp: Still fails

test:
  artifacts:
    baseDirectory: cypress
    configFilePath: "**/mochawesome.json"
    files:
      - "**/*.png"
      - "**/*.mp4"
  phases:
    preTest:
      commands:
        - npm ci
        - npm i wait-on
        - npm i mocha mochawesome mochawesome-merge mochawesome-report-generator
        - npm i http-server-node
        - npm i -D cypress
        - npx http-server-node -p 8080 -e dist & npx wait-on http://127.0.0.1:8080
    test:
      commands:
        - 'npx cypress run --reporter mochawesome --reporter-options "reportDir=cypress/report/mochawesome-report,overwrite=false,html=false,json=true,timestamp=mmddyyyy_HHMMss"'
    postTest:
      commands:
        - npx mochawesome-merge@4 cypress/report/mochawesome-report/*.json > cypress/report/mochawesome.json
