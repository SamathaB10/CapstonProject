/// <reference types="cypress" />
 
describe('My checkboxes Test Suite', function(){
    it('My drop down  radio button',function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck()
        cy.get('input[type="checkbox"]').check(['option1','option2'])
        //static dropdown
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        //dynamic dd
        cy.get('input[id="autocomplete"]').type('ind')
        cy.get('.ui-menu-item div').each(($e1,index,$list) =>{
            if($e1.text()==='India')
            {
                cy.log("hoijh")
                cy.wrap($e1).click();
                cy.log("hoijhhgyefrjhj")
            }
        })
        cy.get('#autocomplete').should('have.value','India')
        //radio buttons
        cy.get('input[value="radio1"]').check().should('have.value','radio1')




    })
})