/// <reference types="Cypress" />

export default class LoginPage {
    loadLoginPage() {
        cy.visit(Cypress.config().baseUrl)
        cy.title().should('eq', 'Swag Labs')
    }

    getUsernameElement() {
        return cy.get('[data-test="username"]').should('be.visible')
    }

    getPasswordElement() {
        return cy.get('[data-test="password"]').should('be.visible')
    }

    getLoginElement() {
        return cy.get('[data-test="login-button"]').should('be.visible')        
    }

    getMessageElement() {
        return cy.get('.error-message-container')
    }

    performLogin(username, password){
        this.getUsernameElement().type(username)
        this.getPasswordElement().type(password)
        this.getLoginElement().click()
    }
}