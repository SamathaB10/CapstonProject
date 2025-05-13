/// <reference types="Cypress" />
describe('alert testsuite',function(){
    it('alert test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="Alert"]').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str1) => {
            expect(str1).to.equal('Hello , Are you sure you want to confirm?')
        })

    })
})