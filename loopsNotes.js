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

let sum = 0;
let max = +prompt("Add the numbers from 1 to what?");
let now = Date.now();
console.log(now);
for (let i = 1; i <= max; i++){
    sum += i;
    if(Date.now() > now + 1000){
        console.log("you slow as hell!")
        break;
    }
}
console.log(sum);

// continue is a lighter version of break
// instead of breaking out of loop, it skips to the end of the current iteration

for (let i = 0; i < 21; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i);
}