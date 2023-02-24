const readline = require(`readline-sync`)

//1
let answer = readLine.question("Do you want to quit Y or N: ");
while (answer != "y" && answer !="n" && answer !="YES"){
    console.log("invalid choice");
    answer = readLine.question("Try again. Enter Y or N: ");
}
console.log(`You typed ${answer}`);

//2
let a = readLine.question("Do you want to quit Y or N: ");
while (a != "Y" && a !="N" && a !="y" && a !="n"){
    console.log("invalid choice");
    answer = readLine.question("Try again. Enter Y or N: ");
}
console.log(`You typed ${answer}`);

//3
let b = readLine.question("Choose A,B, or C: ");
while (b != "A" && b !="B" && b !="C"){
    console.log("invalid choice");
    answer = readLine.question("Try again. Enter A,B, or C: ");
}
console.log(`You typed ${answer}`);

//4
let c = readLine.question("Choose a number 1,2 or 3: ");
while (c != "1" && c !="2" && c !="3"){
    console.log("invalid choice");
    answer = readLine.question("Try again. Enter 1,2 or 3: ");
}
console.log(`You typed ${answer}`);

//5
let d = readLine.question("Choose option 0 to 10: ");
while (d != "0" && d !="1" && d !="2" && d !="3" && d !="4" && d !="5" && d !="6" &&  d !="7"  d !="8"  d !="9") d !="10"{
    console.log("invalid choice");
    answer = readLine.question("Choose between option between 1 and 10: ");
}
console.log(`You typed ${answer}`);

//6
let e = readLine.question ("Give me a positive number")
while (e < 0){
    console.log("invalid choice");
}

//7
let f = readLine.question ("Give me a negative number")
while (f > 0){
    console.log("invalid choice");
}

//8
let g = readLine.question ("Give me a even number")
while (g+=2){
    console.log("invalid choice");
}

//9
let h = readLine.question("Choose betwwen option between 0 and 10 or choose between option between 20 and 30: ");
while (h != "0" && h !="1" && h !="2" && h !="3" && h !="4" && h !="5" && h !="6" &&  h !="7"  && h !="8"  h !="9") h !="10"  && h !="11"  && h !="12"  && h !="13"  && h !="14"  && h !="15"  && h !="16"  && h !="17"  && h !="18"  && h !="19"  && h !="20"  && h !="21"  && h !="22"  && h !="23"  && h !="24"  && h !="25"  && h !="26"  && h !="27"  && h !="28"  && h !="29"  && h !="30"{
    console.log("invalid choice");
    answer = readLine.question("Choose between option between 0 and 10 or between 20 and 30: ");
}
console.log(`you typed $(answer)`);
}
//10
let j = readline.question("Choose a month (1-12): ");
while (j!="1" && j!="2" && j!="3" && j!="4" && j!="5" && j!="6" && j!="7" && j!="8" && j!="9" && j!="10" && j!="11" && j!="12" && j!="13" && j!="14" && j!="15" && j!="16" && j!="17" && j!="18" && j!="19" && j!="21" && j!="22" && j!="23" && j!="24" && j!="25" && j!="26"&& j!="27" && j!="28"{
    console.log("invalid. choose a month (1-12)");
}
if (j==) {
    console.log("january has 31 days");
} else if (j==2) {
    console.log("february has 28 days");
} else if (j==2){
    console.log("march has days");
} else if (j==) {
    console.log("may has days");
} else if (j==2){
    console.log("april has days");
} else if (j==2){
    console.log()
}
