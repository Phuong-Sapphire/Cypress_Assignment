import dayjs from 'dayjs'
import moment from 'moment';
export class PurchasePage{
    elements = {
        datetime: () => cy.get('tr#9').find('td.sorting_1'),
        referenceNo: () => cy.get('th').contains('Reference No'),
        purchaseTable: () => cy.get('table#POData tbody tr'),
        dateInput: () => cy.get('input[id="podate"]'),
        datetimeTable: () => cy.get('div[class="datetimepicker-days"] table'),
        today: () => this.elements.datetimeTable().find('th[class="today"]'),
        warehouseInput: () => cy.get('[id="s2id_powarehouse"]'),
        statusInput: () => cy.get('[id="s2id_postatus"]'),
        supplierInput: () => cy.get('[id="s2id_posupplier"]'),
        supplierSearch: () => cy.get('[id="s2id_autogen8_search"]'),
        supplierResult: () => cy.contains('IT Hyperzone (Mohd Khairul)'),
        addItem: () => cy.get('[id="add_item"]'),
        submitBtn: () => cy.get('input[value="Submit"]'),
        message: () => cy.get('div[class="alert alert-success"]')

    }

    verifyPurchasesList(){
        this.elements.datetime().invoke('text').then((text)=>{
            const parsed = moment(text,'DD/MM/yyyy HH:mm:ss' )
            //const parsed = dayjs(text).format('dd/MM/yyyy HH:mm:ss')
            console.log(parsed);
            expect(parsed.format('DD/MM/yyyy HH:mm:ss')).to.eq(text)
        })
        this.elements.referenceNo().invoke('attr', 'class').then(attrValue =>{
            expect(attrValue).include('desc')
        })
        this.elements.purchaseTable().should('have.length', 9)
    }

    addPurchase(){
        this.elements.dateInput().click({force:true})
        this.elements.today().click({force: true})
        this.elements.warehouseInput().click().contains('Warehouse 1').click({force:true})
        this.elements.statusInput().click().contains('Received').click({force:true})
        this.elements.supplierInput().click()
        this.elements.supplierSearch().clear().type('a')
        this.elements.supplierResult().click()
        this.elements.addItem().clear().type('kiwi')
        this.elements.submitBtn().click({force:true})
        this.elements.message().should('have.text', ' Purchase successfully added ')
        // cy.get('div[class="alert alert-success"]').should('have.text', ' Purchase successfully added ')
    }
}

export const onPurchasePage = new PurchasePage()