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
        valorCombo = 15.90 * Number(quantCombo.value)
        descricaoCombo = "Doritos + Refri Lata"
    }
    else if (combo.value == "COMBO-072"){
        valorCombo = 17.90 * Number(quantCombo.value)
        descricaoCombo = "Pipoca Salgada + Copo de Coca Cola"
    }
    else if (combo.value == "COMBO-777"){
        valorCombo = 14.90 * Number(quantCombo.value)
        descricaoCombo = "Pipoca Doce + Copo de Suco"
    }
    else if (combo.value == "COMBO-215"){
        valorCombo = 25.90 * Number(quantCombo.value)
        descricaoCombo = "Refil de Pipoca Salgada + 2 Recargas de Refri"
    }
    else {
        valorCombo = 0
        descricaoCombo = "Nenhum combo"
    }
}

function calcularTotal() {
    calculoIngresso()
    calculoCombo()
    let valorTotal = valorIngresso + valorCombo

    let nomeFilme = filme.options[filme.selectedIndex].text
    
    resumoPedido.innerHTML = "O seu filme escolhido foi " + nomeFilme + " com a quantidade de " + quantIngresso.value + " ingresso(s)." + "<br>" + " O combo escolhido foi o " + combo.value + " (" + descricaoCombo + ") com a quantidade de " + quantCombo.value + " unidade(s)." + "<br>" + " O valor total ficou em R$ " + valorTotal.toFixed(2) + "."
}

btn.addEventListener('click', calcularTotal)