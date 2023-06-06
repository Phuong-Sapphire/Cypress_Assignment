function selectMenuItem(menuItem){
    cy.contains('a', menuItem).click()
}

export class NavigationPage{
    elements = {
        username: ()=> cy.get('[placeholder="Username"]'),
        password: () => cy.get('[placeholder="Password"]'),
        loginBtn: () => cy.get('[class="btn btn-success pull-right"]'),
        listProducts: () => cy.contains(' List Products'),
        printBarcodeLabel: () => cy.contains(' Print Barcode/Label'),
        addSale: () => cy.contains(' Add Sale'),
        listPurchases: () => cy.contains(' List Purchases'),
        addPurchase: () => cy.contains(' Add Purchase')

    }
    // login(){
    //     // cy.openLoginPage()
    //     this.elements.username().clear().type(Cypress.env('email'))
    //     this.elements.password().clear().type(Cypress.env('password'))
    //     this.elements.loginBtn().click()
    // }
    listProductsPage(){
        selectMenuItem('Products')
        this.elements.listProducts().click()

    }

    detailProductPage(nameOfProduct){
        cy.contains(nameOfProduct).click()
    }

    printBarcodeLabelPage(){
        
        selectMenuItem(' Products ')
        this.elements.printBarcodeLabel().click()
    }
    
    addSalePage(){
        
        selectMenuItem(' Sales ')
        this.elements.addSale().click()
    }

    listPurchasesPage(){
        
        selectMenuItem(' Purchases ')
        this.elements.listPurchases().click()
    }

    addPurchasePage(){
        
        selectMenuItem(' Purchases ')
        this.elements.addPurchase().click()
    }
}

export const navigateTo = new NavigationPage()