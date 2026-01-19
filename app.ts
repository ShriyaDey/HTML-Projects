
console.log("We are learning TypeScript!");

function demo(){
    var x=10;
    var y
    ;
    if (x==10){
        y=20;
        
    }
    console.log(`x=${x} y=${y}`);
}
demo(); 

/*
function Apple(){
    x=10;
    if(x==10){
        var x;  //this is called hosting. only works witth var. will give error with let and const
    }
    console.log(`x=${x});
} */

/*
function demo(){
    var x=10;
    var y;
    ;
    if (x==10){
        let y=20;   //this is called shadow
        
    }
    console.log(`x=${x} y=${y}`);
}

function demo(){
    var x=10;
    const y;
    ;
    if (x==10){
        let y=20; //const does not work in shadow,this will give error
        
    }
    console.log(`x=${x} y=${y}`);
}
*/


//DATATYPES IS TS.
/* 
1. Premitive datatype: number,string,boolean,null,undefined,bigInt
2. non premitive datatype: array,functions,objects.
*/

//number
let signed:number= -10;
let unsigned: number = 10;
let float:number= 3.14;
let double: number=4.3453232134;
let exponent: number=2e3;
let hex: number= 0xf00d;
let binary: number= 0b1010;
let octal: number =0o744;

//all will have number as typeof()'
console.log(signed);
console.log("exponent"+ exponent);

//string
let str:string="alert('we are learning testing')";
console.log(str);

let age: number=20;
let msg1:string = "you'll be "+(age+1)+" next year";
let msg2: string=`you'll be ${age} next year`;
console.log(msg1);
console.log(msg2);