cy.searchResultsMatch = function searchResultsMatch(searchResults, searchString) {
    let res = true;
    searchResults.data.every(row => {
        cy.log(JSON.stringify(row));
        if (row.name.search(searchString) === -1 &&
            row.type.search(searchString) === -1 &&
            row.date_modified.search(searchString) === -1 &&
            row.size.search(searchString) === -1) {

            res = false
            return
        }

    })

    return res;
}