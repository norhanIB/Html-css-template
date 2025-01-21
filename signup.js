var username = document.querySelector("#username");
var usermail = document.querySelector("#usermail");
var useraddress= document.querySelector("#useraddress");
var userphone = document.querySelector("#userphone");
var nameErr = document.querySelector(".nameError");
var mailErr = document.querySelector(".mailError");
var addressErr = document.querySelector(".addressError");
var phonErr = document.querySelector(".phoneError");
var mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phonpattern =   /^(012|010|011)[0-9]{8}$/;
var gender = document.querySelector("#gender")
var genderErr = document.querySelector(".genderError");
console.log(username, usermail, useraddress, userphone);
var form = document.forms[0]
console.log(form)

form.addEventListener('submit', function(e){
    
    validationName(e);
    validationMail(e);
    validationAddress(e);
    validationPhone(e);
    validationWindow(e);
  
 
})


function validationName(e){
    if(username.value == ""){
        e.preventDefault()
        nameErr.innerText = "This field is required";
    }else if(isFinite(username.value)){
        e.preventDefault()
        username.value = "";
        nameErr.innerText = "Require characters only";
       
    }else{
        nameErr.style.display = "none";
        // username.value = "";
    }
}

function validationMail(e){
    if(usermail.value == ''){
        e.preventDefault()
        mailErr.innerText = "This Field is required"
    }else if(!mailPattern.test(usermail.value)){
        e.preventDefault()
        usermail.value = "";
        mailErr.innerText = "Please enter a vaid mail"
    }else{
        mailErr.style.display = "none"
        // usermail.value = "";
    }  
}

function validationAddress(e){
    if(useraddress.value == ""){
        e.preventDefault()
        addressErr.innerText = "This field is required";
    }else if(isFinite(useraddress.value)){
        e.preventDefault()
        useraddress.value = "";
        addressErr.innerText = "Require characters only";
      
    }else{
        addressErr.style.display = "none";
        // useraddress.value = "";
    }
}

function validationPhone(e){
    if(userphone.value == ""){
        e.preventDefault()
        phonErr.innerText = "This field is required";
    }else if(!phonpattern.test(userphone.value)){
        e.preventDefault()
        userphone.value = "";
        phonErr.innerText = "please enter valid mail";
    }
    else{
        phonErr.style.display = "none";
        // userphone.value == "";
    }
}


function validationWindow(e){
    if(username.value == "" && useraddress == "" && usermail == "" && userphone == ""){
       var interval =  setTimeout(() => {
            window.location.href = "template.html";
          }, 30000);
    }
    else{
        clearInterval(interval);
    }
}


