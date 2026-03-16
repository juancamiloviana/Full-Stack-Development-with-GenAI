// create simple function style object

function Employee() {
    // property    - this (keyword refer to current object)
    this.id = 100; //this keyword help to create a property in function style
    this.name = "John";
    // let age = 21;  //consider as local variable (not part of object)
    this.age = 21;
    var isActive = true;  //consider as local variable (not part of object)

    //behavior
    this.displayEmployee = function(){
        document.write("<br/> Id: " + this.id)
        document.write("<br/> Name: " + this.name)
        document.write("<br/> Age: " + this.age)
        document.write("<br/> isActive: " + this.isActive)



    }

}

// Employee(); // it is consider as a normal function

let emp1 = new Employee(); //object type function consider
// document.write("<br/>*Object Creation ----------")
// document.write("<br/> is is: "+emp1.id)
// document.write("<br/> name is: "+emp1.name)
// document.write("<br/> age is: "+emp1.age) 
// document.write("<br/> isActive is: "+emp1.isActive) 
// document.write("<br/>-------------------------------")

let emp2 = new Employee(); //object type function consider
// document.write("<br/> is is: "+emp2.id)
// document.write("<br/> name is: "+emp2.name)
// document.write("<br/> age is: "+emp2.age) 
// document.write("<br/> isActive is: "+emp2.isActive) 
// document.write("<br/>-------------------------------")
document.write("<br/> Employee details")
document.write("<br/>------ Employee 1 ------")
emp1.displayEmployee()
document.write("<br/>------ Employee 2 ------")
emp2.displayEmployee()