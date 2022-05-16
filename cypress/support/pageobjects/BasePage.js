export default class BasePage {
    getCartBadge() {
        return cy.get('.shopping_cart_badge')
    }    
}