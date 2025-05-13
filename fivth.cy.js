describe('page',function(){
    it('load',function(){
        cy.visit('https://www.tutorialspoint.com/index.htm')
       // cy.get('.nav ul >:nth-child(1) button[aria-controls="category"]').click()
       cy.get('.topbar > .nav-toggle').click()
       cy.get('.dropdown__toggle').click()
       cy.get('.categories-menu > :nth-child(1) > :nth-child(1) > :nth-child(2)').click()
       cy.get('.categories-menu-sections-wrapper > :nth-child(2) li').each(($e1,index,$List)=>{
        if($e1.text().includes('Java'))
        {
            cy.log("found java")
            cy.wrap($e1).invoke('show').click()
}

            
        else{
            cy.log($e1.text())
        }
       })
    })
})