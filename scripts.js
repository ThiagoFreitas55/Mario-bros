const form = document.querySelector(".formulario")
const masc = document.querySelector(".mascara-formulario")
const fale = document.querySelector("faleconosco")
const button = document.querySelector("button")

function cliqueNoBotao(){
    form.style.left = "40%"
    form.style.transform = "translateX (-50%)"
    masc.style.visibility = "visible"
    button.style.display = "none"
}

masc.addEventListener("click",enconder)

function enconder(){
    form.style.left = "-320px"
    masc.style.visibility = "hidden"
    button.style.display = "block"
    

}

fale.addEventListener("click", abreform)

function  abreform(){
    fale.mostraformulario
    
}



