
// // (old) function style ie ES5
// function Employee1(){
//     //property
//     this.id=100;
//     this.name="Bob"
//     //behavior
//     this.displayEmployee1 = function() {
//         document.write("<br/> -- Display function part of ES5 style object creation --")
//         document.write("<br/> ID: " + this.id)
//         document.write("<br/> Name: " + this.name)
//     }
// }
// let emp1 = new Employee1()
// emp1.displayEmployee1()




// // (new) class style ie ES6
// class Employee2 {
//     //property
//     //this.id=100 --error
//     //let id = 101 --error
//     //var id = 101 --error
//     id=100
//     name="John"
//     //behavior
//     displayEmployee2() {
//         document.write("<br/> -- Display function part of ES6 style object creation --")
//         document.write("<br/> ID: " + this.id)
//         document.write("<br/> Name: " + this.name)
//     }
// }
// let emp2 = new Employee2()
// emp2.displayEmployee2();

// CONSTRUCTOR

// class Employee {

//     constructor(){ //DONT need to call explicityly, calls automatically when object created
//         document.write("<br/>object created")
//     }

//     display(){    //need to call explicityly
//         document.write("<br/> Display function part of employee class")
//     }

// }

// let emp1 = new Employee()
// let emp2 = new Employee()
// emp1.display()

// CONSTRUCTOR WITH PROPERTY
class Employee {

    // to do initialization for object propoerty or instance property
    constructor(id,name,age){ 
        this.name=name;
        this.age=age;
    }

    // behavior
    display(){    //need to call explicityly
        document.write("<br/> Display function part of employee class")
        document.write("<br/> ID: "+this.id)
        document.write("<br/> Name: "+this.name)
        document.write("<br/> Age: "+this.age)
    }

}

let emp1 = new Employee(100,"Bob",34)
let emp2 = new Employee(101,"Raj",36)
emp1.display()
emp2.display()
