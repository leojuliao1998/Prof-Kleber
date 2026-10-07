class Livro{
    constructor (titulo, ano, autor, genero, preco){
        this.titulo =  titulo
        this.ano = ano
        this.autor = autor
        this.genero = genero
        this.preco = preco
    }
    
    mostrarInformacoes(){
        console.log(`Título: ${this.titulo}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Autor: ${this.autor.nome}`)
        console.log(`Gênero: ${this.genero}`)
        console.log(`Preço: ${this.preco.toFixed(2)}`)
    }
}

let livro1 = new Livro("Harry Potter e a Pedra Filosofal", 2000, autor1, "Fantasia", 70.00)
let livro2 = new Livro("Harry Potter e a Câmara Secreta", 2000, autor1, "Fantasia", 70.00)
let livro3 = new Livro("Harry Potter e o Prisioneiro de Azkaban", 2000, autor1, "Fantasia", 70.00)
let livro4 = new Livro("Harry Potter e o Cálice de Fogo", 2001, autor1, "Fantasia", 70.00)
let livro5 = new Livro("Harry Potter e a Ordem da Fênix", 2003, autor1, "Fantasia", 70.00)
let livro6 = new Livro("Harry Potter e o Enigma do Príncipe", 2005, autor1, "Fantasia", 70.00)
let livro7 = new Livro("Harry Potter e as Relíquias da Morte", 2007, autor1, "Fantasia", 70.00)

let livro8 = new Livro("Crepúsculo", 2005, autor2, "Romance", 50.00)
let livro9 = new Livro("Lua Nova", 2006, autor2, "Romance", 50.00)
let livro10 = new Livro("Eclipse", 2007, autor2, "Romance", 50.00)
let livro11 = new Livro("Amanhecer", 2008, autor2, "Romance", 50.00)

class Autor{
    constructor (nome, nacionalidade){
        this.nome = nome
        this.nacionalidade = nacionalidade
    }
}

let autor1 = new Autor("JK Rowling", "Britânica")

let autor2 = new Autor("Stephenie Meyer", "Norte Americana")

class Cliente{
    constructor (nome){
        this.nome = nome
        this.livrosComprados = []
    }
    
    livroComprado(livro){
        this.livrosComprados.push(livro)
    }

    calcularTotal(){
        let total = 0
        for (let livro of this.livrosComprados){
            total += livro.preco
        }
        return total
    }

    listarCliente(){
        console.log(`Cliente: ${this.nome}`)
        console.log(`Livros comprados:`)
        for (let livro of this.livrosComprados){
            console.log(` - ${livro.titulo} (R$ ${livro.preco.toFixed(2)})`)
        }
        console.log(`Total gasto: R$ ${this.calcularTotal().toFixed(2)}`)
    }
}

let cliente2 = new Cliente("Pedro")
let cliente3 = new Cliente("Jenifer")
let cliente4 = new Cliente("Lucio")
let cliente1 = new Cliente("Leonardo")
let cliente5 = new Cliente("Francis")

// todo => -----------------------------------------------------------------------------------------

cliente1.livroComprado(livro1)
cliente1.livroComprado(livro3)
cliente1.livroComprado(livro5)
cliente1.livroComprado(livro7)

cliente2.livroComprado(livro2)
cliente2.livroComprado(livro4)
cliente2.livroComprado(livro6)

cliente3.livroComprado(livro8)
cliente3.livroComprado(livro10)

cliente4.livroComprado(livro9)
cliente4.livroComprado(livro11)

cliente5.livroComprado(livro1)
cliente5.livroComprado(livro2)
cliente5.livroComprado(livro3)
cliente5.livroComprado(livro4)
cliente5.livroComprado(livro5)
cliente5.livroComprado(livro6)
cliente5.livroComprado(livro7)
cliente5.livroComprado(livro8)
cliente5.livroComprado(livro9)
cliente5.livroComprado(livro10)
cliente5.livroComprado(livro11)

cliente1.listarCliente()
cliente2.listarCliente()
cliente3.listarCliente()
cliente4.listarCliente()
cliente5.listarCliente()

livro1.mostrarInformacoes()