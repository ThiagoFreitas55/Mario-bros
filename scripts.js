const form = document.querySelector(".formulario")
const masc = document.querySelector(".mascara-formulario")
const fale = document.querySelector("faleconosco")

function cliqueNoBotao(){
    form.style.left = "40%"
    form.style.transform = "translateX (-50%)"
    masc.style.visibility = "visible"
}

masc.addEventListener("click",enconder)

function enconder(){
    form.style.left = "-320px"
    masc.style.visibility = "hidden"
    

}

fale.addEventListener("click", abreform)

function  abreform(){
    fale.mostraformulario
}



