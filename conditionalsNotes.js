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

let testNumber = 6
if(testNumber > 5){}