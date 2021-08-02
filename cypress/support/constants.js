cy.conf = {
    baseUrl: Cypress.config().baseUrl,
    outputPath: Cypress.config().output,
}

cy.fsTableColumns = ["", "Name", "Type", "Date Modified", "Size"]

cy.leftSideBar = [
        {id: 1, link: '#jobs', title: 'Jobs', icon: ' fa-check'},
        {id: 2, link: '#files', title: 'Files', icon: ' fa-camera'},
        {id: 3, link: '#workflows', title: 'Workflows', icon: ' fa-home'},
        {id: 4, link: '#presets', title: 'Presets', icon: ' fa-cog'},
        {id: 5, link: '#software', title: 'Software', icon: ' fa-camera'},
        {id: 6, link: '#usage', title: 'Usage', icon: 'fa-cog'},
        {id: 7, link: '#connections', title: 'Connections', icon: 'fa-home'},
        {id: 8, link: '#desktop', title: 'Desktop', icon: 'fa-cog'}
    ]


