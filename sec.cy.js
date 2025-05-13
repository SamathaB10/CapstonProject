describe('ts' ,function(){
    it('tc',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[type=search]').type('ca')
        cy.get('.products').find('.product').should('have.length',4)
       
            //here text method work bcz we are resove promise by using each
            //to get text or varible we need to use then*/
            cy.get('.products').find('.product').each(($el, index, $list) => {
 
                const textVeg=$el.find('h4.product-name').text()
                if(textVeg.includes('Cashews'))
                {
                cy.wrap($el).find('button').click()
                }
                })
        /*if(item.includes('Cashews'))
        {
            cy.wrap($e1).find('button').click();
        }*/
       //THEN IS USED TO RESLOVE PROMISE FOR NON CYPRESS METHODS
       cy.get('.brand').then(function(logooo)
    {
        const logoo=logooo.text();
        cy.log(logoo)
    })
cy.get('.brand').should('have.text','GREENKART')
//cy.get('.cart-icon > img').click()

cy.get('.cart-icon img[alt="Cart"]').click()
//cy.wait(4000)
cy.contains('PROCEED TO CHECKOUT').click();
cy.contains("Place Order").click()





        

        })

        
    })