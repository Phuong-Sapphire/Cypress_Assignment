const { onLoginPage } = require("../../support/pageObjects/loginPage")
const { navigateTo } = require("../../support/pageObjects/navigateTo")
const { onPrintBarcodePage } = require("../../support/pageObjects/printBarcodesPage")

describe('assignment final', () =>{
    beforeEach('open login page', () =>{
        cy.openLoginPage()
    })

    it('Verify Print Barcode/Label page', ()=>{
        onLoginPage.login()
        navigateTo.printBarcodeLabelPage()
        onPrintBarcodePage.verifyPrintBarcodePage()
    })
}
)