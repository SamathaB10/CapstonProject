/// <reference types="cypress" />
describe('task ts', function () {
    it('task tc', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca');
       /* cy.get('input.quantity').each(($el, index, $list) => {
            cy.wrap($el).invoke('val').then((value) => {
              const inputValue = value;
              cy.log(`Input Value for element ${index}:`, inputValue);
        })
    })*/
        var IC;
        var IC2;
        var TC2
        var I1C;
        var I2C;
        var I1COV;
        var I2COV;
        var I1CV;
        var I2CV;
        var multi1;
        var multi2;
        var b=0;
        cy.get('.products').find('.product').each(($e1, index, $list) => {
            const item = $e1.find('h4.product-name').text();
            $e1.find('p.product-price')
            if (item.includes('Carrot')) {
                cy.wrap($e1).find('a.increment').click()
                cy.wrap($e1).contains('ADD TO CART').click()
                    IC = $e1.find('p.product-price').text()
                   
                   var g= cy.wrap($e1).find('input.quantity').invoke('val')
                   g.then((G)=>{
                        cy.log(G);
                        b=G;
                   })
                   /*.then((value) => {
                        
                         b=value;

                         cy.log(b)
                          g=b*10;
                         cy.log(g);
                        cy.log('Input Value:', I1C);
                      })*/
                     // cy.log(b)
                      cy.log(b)
                      console.log(b);
                    //I1COV=Number(I1C);
                    I1CV=Number(IC);
                
                   // cy.log(I1COV)
                   cy.log(I1CV)//56
                   
                    multi1=I1CV* I1COV
                    cy.log(multi1);
            }
            if (item.includes('Cashews')) {
                //cy.wrap($e1).find('a.increment').click()
                cy.wrap($e1).contains('ADD TO CART').click()
                    IC2 = $e1.find('p.product-price').text()
                    I2C=$e1.find('input.quantity');
                    I2COV=Number(I2C);
                    I2CV=Number(IC2);
                    cy.log(I2COV)
                    cy.log(I2CV)
                    multi2=I2COV*I2CV
                    cy.log(multi2);
                  //  cy.log(IC);
            }
        })
        var add=multi1+multi2
        var TP=cy.get('.cart-info tbody >:nth-child(2) strong');
        TP.then((fp) => {
            var t=fp.text()
            cy.log("hiiiiiiiiii")
            if(t.includes(add))
            {
                cy.log("hii")

            }

        })
        //compare the price total with adding two values


        //here we used each so directly we get text from that
        //below we need to store in varible so we need to use then to relove promise 

       /*
       //this is for checking only in item value
       //  const pc = cy.get('.cart-info tbody >:nth-child(2)  strong')
        pc.then((PC) => {
            cy.log(PC.text())
            //cy.wrap(PC).should('have.text',IC)
            expect(PC).to.have.text(IC);
        })*/
       //now check 2 items add and check total price with multiplication quantitry 


    })
})
