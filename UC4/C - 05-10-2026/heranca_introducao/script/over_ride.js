// ! => Over_ride

class Cliente{
    constructor (nome, cidade){
        this.nome = nome
        this.cidade = cidade
    }
    pagarConta(valor){
        console.log(`O cliente ${this.nome} pagou R$ ${valor}`)
    }
}

class ClienteVIP extends Cliente{
    constructor(nome, cidade, dataParticipacao){
        // ? => super() chama o constructor do pai (Cliente) e monta a base dele
        super(nome, cidade)
            this.dataParticipacao = dataParticipacao
    }
    // ! => Realizando o OverRide
    // ? => OverRide é quando pegamos um método/função do pai e 'sobreescrevemos' / 'editamos' ela aqui no filho
    // ! => Mudando seu comportamento apenas para objetos desse filhos
    pagarConta(valor){
        let valorComDesconto = valor * 0.85
        console.log(`O cliente ${this.nome} pagou R$ ${valorComDesconto}`)
    }
}

let cliente1 = new Cliente("Zeca Galhão")
let cliente2 = new ClienteVIP("Aron Bado")
let cliente3 = new Cliente("Mila Ascaro")

cliente1.pagarConta(5000)
console.log("-".repeat(40))
cliente2.pagarConta(5000)
console.log("-".repeat(40))
cliente3.pagarConta(2000)
console.log("-".repeat(40))