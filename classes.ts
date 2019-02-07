class Person {
    firstName
    lastName

    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

class Programmmer extends Person {
    getFullName() {
        return "Mr Programmer " + super.getFullName()
    }
}

// var aPerson = new Person()
var aPerson : Person = new Person("poop", "skamk")
console.log(aPerson.getFullName())


var aProgrammer : Programmmer = new Programmmer("pro", "gaymer")
console.log(aProgrammer.getFullName())