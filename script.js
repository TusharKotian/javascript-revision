// name="Tushar"
// age=21
// college="SJEC"
// Cgpa=8.49

// console.log(`Name: ${name}`)
// console.log(`Age: ${age}`)
// console.log(`College: ${college}`)
// console.log(`CGPA: ${Cgpa}`)
// console.log(`My name is ${name} and I am ${age} years old. I study in ${college} with cgpa of ${Cgpa}.`)

// let name =`Tushar`;
// let age = 21;
// let college =`SJEC`;
// let Cgpa = 8.49;
// let x;


// let a=25;
// let b=4;

// console.log(`Addition: ${a+b}`);
// console.log(`Subtraction:${a-b}`);
// console.log(`Multiplication:${a*b}`);
// console.log(`Division:${a/b}`);

// firstName="Tushar";
// lastName="Kotian";

// console.log(`Hello ${firstName} ${lastName}`)
// console.log(firstName.length + lastName.length)

// let sentence = "JavaScript is very powerful";

// (sentence.includes("powerful")) ? console.log("True") : console.log("False");
// (sentence.includes("Python")) ? console.log("True"): console.log("False");
// (sentence.includes("JavaScript")) ? console.log("True") : console.log("False");

// const prompt=require("prompt-sync")();

// const name=prompt("Enter your name: ");
// console.log(`Hello ${name.toLowerCase()}`);

// const prompt=require("prompt-sync")();

// const age=prompt("Enter your age: ");

// if(age>=18) {
//     console.log("You are eligible to vote")

// }  else{
//     console.log("You are not eligible to vote");
// } 

// const prompt=require("prompt-sync")();

// const a=prompt("Enter A: ");
// const b=prompt("Enter B: ");

// if(a>b) {
//     console.log(`${a} is greater than ${b}`);
// }else if (a<b){
//     console.log(`${b} is greater than ${a}`);
// }else{
//     console.log(`${a} is equal to ${b}`);
// }

// console.log(5 == "5");
// console.log(5 === "5");

// console.log(0 == false);
// console.log(0 === false);

// console.log(null == undefined);
// console.log(null === undefined);

// Username="Tushar";
// password="12345";

// const prompt=require("prompt-sync")();

// const inputUsername=prompt("Enter Your Username: ");
// const inputPassword=prompt("Enter your Password: ");

// if (Username==inputUsername && password==inputPassword){
//     console.log("Login Successful");
// } else{
//     console.log("Login Failed");
// }

// const prompt=require("prompt-sync")();

// const age=prompt("Enter your age : ");

// if(age<18 || age >60){
//     console.log("You are not eligible for the job");
// } else{
//     console.log("You are eligible for the job");
// }

const prompt = require("prompt-sync")();

let Units=prompt("Enter the Units consumed: ");
let bill=0;

if(Units<=100){
    bill=Units*5;
}
else if (Units>100 && Units<=200){
    bill=100*5+(Units-100)*7;
}
else if(Units > 200 && Units <= 300){
    bill=(100*5)+(100*7)+(Units-200)*10;
}
else{
    bill=(100*2)+(100*7)+(100*10)+(Units-300)*15;
}

console.log(`Total Bill: ${bill}`);

