class Animal {
    constructor (nome, idade){
        this.nome = nome
        this.idade = idade
    }

    emitirSom(som){
        console.log(`O ${this.nome} emite ${som}!!!`)
    }
}

class Cachorro extends Animal{
    constructor (nome, idade, som){
        super(nome, idade)
        this.som = som
    }

    emitirSom(som){
        console.log(`O ${this.nome} emite latido!!!`)
    }
}
class Gato extends Animal{
    constructor (nome, idade, som){
        super(nome, idade)
        this.som = som
    }

    emitirSom(som){
        console.log(`O ${this.nome} emite miado!!!`)
    }
}

let Frederico = new Cachorro("Frederico", 10)
let Zayn = new Cachorro("Zayn", 8)
let Penta = new Cachorro("Penta", 6)

let Bichano = new Gato("Bichano", 7)
let Xaninho = new Gato("Xaninho", 9)
let Pretinha = new Gato("Pretinha", 5)

Frederico.emitirSom()
console.log("-".repeat(40))
Zayn.emitirSom()
console.log("-".repeat(40))
Penta.emitirSom()
console.log("-".repeat(40))
Bichano.emitirSom()
console.log("-".repeat(40))
Xaninho.emitirSom()
console.log("-".repeat(40))
Pretinha.emitirSom()
console.log("-".repeat(40))