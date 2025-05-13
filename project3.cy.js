/// <reference types="Cypress"/>
describe('web page automation', function () 
{
    it('login', function () 
    {
        cy.visit('https://automationexercise.com/')
        cy.contains('AutomationExercise')
        cy.get('a[href="/login"]').click()
        cy.get('input[type="text"]').type('Samatha')
        cy.get('input[type="email"]').eq(1).type('gunnyyiiyyyboolneni@gmail.com')
        cy.get('button[type="submit"]').eq(1).click()
        cy.get('#id_gender2').check()
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
        cy.get('b').should('have.text', 'Account Created!')
        cy.contains('a', 'Continue').click()
   
        
            //cy.visit('https://automationexercise.com/product_details/3')
           cy.get('ul li:nth-child(1) a[href="/"]').click()
            var gender="Women"
           var model="Dress"
            if(gender=='Women'&&model=='Dress')
            {
                 fun1(gender,model)
            }
            // else if(gender==='Women'&&model==='Saree')
            // {
            //     fun2(gender,model)
            // }   
            function fun1(gender,model)
            {
                cy.get('.panel-title a').eq(0).click({ force: true })
                cy.get(' a[href="/category_products/1"]').click({ force: true })
                cy.get('.productinfo p').each(($e1)=>{
                    const name=$e1.text()
                    if(name==='Sleeveless Dress')
                    {
                       cy.get('a[href="/product_details/3"]').click()
                       cy.contains('button', 'Add to cart').click()
                       cy.get('.modal-footer button').then((verify)=>{
                        const check=verify.text()
                       // cy.log(check)
                       if(check==='Continue Shopping')
                       {
                        gender='Men'
                        model="Tshirts "
                        fun2(gender,model)
                       }
                       else{
                        cy.get('.text-center u ').click({force:true})
                        cy.get('.col-sm-6 a').click()
                        cy.get('a[href="/payment"]').click()
                         cy.get('input[class="form-control"]').type('ICIC')
                        cy.get('input[name="card_number"]').type('9088700567893323')
                         cy.get('input[name="cvc"]').type('705')
                        cy.get('input[name="expiry_month"]').type('02')
                       cy.get('input[name="expiry_year"]').type('2030')
                        cy.get('#submit').click()
                        cy.get('.title  b').should('have.text','Order Placed!')
                        cy.get('a[data-qa="continue-button"]').click()
                       }
                       })
                      
                    }
                })


            }
            function fun2(gender,model)
            {
                cy.get('.panel-title a').eq(1).click({ force: true })
                cy.get(' a[href="/category_products/3"]').click({ force: true })
                cy.get('.productinfo p').each(($e1)=>{
                    const name=$e1.text()
                    if(name==='Men Tshirt')
                    {
                       cy.get('a[href="/product_details/2"]').click()
                       cy.contains('button', 'Add to cart').click()
                       cy.get('.text-center u').then((verify)=>{
                        const check1=verify.text()
                       // cy.log(check)
                       if(check1==='View Cart')
                       {
                        cy.get('.text-center u ').click({force:true})
                        cy.get('.col-sm-6 a').click({force:true})
                       
                        cy.get('a[href="/payment"]').click({force:true})
                        cy.wait(5000); 
                         cy.get('input[class="form-control"]').type('ICIC')
                        cy.get('input[name="card_number"]').type('9088700567893323')
                         cy.get('input[name="cvc"]').type('705')
                        cy.get('input[name="expiry_month"]').type('02')
                       cy.get('input[name="expiry_year"]').type('2030')
                        cy.get('#submit').click()
                        cy.get('.title  b').should('have.text','Order Placed!')
                        cy.get('a[data-qa="continue-button"]').click()
                       }
                       })
                      
                    }
                })
            }


        

         
})
})

