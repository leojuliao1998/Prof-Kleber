
// ^ Primeira Ação: Definir e salvar tags em variáveis

let tagPontosPlayer = document.getElementById("pontos-jogador")
let tagPontosCPU = document.getElementById("pontos-maquina")

let pontosPlayer = 0
let pontosMaquina = 0

// ^ Função que será linkada/conectada às cartas de jogada
// * Ele recebe 'jogada' como parâmetro, pois o jogador tem 3 cartas para escolher. E cada uma é uma jogada diferente.
function jogar(jogada) {
    // ^ Jogada do CPU
    // * floor = Arredonda para baixo
    // ^ random() sorteia um número entre 0 e 1
    // * Ao multiplicar por 3 ele pode gerar um numero de 0 a 3 aleatóriamente
    let jogadaNumero = Math.floor(Math.random() * 3)

    //^ Traduzindo número para palavra
    let jogadaMaquina = ""
    switch (jogadaNumero) {
        case 0:
            jogadaMaquina = "Pedra"
            break
        case 1:
            jogadaMaquina = "Papel"
            break
        case 2:
            jogadaMaquina = "Tesoura"
            break
    }

    let vencedor = playerVenceu(jogada, jogadaMaquina)

    alert("Player jogou: " + jogada + "\nMáquina jogou: " + jogadaMaquina)
    if (vencedor == "EMPATE") {
        alert("Deu EMPATE!")
    }
    else if (vencedor == "PLAYER") {
        alert(vencedor + " venceu!")
        //^ variavel++ é o mesmo que:
        //* variavel = variavel + 1 OU variavel += 1
        pontosPlayer++
    }
    else {
        alert(vencedor + " venceu!")
        pontosMaquina++
    }
    atualizarPlacar()
}

//^ Função separada que analisa se o player venceu ou não
//* Ele recebe dois valores: Jogada do Jogador e Jogada da Máquina
//^ Parâmetros servem para que a função receba informação externa. Pois não é a função que define a jogada deles. Ela serve apenas para analisar.
function playerVenceu(jogadaP, jogadaM) {
    if (jogadaP == jogadaM) {
        return "EMPATE"
    }
    else if (jogadaP == "Pedra" && jogadaM == "Tesoura") {
        return "PLAYER"
    }
    else if (jogadaP == "Papel" && jogadaM == "Pedra") {
        return "PLAYER"
    }
    else if (jogadaP == "Tesoura" && jogadaM == "Papel") {
        return "PLAYER"
    }
    else {
        return "MÁQUINA"
    }
}

//^ Função para atualizar o placar

function atualizarPlacar() {
    //^ innerHTML edita o que está escrito no <h1>
    //^ Quando essa função é chamada ela vai lá na TAG e coloca o novo valor
    tagPontosPlayer.innerHTML = "Player Pontos: " + pontosPlayer
    tagPontosCPU.innerHTML = "Player Máquina: " + pontosMaquina
}