// generics
// Instead of passign single datatype like number here
// use can pass <T> generic datatype which internally sees the data which we are passing and substitues all the 
// annotations with the specific type

function getRandomNumber<T>(items:T[]):T{
    let num:number = Math.floor(Math.random()*items.length)
    return items[num]
}
// let items = [1,2,3,4,5]
let items = ["a", "b", "c", "d", "e"]
console.log(getRandomNumber(items))



// function getRandomNumber(items:number[]):number{
//     let num:number = Math.floor(Math.random()*items.length)
//     return items[num]
// }
// let items = [1,2,3,4,5]
// console.log(getRandomNumber(items))




// // Type casting
// // Here weare acessing the html input element in typescript with the help of type casting
// let input = document.querySelector('input["type"="text"]')as HTMLInputElement
// console.log(input.value)







// optional arguments
var fun=(a,b, c?):void=>{}
fun(1,2, 4)

// default parameters
var fun1=(a,b,c=0):void=>{}
fun1(1,2)

// REST parameters
// give three dots and it'll store extra given params in an array
var fun2=(a,b,c,...d):void =>{
    console.log(a,b,c,d)
}

console.log(fun2(1,2,3,4,5,6,7,8,95682))
// answer 1 2 3 [ 4, 5, 6, 7, 8, 95682 ]



// Union
let result:number | string;
result = "S"


// Interfaces
interface Person{
    fname:string,
    lname:string
}

function getFullName(person:Person):string{
    return person.fname
}
// function getFullName(person:{fname:string, lname:string}):string{
//     return person.fname + person.lname
// }



enum Week{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

const days: Week = Week.Monday
console.log(days)

function isDays(week:Week):string{
    switch (week){
        case Week.Monday:
            console.log("Monday")
            return 'monday'
    }
}

isDays(days)