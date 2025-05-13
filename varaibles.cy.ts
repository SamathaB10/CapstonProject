
describe('child page', function () {
    it('Test', function () {

        //with return type and vale
        // let varName : string = "sam";
        // cy.log(varName)
        //only type
        // let varNmae : string;
        // console.log(typeof(varNmae))
        // //only vale
        // let names = "Jam";
        // console.log(names)
        // //without type value
        // var nam : string
        // nam="jum"
        /////arrays
        var array1: string[] = ["sam", "jam"]
        var array2: Array<String> = ["kunnu", "bunnu"]
        //mutile data types
        var array3: Array<string | number> = ["chay", 1, "samantha"]
        for (var i = 0; i < array3.length; i++) {
            cy.wrap(array3[i])

        }
        //by using cy.log() we are unable to print array of values ...we need to use console or cy.warp
        //cy.log is used to print simple values
        /////2d Array
        // var array5:string[][]=[["kk","jj"],["sam","jam"]]
        // cy.wrap(array5)

var array6:string[][]=[["ken","kunnu"],["sam","jam"]]
//console.log(array6)...not working
for(var i=0;i<array6.length;i++)
{
    for(var j=0;j<array6.length;j++)
    {
        cy.wrap(array6[i][j])
    }
}
//tuple
var employee:[number,string,number]=[2,"sam",5]
cy.wrap("before add"+employee)
employee.push(2,"jam",7)
employee[1]="man"
cy.wrap("after  add"+employee)
//tuple array
var student:[number,string][]=[ [2,"sun"] ,[3, "moon"]]
cy.wrap(student[0])
cy.wrap(student[1])
//cy.wrap(student[1])
    })
})
