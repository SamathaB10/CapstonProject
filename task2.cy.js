/// <reference types="cypress" />
//radio buttons select drop down
describe('alert testsuite',function(){
    it('alert test case',function(){
        //checkboxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       // cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkbox-example input').check(['option1','option2'])
        //static select
        cy.get('.cen-right-align  select').select('Option1')
        //dynamic

cy.get('#autocomplete').type('Ind')
cy.get('.ui-menu-item-wrapper').each(($e1,index,$list) =>{
    var coun=$e1.text()
    if(coun==='India')
    {
        cy.wrap($e1).click()
    }
    //radio buttons

    
    

})
cy.get('input[value="radio1"]').check().should('have.value','radio1')
        

    })
})