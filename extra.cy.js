/// <reference types="cypress"/>
describe('practice ts', function () {
    it('practice tc', function () {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#')
        cy.get('#username').type('rahulshettyacademy')
        cy.get('#password').type('learning')
        cy.get('input[value="admin"]').check()
        cy.get('#terms').check()
        cy.get('#signInBtn').click()
        cy.get('.col-lg-9 .row .card ').should('have.length', 4)
        var co;
        var sum = 0;
        cy.get('.col-lg-9 .row .card ').each(($e1, index, $list) => {
            var item = $e1.text()
            if (item.includes('iphone X')) {
                cy.contains("button", 'Add').click()
            }
            else if (item.includes('Blackberry')) {
                $e1.find("button", 'Add').click()
            }

        })
        var Oprice = 0;
        cy.get('.nav-link span').click({ force: true })
        cy.get('.col-sm-12 .table tbody tr').each(($e1, index, $list) => {
            var price = Number($e1.find(' td:nth-child(3) strong').text().split(" ")[1])
            //Oprice = Number($e1.find(' td:nth-child(5) strong').text().split(" ")[1])
            //cy.log(pp)
            if (price > 0) {
                var Tprice = Number($e1.find(' td:nth-child(4) strong').text().split(" ")[1])
                sum = sum + Tprice;
                cy.wrap($e1).get('#exampleInputEmail1').invoke('val').then((count) => {
                    //cy.log(count)
                    co = count
                })

                //to get value outside the loop

                cy.get('body').then(() => {
                    var mul = co * price

                    expect(Tprice).to.equal(mul)
                    //cy.log(mul)
                })
            }
        })
        cy.get('.text-right h3 strong').then((t) => {
            //cy.log(sum)
            var y = Number(t.text().split(' ')[1])
            expect(sum).to.equal(y)
        })
        cy.contains("button",'Checkout').click()
        cy.get('#country').type('Ind')
        cy.wait(7000);
        //need to give time
        cy.get('div.suggestions ul li a').each(($e1,index,$list)=>{

            var country=$e1.text()
            cy.log(country)
            if(country==='India')
            {
                cy.wrap($e1).click()
            }
            cy.get('#checkbox2').click({force:true})
            cy.get('input[type="submit"]').click()
            cy.contains("strong",'Success!')
            
            
        })
        


    })
})