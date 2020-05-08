**This document provides step to setup Cypress and BDD in any new project**

## 1. Initialize Cypress:
    1. npm install --save-dev cypress
    2. run command ./node_modules/.bin/cypress open
       1. This will initialize the folder structure and sample tests

## 2. BDD setup for cypress:
    1. npm install --save-dev cypress-cucumber-preprocessor 
    2. install ruby 2.6.6-1(X64) from https://rubyinstaller.org/downloads/
    3. install dependency(MSYs2), if not installed during RUBY installation, run below command:
       1. ridk install
    4. install nokogiri
       1. gem install nokogiri
    5. install hiptest-publisher
       1. gem install hiptest-publisher
    6. Add below command to cypress\plugins\index.js
       1. const cucumber = require('cypress-cucumber-preprocessor').default
       2. module.exports = (on, config) => {
        on('file:preprocessor', cucumber())
        }
    7. Add below command to cypress.json
       1. "testFiles": "**/*.{feature,features}",
            "ignoreTestFiles": "*.js"