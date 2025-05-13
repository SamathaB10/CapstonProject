/// <reference types="cypress" />
describe('task ts', function () {
    it('task tc', function () {
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        cy.get('#username').type('rahulshettyacademy')
        cy.get('#password').type('learning')
        cy.get('input[value="user"]').check()
        
        //cy.get('Student').select('Teacher')
        cy.get('select.form-control').invoke('show')
        cy.get('select.form-control').should('contain','Student')
        cy.get('#terms').click({force:true})
        cy.get('#signInBtn').click({force:true})
        cy.get('.col-lg-9 .row .card').should('have.length',4)
        cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
        //cy.get('cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')')
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
        cy.get('#country').type('Ind')
        cy.wait(7000);
        //need to give time
        cy.get('.suggestions a').each(($e1,index,$list)=>{

            var country=$e1
            //cy.log(country)
            if(country==='India')
            {
                cy.wrap($e1).click()
            }
            cy.get('.checkbox').click({force:true})
            cy.get('.ng-untouched > .btn').click({force:true})
            
        })
        


    })
})