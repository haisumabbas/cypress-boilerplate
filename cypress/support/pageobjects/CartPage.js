import BasePage from './BasePage'

export default class CartPage extends BasePage {
    getCheckoutElement() {
        return cy.get('[data-test="checkout"]')
    }

    getItemElements() {
        return cy.get('.cart_item')
    }
    
    navigateToCheckout() {
        this.getCheckoutElement().click()
    }
}