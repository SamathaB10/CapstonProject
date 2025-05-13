describe('invisible' ,function(){
    //showing invisible elemts by invoke('show)
    //hiding visivle ele by invoke('hide')
    //and aplly assertions
    it('invisible',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('.nav-search-field').invoke('hide').should('not.be.visible')
        cy.get('#nav-flyout-accountList').invoke('show').should('be.visible')
        cy.get('#nav-al-signin').click();


    })
})