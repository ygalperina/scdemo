/// <reference types="Cypress" />
context('fsTable Misc', () => {
  before(() => {
    cy.visit(cy.conf.baseUrl);
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  });

  describe('Misc fs table verifications', () => {
    it('fs table columns verification', () => {
        // check the tables' column labels
        cy.get('#fsTableArea') // table
            .scrapeTable()
            .then((table) => {
                // check the tables' column labels
                cy.log(JSON.stringify(table.columnLabels))
                expect(table.columnLabels).to.deep.eq(cy.fsTableColumns);
            })
    })
  })
});