/* 
A conditional statement is a "If -> Then" statement
Often they rely on comparisons
Comparisons look like math equations in like all programming languages
A < B (Is a less than b?)
A > B (Is a greater than b?)
A == B (Is a equal to b?)
A <= B (Is a less than or equal to b?)
A >= B (Is a greater than or equal to b?)
Javascript can read strings that are singular numbers and compare them with proper numbers
    (5 == "5") -> true
However, if you use === it also compares data type
    (5 === "5") -> false
If you put an ! in any of these it means NOT
    (5 != 3) -> true
You can compare strings by the first letter in them, if they're equal it goes to the next one
and then so on and so on
Greater = later in alphabet and capitals
*/
if(3 < 5){
    console.log("rizz");
}
// If statements allow you to gate codes behind conditions being true
// Other things do this but also allow you to accomplish other things like else and elif
if(7<5){
    console.log("you wrong buh!");
} else{
    console.log("ding ding ding");
}
/*
let testNumber = 6;
if(testNumber > 5){
    console.log(`${testNumber} is greater than 5`);
} else{
    if(testNumber < 5){
        console.log(`${testNumber} is less than 5`);
    } else{
        console.log(`${testNumber} is equal to 5`);
    }
*/
// This sucks because its nested and take way too much space
// Use else if
let testNumber = 5;
if(testNumber > 5){
    console.log(`${testNumber} is greater than 5`);
} else if(testNumber < 5){
    console.log(`${testNumber} is less than 5`);
} else{
    console.log(`${testNumber} is equal to 5`)
}

//0-59: F
// 60-69: D
// 70-79: C
//80-89: B
// 90-100: A
let testGrade = 85
if(testGrade < 59){
    console.log("You got an F :(");
} else if(testGrade < 70){
    console.log("You got a D :(");
} else if(testGrade < 80){
    console.log("You got a C");
} else if(testGrade < 90){
    console.log("You got a B");
} else{
    console.log("You got an A! :)");
}

// Logical Operators
// They allow you to modify or combine multiple logic statements
// AND: && , only when both statements are true
// OR: || , when one of the two statements are true
// NOT: ! , flips true/false value

//clothing selector based on weather
let temperature = 44;
let percipitation = true;

// T-shirt and shorts (above 75). T-shirt and pants (between 60 and 75)
// Long sleeve shirt and pants (above 45) Sweatshirt and pants (colder than 45
// jacket instead of shirt if precipitation
if(percipitation == true){
    if(temperature >= 75){
        console.log("You should wear a Jacket with Shorts.")
    }else if(temperature >= 60){
        console.log("You should wear a Jacket with Pants.")
    }else if(temperature >= 45){
        console.log("You should wear a Jacket with Pants.")
    }else{
        console.log("You should wear a Jacket with Pants")
    }
}else if(temperature >= 75){
    console.log("You should wear a T-Shirt with Shorts.")
}else if(temperature >= 60){
    console.log("You should wear a T-Shirt with Pants.")
}else if(temperature >= 45){
    console.log("You should wear a Long Sleeve Shirt with Pants.")
}else{
    console.log("You should wear a Sweatshirt with Pants")
}
// javascript uses truthy and falsy values
// truthy value is treated like a "true" boolean
// the following are truthy
//  true
//  any non-empty string
//  any number other than 0
//  arrays
//  functions
//  objects

// the following are falsy:
//  false
//  0 or 0n (bigint)
//  empty strings
//  null
//  undefined
//  NaN

// if you put any of these in a if("awaawfa") statement they'll read truthy or falsy and run that way

// OR finds the first truthy value
let testValue = null || 1 || false;
if(testValue){
    console.log("whaddahellbrah");
}
// if there's no truthy values, it prints the last
// && finds the first falsy value
// && has higher priority than or 
// a && b || c && d == (a and b) or (c and d)
// you can use parenthesis to specify which -> (a || b) && (c || d)
// DO NOT use && instead of if because it is brain dead and hard to read

// You can use Boolean(); and ! to turn things into boolean
// A switch can be a better alternative to a massive amount of if else statements
/* structure
switch(expression) {
    case x:
            code goes here
            break;
    case y: 
            code goes here
            break;
    case z:
            code goes here
            break;
    default:
            code goes here
            doesnt need break
}
The switch expression is evaluated
The value of the expression is compared with the values of each case
If there is a match, the associated block of code is executed
If there is no match,the default case is executed
*/
// The getDay() method returns the number between 0 and 6
// A switch can be used to turn this output into a day
let day = undefined
switch(new Date().getDay()) {
case 0: 
    day = "sunday";
    break;
case 1:
    day = "monday";
    break;
case 2:
    day = "tuesday";
    break;
case 3:
    day = "wednesday";
    break;
case 4:
    day = "thursday";
    break;
case 5:
    day = "friday";
    break;
case 6:
    day = "saturday";
    break;
default:
    console.log("Not a date");
}
console.log(day);

let age = 13
if(age>=14 && age<=90){
    console.log("1")
};
if(age<14 || age>90){
console.log("2")
};
if(!(age>=14 && age<=90)){
    console.log("3")
};
