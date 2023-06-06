
export class SalePage{

    elements = {
        datepicker: () => cy.get('input[id="sldate"]'),
        timeTable: () => cy.xpath('(//div[@class="datetimepicker-days"])[1]'),
        today: () => this.elements.timeTable().find('th[class="today"]'),
        biller: () => cy.get('[id="s2id_slbiller"]'),
        warehouse: () => cy.get('[id="s2id_slwarehouse"]'),
        customer: () => cy.get('[id="s2id_slcustomer"]'),
        customerInput: () => cy.get('[id="s2id_autogen12_search"]'),
        customerResult: () => cy.get('span[class="select2-match"]'),
        addItem: () => cy.get('input[id="add_item"]'),
        saleStatus: () => cy.get('[id="s2id_slsale_status"]'),
        paymentStatus: () => cy.get('[id="s2id_slpayment_status"]'),
        submitBtn: () => cy.get('input[type="submit"][name="add_sale"]'),
        message: () => cy.get('div[class="alert alert-success"]')
    }
    addSale(){
        this.elements.datepicker().click()
        this.elements.today().click({ force: true })
        this.elements.biller().click().contains('Test Biller').click({force:true})
        this.elements.warehouse().click().contains('Warehouse 1').click({force:true})
        this.elements.customer().click()
        this.elements.customerInput().type('a')
        this.elements.customerResult().click()
        this.elements.addItem().clear().type('kiwi').wait(1000)
        this.elements.saleStatus().click().contains('Completed').click({force:true})
        this.elements.paymentStatus().click().contains('Pending').click({force:true})
        this.elements.submitBtn().click()
        this.elements.message().should('have.text', '\n×\nSale successfully added ')
    }
}

export const onSalePage = new SalePage()