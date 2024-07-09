//random number generator

const mybtn=document.getElementById("mybtn");
const mylbl1=document.getElementById("mylbl1");
const mylbl2=document.getElementById("mylbl2");
const mylbl3=document.getElementById("mylbl3");
const min =1;
const max=6;
let randomnum1;
let randomnum2;
let randomnum3;

mybtn.onclick=function(){
    randomnum1=Math.floor((Math.random() * (max-min))+min);
    randomnum2=Math.floor((Math.random() * (max-min))+min);
    randomnum3=Math.floor((Math.random() * (max-min))+min);
    mylbl1.textContent=randomnum1;
    mylbl2.textContent=randomnum2;
    mylbl3.textContent=randomnum3;
}