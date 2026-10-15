// * Aqui combinaremos duas classes

class Autor{
    // * Método Construtor - Monta o objeto
    constructor(nome, nacionalidade){
        this.nome = nome
        this.nacionalidade = nacionalidade
    }
    apresentar(){
        // * Método Apresentar - (Lembrando que funções dentro de classe são chamados de 'métodos')
        console.log("Sou o(a) autor(a) " + this.nome + " e sou " + this.nacionalidade)
    }
}

class Livro{
    constructor(titulo, ano, autor, genero){
        this.titulo = titulo
        this.ano = ano
        this.autor = autor
        this.genero = genero
    }

    monstrarInformacoes(){
        // ^ Interpolação - mostrar variável no meio da string 
        // ? Usamos acento grave (`) ao invés de aspas (´)
        // * E para mostrar variáveis usamos: ${}
        console.log(`Título: ${this.titulo}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Autor: ${this.autor.nome} - ${this.autor.nacionalidade}`)
        console.log(`Gênero: ${this.genero}`)
    }
}

class Estante{
    constructor(posicao){
        this.posicao = posicao
        this.livros = []
    }

    addLivros(livro){
        this.livros.push(livro)
    }

    listarLivros(){
        console.log("-".repeat(50))
        console.log("Livro da estante" + this.posicao)
        for (let livro of this.livros) {
            console.log(livro.titulo)
        }
    }
}

// ^ Criando objetos da classe
let autor1 = new Autor("JK Rowling", "Britânica")

let autor2 = new Autor("Brandon Sanderson", "Norte Americano")

let livro1 = new Livro("Harry Potter e a Pedra Filosofal", 2000, autor1, "Fantasia")
let livro2 = new Livro("Harry Potter e a Câmara Secreta", 2000, autor1, "Fantasia")
let livro3 = new Livro("Harry Potter e o Prisioneiro de Azkaban", 2000, autor1, "Fantasia")
let livro4 = new Livro("Harry Potter e o Cálice de Fogo", 2001, autor1, "Fantasia")
let livro5 = new Livro("Harry Potter e a Ordem da Fênix", 2003, autor1, "Fantasia")
let livro6 = new Livro("Harry Potter e o Enigma do Príncipe", 2005, autor1, "Fantasia")
let livro7 = new Livro("Harry Potter e as Relíquias da Morte", 2007, autor1, "Fantasia")
let livro8 = new Livro("O Chamado do Cuco", 2013, autor1, "Mistério")
let livro9 = new Livro("O Caminho dos Reis", 2010, autor2, "Fantasia")

let estante1 = new Estante(": A5")
let estante2 = new Estante(": B55")

estante1.addLivros(livro1)
estante1.addLivros(livro2)
estante1.addLivros(livro3)
estante1.addLivros(livro4)
estante1.addLivros(livro5)
estante1.addLivros(livro6)
estante1.addLivros(livro7)
estante1.addLivros(livro8)
estante2.addLivros(livro9)

estante1.listarLivros()
estante2.listarLivros()
console.log("-".repeat(60))

autor1.apresentar()
console.log("-".repeat(60))
autor2.apresentar()
console.log("-".repeat(60))
livro1.monstrarInformacoes()
console.log("-".repeat(60))
livro2.monstrarInformacoes()
console.log("-".repeat(60))
livro3.monstrarInformacoes()
console.log("-".repeat(60))
livro4.monstrarInformacoes()
console.log("-".repeat(60))
livro5.monstrarInformacoes()
console.log("-".repeat(60))
livro6.monstrarInformacoes()
console.log("-".repeat(60))
livro7.monstrarInformacoes()
console.log("-".repeat(60))
livro8.monstrarInformacoes()
console.log("-".repeat(60))
livro9.monstrarInformacoes()
console.log("-".repeat(60))

// ^ Acesssando atributos fora da classe

document.write(`<h1>Livro escolhido: ${livro1.titulo}</h1>`)
document.write(`<h1>Livro escolhido: ${livro2.titulo}</h1>`)
document.write(`<h1>Livro escolhido: ${livro3.titulo}</h1>`)
document.write(`<h1>Livro escolhido: ${livro4.titulo}</h1>`)
document.write(`<h1>Livro escolhido: ${livro5.titulo}</h1>`)
document.write(`<h1>Livro escolhido: ${livro6.titulo}</h1>`)
document.write(`<h1>Livro escolhido: ${livro7.titulo}</h1>`)
document.write(`<h1>Livro escolhido: ${livro8.titulo}</h1>`)
document.write(`<h1>Livro escolhido: ${livro9.titulo}</h1>`)