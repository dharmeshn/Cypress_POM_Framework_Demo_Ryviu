/// <reference types="Cypress" />

const testData = require('../fixtures/testData.json')
const utils = require('../support/utils')

const _pageHeading = '.page-heading'
const _productContainer = '.product-container'
const _product = '.product_img_link'

class SearchResultPage {

    static verifyUserIsOnSearchResultPage() {
        utils.asserUrl('https://prestashop.ryviushop.com/search')
    }
    static searchBarShowingCorrectResults() {
        cy.get(_pageHeading).should('be.visible').and('contain.text', 'blouse')
        cy.get(_productContainer).should('have.length', 1)
    }

    static openTheProductDetailsPage() {
        utils.clickOnElement(_product)

    }

}

module.exports = SearchResultPage

