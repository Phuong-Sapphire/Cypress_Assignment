const { onLoginPage } = require("../../support/pageObjects/loginPage")
const { navigateTo } = require("../../support/pageObjects/navigateTo")
const { onProductsPage } = require("../../support/pageObjects/productsPage")
describe('assignment final', () =>{
    beforeEach('open login page', () =>{
        cy.openLoginPage()
    })

    it('Verify List Products', ()=>{
        onLoginPage.login()
        navigateTo.listProductsPage()
        onProductsPage.verifyProductTable()
    })
}
)