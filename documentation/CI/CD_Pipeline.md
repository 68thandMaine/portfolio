# CircleCI Pipeline

My portfolio uses CircleCI as a Continuous Integration platform. Whenever code is pushed from develop to master CircleCI should:

1. Run all test in the program. If any test fails then the pipeline will not advance to step 2.
2. Run the build script to build the app.
3. Deploy the app to netlify.

## Building the Pipeline

The first tests added to my portfolio were integration tests written with Cypress.js. In order for CircleCI to set up the proper environment I need to use the Cypress Orb.

> **_Orbs_** are sharable configuration packages that include jobs, commands and executors.

Cypress provides a basic configuration for use with CircleCI. Complete steps can be found by visiting the [documentation](https://docs.cypress.io/guides/guides/continuous-integration.html#CircleCI).

Using the boilerplate Cypress `config.yaml` for CircleCI correctly executes the code in the Orb until the run Cypress tests command. This is because no commands have been issued to start the development server. This is where the configuration for my portfolio's CircleCI pipeline begins.

### Steps

1. Build Code in Production Mode
2. Start Web Server
3. Wait for Web Server to Respond
4. Run Cypress Tests
5. Stop Web Server

#### 1. Start server

The CircleCI build fails intially because the  `npx cypress run` command issued by the Orb cannot locate an active server on port 3000.

The first issue I have run into is attempting to understand how to use the Orb with custom commands. I believe I need to set up a docker environment from which to run the app. But how do I get the orb to integrate to that container?

> It turns out with Orbs you don't actually need to write the configuration.  This is unique to CircleCI. Think of Orbs as npm packages. Once they are listed in the config you can use commands specific to that Orb. In the case of this app we use the `- cypress/run` command that executes code from the Cypress Orb.

```yml
version: 2.1
orbs:
  cypress: cypress-io/cypress@1
workflows:
  build:
    jobs:
      - cypress/run:
          start: npm start
```
The Cypress Orb allows developers to use single command lines to automate much of the configuration you would need to create as a developer such as starting a server before running the cypress tests.
___

### Cypress + CircleCI Config Settings

If you want to run tests on different environments such as develop vs staging vs test, you can dynamically change the `baseUrl` value in the `cypress.json` with a CLI tooln  .

**For Example**

<sup>cypress.config</sup>

```json
{
  "baseUrl": "http://localhost:8000"
}
```

You can change the `baseUrl` value by passing in the `--config` flag in a script:

`cypress run --config baseUrl=https://staging.server.com`

This will change the value the `cy.visit('/')` returns.
___

### Challenges

The Cypress documentation addresses some of the challanges I am facing intially. Prior to running Cypress it is necessary to boot a local server. I ran into this exact issue and discovered that when issuing the `npm run start` command, CircleCI never moved to the next command. Cypress recommends runing this command in the background.
 > The fix was to use commands from the Cypress Orb
