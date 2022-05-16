import LoginPage from "../support/pageobjects/LoginPage"

describe('Swag Labs - Login Test Suite', () => {
    
    let users
    let loginPageObject = new LoginPage()

    before(() => {
        cy.fixture('credentials.json').then((credentials) => {
            users = credentials
        })
        console.log(users)
    })
    
    it('Login Test Suite - Login with user having valid credentials', () =>{
        loginPageObject.loadLoginPage()
        loginPageObject.performLogin(users.validUser.username, users.validUser.password)
        cy.url().should('include', 'inventory.html')
    })

    it('Login Test Suite - Login with user with locked credentials', () =>{
        loginPageObject.loadLoginPage()
        loginPageObject.performLogin(users.lockedUser.username, users.lockedUser.password)
        loginPageObject.getMessageElement().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
})