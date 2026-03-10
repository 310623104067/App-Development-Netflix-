function signup(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

localStorage.setItem("user",JSON.stringify({email,pass}))

window.location="login.html"

}

function login(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

let user=JSON.parse(localStorage.getItem("user"))

if(user && user.email===email && user.pass===pass){

window.location="profiles.html"

}else{

alert("Invalid login")

}

}

function logout(){

localStorage.removeItem("user")

window.location="index.html"

}