describe('function',function(){
    it('arrayObj',function(){

        var nums : number[] = [1,2,3];
 
        var strValues : string[] = ["Test1", "Test2", "Test3"]
 
        strValues.pop()

 
        for(var i=0; i<strValues.length ; i++){
 
            cy.log(strValues[i])
        }

 
        // console.log(nums[1])
 
        cy.log(nums[1].toString())

    })
})
