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

    const {_} = Cypress
    describe('Sorting fs table verifications', () => {

        it('verifies sort by Name', () => {
            cy.get("#name").click();
            cy.get('#fsTableArea') // table
                .scrapeTable()
                .then((table) => {

                    // test whether column(s) are sorted
                    expect(
                        table.isPropertySorted(['name'], ['asc']),
                        'Name column is sorted in asc order'
                    ).to.be.true;
                })
        })

        it('verifies sort by Type', () => {
            cy.get("#type").click();
            cy.get('#fsTableArea') // table
                .scrapeTable()
                .then((table) => {

                    // test whether column(s) are sorted
                    expect(
                        table.isPropertySorted(['type'], ['asc']),
                        'Type column is sorted in asc order'
                    ).to.be.true;
                })
        })

        it('verifies sort by Date Modified', () => {
            cy.get("#modified").click();
            cy.get('#fsTableArea') // table
                .scrapeTable()
                .then((table) => {

                    // test whether column(s) are sorted
                    expect(
                        table.isPropertySorted(['date_modified'], ['asc']),
                        'Date Modified column is sorted in asc order'
                    ).to.be.true;
                })
        })

        it('verifies sort by Size', () => {
            cy.get("#size").click();
            cy.get('#fsTableArea') // table
                .scrapeTable()
                .then((table) => {

                    // test whether column(s) are sorted
                    expect(
                        table.isPropertySorted(['size'], ['asc']),
                        'Size column is sorted in asc order'
                    ).to.be.true;
                })
        })
    })
});