//1
const readline = require('readline-sync');

let answer = readline.question("Do you want to hear a joke?\nyes or no\n your answer ");
console.log(answer);
if (answer == "yes") {
    console.log(`What did the fish say when he swam into a wall?Dam`);
} else{
    console.log("its okay");
}

//2 & 3
let number = readline.question("give me a number");
if (number%6 == 0){
    console.log("divisible by 6");
} else{
    console.log("not divisible by 6");
}
if (number%3 == 0){
    console.log("divisible by 3");
} else {
    console.log("not divisible by 3");
}
if (number%4 == 0){
    console.log("divisible by 4");
} else {
    console.log("not divisible by 4");
}
if (number%6 == 0){
    console.log("divisible by 6");
} else {
    console.log("not divisible by 6");
}
// 4
let secret = Number(readline.question(" guess the secret number "));
if (secret == 15){
    console.log("you won");
} else if (secret > 15){
    console.log("your guess was to high");
} if (secret < 15){
    console.log("your guess was to low");
}

// 5 & 6
