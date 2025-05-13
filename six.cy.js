/// <reference types="cypress" />
describe('page', function () {
    context('720p resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            //context is used to work for overall content
            //before each is used to go to that before all
            cy.viewport(1280, 720)
        })
        
        it('res', function () {
            cy.visit("https://www.tutorialspoint.com/index.htm")
            cy.get('.dropdown__toggle').click({force:true})
           // cy.get('.categories-menu > :nth-child(1) > :nth-child(1) > [aria-selected="true"]').click()
            cy.get('.dropdown__list-wrapper ul li[aria-selected="true"]').click({force:true})
            cy.get('.categories-menu-sections-wrapper > :nth-child(3) li').each(($e1,index,$list) =>{
                const v=$e1.text()
                if(v.includes('CSS'))
                {
                    cy.log('found')
                    cy.wrap($e1).click({force:true})
                }
                // else{
                //     cy.log($e1.text())
                // }

            })
        })

    })
})