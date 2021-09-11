# cypress-boilerplate
Cypress boilerplate to kickoff and set up an automation project on the go.
## Pre - Requisites
1. Install Visual Code Studio from [Visual Code Studio Official Website](https://code.visualstudio.com/)
2. Install node.js from [Node JS Official Website](https://nodejs.org/en/)
    * Verify node.js installation using the terminal. 
    * Type **node --version** to verify the current node version on your host machine.
    * Verify the same for Node Package Manager using **npm --version**.
    * Make sure you don't fall behind and have almost the latest version of these. Don't forget to verify the node and npm version as  it's possible that a different versions were used for both in this project.

## Project Setup
1. Clone this project.
2. Open the terminal and type
```JavaScript
npm install
```
3. Project setup will be completed and you're good to go.

# Detailed steps to setup the Cypress Automation Project from Scratch
## Pre - Requisites
1. Install Visual Code Studio from [Visual Code Studio Official Website](https://code.visualstudio.com/)
2. Install node.js from [Node JS Official Website](https://nodejs.org/en/)
    * Verify node.js installation using the terminal. 
    * Type **node --version** to verify the current node version on your host machine.
    * Verify the same for Node Package Manager using **npm --version**.
    * Make sure you don't fall behind and have almost the latest version of these.

## Project Setup
1. Create a folder at a designated path and open it using Visual Studio Code.
2. Add an empty **.gitignore file** or in accord to the Cypress project. You can make changes later on.
3. Open the terminal and type
```JavaScript
npm init -y
```
4. This command will generate a default **package.json** file.
    * Update the required details in the package.json file such as **Author, Keywords**, etc.

## Cypress Installation
1. Open the terminal and type
```JavaScript
npm install cypress -D
```
2. In case you're behind a proxy, you can download the Cypress Binary from [here](https://docs.cypress.io/guides/getting-started/installing-cypress#Download-URLs) and set up its environment variables which are mentioned over [here](https://docs.cypress.io/guides/getting-started/installing-cypress#Install-binary).
3. This command will initiate the download and install process for cypress
    * -D flag indicates that the installation is to be done by managing the package in **dev dependencies**.
    * -g flag can be used when installation is meant at a **global level**.
4. When the installation is completed, the following logs will appear on the terminal.
    * You can now open Cypress by running: node_modules\\.bin\cypress open
5. **Verify** the cypress installation using the following command
```JavaScript
1. node_modules\.bin\cypress verify OR
2. npx cypress verify
```
6. Once verification is done, try opening the Cypress Test Runner using any of the following commands
```JavaScript
1. node_modules\.bin\cypress open OR
2. npx cypress open
```

## Project Structure
Inside the cypress directory, there are multiple sub-directories that can be managed for the following
* **configs** - It will contain multiple configuration files to be managed for different environments as per the standards in the industry.
* **cypress/fixtures** - It will contain the test data to be used for different scenarios, environments.
* **cypress/integration** - It will contain the specs files based on different scenarios.
* **cypress/reports** - It will contain the reports generated once test execution is completed.
* **cypress/screenshots** - It will contain the screenshots generated for failed test cases.    
* **cypress/support/pageObjects** - It will contain the page objects.
* **cypress/support/utilities** - It will contain the utility functions required in the test automation project.

## Configurations & Environments
1. A configs folder is created to manage the standard environments for this automation project. This configs folder contains config files for the respective environment. 
    * Dev
    * QA
    * Staging
    * Production
2. Each of the environment config is extended from the cypress.json configuration file which is treated as the base configuration file.
3. The required scripts are also available in the package.json file to execute spec file(s) in the headless mode.

Note: Make sure you update the baseUrl before running any test command or spec file.

## Reporters
### Mochawesome Reporter
1. To configure **Mochawesome Reporter**, open the terminal and use the following command. The same can be reviewed on the official documentation on this [link.](https://www.npmjs.com/package/cypress-mochawesome-reporter)
```JavaScript
npm i --save-dev cypress-mochawesome-reporter
```
2. Update your base configuration with the following reporter properties, which in our case is **cypress.json** from which other configurations extend from.
```json
{
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
        "reportDir": "cypress/reports",
        "charts": true,
        "reportPageTitle": "Cypress - Automation Test Report",
        "embeddedScreenshots": true,
        "inlineAssets": true,
        "overWrite": true
    },
    "video": false
}
```
3. Update your **plugin/index.js** by adding the following snippet
```JavaScript
require('cypress-mochawesome-reporter/plugin')(on)
```
4. Update your **support/index.js** by importing the following snippet
```JavaScript
import 'cypress-mochawesome-reporter/register'
```
## Docker
1. Create a **.dockerignore** file at the root directory.
    * Add all required details for the docker ignore file.
2. Create a **Docker File** file at the root directory.
    * Cypress offers three main images. The following snippet can be changed as per need. The details of those iamges can be found [here](https://github.com/cypress-io/cypress-docker-images).
```Docker
FROM cypress/base:12.1.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
CMD ["npm", "run", "dev"]
```