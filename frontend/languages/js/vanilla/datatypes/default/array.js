var n1 = 'a'
var n2 = 'b'
var n3 = 'c'

var names = ['a', 'b', 'c']
// console.log(names[0])

// destructuring
var [a, b, c]=names
// console.log(a)

// print values of arrays
// names.map((data)=>{
//     console.log(data)
// })

// Reverify
// fruitName = 'abc'
// var fruits = names.find( na => na === fruitName)
// console.log(fruits)

// if (fruits == null){
//     console.log("IT IS NULL")
// }


var data = names.find((z) => {
    return z === 'a'
})

console.log(data)

// This returns as a list
var fruit = names.filter((z)=>{
    return z === 'a'
})
console.log(fruit)

// This reduces the total elements to one by performing the operations in the function given 
var numbers = [10, 10, 10]
var num = numbers.reduce(func)

console.log(num)
function func(total, number){
    return total * number
}
// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2
// console.log('d')