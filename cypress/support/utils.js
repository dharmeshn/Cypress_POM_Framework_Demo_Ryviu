class Utils {
    
    static visitUrl(url) {
        cy.visit(url)
    }

    static clickOnElement(locator) {
        cy.get(locator).click()
    }

    static typeText(locator, text) {
        cy.get(locator).type(text)
    }

    static asserUrl(url) {
        cy.url().should('include', url)
    }

}

module.exports = Utils
