const mychbox=document.getElementById("mychbox");
const visabtn=document.getElementById("visabtn")
const mastercartbtn=document.getElementById("mastercart")
const paypalbtn=document.getElementById("paypalbtn")
const mysubmitbtn=document.getElementById("mysbt")
const subresult=document.getElementById("subresult")
const paymentrsult=document.getElementById("paymentresult")

mysubmitbtn.onclick=function(){
    if(mychbox.checked){
        subresult.textContent=`you are subscribed !`
    }
    else{
        subresult.textContent=`you are not subscribed !`
    }
    if(visabtn.checked){
        paymentrsult.textContent=`you are paying with visa`
    }
    else if(mastercartbtn.checked){
        paymentrsult.textContent=`you are paying with mastercart`
    }
    else if(paypalbtn.checked){
         paymentrsult.textContent=`you are paying with paypal`
    }
    else{
         paymentrsult.textContent=`you must have to select a payment type`
    }
}
//++++++++++++++++++++++++++
//ternary operator ? :;
//++++++++++++++++++++++++++
//switch case same as cpp
//++++++++++++++++++++++++++
//string method

let username="   ankitnkkk"
console.log(username.charAt(0));
console.log(username.indexOf("a"));
console.log(username.lastIndexOf("n"));
console.log(username.length);

username=username.trim();
console.log(username);

username=username.toUpperCase();
console.log(username);

username=username.repeat(3);
console.log(username);

result=username.startsWith('a');
console.log(result)

result=username.endsWith('');
console.log(result);

let phnum= "123-456-789";
phnum=phnum.replaceAll("-","");
console.log(phnum);

let name="ankit";
name=name.padStart(15,"*");
console.log(name);

let k="abjs"
k=k.padEnd(15,"&");
console.log(k);

//++++++++++++++++++++++++

//string slicing = creating a substring from aportion of string 

//string.slice(start,end)

const fullname="Ankit chowdhury";
// let firstname =fullname.slice(0,2);
// let lastname =fullname.slice(4,7);
// let firstchar =fullname.slice(0,1);
// let secondchar=fullname.slice(-1);


// console.log(firstname);
// console.log(lastname);
// console.log(firstchar);
// console.log(secondchar);

let firstname = fullname.slice(0,fullname.indexOf(" "));
let lastname =fullname.slice(fullname.indexOf(" ")+1);

console.log(lastname)
console.log(firstname)

const email ="bro1@gmail.com";

let username1 =email.slice(0,email.indexOf("@"));
let extension =email.slice(email.indexOf("@")+1);

console.log(extension)
console.log(username1);

//methode chaining = chaining one methode after another in one continuos line of code

//no method chaining

let username2=window.prompt("Enter your username :");

username2=username2.trim();

let letter =username2.charAt(0);
letter=letter.toUpperCase();

let extrachar = username2.slice(1);
extrachar =extrachar.toLowerCase();

username2=letter+extrachar;

console.log(username2)

//method chaingning

username2 = username2.trim().charAt(0).toUpperCase()  + username2.trim().slice(1).toLowerCase();

console.log(username2)

//+++++++++++++++++++++++++++++++++++

//logical operators and = &&
// or = ||
//not = !


//++++++++++++++

// = assignment operator
// == comprator operator
// === strict equality operator
// != inequality operator
// !== strict equality operator

//while for dowhile 