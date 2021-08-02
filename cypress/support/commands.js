// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("verifyFSTableSorted", (columnName, lastName) => {
    cy.get('#fsTableArea') // table
        .scrapeTable()
        .then((table) => {

            // test whether column(s) are sorted
            expect(
                table.isPropertySorted([columnName], ['asc']),
                `${columnName} column is sorted in asc order`
            ).to.be.true;
        })
})



