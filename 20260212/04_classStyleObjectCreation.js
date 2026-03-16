
// (old) function style ie ES5
function Employee1(){
    //property
    this.id=100;
    this.name="Bob"
    //behavior
    this.displayEmployee1 = function() {
        document.write("<br/> -- Display function part of ES5 style object creation --")
        document.write("<br/> ID: " + this.id)
        document.write("<br/> Name: " + this.name)
    }
}
let emp1 = new Employee1()
emp1.displayEmployee1()




// (new) class style ie ES6
class Employee2 {
    //property
    //this.id=100 --error
    //let id = 101 --error
    //var id = 101 --error
    id=100
    name="John"
    //behavior
    displayEmployee2() {
        document.write("<br/> -- Display function part of ES6 style object creation --")
        document.write("<br/> ID: " + this.id)
        document.write("<br/> Name: " + this.name)
    }
}
let emp2 = new Employee2()
emp2.displayEmployee2();