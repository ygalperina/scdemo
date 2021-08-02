/// <reference types="cypress" />


// ***********************************************************
// This example support/index.html is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

//require('cypress-plugin-retries')

// Import commands.js using ES2015 syntax:
import './commands'
import './constants'
import './functions'
import 'cypress-harvester'


// Alternatively you can use CommonJS syntax:
// require('./commands')


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  expect(err.message).exist
  //.to.include('resizeimage is not defined' || undefined)
  return false
})


const addContext = require('mochawesome/addContext')

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    addContext({ test }, `assets/videos/${Cypress.spec.name}.mp4`)
  }
})



