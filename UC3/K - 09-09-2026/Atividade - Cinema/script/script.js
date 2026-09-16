let data = document.getElementById("data")
let filme = document.getElementById("filme")
let quantIngresso = document.getElementById("quantIngresso")
let combo = document.getElementById("combo")
let quantCombo = document.getElementById("quantCombo")
let resumoPedido = document.getElementById("resumoPedido")
let btn = document.getElementById("btn")

let valorIngresso = 0
let valorCombo = 0

function calculoIngresso() {
    //todo-> Cálculo da quantidade de ingressos
    if (data.value == "01" || data.value == "03" || data.value == "05"){
        valorIngresso = 32.50 * Number(quantIngresso.value)
    }
    else if (data.value == "02" || data.value == "04" || data.value == "06" || data.value == "07"){
        valorIngresso = 36 * Number(quantIngresso.value)
    }
}

function calculoCombo() {
    //todo-> Cálculo da quantidade de combos
    if (combo.value == "COMBO-005"){
        valorCombo = 15.90 * quantCombo
    }
    else if (combo.value == "COMBO-072"){
        valorCombo = 17.90 * quantCombo
    }
    else if (combo.value == "COMBO-777"){
        valorCombo = 14.90 * quantCombo
    }
    else if (combo.value == "COMBO-215"){
        valorCombo = 25.90 * quantCombo
    }
}

function calcularTotal() {
    let valorTotal = 0
    valorTotal = valorIngresso + valorCombo
    
    resumoPedido.innerHTML = "O seu filme escolhido foi " + filme.value + " com a quantidade de " + quantIngresso.value + " ingresso(s)." + "<br>" + " O combo escolhido foi o " + combo.value + " com a quantidade de " + quantCombo.value + " unidade(s)." + "<br>" + " O valor total ficou em R$ " + valorTotal.value
}

btn.addEventListener('click', calcularTotal)