
describe('diffrntfunction', function(){
    it('differentfunction',function() {
        //named function
        function sum(a,b)
        {
            return a+b
        }
       cy.log(sum(5,6))
       //anonyms func
       var price=function(c,d)
       {
        return c+d
       }
       cy.log(price(10,20))
       //arrow function
       var name=(n1,n2)=>
       {
        return n1+" "+n2
       }
       name("good","morning")
       //callback function
       var fun1=(z)=>
       {
            return z(14)
       }
       var fun2=(m)=>
       {
        
       }
      // fun2(15)
       cy.log(fun1(fun2))
    })
})