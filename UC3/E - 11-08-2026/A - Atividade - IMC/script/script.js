let tagPeso = document.getElementById("peso")
let tagAltura = document.getElementById("altura")
let tagResultado = document.getElementById("resultado")
let tagSituacao = document.getElementById("situacao")
let tagBody = document.getElementById("body")

//^ let tagBody = document.querySelector("body")
//^ Esse querySelector utiliza a tag body para funcionar e não o id=""
//* let tagBody = document.getElementById("body")
//* Já o getElementById utiliza o id="" para funcionar e não a tag

body = tagBody

function calcularImc(){
    let peso = Number(tagPeso.value)
    let altura = Number(tagAltura.value)

    let imc = peso / (altura * altura)

    if (tagPeso.value == "" || tagAltura.value == "")
        alert("Preencha os campos Peso e Altura para continuar")
        return

    tagResultado.innerHTML = "O valor do seu IMC é de: " + imc.toFixed(1)
        if (imc > 30){
            tagSituacao.innerHTML = ("Você está com OBESIDADE!")
            tagBody.style.backgroundColor = "#FF7C28"
        }
        else if(imc > 25){
            tagSituacao.innerHTML = ("Você está com SOBREPESO!")
            tagBody.style.backgroundColor = "#FFA933"
        }
        else if(imc > 18.5){
            tagSituacao.innerHTML = ("Você está com PESO NORMAL!")
            tagBody.style.backgroundColor = "#B6DB3F"
        }
        else if(imc < 18.5){
            tagSituacao.innerHTML = ("Você está com BAIXO PESO!")
            tagBody.style.backgroundColor = "#6DC74A"
        }
    
}