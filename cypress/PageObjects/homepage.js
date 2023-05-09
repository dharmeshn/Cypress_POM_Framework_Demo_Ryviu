/// <reference types="Cypress" />

const testData = require('../fixtures/testData.json')
const utils = require('../support/utils')

const _defaultPopularProducts = '#homefeatured .product-container'
const _searchBar = '#search_query_top'
const _searchButton = 'button[name=submit_search]'


class Homepage {

    static findsDisplayedPopularProductsOnPage() {
        cy.get(_defaultPopularProducts).should('have.length', 7)
    }

    static searchProductsInSearchBar() {
        utils.typeText(_searchBar, 'blouse')
        utils.clickOnElement(_searchButton)
    }

}

module.exports = Homepage
