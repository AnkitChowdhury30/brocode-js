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