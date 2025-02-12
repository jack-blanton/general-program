// 1:
function multiply(num1,num2){
    let x = num1 * num2;
    return x;
};
// 4:
function checkAge(age) { 
    if (age > 18) { 
         return true; 
     } else { 
         return confirm('Did parents allow you?');
}
}
checkAge(17);

function checkAge2(age) { 
    if (age > 18) { 
       return true;
} 
return confirm('Did parents allow you?');
}

checkAge2(19);

//they output the same thing
// 5:
function oneLine(age){
 age > 18 ? true : confirm("Did your parents allow you?")
}

// 6:
function lesserThan(a,b){
    if(a>b){
        console.log(b);
    } else {
        console.log(a);
    }
}
lesserThan(5,4);

// 7:
function pow(x,n){
    return x**n;
}
console.log(pow(2,3))