let heroi_1 = {
    nome: "Aragorn",
    nivel: 30,
    ataque: 45,
    defesa: 30,
    vida: 100
}

let heroi_2 = {
    nome: "Frodo",
    nivel: 15,
    ataque: 10,
    defesa: 15,
    vida: 40
}

let monstro_1 = {
    nome: "Orc Prateado",
    ataque: 50,
    defesa: 40,
    vida: 200
}

let monstro_2 = {
    nome: "Wargen",
    ataque: 25,
    defesa: 20,
    vida: 100
}

// ? A função atacar terá parâmetros
// ^ Onde independente de quem atacar (monstro ou herói) será programado a interação no ataque
// ~ O parâmetro é útil porque independente da informação ele está preparado para fazer SUA FUNÇÃO
function atacar (atacante, defensor) {
    // todo Heróis e monstros são objetos e ambos possuem o atributo "nome"
    console.log(atacante.nome + " está atacando " + defensor.nome)
    // ! Tirando a vida:
    let vidaPerdida = atacante.ataque - (defensor.defesa/2)
    console.log(defensor.nome + " perdeu " + vidaPerdida + " de vida")
    // * Subtraindo a vida do defensor
    defensor.vida -= vidaPerdida
    if (defensor.vida <= 0){
        console.log(defensor.nome + " morreu!")
    }

}

console.log("Os heróis encontraram os inimigos durante a viagem!")
console.log("Um " + monstro_1.nome + " e um " + monstro_2.nome + " surgem inesperadamente!")

// ? A função "atacar" já está pronta. Só falta organizarmos quem bateu em quem

atacar(monstro_1, heroi_2)

console.log("O " + heroi_1.nome + " ficou furioso pelo seu amigo!")

atacar(heroi_1, monstro_1)
atacar(heroi_1, monstro_1)
atacar(heroi_1, monstro_2)
