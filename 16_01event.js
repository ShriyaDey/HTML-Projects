/*
document.getElementById("closeBtn").addEventListener('click',hideinfo)
function hideinfo(){
    sideNavBar.style.display ="block";
    mainsection.forEach(function(item){
        item.style.display="block"
        navBar.style.display ="none"
    })
    loginModel.style.display ="none"
}

document.getElementById("closebtn").addEventListener('click',openlogin) //scenario: close btn in login form.
function openlogin(){
    sideNavBar.style.display="none";
    mainsection.forEach(function(item)){
        navBar.style.display="none";

    }
    loginModel.style.display="block";
}
function openinfo(){
    sideNavBar.style.display ="block";
    mainsection.forEach(function(item){
        item.style.display="block"
    })
    loginModel.style.display ="block"
}
*/

const mainform=document.getElementById("myform");
const username=document.getElementById("nameInput");
const inputname=document.getElementById("name");

mainform.addEventListener('submit',function(e){
    e.preventDefault();
    const myUsername=username.value;
    inputname.textContent = myUsername;
    mainform.reset();
});
const userinput=document.getElementById("nameInput");
userinput.addEventListener("focus",function(event){
    event.target.style.background="pink";
})
userinput.addEventListener("blur",function(event){
    event.target.style.background="";
})

const myclr= document.getElementById("mycolors"); //fill the box with the color choosen from droopdown.
const mybox= document.getElementById("box");

myclr.addEventListener("change",function(){
    mybox.style.background = myclr.value;
})

function handleChange(){
    const mycountry= document.getElementById("country").value;
    document.getElementById("text").textContent="Selected Country:"+mycountry;
    

}