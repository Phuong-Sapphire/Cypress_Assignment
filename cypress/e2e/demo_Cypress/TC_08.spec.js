const { onLoginPage } = require("../../support/pageObjects/loginPage")
const { navigateTo } = require("../../support/pageObjects/navigateTo")
const { onSalePage } = require("../../support/pageObjects/salePage")

describe('assignment final', () =>{
    beforeEach('open login page', () =>{
        cy.openLoginPage()
    })

    it('Verify add Sale successfully', ()=>{
        onLoginPage.login()
        navigateTo.addSalePage()
        onSalePage.addSale()
    })
}
)