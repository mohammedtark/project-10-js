let welcomeMessage = document.getElementById("welcomeMessage");
let homeLogout = document.getElementById("home-logout");
let openSetting = document.getElementById("open-setting");
let logout = document.getElementById("logout");
let userAccountsSave = JSON.parse(localStorage.getItem("user"))
//***check if user log out****/
!userAccountsSave ? location.replace("../index.html") : undefined;

//**welcome Message**/
welcomeMessage.innerHTML=`
<p>Welcome <span class="userNameInHome text-primary">${userAccountsSave}</span></p>
<p class="main-home-message">Don't forget to pray for our brothers in Palestine</p>
`
openSetting.addEventListener("click", ()=>{
    homeLogout.classList.toggle("open-to-logout")
    openSetting.classList.toggle("fa-spin")
})
logout.addEventListener("click", ()=>{
  localStorage.removeItem("user")
  successMessage();
  setTimeout(()=>{
    location.replace("../index.html");
},3000)
  
})
//**show success log out message**/
function successMessage()
{
    swal({
        title: "You have successfully logged out",
        text: "Wait a fiew seconds!",
        icon: "success",
        button: "OK",
      });
}