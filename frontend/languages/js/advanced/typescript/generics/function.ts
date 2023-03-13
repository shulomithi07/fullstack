// // This is cool 
// // Just the three dots can help you achieve the merge functionality

// function merge(obj1:object, obj2:object):object{
//     return {...obj1, ...obj2}
// }


// let person = merge({name:"abc"},{chocolate:"dairymilk"})
// console.log(person)


// Generics with functions
// <> --> dynamic symbol
function merge<U,V>(obj1:U, obj2:V):U&V{
    return {...obj1, ...obj2}
}

// let person = merge({name:"abc"},'abc')
// console.log(person)
// output
// { '0': 'a', '1': 'b', '2': 'c', name: 'abc' }

let person = merge({name:"abc"},1)
console.log(person)
// output
// { name: 'abc' }