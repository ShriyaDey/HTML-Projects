/* 

TOPICS COVERED:
1. Functions
2. Scopes in js
3. Array methods in js
4. String methods in js
5. Loops in js

*/

//FUNCTIONS IN JS 

function apple(){ //function name
    console.log("Hello we are testers!!") //statement
}
apple(); //function calling
apple();

// SCOPE IN JS

/*
var apple = "red"; // Global scope: can be used anywhere within prgm
var orange = "yellow";
var banana = "green";

function fruit(){
    document.write(apple)
    document.write(orange)
}
document.write(banana);
fruit();

function food(){
    var y=10;  //function scope: can be accessed only inside function.
    document.write(y)
}
food();
document.write(y); // cannot access y from outside function food()

*/

// ARRAY METHODS IN JS.

// fetch elements of array.
var marks=[10,20,30,40];
console.log(marks[1]);

var marks = [[10,20,30],[40,50,60],[70,80,90],[100,110,120]]; //multidimensional array.
console.log(marks[3][1]);

// push() add one or more elements at the end of an array.

let sports = ["cricket","football"];
sports.push("tennis");
console.log(sports);
console.log(sports.length); //length of array

//pop() delete the last element from an array and return that element.
x=sports.pop();
console.log(sports);
console.log(x); //show deleted element.

//shift() //removes the first element and returns the removed element.
sports.push("tennis","basketball");
x=sports.shift();
console.log(sports);
console.log(x); // show first elemnt that is removed.

//unshift() add elements at the start of array and return that element.
sports.unshift("baseball");
console.log(sports);

//concat() combines two or more arrays.
let score =[350,20,44,150];
total=sports.concat(score);
console.log(total);

//join() concate all the elements of an array into a single string.
y=sports.join(" "); //by default it separates by ,
console.log(y);

//slice() returns a piece of array into new array.
let mynumbers=[0,1,2,3,4,5,6,7,8];
newnumbers=mynumbers.slice(0,5);
console.log(mynumbers);
console.log(newnumbers);

//splice() change the content of an array by removing or replacing the elements.
splicenum=mynumbers.splice(0,5,"hello world");
console.log(mynumbers);

//indexof() returns the first index of the element and -1 if not present.
let students=["Amir","Ajay","Anish","Aarti","Shashi","Rphit"]
console.log(students.indexOf("Shashi"));
console.log(students.indexOf("Shiv"));

//forEach() execute the provided function for each array.
students.forEach(function(item,index){
    console.log(item,index+1);
});


//STRING METHODS IN JS.

//split() split string based on the parameter passed to split function, can be converted to an array with the split() method
var sample="We are testing team";
console.log(sample.split(" "));

//trim() removes whitespace from both sides of a string
sample="    we are testers      ";
console.log(sample.trim()); //will remove the whitespaces from both ends.
console.log(sample.trimStart()); //rremoves whitespace from start
console.log(sample.trimEnd()); //removes whitespace from end.


//charAt() will return the char at index specified.
sample="Testers";
console.log(sample.charAt(2));

//toLowercase() convert it all to lowercase.
console.log(sample.toLowerCase());

//toUppercase() convert it all to uppercase.
console.log(sample.toUpperCase());

//substring() extracts a part of a string and returns the extracted part in a new string
//substring() is similar to slice() and substr(), substr() is not used in js nowadays.
var text="Welcome to Capgemini!";
var newstring=text.substring(4,10);
console.log("text:",text);
console.log("substring of text is:"+newstring);

//replace() replace the element of string with a new value.
newstring=text.replace("Capgemini","Microsoft");
console.log("replaced string:"+newstring);

text="I love cats.Cats are easy to love";
newstring=text.replaceAll("cats","dogs"); //replaces all cats with dogs within the string.
console.log("prev. string:"+text);
console.log("replaced string:"+newstring);


// LOOPS IN JS.

//for loop.
for(var a=5;a<=10;a++){ //a++ -> increment.
    console.log(a+" "+"we are testers..");
}

for(var b=10;b>=1;b--){ //b-- -> decrement
    console.log(b+" "+"we are tesrters");
}

//while loop.
let i=1;
while(i<=10){
    console.log(i+"."+"Hi, there!");
    i++;
}

//do while loop.
let f=0;
do{
    console.log(f+" "+"Hi, Jane");
    f++;
}while(f<6);
