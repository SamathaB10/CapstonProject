/// <reference types="cypress" />
describe('web table', function(){
    it('web table',function() {
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('tr td:nth-child(2)').each(($e1,index,$list)=> {
    var te=$e1.text()
    if(te.includes('Jenkins'))
    {
        //to go next sibling price we use .next method but it only works on cy
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
            //here we not apply tect so store by using them to reslove we use then
            var p=price.text()
            //after reslove only we use text
            
            expect(p).to.equal('20')
        })
        //to get text we dnt use text mthd directly on cy to get tghat we use eq methos

    }

})
    })
})