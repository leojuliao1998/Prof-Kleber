class ContaBancaria{
    constructor(agencia, cidade){
        this.agencia = agencia
        this.cidade = cidade
        this.saldo = 0
    }

    depositar(valor){
        this.saldo += valor
        console.log(`Foi depositado R$ ${valor} na conta`)
    }

    sacar(valor){
        //^ Só pode sacar se houver saldo!
        if (valor <= this.saldo){
            console.log("Saque autorizado!")
            this.saldo -= valor
            console.log(`Foi sacado R$ ${valor}`)
        }
        else{
            console.log("Saldo insuficiente!")
        }
    }

    extrato(valor){
        console.log(`Conta: ${this.agencia} - ${this.cidade}`)
        console.log(`Saldo: R$ ${this.saldo}`)
    }
}

class Cliente{
    constructor(nome, nacionalidade, idade, conta){
        this.nome = nome
        this.nacionalidade = nacionalidade
        this.idade = idade
        this.contaBancaria = conta
    }
}

let conta001 = new ContaBancaria (71, `Barretos`)
let conta002 = new ContaBancaria (89, "Colina")
let conta003 = new ContaBancaria (12, "Ibitu")

let cuca = new Cliente ("Cuca Beludo", "Espanhol", 39, conta001)
let eva = new Cliente ("Eva Dias", "Portuguesa", 22, conta002)
let deide = new Cliente ("Deide Costa", "Brasileira", 59, conta003)

// ~ Operações Bancárias
conta001.sacar(1000)
conta001.extrato()

conta002.depositar(500)
conta002.depositar(1000)
conta002.depositar(200)
conta002.extrato()