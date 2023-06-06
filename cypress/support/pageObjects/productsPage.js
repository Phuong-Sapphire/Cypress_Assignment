export class ProductsPage{
    elements = {
        image: () => cy.get('th').contains('Image'),
        code: () => cy.get('th').contains('Code'),
        name: () => cy.get('th').contains('Name'),
        brand: () => cy.get('th').contains('Brand'),
        category: () => cy.get('th').contains('Category'),
        cost: () => cy.get('th').contains('Cost'),
        price: () => cy.get('th').contains('Price'),
        quantity: () => cy.get('th').contains('Quantity'),
        unit: () => cy.get('th').contains('Unit'),
        alertQuantity: () => cy.get('th').contains('Alert Quantity'),
        actions: () => cy.get('th').contains('Actions'),
        productImage: () => cy.get('#pr-image'),
        barcodeQRCode: () => cy.get('td').contains('Barcode & QRcode').siblings(),
        type: () => cy.contains('Type').siblings(),
        table: () => cy.get('[class="table table-borderless table-striped dfTable table-right-left"]'),
        nameProduct: () => this.elements.table().contains('Name').siblings(),
        codeProduct:() => this.elements.table().contains('Code').siblings(),
        categoryProduct: () => this.elements.table().contains('Category').siblings(),
        unitProduct: () => this.elements.table().contains('Unit').siblings(),
        costProduct: () => this.elements.table().contains('Cost').siblings(),
        priceProduct: () => this.elements.table().contains('Price').siblings(),
        taxRateProduct: () => this.elements.table().contains('Tax Rate').siblings(),
        taxMethodProduct: () => this.elements.table().contains('Tax Method').siblings(),
        alertQuantityProduct: () => this.elements.table().contains('Alert Quantity').siblings(),
        productDetails: () => cy.get('[class="panel panel-primary"]'),
        searchBtn: () => cy.get('input[class="input-xs"]'),
        actionProduct: (nameOfProduct) => cy.contains(nameOfProduct).parent().contains('Actions'),
        editProduct: () => cy.contains(' Edit Product'),
        productType: () => cy.get('label[for="type"]').parent(),
        productName: () => cy.get('label[for="name"]').parent(),
        productCode:() => cy.get('label[for="code"]').parent(),
        slug: () => cy.get('label[for="slug"]').parent(),
        barcodeSymbology: () => cy.get('label[for="barcode_symbology"]').parent(),
        productTypeInput: () => cy.get('#s2id_type'),
        productTypeList: () => cy.get('ul#select2-results-5'),
        barcodeSymbologyInput: () => cy.get('#s2id_barcode_symbology'),
        barcodeSymbologyList: () => cy.get('ul#select2-results-6'),
        taxMethodInput: () => cy.get('#s2id_tax_method'),
        taxMethodList: () => cy.get('ul#select2-results-13'),
        editBtn: () => cy.get('[name="edit_product"]')

    }

    verifyProductTable(){
        this.elements.image().should('be.visible')
        this.elements.code().should('be.visible')
        this.elements.name().should('be.visible')
        this.elements.brand().should('be.visible')
        this.elements.category().should('be.visible')
        this.elements.cost().should('be.visible')
        this.elements.price().should('be.visible')
        this.elements.quantity().should('be.visible')
        this.elements.unit().should('be.visible')
        this.elements.alertQuantity().should('be.visible')
        this.elements.actions().should('be.visible')
    }

    verifyViewProductDetail(){
        this.elements.productImage().should('be.visible')
        this.elements.barcodeQRCode().should('be.visible')
        this.elements.type().should('have.text', 'Standard')
        this.elements.nameProduct().should('have.text', 'Lemon')
        this.elements.codeProduct().should('have.text', 'FFR03')
        this.elements.categoryProduct().should('have.text', 'Fruits')
        this.elements.unitProduct().should('have.text', 'Piece (pc)')
        this.elements.costProduct().should('have.text', '1.95')
        this.elements.priceProduct().should('have.text', '3.00')
        this.elements.taxRateProduct().should('have.text', 'GST @0%')
        this.elements.taxMethodProduct().should('have.text', 'Inclusive')
        this.elements.alertQuantityProduct().should('have.text', '5.00')
        this.elements.productDetails().should('be.visible')
    }

    EditProduct(nameOfProduct){
        this.elements.searchBtn().clear().type('Mouse')
        this.elements.actionProduct(nameOfProduct).click()
        this.elements.editProduct().click({force: true})
        this.elements.productType().should('be.visible')
        this.elements.productName().should('be.visible')
        this.elements.productCode().should('be.visible')
        this.elements.slug().should('be.visible')
        this.elements.barcodeSymbology('be.visible')

        this.elements.productTypeInput().click()
        this.elements.productTypeList().contains('Combo').click()
        this.elements.barcodeSymbologyInput().click()
        this.elements.barcodeSymbologyList().contains('EAN8').click()
        this.elements.taxMethodInput().click()
        this.elements.taxMethodList().contains('Exclusive').click()
        this.elements.editBtn().click()
    }

    verifyEditProduct(){
        
    }

}

    
    
export const onProductsPage = new ProductsPage()