let tagPontosPlayer = document.getElementById("pontos-jogador")
let tagPontosCPU = document.getElementById("pontos-cpu")

let pontosPlayer = 0
let pontosMaquina = 0

function jogar(jogada){
    let jogadaGuerreiro = Math.floor(Math.random() * 5)
    let jogadaMaquina = ""
    switch (jogadaGuerreiro){
        case 0:
            jogadaMaquina = "Guerreiro"
            break
        case 1:
            jogadaMaquina = "Mago"
            break
        case 2:
            jogadaMaquina = "Arqueiro"
            break
        case 3:
            jogadaMaquina = "Ladino"
            break
        case 4:
            jogadaMaquina = "Paladino"
            break
    }

    let vencedor = playerVenceu(jogada, jogadaMaquina)

    alert("Player jogou: "+ jogada + "\nMáquina jogou: " + jogadaMaquina)
    if (vencedor == "EMPATE"){
        alert ("Deu EMPATE!")
    }
    else if (vencedor == "PLAYER"){
        alert(vencedor + " venceu!")
        pontosPlayer++
    }
    else{
        alert(vencedor + " venceu!")
        pontosMaquina++
    }
    atualizarPlacar()
        finalJogo(pontosPlayer, pontosMaquina)
}

function playerVenceu(jogadaP, jogadaCPU){
    if(jogadaP == jogadaCPU){
        return "EMPATE"
    }
    else if (jogadaP == "Guerreiro" && jogadaCPU == "Arqueiro"){
        return "PLAYER"
    }
    else if (jogadaP == "Guerreiro" && jogadaCPU == "Ladino"){
        return "PLAYER"
    }
    else if (jogadaP == "Mago" && jogadaCPU == "Guerreiro"){
        return "PLAYER"
    }
    else if (jogadaP == "Mago" && jogadaCPU == "Paladino"){
        return "PLAYER"
    }
    else if (jogadaP == "Arqueiro" && jogadaCPU == "Mago"){
        return "PLAYER"
    }
    else if (jogadaP == "Arqueiro" && jogadaCPU == "Paladino"){
        return "PLAYER"
    }
    else if (jogadaP == "Ladino" && jogadaCPU == "Mago"){
        return "PLAYER"
    }
    else if (jogadaP == "Ladino" && jogadaCPU == "Arqueiro"){
        return "PLAYER"
    }
    else if (jogadaP == "Paladino" && jogadaCPU == "Guerreiro"){
        return "PLAYER"
    }
    else if (jogadaP == "Paladino" && jogadaCPU == "Ladinoo"){
        return "PLAYER"
    }
    else{
        return "MÁQUINA"
    }
}

function atualizarPlacar(){
    tagPontosPlayer.innerHTML = "Player Pontos: " + pontosPlayer
    tagPontosCPU.innerHTML = "Player Máquina: " + pontosMaquina
}

function finalJogo(){
    if (pontosPlayer == 5){
        return "PLAYER GANHOU O JOGO!"
    }
    else if(pontosMaquina == 5){
        return "MÁQUINA GANHOU O JOGO!"
    }
}