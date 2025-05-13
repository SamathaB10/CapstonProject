/// <reference types="cypress" /> 
 //another way to load child window in parent
describe('child page', function(){
    it('child page',function() {
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('.cen-align a').then(function(URL){
    const url=URL.prop('href')
    cy.visit(url)
    cy.origin(url,() =>{
        cy.get('.nav-item a[href="about.html"]').click()
        


    })
})
//to get any property  prop('hhh;)..we get the property of hh...but prop not work on cy bcz it is jquery
    })
})