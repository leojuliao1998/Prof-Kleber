let tagPontosPlayer = document.getElementById("pontos-jogador")
let tagPontosCPU = document.getElementById("pontos-cpu")

let PontosPlayer = 0
let PontosCPU = 0

function jogar(jogada){
    let jogadaGuerreiro = Math.floor(Math.random() * 5)
    let jogadaMaquina = ""
    switch (jogadaGuerreiro){
        case 0:
            joagadaMaquina = "Guerreiro"
            break
        case 1:
            joagadaMaquina = "Mago"
            break
        case 2:
            joagadaMaquina = "Arqueiro"
            break
        case 3:
            joagadaMaquina = "Ladino"
            break
        case 4:
            joagadaMaquina = "Paladino"
            break
    }

    let vencedor = PlayerVenceu(jogada, jogadaMaquina)

    alert("Player jogou: "+ jogada + "\nMáquina jogou: " + jogadaMaquina)
    if (vencedor == "EMPATE"){
        alert ("Deu EMPATE!")
    }
    else if (vencedor == "PLAYER"){
        alert(vencedor + "venceu!")
        pontosPlayer++
    }
    else{
        alert(vencedor + "venceu!")
        pontosCPU++
    }
    atualizarPLacar()
}

function playerVenceu(jogadaP, JogadaCPU){
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
    tagPontosCPU.innerHTML = "Player Máquina: " + pontosCPU
}