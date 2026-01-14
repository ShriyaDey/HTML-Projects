
// DOM Manipulation in JS.

//getEkementById()
const a=document.getElementById("company");
a.innerText = "Capgemini"; //dynamically change the dataof html file without changing value in html file.
a.innerHTML = "<h1>Capgemini is MNC</h1>";
a.textContent = "Capgemini Pune Branch";

//getElementByClassName()
var abc=document.getElementsByClassName("revenue")[0];
abc.innerHTML = "<h1>Budget</h1>";

//getElementsByTagName()
const ab=document.getElementsByTagName("p");
ab.textContent = "We are Testers!!";
ab.innerHTML = "<h1>we are employees..</h1>";

for(let i=0;i<ab.length;i++){   //to change all the paragraph.
    ab[i].textContent = "we changed paragraph...";

}

//QuerySelector()
const bc=document.querySelector("#company");
bc.textContent = "Wipro";

const ad=document.querySelector(".nav-left");
ad.textContent = "Infosys"

const abd=document.querySelector("div");
abd.textContent = "IBM"

//querySelectorAll()
const bbc=document.querySelectorAll(".Sales");
for(let g=0;g<bbc.length;g++){
    bbc[g].textContent="JAVA";
}

//setAttribute()
//const xyz=document.querySelector("header").attributes.href.value;
const xyz=document.querySelector("header");
xyz.setAttribute("style","color:red;background-color:yellow");
xyz.removeAttribute("style","background-color:yellow");
console.log(xyz);
