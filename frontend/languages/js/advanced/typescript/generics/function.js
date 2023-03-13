// // This is cool 
// // Just the three dots can help you achieve the merge functionality
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// function merge(obj1:object, obj2:object):object{
//     return {...obj1, ...obj2}
// }
// let person = merge({name:"abc"},{chocolate:"dairymilk"})
// console.log(person)
// Generics with functions
// <> --> dynamic symbol
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// let person = merge({name:"abc"},'abc')
// console.log(person)
// output
// { '0': 'a', '1': 'b', '2': 'c', name: 'abc' }
var person = merge({ name: "abc" }, 1);
console.log(person);
