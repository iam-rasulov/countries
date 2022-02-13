let elbtn = document.querySelector (".btn-changer")
let elBody = document.querySelector ("body")

elbtn.addEventListener("click" , function (){
    elBody.classList.toggle("bg-dark")
})