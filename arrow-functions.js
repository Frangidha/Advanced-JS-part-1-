/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
return a + b;
}
let sum = addTwoNumbers(3,5)
console.log(sum)
// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    return a + b;
    }
    let sum2 = addTwoNumbers2(5,5)
    console.log(sum2)
// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a, b) => a + b

let sum3 = addTwoNumbers3(6,5)

console.log(sum3)

// Implicit Returns
const text = message => console.log(message)

text("hello")

const sayHello = () => console.log("hello short")

sayHello();
// Returning Multiple Lines

 const returnMultipleLines = ( ) => (
   "xxxx")
console.log(returnMultipleLines)