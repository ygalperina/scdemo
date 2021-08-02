/// <reference types="Cypress" />
context('fsTable Sort', () => {
    before(() => {
        cy.visit(cy.conf.baseUrl);
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            Cypress.runner.stop()
        }
    });

    describe('Sorting fs table verifications', () => {

        it('verifies sort by Name', () => {
            cy.get("#name").click();
            cy.verifyFSTableSorted('name');
        })

        it('verifies sort by Type', () => {
            cy.get("#type").click();
            cy.verifyFSTableSorted('type');
        })

        it('verifies sort by Date Modified', () => {
            cy.get("#modified").click();
            cy.verifyFSTableSorted('date_modified');
        })

        it('verifies sort by Size', () => {
            cy.get("#size").click();
            cy.verifyFSTableSorted('size');
        })
    })
});