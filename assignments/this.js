/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global Object Binding -This is when you us the "this" in the global scope so the "this" is refuring to everything in the global javascript scope.
* 2. Implicit binding - This is when you use the "this" in an object/function. It refers to the object itself and uses that for the information it is recalling.
* 3. New Binding - This is when you have placed a "this" in an abject and are wanting to creat a new object with values you are given. You use the "new" before calling your constructor function and it creates a new that correlates the "this" in the constuctor object/function and gives a new oject/function with the values you give it. 
* 4. Explicit binding - This is when you use .call and .apply it 'explicitly defines the "this"' 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function Hannah(lastName){
    console.log(this)
    return lastName
}
Hannah('Tuttle')

// Principle 2

// code example for Implicit Binding
const student = {
    firstName: 'Harry',
    lastName: 'Potter',
    school: 'Hogwarts',
    choseCollege: function(collegeName) {
        return `My name is ${this.firstName} ${this.lastName} and I am currently a student at ${this.school} and I am applying too ${collegeName}!`
    }
}

console.log(student.choseCollege('Cambridge'))

// Principle 3

// code example for New Binding

function Twins(name1, name2){
    this.saying = 'Twins are awesome',
    this.firstTwin = name1
    this.secondTwin = name2
    this.overShare = function(){
        return `${this.saying} my twins are named ${this.firstTwin} and ${this.secondTwin}!`
    }
}
const twin = new Twins('Fred','George')

console.log(twin.overShare())

// Principle 4

// code example for Explicit Binding

const problems = {
    problem1: 'my brain',
    problem2: 'so much information',
    problem3: 'not enough coffee'
}

function learningToCode (){
    return `Learning to code can be difficult, some road blocks I have run into are ${this.problem1}, ${this.problem2} and ${this.problem3}.`
}

let issues = learningToCode.call(problems)
console.log(issues)

