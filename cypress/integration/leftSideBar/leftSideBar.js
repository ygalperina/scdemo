/// <reference types="Cypress" />
context('Left Side Bar Verifications', () => {
    before(() => {
        cy.visit(cy.conf.baseUrl);
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            Cypress.runner.stop()
        }
    });

    describe('Left sideBar  link verifications', () => {
        it('Left sidebar links verification', () => {
            // check left sidebar links
           cy.leftSideBar.forEach( (el, index) =>{
               cy.get(`.nav-item:nth-child(${index+1}) span`).click()
               cy.url().should('eq', cy.conf.baseUrl + '/' + el.link)

           })
        })
    })
});