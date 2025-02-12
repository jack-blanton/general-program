/*
a function is a set of instructions that you can call upon multiple times
this is useful if you need to reuse the instructions multiple times

Function name, parameters, arguments

function name(parameter1, parameter2){
code
return (sets the function to a value)
}
name(argument1, argument2);
*/
function message(a){
    console.log(a + " is my favorite animal!")
    return
}
message("a monkey");

// what happens inside a function is frequently invisible to the outside
// this is referred to as scope in programming
// local scope: inside a funtion
// global scope: the main program

let test1 = 1
let test2 = 3

function add1(num){
    test2 = test2 + 1
    return num + 1;
}
console.log(add1(test1));
console.log(add1(test1));
console.log(add1(test2));

// functions can only change global values if they're written by name
// arguments used in the function will remain unchanged
function greeting(name = "Jack"){
    console.log(`Hello ${name}!`)
}
greeting()
greeting("Jon")
// its like a preset


// anonymous funtions used if a function expects to take another function as a parameter
// function doesnt have a function name


// doesnt do anything because its not actually called
/*
function logKey(event) {
    console.log(`You pressed the "${event.key}"`)
}

this.addEventListener("keydown", logKey);
this is how we would normally do this
*/
// this.addEventListener("keydown", function (event) {
//     console.log(`You pressed ${event.key}`);
// });

//Another way to create anonymous function is arrow function syntax
// this.addEventListener("keydown", (event)=>{
//     console.log(`You pressed ${event.key}`);
// })

// scope
// let x = 1;

// function a() {
//     let y = 2;
//     output(y);
//  }

//  function b() {
//         let z = 5;
//         output(z);
//     }

// function output(value){
//     console.log(`Value = ${value}`);
// }


// output(x);
// a();
// b();
// output(y);
// output(z);
// functions can have return values which it returns to a global scope

function randomLessThan(num){
    let x = Math.floor(Math.random() * num)
    return x;
}
// This is 1-4 because its usually 0-3!
console.log(randomLessThan(4)+1)

// if you want a function to interact with something else usually you'll need a return value!
 