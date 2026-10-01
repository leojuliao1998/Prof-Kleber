// * Classes são representações do mundo real
// ^ Servem para que um determinado "objeto" no mundo real existe no código
// ~ Muitas vezes utilizado em cadastros
// ! Não são muitos diferentes de "objetos" do JavaScript
// & Mas possuem muito mais possibilidades

class Carro {
    // todo O chamado "Método Construtor" ele é responsável por construir os objetos (Os carros cadastrados)
    constructor (marca, modelo, ano, cor){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.velocidade = 0
    }

    // todo Ação são funções!!!
    // ^ Mas aqui não usamos a palavra 'function'
    // * Funções = Métodos
    acelerar(){
        this.velocidade += 10
        console.log("O carro " + this.marca + " - " + this.modelo + " acelerou mais 10km/h e agora está a " + this.velocidade + "km/h")
        console.log("--".repeat(20))
    }
}

// * Gerando objetos da classe carro
// ^ Gerando cadastro do carro
// ~  let variável = new NomeClasse()

let carro1 = new Carro("Fiat", "Marea", 2005, "Prata")
let carro2 = new Carro("Peugeot", "206", 2003, "Preto")

// ! Mostrando o carro
console.log("Carro 1: " + carro1.marca + " - " + carro1.modelo)

// * Executando uma "Ação"

carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro1.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()