//number guessing game

// const minNum=1;
// const maxNum =100;
// const answer=Math.floor(Math.random()* (maxNum -minNum +1))+minNum;

// let attempts=0;
// let guess;
// let running=true;

// while(running){
//     guess=window.prompt(`Guess a number between ${minNum} to ${maxNum}`);
//     guess=Number(guess);

//     if(isNaN(guess)){
//         window.alert(`Please enter a valid number`);
//     }
//     else if(guess<minNum || guess>maxNum){
//         window.alert(`Please enter a valid number`);
//     }
//     else{
//         attempts++;
//         if(guess<answer){
//             window.alert("too low try again")
//         }
//         else if(guess>answer){
//             window.alert("too high try again")
//         }
//         else{
//             window.alert(`hurray correct ans was ${guess}. it took you ${attempts}`)
//             running=false;
//         }
//     }

    
// }

//++++++++++++++++++++++++++++

//function in js

//function = a section of resuable code, declare 
            // code once ,use it whenever you want

function a(username , age){
    console.log(`happy birthday ${username}`)
    console.log(`your age is ${age}`)
}
a("ANkit",45);

function b(x,y){
    let ans = x+y;
    return ans
}
console.log(b(2,6));