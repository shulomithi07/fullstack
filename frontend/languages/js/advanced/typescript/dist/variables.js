"use strict";
var numb = 97;
var text = 'test';
var arr = ['a', 'b', 'c'];
var numArr = [0, 1, 2];
let objj;
objj = {
    name: 'bh',
    number: 0
};
var test = (a, b) => { return a + b; };
console.log(test(9, 8));
var anytype;
function anyfunction(data) {
    console.log(data);
}
let num = [];
let numbers = [];
numbers.forEach(n => n.toFixed);
let user = [100, 'hundered'];
;
let alphabet = 98;
function calculate(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
let employee = {
    id: 0,
    name: "Shulomithi",
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
let employeee = {
    id: 0,
    name: "Shulomithi",
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
function kgToLbs(weight) {
    if (typeof (weight) == 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("hello");
    }
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = "null";
console.log(log === null || log === void 0 ? void 0 : log('a'));
//# sourceMappingURL=variables.js.map