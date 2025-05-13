/// <reference types="Cypress"/>
describe('web page automation', function ()
{
    it('web page automation', function () 
    {
        cy.visit('https://automationexercise.com/')
        cy.log(100)
        cy.contains('AutomationExercise')
        cy.get('.panel-heading h4 a ').each(($e1) => 
        {
            const value = $e1.text().trim()
            //cy.log(value)
            if (value === 'Women') 
            {
                cy.wrap($e1).click()
                cy.get(' a[href="/category_products/1"]').click({ force: true })
                cy.url().should('contain', "/category_products/1")
                cy.get('.features_items .col-sm-4').should('have.length', 3)
                cy.get('.features_items .col-sm-4').each(($e2) =>
                {
                    const name = $e2.text()
                    if (name.includes("Sleeveless Dress")) 
                    {
                        cy.get('a[href="/product_details/3"]').click()
                        cy.get('.product-information span').eq(1).invoke('text').then((text) => 
                        {
                            const cost = Number(text.split(' ')[1])
                            // cy.wrap($e2).contains()
                            cy.get('.product-information p').eq(1).then((Ia) => 
                            {
                                cy.log(Ia.text())
                                if(Ia.text().includes('Availability: In Stock'))
                                {
                                    cy.contains('button','Add to cart').click()
                                   cy.get('.modal-title ').should('have.text','Added!')
                                   cy.contains('button','Continue Shopping').click()
                                   cy.get('.text-center a').click({force:true})
                                   cy.get('.cart_price').then((fc)=>{
                                    
                                     expect(Number(fc.text().split(' ')[1])).to.equal(cost)
                                     cy.get('.disabled').then((quan)=>{
                                        cy.get('.cart_total p').then((Oc)=>{
                                            const OO=Number(Oc.text().split(' ')[1])
                                            const mul=cost*Number(quan.text())
                                           expect(OO).to.equal(mul)
                                           cy.get('.col-sm-6 a').click()
                                           cy.get('.modal-title').should('have.text','Checkout')
                                           cy.get('.text-center a').eq(0).click()
                                           cy.get('input[type="text"]').type('Samatha')
                                           cy.get('input[type="email"]').eq(1).type('swapnaargaooojbolneni@gmail.com')
                                           cy.get('button[type="submit"]').eq(1).click()
                                           cy.get('#id_gender2').check().should('be.visible')
                                           cy.get('input[type="password"]').type('Sam@2903')
                                           cy.get('#years').select('2019')
                                           cy.get('#months').select('January')
                                           cy.get('#days').select('5')
                                           cy.get('#newsletter').check().should('be.visible')
                                           cy.get('#first_name').type('Samatha')
                                           cy.get('#last_name').type('Bolneni')
                                           cy.get('#company').type('Delta Technologies')
                                           cy.get('#address1').type('Madhapur vittal rao nagar')
                                           cy.get('#country').select('India')
                                           cy.get('#state').type('Telangana')
                                           cy.get('#city').type('Hyderabad')
                                           cy.get('#zipcode').type('500081')
                                           cy.get('#mobile_number').type('7013149605')
                                           cy.get('button[data-qa="create-account"]').click()
                                           cy.get('b').should('have.text','Account Created!')
                                           cy.contains('a','Continue').click()
                                           cy.get('.nav li:nth-child(10)').should('have.text',' Logged in as Samatha')


                                        })
                                     })
                            

                                   })
                                   
                                }
                            })


                        })
                    }
                })
                
            }
        
        })

    })



})