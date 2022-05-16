import BasePage from './BasePage'

export default class CheckOut extends BasePage {
    getFirstNameElement() {
        return cy.get('[data-test="firstName"]')
    }

    getLastNameElement() {
        return cy.get('[data-test="lastName"]')
    }

    getZipcodeElement() {
        return cy.get('[data-test="postalCode"]')
    }

    getContinueElement() {
        return cy.get('[data-test="continue"]')
    }

    getFinishElement() {
        return cy.get('[data-test="finish"]')        
    }

    getCheckoutCompletionHeader() {
        return cy.get('.complete-header')
    }

    getCheckoutCompletionMessage() {
        return cy.get('.complete-text')
    }

    getErrorMessageElement() {
        return cy.get('[data-test="error"]')
    }

    completeCheckoutStepOne(firstName, lastName, zipCode) {
        this.getFirstNameElement().type(firstName)
        this.getLastNameElement().type(lastName)
        this.getZipcodeElement().type(zipCode)
        this.getContinueElement().click()
    }

    completeCheckoutStepTwo() {
        this.getFinishElement().click()
    }
}