// <!-- Var we can redeclare them -->
var fruit = "banana"
console.log(fruit)
var fruit = 'orange'
console.log(fruit)

// let . it won't allow us to redecalre the variables

let citric_fruits = 'orange'
console.log(citric_fruits)
// let fruit = 'banana'
// console.log(fruit) --> this particular line throws an error
citric_fruits = 'grapes'
console.log(citric_fruits) // --> this will not throw an error because we can changes the values inside

// Const it won't allow us to change the value
const apple = 'apple'
// apple = 'banana' --> This throws an error