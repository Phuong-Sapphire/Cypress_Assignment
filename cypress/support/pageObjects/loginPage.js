export class LoginPage{
    elements = {
        username: () => cy.get('[placeholder="Username"]'),
        password: () => cy.get('[placeholder="Password"]'),
        rememberMeBtn: () => cy.get('[class="checkbox pull-left"]'),
        loginBtn: () => cy.contains('Login'),
        message: () => cy.contains('You are successfully logged in.'),
        overViewChart: () => cy.get('[class="box"][style="margin-bottom: 15px;"]'),
        quickLink: () => cy.contains('Quick Links'),
        latestFive: () => cy.contains('Latest Five'),
        bestSeller: () => cy.get('[class = "col-sm-6"]').parent()
    }

    verifyLoginPage(){
        this.elements.username().should('be.visible')
        this.elements.password().should('be.visible')
        this.elements.rememberMeBtn().should('be.visible')
        this.elements.loginBtn().should('be.visible')
    }

    login(){
        this.elements.username().clear().type(Cypress.env('email'))
        this.elements.password().clear().type(Cypress.env('password'))
        this.elements.loginBtn().click()
    }
    VerifySuccessfullyLoggedIn(){
        this.elements.message().should('be.visible')
        this.elements.overViewChart().should('be.visible')
        this.elements.quickLink().should('be.visible')
        this.elements.latestFive().should('be.visible')
        this.elements.bestSeller().should('be.visible')
    }
}
export const onLoginPage = new LoginPage()