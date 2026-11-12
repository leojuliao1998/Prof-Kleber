class Veiculo{
    constructor(modelo, marca){
        this.modelo = modelo
        this.marca = marca
        this.velocidade = 0
    }
    acelerar(){
        this.velocidade += 10
        console.log(`O ${this.marca} - ${this.modelo} acelerou e agora está a ${this.velocidade} km/h`)
    }
}

// ! A classe Moto é Filho/Derivado de veículo
class Moto extends Veiculo{
    constructor(modelo, marca, cilindradas){
        // ? => Já que ele é filho do veículo, as informações que o veículo controlam, são deixadas para o veículo
        //  todo => Chamamos o método constructor do pai (Veículo) com a palavra 'super'
        super (modelo, marca)
        this.cilindradas = cilindradas + "cc"
    }
    empinar(){
        console.log (`A moto ${this.marca} - ${this.modelo} está empinando`)
    }
}

class Carro extends Veiculo{
    constructor(modelo, marca, portas){
        super (modelo, marca)
        this.portas = portas
    }
    baliza(){
        console.log (`O carro ${this.marca} - ${this.modelo} está fazendo baliza`)
    }

}

// Utilizando as Classes criandoobjetos com herança

let moto1 = new Moto("Fan", "Honda", 150)
let moto2 = new Moto("CBR", "Honda", 300)

let carro1 = new Carro("Marea", "Fiat", 4)
let carro2 = new Carro("Monza", "Chevrolet", 4)

// ? Usando um método que ambos tem em comum pelo veículo
moto1.acelerar()
moto1.acelerar()
moto1.acelerar()

carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()
carro2.acelerar()

// ! => Usando métodos específicos das classes filhas

moto2.empinar()

carro1.baliza()

// ! => Dará erro: carro2.empinar()
// ! => POis o carro não possuí o método/função de empinar