/// <reference types="Cypress" />

const testData = require('../fixtures/testData.json')
const utils = require('../support/utils')

const _productTitle = 'h1[itemprop=name]'
const _productDescription = 'div[id=short_description_content] p'
const _addToCartButton = 'button[name=Submit] span'
const _cartProductQuantity = '.ajax_cart_quantity'
const _confirmationMessage = '.layer_cart_product > .title'

class ProductPage {

    static verifyUserIsOnProductDetailsPage() {
        utils.asserUrl('blouses/2-blouse.html?search_query=blouse&results=1')
        cy.get(_productTitle).getText().then((text) => {
            cy.url('include', text)
            cy.log('Displayed product title is ' + text + ' and assrt that url contains the product title')
        })
    }

    static verifyProductDescriptionShowsOnProductPage() {
        cy.get(_productDescription).should('be.visible')
        cy.get(_productDescription).getText().then((text) => {
            cy.get(_productDescription).should('contain', text)
            cy.log('Assert that product description is ' + text + ' and it is visible on page')
        })
    }

    static addProductToCart() {
        utils.clickOnElement(_addToCartButton)
    }

    static verifyProductAddedToCartAndConfirmIt() {
        cy.get(_cartProductQuantity).getText().then((text) => {
            cy.get(_cartProductQuantity).should('contain', testData.expectedCartQuantity)
            cy.log('Added products quantity in the cart is  ' + text)
        })

        cy.get(_confirmationMessage).getText().then((text) => {
            cy.get(_confirmationMessage).should('contain.text', testData.expectedConfirmationMessage)
            cy.log('Confirm the user by displaying message that ' + text)
        })
    }
}

module.exports = ProductPage
