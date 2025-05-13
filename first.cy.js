/// <reference types="Cypress" />
 
describe('My First Test Suite', function(){
    it('My FirstTest case',function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca');
        //cy.get('.product').should('have.length',5)
        //cy.get('.products > :nth-child(2) > .product-name').contains('ADD TO CART').click()
      //  cy.get('.product:has(img[alt="Brocolli - 1 Kg"]) button').click();
      cy.get('.products').find('.product').each(($e1, index, $list)=> {
       // cy.log('ss')
       const item=$e1.find('h4.product-name').text();
       if(item.includes('Carrot'))
       {
        cy.wrap($e1).contains('ADD TO CART').click();
       }

      
    

    })
        
        })
    })
