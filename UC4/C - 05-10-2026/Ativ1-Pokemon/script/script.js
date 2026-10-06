class Pokemon {
    constructor(nome, tipo, nivel, hp, ataque, defesa, poder){
        this.nome = nome
        this.tipo = tipo
        this.nivel = nivel
        this.hp = hp
        this.ataque = ataque
        this.defesa = defesa
        this.poder = poder
    }

    atacar(){
        console.log(`O pokemon ${this.nome} está atacando`)
    }

    exibirDetalhes(){
        console.log(`O pokemon ${this.nome}, do tipo ${this.tipo}, tem ${this.hp} de HP, ${this.ataque} de ataque, ${this.defesa} de defesa e seu poder é ${this.poder}.`)
    }
}
// ! =>                     nome,      tipo,  nivel, hp, ataque, defesa, poder
let pokemon1 = new Pokemon("Charizard", "Fogo e Voador", 50, 138, 104, 98, "Flamethrower")

let pokemon2 = new Pokemon("Pikachu", "Elétrico", 50, 95, 75, 60, "Thunderbolt")

let pokemon3 = new Pokemon("Gengar", "Fantasma e Venenoso", 50, 120, 85, 80, "Shadow Ball")

let pokemon4 = new Pokemon("Lucario", "Lutador e Aço", 50, 130, 130, 90, "Aura Sphere")

let pokemon5 = new Pokemon("Blastoise", "Água", 50, 139, 103, 120, "Hydro Pump")


pokemon1.atacar()
pokemon1.exibirDetalhes()
console.log("-".repeat(40))
pokemon2.atacar()
pokemon2.exibirDetalhes()
console.log("-".repeat(40))
pokemon3.atacar()
pokemon3.exibirDetalhes()
console.log("-".repeat(40))
pokemon4.atacar()
pokemon4.exibirDetalhes()
console.log("-".repeat(40))
pokemon5.atacar()
pokemon5.exibirDetalhes()
console.log("-".repeat(40))