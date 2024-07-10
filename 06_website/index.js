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