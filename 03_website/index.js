//Math = built-in object that provides a collection of properties and methods

console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045

let x=3.21;
let x1=64;
let x2=45;
let x3=-189;
let y=2;
let z;

// z=Math.round(x); //3
// z=Math.floor(x); //3
// z=Math.ceil(x); //4
// z=Math.trunc(x); // 3 -----> eliminate decimal portion
// z=Math.pow(x,y);//10.3041
// z=Math.sqrt(x1); // 8
// z=Math.log(x); //1.1662709371419244
// z=Math.sin(x2); //0.8509035245341184
// z=Math.cos(x2); // 0.5253219888177297
// z= Math.tan(x2); // 1.6197751905438615
// z=Math.abs(x3); /189
// z=Math.sign(x1); // for -ve = -1 and +ve=1 and for 0 = 0
// z=Math.max(x,x2,x3); //45
// z=Math.min(x,x2,x3) //-189

console.log(z);

//++++++++++++++++++++++++++++

//random number generator

const min =50;
const max= 100;

// let randomNum=Math.floor(Math.random() * 6) +1 ;
let randomNum=Math.floor(Math.random() * (max-min)) +min ;

console.log(randomNum)