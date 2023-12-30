"use strict"
//*** log in form********/ 
let loginForm = document.getElementById("login-form");
let loginEmail = document.getElementById("login-email");
let loginPassword = document.getElementById("login-password");
let validEmaleMessage = document.getElementById("validEmaleMessage");
let validPasswordMessage = document.getElementById("validPasswordMessage");
//***********************/
let userAccountsSave = JSON.parse(localStorage.getItem("usersAccounts"))

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(localStorage.getItem("usersAccounts") != null){
    for (let i = 0; i < userAccountsSave.length; i++) {
        let validEmail = loginEmail.value == userAccountsSave[i].userEmail;
        let validPassword = loginPassword.value == userAccountsSave[i].userPassword;
        if(validEmail && validPassword){
            localStorage.setItem("user", JSON.stringify(userAccountsSave[i].userName))
            successMessage();
            setTimeout(()=>{
                window.open("bages/home.html","_self")
            },3000)
        }
    }
   } else if(localStorage.getItem("usersAccounts") == null){
            errorMessage2();
        }
        
    })

//***show success login message****/
function successMessage()
{
    swal({
        title: "Success",
        text: "Wait a fiew seconds!",
        icon: "success",
        button: "OK",
      });
}

//**erro Message if local storage is empty***/

function errorMessage()
{
    swal({
        title: "email or password is incorrect",
        text: "please enter correct data",
        icon: "error",
        button: "OK",
      });
}
//**erro Message if local storage is empty***/
function errorMessage2()
{
    swal({
        title: "email not found",
        text: "please go to sign up and login again",
        icon: "error",
        button: "OK",
      });
}