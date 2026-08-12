let tagPeso = document.getElementById("peso")
let tagAltura = document.getElementById("altura")
let tagResultado = document.getElementById("resultado")
let tagSituacao = document.getElementById("situacao")
let tagBody = document.getElementById("body")

body = tagBody

function calcularImc(){
    let peso = Number(tagPeso.value)
    let altura = Number(tagAltura.value)

    let imc = peso / (altura * altura)

    tagResultado.innerHTML = "O resultado do seu IMC é: " + imc.toFixed(1)
        if (imc > 30){
            tagSituacao.innerHTML = ("Você está com OBESIDADE!")
            body.style.backgroundColor = "#FF7C28"
        }
        else if(imc > 25){
            tagSituacao.innerHTML = ("Você está com SOBREPESO!")
            body.style.backgroundColor = "#FFA933"
        }
        else if(imc > 18.5){
            tagSituacao.innerHTML = ("Você está com PESO NORMAL!")
            body.style.backgroundColor = "#B6DB3F"
        }
        else if(imc < 18.5){
            tagSituacao.innerHTML = ("Você está com BAIXO PESO!")
            body.style.backgroundColor = "#6DC74A"
        }
    
}