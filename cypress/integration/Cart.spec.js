import LoginPage from "../support/pageobjects/LoginPage"
import InventoryPage from "../support/pageobjects/InventoryPage"
import CartPage from "../support/pageobjects/CartPage"

describe('Swag Labs - Cart Suite', () => {

    let users

    before(() => {
        cy.fixture('credentials.json').then((credentials) => {
            users = credentials
        })
    })

    beforeEach(() => {
        let loginPageObject = new LoginPage()
        loginPageObject.loadLoginPage()
        loginPageObject.performLogin(users.validUser.username, users.validUser.password)
        cy.url().should('include', 'inventory.html')
    })

    it('Inventory Test Suite - Verify Cart', () => {
        let inventoryPageObject = new InventoryPage()
        inventoryPageObject.addProductToCart()
        inventoryPageObject.addProductToCart()
        inventoryPageObject.getCartBadge().should('have.text', '2')
        inventoryPageObject.navigateToCart()

        let cartPageObject = new CartPage()
        cartPageObject.getCartBadge().should('have.text', '2')
    })
})