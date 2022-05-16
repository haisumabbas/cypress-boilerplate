import LoginPage from "../support/pageobjects/LoginPage"
import InventoryPage from "../support/pageobjects/InventoryPage"

describe('Swag Labs - Inventory Test Suite', () => {
    
    let users
    let inventoryPageObject = new InventoryPage()

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
    
    it('Inventory Test Suite - Add a product to the cart', () =>{
        inventoryPageObject.addProductToCart()
        inventoryPageObject.getRemoveProductElement().should('have.length', 1)
        inventoryPageObject.getCartBadge().should('have.text', '1')       

    })

    it('Inventory Test Suite - Remove added product from the cart', () =>{
        inventoryPageObject.addProductToCart()
        inventoryPageObject.removeProductFromCart()
        inventoryPageObject.getRemoveProductElement().should('not.exist')        
    })
})