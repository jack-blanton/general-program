// Loops can do things you want to do multiple times in a row/until something happens
// Two types of loops: while and for loops
// While (condition){slop}
// repeats until the condition is true
// let x = 0;
// while(x<7){
//     x++; //shorthand for x = x + 1
//     console.log(x);
    
// }
// one time through a loop is called iteration
// while loops go until condition turns falsy
// a do while loop always does 1 iteration while a while loop could just not do it
// do {slop} while(condition);

// for loops are a fancier while loop
// for (begin; condition; step){slop}
// for(let j = 0; j<5; j++){
//     console.log(j);
// }

// // if your condition is based on a number you should probably not use == because it might miss the number

// You can skip parts of the for loop declaration

// let i = 0
// for(; i<3; i++){
// console.log(i)
// }

// for(let i = 0; i < 3;){
// console.log(i++)
// }
// for(;;){
// this is an infine loop!!
// }
// break ends loops and advanced to the next part of the code

// let sum = 0;
// while(true){
//     let value = +prompt("enter a number")
//     if(!value){
//         break;
//     }

//     sum += value;
// }
// console.log(sum);

// let sum = 0;
// let max = +prompt("Add the numbers from 1 to what?");
// let now = Date.now();
// console.log(now);
// for (let i = 1; i <= max; i++){
//     sum += i;
//     if(Date.now() > now + 1000){
//         console.log("you slow as hell!")
//         break;
//     }
// }
// console.log(sum);

// continue is a lighter version of break
// instead of breaking out of loop, it skips to the end of the current iteration

// for (let i = 0; i < 21; i++){
//     if(i % 2 == 0){
//         continue;
//     }
//     console.log(i);
// }
// Three kinds of loops
// For, While, Do While

// Do While loop does it at least once
// break ejects loop
// continue skips the rest of the current loop

//In programming, an array is a collection of ordered values
// let arrayName = [item1, item 2, item3];
// there are 2 ways to make an empty array

// let fakearray = new Array();
// let fakearray = [];

// let fruits =["apples", "bananas", "canteloupes", "durians", "lychees"]
// console.log(fruits);
// console.log(fruits[3]);
// fruits[3] = "watermelons";
// console.log(fruits);
// fruits[5] = "strawberries"
// console.log(fruits);
// console.log(fruits.length)
// fruits[fruits.length] = "dragonfruit"
// console.log(fruits);
// let exampleArray2 = ["apple", 35, true, function () {console.log("hello is anyone in there")}, "array"]
// console.log(exampleArray2[3])

// // you can do math in arrays
// let obj2 = [3,5];
// let obj1 = [7, 11];
// let dist = Math.sqrt((obj2[0] - obj1[0])**2 + (obj2[1] - obj1[1])**2);
// console.log(dist)
let primes = [2,3,5,7,11,13,17];
// let i = 0;
// while (i < primes.length){
//     console.log(primes[i]);
//     i++;
// }
// console.log(primes.at(-1));

// .pop() finds the last element of the array, returns it and then deletes it
// console.log(primes.pop());
// console.log(primes)


// let sum = 0;
// while(primes.length > 0) {
//     sum += primes.pop();
//     console.log(primes, sum);
// }

// .push adds an element to the end of the array
let fruits = ["apple", "banana", "cantaloupe"];
fruits.push("watermelon");
console.log(fruits);

// .shift is pop but at the beginning

fruits.shift();
console.log(fruits);

// .unshift is push but at the beginning

fruits.unshift("apricot");
console.log(fruits);

fruits.push("orange","peach");
fruits.unshift("lemon", "pineapple");

console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// Methods are functions tied to a datatype
// Array.pop is a method
// If it doesn't have the parenthesis its not a method
// .At returns what's at that position .at(2)
// New Methods

// join() allows you to combine the terms of array into a string 
// let arrayForString = ["A", "B", "C", "D"]
// console.log(arrayForString.join(" gyatt ")) // inside of the parenthesis go in between the numbas

// concat() slams two johns together combining arrays
let mikesSons = ["Greg", "Peter", "Bobby"]
let carolsDaughters = ["Marcia", "Jan", "Cindy"]

console.log(mikesSons.concat(carolsDaughters))

// Splice adds new items to an array
// Slice removes items from an array

let fruity = ["apple", "orange", "banana", "kiwi"]
fruity.splice(2,0, "Mango", "Papaya")
console.log(fruity)

// splice(targetindex, remove, stufftobeadded)
// use splice to delete items from the middle of an array

// fruity.splice(3, 1)
// console.log(fruity)

// Slice returns a new array from a part of an original array

let fruitsIHate = fruity.slice(1,5)
console.log(fruitsIHate)

// Strings are like arrays in a couple ways
// "string".length mhm
//
let alpha = "abcdefghijklmnopqrstuvwxyz"

console.log(alpha.charAt(2));
console.log(alpha.at(7))  // .at allows negative indicies, while charAt doesn't

// alpha[28] -> "undefined"
// alpha.at(28) and alpha.charAt(28) -> ""

// alpha[1] = "Q";
// console.log(alpha)
// 3 ways to move part of a string
// slice(start, end)
// substring(start, end) // values less than 0 are treated as 0
// substr (start, length

let testString = "The quick brown fox jumped over the lazy dog."

let string1 = testString.slice(3,10)
let string2 = testString.substring(3, 10)
let string3 = testString.substr(3,10)

console.log(string1)
console.log(string2)
console.log(string3

// .toUpperCase
// .toLowerCase you know what this does. goes on strings

