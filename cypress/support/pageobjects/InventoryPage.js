import BasePage from './BasePage'

export default class InventoryPage extends BasePage {
    
    getCartElement() {
        return cy.get('.shopping_cart_link')
    }

    getAddToCartElement() {
        return cy.contains('Add to cart')
    }

    getRemoveProductElement() {
        return cy.contains('Remove')
    }

   addProductToCart() {
        this.getAddToCartElement().click()               
    }

    removeProductFromCart() {
        this.getRemoveProductElement().click()
    }

    navigateToCart() {
        this.getCartElement().click();
        cy.url().should('include', 'cart.html')
    }
}