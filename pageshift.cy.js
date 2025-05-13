
 
describe('Domain chng', function(){
    it('Doamian chng',function() {
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
// cy.get('.cen-align a').click()
//by click open new tab that opens separate tab like QA page ...but in cypress tab shift is not supported to avoid that we need to use remove attr
cy.get('.cen-align a').invoke('removeAttr','target').click()
//by usuing avoid opng in new tab instead open in same tab
//but  to do operations in that page we need to do use orign method
cy.origin('https://www.qaclickacademy.com/',() => {
    //wt ever need to do int that new tab page we need to do here
    //in origin method we need to take url of next page
    cy.get('.navbar-nav >:nth-child(4) a').click()
    cy.get('.section-title h2').should('contain','QAClick Academy')

})






    })
})