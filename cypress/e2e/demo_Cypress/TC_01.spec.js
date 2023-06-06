const { onLoginPage } = require("../../support/pageObjects/loginPage")
describe('assignment final', () =>{
    beforeEach('open login page', () =>{
        cy.openLoginPage()
    })

    it('Verify Login page', () =>{
        onLoginPage.verifyLoginPage()
    })
}
)