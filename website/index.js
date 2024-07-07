// console.log(`hello world`);
// console.log(`i like pizza`);

// window.alert(`this is an alert`);
// window.alert(`i like pizza`)

//this is a comment

/*
  this is a multi line comment
*/

// document.getElementById("myh1").textContent="hello";
// document.getElementById("myp").textContent="i like pizza";


//variable =A container that stores a value behaves as if it were the value it contains

//1. declaration---> let x;
//2. assignment ---> x=100;

// let age =25;
// let price=10.99;
// let gpa =2.1;

// console.log(typeof age)
// console.log(typeof price)
// console.log(typeof gpa)
// console.log(age)
// console.log(`you are ${age} years old`)
// console.log(`the price is ${price}`)
// console.log(`your gpa is ${gpa}`);

// let firstname = "ankit"
// let favoritefood = "pizza";
// let email="ankit@gmail.com"

// console.log(typeof firstname)
// console.log(firstname)
// console.log(`your name is ${firstname}`)
// console.log(`your favorite food is ${favoritefood}`)
// console.log(`your email is ${email}`)

// let isonline ="false"
// let forsale="true"
// let isstudent="true"
// console.log(`bro is online : ${isonline}`)

// let fullname="ankit"
// let age=25;
// let isstudent=true;

// document.getElementById("p1").textContent=fullname;
// document.getElementById("p2").textContent=age;
// document.getElementById("p3").textContent=isstudent;

// document.getElementById("p1").textContent=`your name is ${fullname}`;
// document.getElementById("p2").textContent=`you are ${age} years old`;
// document.getElementById("p3").textContent=`enrolled: ${isstudent}`;

//arithmetic operators = operands(values,variables etc)
//                       operators(+ - * /)

// let student=32;

// student=student +1;
// student=student -1;
// student=student *2;
// student=student /2;
// student=student **2;
// let extrastudent = student %3
// console.log(extrastudent)

//augemented assignment operators

// student += 2;
// student -= 2;
// student *= 2;
// student /= 2;
// student **= 2;
// student %= 2;

// student++;
// student--;

// console.log(student)

/*
    operator precedence
    1.prenthesis()
    2. exponents
    3. multiplication
    4.addition and substraction
*/
// let result = 1 + 2 * 3 + 4 ** 2;
// let result = 12 % 5 + 8 /2
// let result =6/2 ** (2+5)

// console.log(result)

//how to accept user input

// 1.easy way = window prompt
// 2.professional way =html textbox

// let username;
// username=window.prompt("whats your username?");
// console.log(username);

// let username;
// document.getElementById("mysubmit").onclick= function(){
//   username=document.getElementById("mytext").value;
//   console.log(username);
// }

// document.getElementById("mysubmit").onclick= function(){
//   username=document.getElementById("mytext").value;
//   document.getElementById("myh1").textContent=`hello ${username}`
// }

//typeconversion = change the datatype of a value to another 
//                 {strings,number,booleans}

// let age =window.prompt("how old you are:")
// age+=1
// console.log(age);


// let age =window.prompt("how old you are:")
// age=Number(age);
// age+=1
// console.log(`your age is ${age} and datatype of age is `,typeof age);

// ++++++++++++++++++++++++++++++++++++++++++++++

// let x="pizza" //NaN 'number'
// let y="pizza" // pizza number
// let z="pizza" //true 'number'

// let x="0" // 0 ,number
// let y="0"  // 0 number
// let z="0" // true 'number

// let x="" //0 'number'
// let y="" // number
// let z="" // false 'number'

// let x; //NaN 'number'
// let y; // undefined number
// let z; // false 'number'

// x=Number(x);
// y=String(y);
// z=Boolean(z);

// console.log(x, typeof x)
// console.log(y, typeof x)
// console.log(z, typeof x)

//++++++++++++++++++++++++++++++++++

// const= a variable thats value cant be changed

// let pi=3.14159
// const PI=3.14159;
// let radius;
// let circumference;

// radius=window.prompt(`enter the radius of a circle`)
// radius=Number(radius)
// circumference=2*pi*radius;
// console.log(circumference)


// document.getElementById("mysubmit").onclick=function(){
//     radius=document.getElementById("mytext").value;
//     radius=Number(radius);
//     circumference=2*PI*radius;
//     document.getElementById("myh3").textContent=circumference;
// }
