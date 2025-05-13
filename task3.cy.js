/// <reference types="cypress" />
 
describe('web table', function(){
    it('web table',function() {
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('tr td:nth-child(3)').each(($e1,index,$list) =>{
    var cost=$e1.text()
    //cy.log(cost)
    if(cost==='25')
    {
        cy.get('tr td:nth-child(3)').eq(index).prev().then(function(te) {
            cy.log(te.text())


        })
    }

    // var t=cy.get('tr td:nth-child(2)').eq(index).next()
    // t.then((T)=>{

    // })

// cy.log(price)

})



})
    })
