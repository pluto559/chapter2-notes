const readline = require(`readline-sync`)

//1
let x = Number(readline.question("give me a number: "));
let y = Number(readline.question("give me another number: "));
let sum = (`${x+y}`);
console.log(sum);

//2
let a = Number(readline.question("give me a number: "));
let b = Number(readline.question("give me another number: "));
let difference = (`${a-b}`);
console.log(difference);

//3
let d = Number(readline.question("give me a number: "));
let e = Number(readline.question("give me another number: "));
let product = (`${d*e}`);
console.log(product);

//4
let f = Number(readline.question("give me a number: "));
let g = Number(readline.question("give me another number: "));
let quotient = (`${f/g}`);
console.log(quotient);

//5
let h = Number(readline.question("give me a number: "));
let i = Number(readline.question("give me another number: "));
let remainder = (`${h%i}`);
console.log(remainder);

//6
let name = (readline.question("Give me your fist name: "));
let last = (readline.question("Give me your last name: "));
let dad = (` Greetings ${last}, ${name}`);
console.log(dad);

//7
let lst = (readline.question("Give me your last name: "));
let title = (readline.question("Give me your title: "));
let suffix = (readline.question("Give me your suffix: "));
let less = (` Welcome ${title} ${lst}, ${suffix}`);
console.log(less);

//8
let t = (readline.question("Give me your title : "));
let lt = (readline.question("Give me your last name : "));
let sn = (readline.question("Give me your street number : "));
let sna = (readline.question("Give me your street name : "));
let s = (readline.question("Give me your state name : "));
let c = (readline.question("Give me your city name : "));
let zc = (readline.question("Give me your zip code : "));
let care= (`${t} %{lt}. /n %{sn} %{sna} /n %{c}, ${s} ${sc}`)
console.log(care)
