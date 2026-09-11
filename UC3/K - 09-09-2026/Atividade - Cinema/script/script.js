let dataHoje = NewDate()
let numeroDia = dataHoje.getDay()
let diaAtual = document.getElementById("diaAtual")
let filme = document.getElementById("filme")
let quantIngresso = document.getElementById("quantIngresso")
let combo = document.getElementById("combo")
let quantCombo = document.getElementById("quantCombo")
let resumoPedido = document.getElementById("resumoPedido")

//todo-> Para aparecer o dia no site
switch (numeroDia) {
    case 1:
        day = "Segunda-Feira"
        break
    case 2:
        day = "Terça-Feira"
        break
    case 3:
        day = "Quarta-Feira"
        break
    case 4:
        day = "Quinta-Feira"
        break
    case 5:
        day = "Sexta-Feira"
        break
    case 6:
        day = "Sábado"
        break
    case 7:
        day = "Domingo"
        break
}
diaAtual.innerHTML = "Hoje é " + dataHoje

//todo-> Cálculo da quantidade de ingressos

if (day = 1 || 3 || 5){
    let valorIngresso = dataHoje * quantIngresso
}

else{
    let valorIngresso = dataHoje * quantIngresso
}









//todo-> Cálculo da quantidade de combos