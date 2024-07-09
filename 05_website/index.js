// if statement = if a condition is true , execute some code if not, do something else

let age=25;

if(age >= 18){
    console.log("you are old enough to enter this side");
}
else{
    console.log("you must be 18+ to enter this site");
}

let time =9;

if(time<12){
    console.log("good morning")
}
else{
    console.log("good afternoon")
}

let isstudent=true;

if(isstudent){
    console.log("You are a student");
}
else{
    console.log("you are not a student");
} 

let age1=15;
let haslicense=false;

if(age >= 18){
    console.log("You are old enough to drive");
    if(haslicense){
        console.log("you can drive in road");
    }
    else{
        console.log("you have to get licenee")
    }
}
else{
    console.log("you are not old enough to drive")
}

const myage =document.getElementById("myage");
const mysbt=document.getElementById("mysbt");
const myresult=document.getElementById("myresult");

let age3;
document.getElementById("mysbt").onclick=function(){
    age3=myage.value;
    age3=Number(age3);
    if(age3==0){
        myresult.textContent="you are just born"
    }
    else if(age3<=18){
        myresult.textContent="you are teenager"

    }
    else{
        myresult.textContent="you are adult"

    }

}