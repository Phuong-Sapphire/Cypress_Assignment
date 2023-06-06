const { onLoginPage } = require("../../support/pageObjects/loginPage")
const { navigateTo } = require("../../support/pageObjects/navigateTo")
const { onPurchasePage } = require("../../support/pageObjects/purchasePage")

describe('assignment final', () =>{
    beforeEach('open login page', () =>{
        cy.openLoginPage()
    })

    it('Verify Purchases List', ()=>{
        onLoginPage.login()
        navigateTo.listPurchasesPage()
        onPurchasePage.verifyPurchasesList()
    })
}
)