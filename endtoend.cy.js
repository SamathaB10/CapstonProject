describe('ete ts',function(){
    it('ete tc',function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca');
    cy.get('.products').find('.product').each(($e1,index,$list)=> {
       const item=$e1.find('h4.product-name').text()
       if(item==='Cashews - 1 Kg')
       {
        //click depricated so wrap
        cy.wrap($e1).find('.product-action button').click()
        cy.get('a.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.get('select').select('India').should('have.value','India')
    cy.get('.chkAgree').check().should('be.checked')
    cy.get('button').click()
    cy.contains('Thank you,your order has been placed successfully You'll be redirected to Home page shortly!!')

       }

    })

    })
})