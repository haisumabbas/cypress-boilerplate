# cypress-boilerplate
Cypress boilerplate to kickoff and setup an automation project on the go.

## Pre - Requisites
1. Install Visual Code Stuio from [Visual Code Studio Official Website](https://code.visualstudio.com/)
2. Install node.js from [Node JS Official Website](https://nodejs.org/en/)
    * Verify node.js installation using terminal. 
    * Type node --version to verify the current node version on your host machine.
    * Verify the same for Node Package Manager.
    * Make sure you don't fall behind and have the almost the latest version of these.

## Project Setup
1. Create a folder at a designated path and open it using Visual Studio Code
2. Add an empty .gitignore file or in accord to the Cypress project. You can make changes later on.
3. Open the terminal, and type
```JavaScript
npm init -y
```
4. This command will generate a default package.json file.
    * Update the required details in the package.json file such as Author, Keywords, etc.

## Cypress Installation
1. Open the terminal, and type
```JavaScript
npm install cypress -D
```
2. In case you're behing proxy, you can download the Cypress Binary from [here](https://docs.cypress.io/guides/getting-started/installing-cypress#Download-URLs) and setup its environment variables which are mentioned over [here](https://docs.cypress.io/guides/getting-started/installing-cypress#Install-binary).
3. This command will initiate the download nad install process for cypress
    * -D flag indicates that the installation is to be done by managing the package in dev dependencies.
    * -g flag can be used when installation is meant at a global level.
4. When installation is completed, following logs will appear on the terminal.
    * You can now open Cypress by running: node_modules\\.bin\cypress open
5. Verify the cypress installation using the following command
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
Inside cypress directory, there are multiple sub-directories which can be managed for the following
* cypress/fixtures - It can be used to manage the test data
* cypress/integration - It can be used to manage the Page Object Models, Utilities, Specs by creating few more sub directories.    

## Configurations & Environments
1. A configs folder is created to manage the standard environments for this automation project. This configs folder contains config file for respective environment. 
    * Dev
    * QA
    * Staging
    * Production
2. Each of the enviornment config is extended from cypress.json configuration file which is treated as base configuration file.
3. The required scripts are also available in the package.json file to execute spec file(s) in the headless mode.

Note: Make sure you update the baseUrl before running any test command or spec file.

## Reporters
TBA

## Docker
TBA

## Azure Pipeline
TBA