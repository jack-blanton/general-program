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