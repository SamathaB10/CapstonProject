describe('class',function(){
    it('class',function(){
        class Employee
        {
            eid:number;
            ename:string;
            constructor(eid:number,ename:string)
            {
                this.eid=eid
                this.ename=ename
            }
            display()
            {
                //to get the global varibles inside the method we need to use this is an current class object
                cy.wrap(this.eid)
                cy.wrap(this.ename)
            }
        
         


        }
        //for global varibles we can give inputs according to obj creation
    //    var emp=new Employee()
    //    emp.eid=1
    //    emp.ename="sam"
    //    var emp1=new Employee()
    //    emp1.eid=2
    //    emp1.ename="jsam"
    //    emp1.display()
    /////constuctor
    var emp=new Employee(1,"dam")
    emp.display()

    })
})