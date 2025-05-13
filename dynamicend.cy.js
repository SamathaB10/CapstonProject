///  <reference types="cypress" />
describe('dynamic ts', function () {
    it('task tc', function () {
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        cy.get('#username').type('rahulshettyacademy')
        cy.get('#password').type('learning')
        cy.get('input[value="user"]').check()

        //cy.get('Student').select('Teacher')
        cy.get('select.form-control').invoke('show')
        cy.get('select.form-control').should('contain', 'Student')
        cy.get('#terms').click({ force: true })
        cy.get('#signInBtn').click({ force: true })
        cy.get('.row .card').should('have.length', 4)
        //to filter 2 cards from 4
        const prod = "Nokia Edge"
        cy.get('.row .card').filter(`:contains("${prod}")`).then(function (element) {
            //this filter return promise we need to resolve by usimg then later we need wrap with cy to apply operations
            // cy.wrap(element).should('have.length',1)
            cy.wrap(element).contains("button", 'Add').click()


        })
        cy.get('.row .card').filter(':contains(" iphone X")').then(function (ele) {
            //this filter return promise we need to resolve by usimg then later we need wrap with cy to apply operations
            // cy.wrap(element).should('have.length',1)
            cy.wrap(ele).contains("button", 'Add').click()


        })
        cy.get('.row .card').filter(':contains(" iphone X")').then(function (ele) {
            //this filter return promise we need to resolve by usimg then later we need wrap with cy to apply operations
            // cy.wrap(element).should('have.length',1)
            cy.wrap(ele).contains("button", 'Add').click()


        })
        // iphone X
        cy.get('a.nav-link  span').click({ force: true })
        cy.get('.table .col-sm-8 ').should('have.length', 2)
        // another code
        var sum = 0;
        var tp;
        //    cy.get('tr td:nth-child(4) strong').each(($e1,index,$list)=>{
        //     var price=Number($e1.text().split(" ")[1].trim())
        //     sum=sum+price
        //    })
        //    cy.get('.text-right h3 strong').then((totalp)=>{
        //      tp=Number(totalp.text().split(" ")[1].trim())
        //      expect(tp).to.equal(sum);
        //    })

        //    cy.contains('Checkout').click()
        //    cy.get('#country').type('Ind')
        //    cy.wait(7000)
        //    cy.get('.suggestions a').each(($e1,index)=>{

        //     if($e1.text()==='India')
        //     {
        //         cy.wrap($e1).click()
        //     }
        //    })
        //    cy.get('#checkbox2').click({force:true})
        //    cy.contains("input",'Purchase').click()
        //    cy.get('div.alert').then((hh)=>{
        //     expect(hh.text()).to.include('Success')
        var sum = 0;
        cy.get('.table tbody tr').each(($e1, index, $list) => {
            var price = Number($e1.find('>:nth-child(3) strong').text().split(" ")[1])
            var TP = Number($e1.find('>:nth-child(4) strong').text().split(" ")[1])

            if (price > 0) {
                cy.wrap($e1).find('#exampleInputEmail1').invoke('val').then((Qt) => {
                    //IT IS not possible to acces the varible in then outside the function so to perform any operation we need to do this this here
                    var PP = price * Qt
                    //for values and 
                    expect(TP).to.equal(PP)
                    sum = sum + TP;
                    //cy.log(PP)
                })

            }

        })
        cy.get('.text-right h3 strong').then((OC) => {
            expect(OC.text()).to.include(sum)
        })
        cy.contains('Checkout').click()
        cy.get('#country').type('Ind')
        cy.wait(7000)
        cy.get('.suggestions a').each(($e1, index) => {

            if ($e1.text() === 'India') {
                cy.wrap($e1).click()
            }
        })
        cy.get('#checkbox2').click({ force: true })
        cy.contains("input", 'Purchase').click()
        cy.get('div.alert').then((hh) => {
            expect(hh.text()).to.include('Success')
        })
    })
})

