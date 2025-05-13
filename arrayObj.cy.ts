describe('function',function(){
    it('arrayObj',function(){

        var names:string[] = new Array("Mary","Tom","Jack","Jill")
        
        for(var i = 0;i<names.length;i++) {
        cy.log(names[i])
        }

    })
})

 