var num = 97;
// This below piece of code will throw an error
// num = 'test'
var text = 'test';
// This below redeclaring will throw an error
// text = 090
var arr = ['a', 'b', 'c'];
// Error thrown Type 'number' is not assignable to type 'string'.
// arr[0] = 0
var numArr = [0, 1, 2];
// Type 'string' is not assignable to type 'number'.
// numArr[0] = 's'
var obj;
// Type 'string' is not assignable to type 'number'.ts(2322)
// variables.ts(17, 23): The expected type comes from property 'number' which is declared here on type '{ name: string; number: number; }'
obj = {
    name: '',
    number: 0
};
var test = function (a, b) { return a + b; };
// variables.ts:26:18 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// 28 console.log(test('a', 0))
// console.log(test('a', 0))
console.log(test(9, 8));
