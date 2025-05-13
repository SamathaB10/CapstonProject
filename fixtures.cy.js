//fictures help us to get data from external file which is in fixtures folder
/// <reference types="cypress" />
describe('fixtures ts',function(){
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data;
        })
    })
    it('fixtures',function(){
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        cy.get('#username').type('this.data.username')
        cy.get('#password').type('this.data.password')
        cy.get('input[value="user"]').check()
        
        //cy.get('Student').select('Teacher')
        cy.get('select.form-control').invoke('show')
        cy.get('select.form-control').should('contain','Student')
        cy.get('#terms').click({force:true})
        cy.get('#signInBtn').click({force:true})
        
    })
})