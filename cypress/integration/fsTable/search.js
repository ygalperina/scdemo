/// <reference types="Cypress" />
context('File System Search Verifications', () => {
    before(() => {
        cy.visit(cy.conf.baseUrl);
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            Cypress.runner.stop()
        }
    });

    describe('Matching Search results verification', () => {
        it('matching search verification', () => {

            let matching = 'zips';
            cy.get('#searchAssets').type(matching);

            cy.get('#fsTableArea') // table
                .scrapeTable()
                .then((table) => {
                    expect(cy.searchResultsMatch(table, matching), `Verifying matching search for "${matching}"`).to.be.true
                })
        })
    })
});