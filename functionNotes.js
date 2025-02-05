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