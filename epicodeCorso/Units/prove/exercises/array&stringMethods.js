// 1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

const let_array = (e) => {
    array = [1, 2, 3]
    if (typeof e === typeof array) {
        return true
    } else {
        return false
    }
}

let nArray = [5, 6, 8]
console.log('Es. 1 Array?' + ' ' + let_array(nArray))
let nhj = 'john'
console.log('Es. 1 Array?' + ' ' + let_array(nhj))
console.log('Es. 1 Array?' + ' ' + let_array(['john', "hello", 1458]))

// w3resource solution ->
// is_array = function(input) {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false;
//       };
//   console.log(is_array('w3resource'));
//   console.log(is_array([1, 2, 4, 0]));

// // The expression toString.call(input) === "[object Array]" is a JavaScript code snippet that checks
//  whether the value of the variable input is an array or not.

// // In JavaScript, the toString() method returns a string representing the object on which it is called.
//  When toString() is called on an array, it returns the string "[object Array]". Therefore, the expression toString.call(input)
//  returns the string representation of the object input, and "[object Array]" is
//  compared to that string to determine if input is an array.

// // If input is an array, the expression will return true. If input is not an array, the expression will return false.
// This is useful when we want to check whether a given variable contains an array or not, and can be used in conditionals
// or other logical operations in JavaScript code.


// 2. Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

const array_Clone = (e) => {
    let newArray = "";
    newArray += e
    return newArray;
}

// const array_Clone = (e) => {
//     let newArray = [...e]  spread operator (...)
//     return newArray;
// }

// or let y = Array.from(x);
// or var array_Clone = arra1 => arra1.slice(0);
// or 
let x = [1, 2, 3, 4];
console.log("Original array:")
console.log(x)
let y = x.map(i => i);
console.log("Clone of the said array:")
console.log(y)

let arr = [1, 2, 3, 4];
console.log(`Es. 2 -> ${array_Clone(arr)}`);
console.log('Es. 2 ->' + ' ' + array_Clone(arr));
let nArr = array_Clone(arr)
console.log(nArr)

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

const first = (e) => {
    return e.shift()
}

console.log('Es 3:' + ' ' + first(arr))
console.log('Es 3:' + ' ' + (first([[7, 9, 0, -2], -3])))
console.log('Es 3:' + ' ' + (first([7, 9, 0, -2], -3)))
console.log('Es 3:' + ' ' + (first([], 3)))

// w3resource solution:
// first =  function(array, n) {
//     if (array == null)
//     return void 0;
//   if (n == null)
//     return array[0];
//   if (n < 0)
//     return [];
//   return array.slice(0, n);
// };

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));


// 4. Write a JavaScript function to get the last element of an array.
//  Passing a parameter 'n' will return the last 'n' elements of the array.

const lastElement = (n) => n.pop();
console.log(`Es 4: ${lastElement(arr)}`)
let arrr = [1, 2, 3, 4]
const lastElement1 = function (array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.pop(0, n);
};
console.log(`Es 4: ${lastElement([7, 9, 0, -2])}`)


// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

let myColor = ["Red", "Green", "White", "Black"];

const concatArray = (e) => {
    return `${e[0] + '+' + e[1] + '+' + e[2] + '+' + e[3]}`;

}
// reusable functions
const joinArray = (e) => e.toString()
const concatArray2 = (e) => e.join()
const concatArray3 = (e) => e.join('+')
console.log(joinArray(myColor))
console.log(concatArray(myColor))
console.log(concatArray2(myColor))
console.log(concatArray3(myColor))
