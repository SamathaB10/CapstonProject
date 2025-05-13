/// <reference types ="cypress" />
describe('calender',function(){
    it('datecheck',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        const monthNumber = "6";
        const date = "15";
        const year = "2027";
        const expectedList = [monthNumber,date,year];
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains("button",year).click();
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
        //eq is to get month 
        cy.contains("abbr",date).click();
        cy.get('.react-date-picker__inputGroup input[type="number"]').each(($e1,index)=>{
            // in esch meathd we get yeilded elem we need to resolve it
            // cy.wrap($e1).invoke('val').then((text)=>{
            //     cy.log(text)
            // 
            cy.wrap($e1).invoke('val').should('eq',expectedList[index])
            })
        })




    })


