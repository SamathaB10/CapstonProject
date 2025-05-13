/// <reference types="cypress" />
describe('dynamictesting',function(){
    it('dynamictesting',function(){
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.contains("input",'Login').click()
        cy.get('.inventory_list .inventory_item').each(($e1,index,$list)=>{
           var item=$e1.find('.inventory_item_name').text()
           var price=$e1.find('.inventory_item_price').text()
           
            if(item.includes('Sauce Labs Backpack'))
            {
                cy.wrap($e1).contains("button",'Add to cart').click()
                cy.wrap($e1).contains("button",'Remove').click()
                cy.wrap($e1).contains("button",'Add to cart').click()
    
            cy.get('.shopping_cart_badge').click()
            cy.get('#checkout').click()
            cy.get('#first-name').type('sam')
            cy.get("#last-name").type('jam')
            cy.get('#postal-code').type('500081')
            cy.get('#continue').click()
            //cy.get('#continue-shopping').click()
            cy.get('.inventory_item_name').then((com)=>{
                var Com=com.text()
                expect(Com).to.equal(item)
            })
            cy.get('.inventory_item_price').then((Pp)=>{
                var PP=Pp.text()
                expect(PP).to.equal(price)
            })
            cy.get('#finish').click()
            cy.get('.complete-header').should('contain','Thank you for your order!')
            }
            
            
        })
            //cy.get('.shopping_cart_badge').click()
            
            
        })
})