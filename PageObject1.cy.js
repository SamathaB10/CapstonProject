import HomePage from "../../support/PageObject/HomePage"
import ProductPage from "../../support/PageObject/ProductPage"
import CheckOut from "../../support/PageObject/CheckOut"
/// <reference types="cypress" />
describe('My Second Test Suite', function () {
    var homepage=new HomePage()
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
           
        })
    })
        it('task tc', function () {
            cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
            const productpage=homepage.login(this.data.username,this.data.password)
            productpage.pagevalidation().should('have.length', 4)
            //to filter 2 cards from 4
            const prod = "Nokia Edge"
            const checkout=productpage.addproduct(prod)
            checkout.check()
    
            })
    
    
            })
            
           
    