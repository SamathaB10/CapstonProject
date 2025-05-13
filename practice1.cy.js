import Cart from "../../support/Practice1/Cart";
import Calculation from"../../support/Practice1/Calculation";
import Confirmation from "../../support/Practice1/Confirmation";
import Login from "../../support/Practice1/Login";
/// <reference types="cypress"/>
describe('practice ts', function () {
    it('practice tc', function () {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#')
        const login=new Login()
       const cart= login.signIn()
       const cal=cart.add()
       // cy.get('.col-lg-9 .row .card ').should('have.length', 4)
      
        //var Oprice = 0;
      const con= cal.sum1()
      con.check()
       
        


    })
})
            
    

    



