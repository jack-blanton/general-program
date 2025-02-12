// Loops can do things you want to do multiple times in a row/until something happens
// Two types of loops: while and for loops
// While (condition){slop}
// repeats until the condition is true
let x = 0;
while(x<7){
    x++; //shorthand for x = x + 1
    console.log(x);
    
}
// one time through a loop is called iteration
// while loops go until condition turns falsy
// a do while loop always does 1 iteration while a while loop could just not do it
// do {slop} while(condition);

// for loops are a fancier while loop
// for (begin; condition; step){slop}
for(let j = 0; j<5; j++){
    console.log(j);
}

// if your condition is based on a number you should probably not use == because it might miss the number
