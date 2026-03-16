// create simple function style object

// function Employee() {
//     // property    - this (keyword refer to current object)
//     this.id = 100; //this keyword help to create a property in function style
//     this.name = "John";
//     // let age = 21;  //consider as local variable (not part of object)
//     this.age = 21;
//     var isActive = true;  //consider as local variable (not part of object)

//     //behavior
//     this.displayEmployee = function(){
//         document.write("<br/> Id: " + this.id)
//         document.write("<br/> Name: " + this.name)
//         document.write("<br/> Age: " + this.age)
//         document.write("<br/> isActive: " + this.isActive)



//     }

// }

// // Employee(); // it is consider as a normal function

// let emp1 = new Employee(); //object type function consider
// // document.write("<br/>*Object Creation ----------")
// // document.write("<br/> is is: "+emp1.id)
// // document.write("<br/> name is: "+emp1.name)
// // document.write("<br/> age is: "+emp1.age) 
// // document.write("<br/> isActive is: "+emp1.isActive) 
// // document.write("<br/>-------------------------------")

// let emp2 = new Employee(); //object type function consider
// // document.write("<br/> is is: "+emp2.id)
// // document.write("<br/> name is: "+emp2.name)
// // document.write("<br/> age is: "+emp2.age) 
// // document.write("<br/> isActive is: "+emp2.isActive) 
// // document.write("<br/>-------------------------------")
// document.write("<br/> Employee details")
// document.write("<br/>------ Employee 1 ------")
// emp1.displayEmployee()
// document.write("<br/>------ Employee 2 ------")
// emp2.displayEmployee()

function Employee(id,name,age){
    this.id = id;
    this.name=name;
    this.age=age;
    this.isActive=true;
    this.doj = new Date()

    this.displayEmployeeDetails = function(){
        document.write("<br/> Employee details")
        document.write("<br/> ID: " + this.id)
        document.write("<br/> Name: " + this.name)
        document.write("<br/> Age: " + this.age)
        document.write("<br/> DOJ: " + this.doj.toISOString())

    }

    this.updateAge = function(age) {
        if (age < 0){
            document.write("<br/> Age can't be -ve")

        }else{
            this.age = age;

        }
    }
}

let emp1 = new Employee(100,"John",25)
let emp2 = new Employee(101,"Charlie",21)
document.write("<br/>------ Employee 1 ------")
emp1.displayEmployeeDetails()
document.write("<br/>------ Employee 2.1 ------")
emp2.displayEmployeeDetails()
document.write("<br/>------ Employee 2.2 ------")
emp2.displayEmployeeDetails()
