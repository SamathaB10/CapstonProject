describe('Example', () => {
    it('ex', () => {
        cy.visit(`https://blazedemo.com`);
        cy.get('input[value="Find Flights"]').click();
    })
})