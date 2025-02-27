// 1 :
// for(let i = 0; i < 21; i++){
//     if(i % 2 == 0){
//         console.log(i)}
// }
// 2:
// let i = 0
// while(i < 3){ 
//     i = i + 1
//     alert( `number ${i}!` ); 
// }
// 3:
// let input = 0;
// while(input <= 100){
//     input = prompt("Give me a Number")
// }
// 4:
let inputs = [];
let prompter = 1;
function sumInput(){
    while(prompter !== null, prompter !== "cancel"){
        console.log(typeof(prompter))
        prompter = prompt("add a value")
        console.log(prompter)
        console.log(typeof(prompter))
        inputs.push(prompter);
    }
    console.log(prompter)
inputs.pop();
console.log(inputs)
}

sumInput();

let styles = ["Jazz", "Blues"];
styles.push("Rock-N-Roll");
console.log(styles)
styles.splice(1,1, "Classics")
console.log(styles)
console.log(styles.shift())
console.log(styles.unshift("Rap", "Reggae"))