function validationform(){
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    if(username== "" || password==""){
        alert("Please enter username and password");
        return false;

    }else{
        alert("Form submitted!! Username is:"+username+" ,Password is:"+password);
        return true;
    }
} 