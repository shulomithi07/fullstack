var numb:number = 97
// This below piece of code will throw an error
// Type 'string' is not assignable to type 'number'.
// num = 'test'

var text:string = 'test'
// This below redeclaring will throw an error
// Type 'number' is not assignable to type 'string'.
// text = 090

var arr:string[] = ['a', 'b', 'c']
// Error thrown Type 'number' is not assignable to type 'string'.
// arr[0] = 0

var numArr:number[] = [0, 1, 2]
// Type 'string' is not assignable to type 'number'.
// numArr[0] = 's'

let objj:{name:string, number: number}
// Type 'string' is not assignable to type 'number'.ts(2322)
// variables.ts(17, 23): The expected type comes from property 'number' which is declared here on type '{ name: string; number: number; }'
objj={
    name : 'bh',
    number : 0
}                          

var test = (a:number, b:number):number =>{return a+b}
// variables.ts:26:18 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// 28 console.log(test('a', 0))
// console.log(test('a', 0))
console.log(test(9, 8))


// var anytype: any --> This implicitly assigns any type
var anytype;

// Parameter 'data' implicitly has an 'any' type.
// This is usually not allowed because we have 
// "noImplicitAny": true, in tsconfig.json This is good actually, 
// if you don't want this check you can change true to false and the red swiggly line will vanish
// function anyfunction(data){
//     console.log(data)
// }

// To avoid the red swiggly line you can annotate data with type any
function anyfunction(data:any){
    console.log(data)
}


// ARRAYS
// let numbers: any[] This could be a problem to declare an empty array 
// So for that you can annotate the type of the array at the time of declaration
let num:any = []

// As we have declared the type of the array this is a good feature which is not available in javascript
// That is this helps in code completion because intelisense knows that numbers array is of number tyoe it offers code completion
// And this boosts the productivity
let numbers: number[] = []
numbers.forEach(n => n.toFixed)


// TUPLES
// Tuple is a fixed length array where each element has its particular type
// Tuples are better suited for 2 values like a key value pair

let user:[number, string] = [100, 'hundered']
// user.push('a') --> ideally should throw an error
// there is a drawback with .push method in typescript for tuple case
// Because it will not trow an error if we try to push element to a tuple which should ideally throw an error 
// it is already a fixed set of elements with their types



// ENUM
// Its a list of related constants
// Enum is helpful to reduce writing code much example

// let a = 97
// let b = 98
// let c = 99

// instead of writing 3 individual labels we could use enum
// By using just const keyword you can reduce somuch of javascript code
// If const keyword is not used js code
// -----------------------------------
// var Letters;
// (function (Letters) {
//     Letters[Letters["a"] = 97] = "a";
//     Letters[Letters["b"] = 98] = "b";
//     Letters[Letters["c"] = 99] = "c";
// })(Letters || (Letters = {}));
// ;
// let alphabet = Letters.b;
// -----------------------------------

// with const
// let alphabet = 98; --> js code
const enum Letters {a=97, b, c};
let alphabet: Letters = Letters.b

// FUNCTIONS
// With the help of few settings in tsconfig.json
// We can be even precise like checking for unused variables
// If there is no return typr javascript always returns undefined
// We can also check if we are returning properly or not with a setting
// The variables for these in the config are
// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
// "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
// Even if the taxYear is not given in the function call it will not throw an error because we have given a default value
function calculate(income: number, taxYear = 2022): number{
    // let abc;
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.3
}


// OBJECTS
// If you don't want to change the declared variable you can give readonly as an option
// We are annotating everything that the below object would contain and make it static unlike python which is dynamic

let employee:{
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}= {
    id : 0,
    name : "Shulomithi",
    retire: (date: Date) =>{
        console.log(date)
    }
}

console.log(employee)



// ALIAS
// Basically defining the shape
// Declaring the object seperately and using it multiple times

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employeee: Employee= {
    id : 0,
    name : "Shulomithi",
    retire: (date: Date) =>{
        console.log(date)
    }
}

console.log(employee)


// UNION
function kgToLbs(weight: number | string): number{
    if(typeof(weight) == 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}

kgToLbs(10)
kgToLbs('10kg')


// INTERSECTION & is used to combine two things

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UiWidget = Draggable & Resizable

let textBox: UiWidget = {
    drag: () => {},
    resize: () => {}
}



// LITERAL TYPES
// This is basically you can assign a literal to a var|type directly rather than giving the annotation and use it later

type Quantity = 50 | 100
let quantity: Quantity = 50

type Metrics = 'cm' | 'mm'


// Null values
// If you do not annotate the var with null it will throw an error
// But if you explicitly want to accept null values you can annotate the variable with null

function greet(name: string | null){
    if (name){
        console.log(name.toUpperCase())
    }
    else{
        console.log("hello")
    }
}


// Optional Chaining

type Customer = {
    birthday : Date
}

function getCustomer(id:number): Customer | null {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1)

// This will throw an error because the function can return either null or customer
// console.log(customer.birthday)
// So to handle this

// if (customer != null){
//     console.log(customer.birthday)
// }

// If we have to add an other return type then we have to add an && condition to it. IT will become kind of messy

// To handle this kind of messy situation OPTIONAL PROPERTY ACCESS OPERATOR can come handy
// That is if we add ? before the dot it will handle the chaning things

console.log(customer?.birthday)


// OPTIONAL ELEMENT ACCESS OPERATOR
// customer?.[0]

// Optional Call
let log:any = null

log?.('a')
