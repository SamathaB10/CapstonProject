describe('google', function () {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
 
      return false;
    });
  })
  it('first case', function () {
    cy.visit("https://www.lambdatest.com/selenium-playground/")
    cy.contains('Drag & Drop Sliders').click()
    //cy.visit("https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo")
    cy.get('input[type="range"]').eq(2).as('t')
    cy.get('@t').invoke('val', '95').trigger('change')
    cy.get('@t').invoke('val').then((v) => {
      expect(v).to.be.equal('95')
    })
  })
 
 
 
})