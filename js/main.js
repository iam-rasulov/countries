var elbtn = document.querySelector (".btn-changer")
var elBody = document.querySelector ("body")

elbtn.addEventListener("click" , function (){
    elBody.classList.toggle("bg-dark")
})