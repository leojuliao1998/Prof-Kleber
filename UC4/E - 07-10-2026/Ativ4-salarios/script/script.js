class Funcionario{
    constructor(nome, salarioBase){
        this.nome = nome
        this.salarioBase = salarioBase
    }
    calcularSalario(){
        return this.salarioBase
    }
}

class Gerente extends Funcionario{
    constructor(nome, salarioBase){
        super(nome, salarioBase)
    }
    calcularSalario(){
        return this.salarioBase * 1.20
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, salarioBase){
        super(nome, salarioBase)
    }
    calcularSalario(){
        return this.salarioBase * 1.10
    }
}

class Departamento{
    constructor(nome){
        this.nome = nome
        this.funcionarios = []
    }
    adicionarFuncionarios(funcionario){
        this.funcionarios.push(funcionario)
    }
    calcularTotalSalarios(){
        return this.funcionarios.reduce((total, func) => total + func.calcularSalario(), 0)
    }
    listarFuncionarios(){
        console.log(`----- Funcionários do Departamento: ${this.nome} -----`)
        this.funcionarios.forEach(func =>{
            console.log(`Nome: ${func.nome} | Salário Final: R$ ${func.calcularSalario().toFixed(2)}`)
        })
    }
}

let ti = new Departamento(`Tecnologia da Informação`)

let funcionario1 = new Gerente(`Leonardo`, 15000)
let funcionario2 = new Desenvolvedor(`Ruan`, 7000)
let funcionario3 = new Desenvolvedor(`Clara`, 7000)
let funcionario4 = new Desenvolvedor(`Rafael`, 7000)
let funcionario5 = new Desenvolvedor(`Francisco`, 7000)
let funcionario6 = new Desenvolvedor(`Geane`, 7000)

ti.adicionarFuncionarios(funcionario1)
ti.adicionarFuncionarios(funcionario2)
ti.adicionarFuncionarios(funcionario3)
ti.adicionarFuncionarios(funcionario4)
ti.adicionarFuncionarios(funcionario5)
ti.adicionarFuncionarios(funcionario6)

ti.listarFuncionarios()

console.log(`Total de salários pagos: R$${ti.calcularTotalSalarios().toFixed(2)}`)