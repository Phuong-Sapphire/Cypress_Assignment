

function isCheckboxChecked(element){
    element().parent().should('have.attr', 'class').then(attrValue =>{
        if(attrValue == 'icheckbox_square-blue checked'){
            element().check()
        }else if(attrValue == 'icheckbox_square-blue'){
            element().parent().invoke('attr', 'aria-disabled', 'true').click()
        }
    })
}

export class PrintBarcodePage{
    elements = {
        addProduct: () => cy.get('input[id="add_item"]').parent(),
        style: () => cy.get('div[id="s2id_style"]').parent(),
        print: () => cy.contains('print'),
        siteName: ()=> cy.get('label[for="site_name"]'),
        productName: () => cy.get('label[for="product_name"]'),
        price: () => cy.get('label[for="price"]'),
        currencies: () => cy.get('label[for="currencies"]'),
        unit: () => cy.get('label[for="unit"]'),
        category: () => cy.get('label[for="category"]'),
        variants: () => cy.get('label[for="variants"]'),
        productImage: () => cy.get('label[for="product_image"]'),
        checkPromotionalPrice: () => cy.get('label[for="check_promo"]'),
        addItem: () => cy.get('[name="add_item"]'),
        styleInput: () => cy.get('[id="s2id_style"]'),
        styleList: () => cy.get('ul#select2-results-1'),
        siteNameCheckbox: () => cy.get('input[id="site_name"]'),
        productNameCheckbox: () => cy.get('input[id="product_name"]'),
        priceCheckbox: () => cy.get('input[id="price"]'),
        currenciesCheckbox: () => cy.get('input[id="currencies"]'),
        unitCheckbox: () => cy.get('input[id="unit"]'),
        categoryCheckbox: () => cy.get('input[id="category"]'),
        variantsCheckbox: () => cy.get('input[id="variants"]'),
        productImageCheckbox: () => cy.get('input[id="product_image"]'),
        checkPromoCheckbox: () => cy.get('input[id="check_promo"]'),
        updateBtn: () => cy.get('input[value="Update"]'),
        productImageDetail: () => cy.get('span[class="product_image"]'),
        barcodeSite: () => cy.get('span[class="barcode_site"]'),
        barcodeName: () => cy.get('span[class="barcode_name"]'),
        barcodePrice: () => cy.get('span[class="barcode_price"]'),
        barcodeUnit: () => cy.get('span[class="barcode_unit"]'),
        barcodeCategory: () => cy.get('span[class="barcode_category"]'),
        barcodeImage: () => cy.get('span[class="barcode_image"]')

    }

    verifyPrintBarcodePage(){
        this.elements.addProduct().should('be.visible')
        this.elements.style().should('be.visible')
        this.elements.print().should('be.visible')
        this.elements.siteName().should('be.visible')
        this.elements.productName().should('be.visible')
        this.elements.price().should('be.visible')
        this.elements.currencies().should('be.visible')
        this.elements.unit().should('be.visible')
        this.elements.category().should('be.visible')
        this.elements.variants().should('be.visible')
        this.elements.productImage().should('be.visible')
        this.elements.checkPromotionalPrice().should('be.visible')
    }
    addBarcode(nameOfProduct){
        this.elements.addItem().clear().type(nameOfProduct).wait(1000)
        this.elements.styleInput().click()
        this.elements.styleList().contains('18 per sheet (a4) (2.5" x 1.835")').click()
        isCheckboxChecked(this.elements.siteNameCheckbox)
        isCheckboxChecked(this.elements.productNameCheckbox)
        isCheckboxChecked(this.elements.priceCheckbox)
        isCheckboxChecked(this.elements.currenciesCheckbox)
        isCheckboxChecked(this.elements.unitCheckbox)
        isCheckboxChecked(this.elements.categoryCheckbox)
        isCheckboxChecked(this.elements.variantsCheckbox)
        isCheckboxChecked(this.elements.productImageCheckbox)
        isCheckboxChecked(this.elements.checkPromoCheckbox)
        this.elements.updateBtn().click( {force: true})
    }

    verifyUpdateBarcode(){
        this.elements.productImageDetail().should('be.visible')
        this.elements.barcodeSite().should('be.visible').and('have.text', 'Stock Manager Advance')
        this.elements.barcodeName().should('be.visible').and('have.text','Kiwi')
        this.elements.barcodePrice().should('be.visible').and('have.text','Price USD: 3.90, ERU: 2.86')
        this.elements.barcodeUnit().should('be.visible').and('have.text','Unit: 4')
        this.elements.barcodeCategory().should('be.visible').and('have.text','Category: Fruits')
        this.elements.barcodeImage().should('be.visible')
    }
}

export const onPrintBarcodePage = new PrintBarcodePage()