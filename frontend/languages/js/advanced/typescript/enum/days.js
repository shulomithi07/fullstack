// generics
// Instead of passign single datatype like number here
// use can pass <T> generic datatype which internally sees the data which we are passing and substitues all the 
// annotations with the specific type
function getRandomNumber(items) {
    var num = Math.floor(Math.random() * items.length);
    return items[num];
}
// let items = [1,2,3,4,5]
var items = ["a", "b", "c", "d", "e"];
console.log(getRandomNumber(items));
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
var fun = function (a, b, c) { };
fun(1, 2, 4);
// default parameters
var fun1 = function (a, b, c) {
    if (c === void 0) { c = 0; }
};
fun1(1, 2);
// REST parameters
// give three dots and it'll store extra given params in an array
var fun2 = function (a, b, c) {
    var d = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        d[_i - 3] = arguments[_i];
    }
    console.log(a, b, c, d);
};
console.log(fun2(1, 2, 3, 4, 5, 6, 7, 8, 95682));
// answer 1 2 3 [ 4, 5, 6, 7, 8, 95682 ]
// Union
var result;
result = "S";
function getFullName(person) {
    return person.fname;
}
// function getFullName(person:{fname:string, lname:string}):string{
//     return person.fname + person.lname
// }
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wednesday"] = 2] = "Wednesday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
})(Week || (Week = {}));
var days = Week.Monday;
console.log(days);
function isDays(week) {
    switch (week) {
        case Week.Monday:
            console.log("Monday");
            return 'monday';
    }
}
isDays(days);
