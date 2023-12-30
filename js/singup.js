"use strict"
//*** signup form********/
let signupForm = document.getElementById("signup-form");
let signupUsername = document.getElementById("signup-username");
let signupEmail = document.getElementById("signup-email");
let signupPassword = document.getElementById("signup-password");
let validNameMessage = document.getElementById("validNameMessage")
let validEmaleMessage = document.getElementById("validEmaleMessage");
let validPasswordMessage = document.getElementById("validPasswordMessage");
let users=[];
if(localStorage.getItem("usersAccounts") != null){
    users = JSON.parse(localStorage.getItem("usersAccounts"))
} else{
    users = []
}
signupForm.addEventListener("submit", (e)=>{
 e.preventDefault();       

    if(validName() && validEmail() && validPassword())
        {
            if (isEmailExisted() == false) {
                
                let user={
                    userName:signupUsername.value,
                    userEmail:signupEmail.value,
                    userPassword:signupPassword.value
                }
                users.push(user);
               clear();
               successMessage();
               localStorage.setItem("usersAccounts", JSON.stringify(users));
               setTimeout(()=>{
                   location.replace("../index.html");
               },3000)
            }
           }else if(signupUsername.value =="" || signupEmail.value == "" || signupPassword.value == ""){
            emptyMessage();
           }
           
})

//***check if email is already in users array***/
function isEmailExisted()
{    
    for(let i = 0; i < users.length; i++)
    {

        if(users[i].userEmail == signupEmail.value)
        {
            errorMessage();
            return true
        }
    }
    return false
}
//***show success login message****/
function successMessage()
{
    swal({
        title: "Signup was Successfully",
        text: "Wait a fiew seconds!",
        icon: "success",
        button: "OK",
      });
}
//****EmailExist*******/
function errorMessage()
{
    swal({
        title: "Email already existed",
        text: "please enter another email",
        icon: "info",
        button: "OK",
      });
}
//****empty message*******/
function emptyMessage()
{
    swal({
        title: "Please fill out all input fields",
        // text: "please enter another email",
        icon: "error",
        button: "OK",
      });
}
//*****clear data******/
function clear(){
    signupUsername.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
}

//****valid name*****/

signupUsername.addEventListener("input", validName);
function validName(){
  let regux = /^[A-Z][a-z]{2,10}$/;
  let regux2 = /^[a-z]{3,6}$/;
  let regux3 = /^[A-Z]|[a-z]{1,4}/;
  let isValid = regux.test(signupUsername.value)
  let notValid2 = regux2.test(signupUsername.value)
  let notValid3 = regux3.test(signupUsername.value)
  if(isValid){
    validNameMessage.innerHTML = `<p class="text-success"><i class="fa-solid fa-check"></i></p>`
  } else if(notValid2){
    validNameMessage.innerHTML = `<p class="text-danger fw-bold">Name shuld be started capital letter</p>`;
  } else if(notValid3){
    validNameMessage.innerHTML = `<p class="text-danger fw-bold">Name shuld be included string yet from 3 char to 11 char</p>`;
  }
  return isValid
}
//****valid email****/
signupEmail.addEventListener("input", validEmail);
function validEmail(){
    let regux = /\w+@\w+\.\w+/ig;
  let regux2 = /@\w+\.\w+/ig;
  let regux3 = /\w+@\w+/ig;
  let regux5 = /\w+/ig;
  let isValid = regux.test(signupEmail.value)
  let notValid1 = regux2.test(signupEmail.value)
  let notValid2 = regux3.test(signupEmail.value)
  let notValid4 = regux5.test(signupEmail.value)
  if(isValid){
    validEmaleMessage.innerHTML = `<p class="text-success"><i class="fa-solid fa-check"></i></p>`
  } else if(notValid1){
    validEmaleMessage.innerHTML = `<p class="text-danger fw-bold">You forgot write text before ${signupEmail.value}</p>`;
  } else if(notValid2){
    validEmaleMessage.innerHTML = `<p class="text-danger fw-bold">You forgot write ".example" after ${signupEmail.value}</p>`;
  } else if(notValid4){
    validEmaleMessage.innerHTML = `<p class="text-danger fw-bold">valid email should be like this: example@example.example</p>`;
  }
  return isValid
}
//****valid password****/
signupPassword.addEventListener("input", validPassword);
function validPassword(){
    let regux = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^#*?&])[A-Za-z\d@$^!%#*?&]{8,}$/ig;
    let isValid = regux.test(signupPassword.value)
    if(isValid){
      validPasswordMessage.innerHTML = `<p class="text-success"><i class="fa-solid fa-check"></i></p>`
    } else if(!isValid){
        validPasswordMessage.innerHTML = `<p class="text-danger fw-bold">password length at least 8 char included [a-z] or [A-Z] and [!@#$%^] and [0-9]</p>`;
    }
    return isValid
}