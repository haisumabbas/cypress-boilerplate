import LoginPage from "../support/pageobjects/LoginPage"
import InventoryPage from "../support/pageobjects/InventoryPage"
import CartPage from "../support/pageobjects/CartPage"
import CheckoutPage from "../support/pageobjects/CheckoutPage"

describe('Swag Labs - Checkout Suite', () => {
    
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
    
    it('Checkout Test Suite - Verify checkout step one validation', () =>{
        let inventoryPageObject = new InventoryPage()
        inventoryPageObject.addProductToCart()
        inventoryPageObject.addProductToCart()
        inventoryPageObject.getCartBadge().should('have.text', '2')       
        inventoryPageObject.navigateToCart()

        let cartPageObject = new CartPage()
        cartPageObject.getCartBadge().should('have.text', '2')       
        cartPageObject.navigateToCheckout()

        let checkoutPageObject = new CheckoutPage()
        checkoutPageObject.getContinueElement().click()
        checkoutPageObject.getErrorMessageElement().should('have.text', 'Error: First Name is required')        
    })

    it('Checkout Test Suite - Complete checkout journey', () =>{
        let inventoryPageObject = new InventoryPage()
        inventoryPageObject.addProductToCart()
        inventoryPageObject.addProductToCart()
        inventoryPageObject.getCartBadge().should('have.text', '2')       
        inventoryPageObject.navigateToCart()

        let cartPageObject = new CartPage()
        cartPageObject.getCartBadge().should('have.text', '2')       
        cartPageObject.navigateToCheckout()

        let checkoutPageObject = new CheckoutPage()
        checkoutPageObject.completeCheckoutStepOne('Haisum', 'Abbas', '54000')
        checkoutPageObject.completeCheckoutStepTwo()

        checkoutPageObject.getCheckoutCompletionHeader().should('have.text', 'THANK YOU FOR YOUR ORDER')
        checkoutPageObject.getCheckoutCompletionMessage().should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })
})