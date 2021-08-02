/// <reference types="Cypress" />
context('fsTable Search', () => {
    before(() => {
        cy.visit(cy.conf.baseUrl);
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            Cypress.runner.stop()
        }
    });

    const {_} = Cypress
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