describe('google', function () {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })
    it('second case', function () {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo');
        cy.get('#name').type('Samatha')
        cy.get('#inputEmail4').type('samatharaobolneni@gmail.com')
        cy.get('#inputPassword4').type('Sam@2903')
        cy.get('#company').type('delta')
        cy.get('#websitename').type('deltaweklke')
        // cy.get('#seleniumform >:nth-child(3) select').type('i')
        cy.get('#seleniumform >:nth-child(3) select option').each(($e1, index, $list) => {
            if ($e1.text() === 'India') {
                cy.wrap($e1).click({ force: true })
            }
        })
        cy.get('#inputCity').type('hyderabed')
        cy.get('#inputAddress1').type('Madhapur')
        cy.get('#inputAddress2').type('doctors colony')
        cy.get('#inputState').type('telengana')
        cy.get('#inputZip').type('500081')
        cy.contains('button', 'Submit').click()
        cy.get('.success-msg ').then((w) => {
            expect(w.text()).to.be.equal('Thanks for contacting us, we will get back to you shortly.')
        })
    })
})