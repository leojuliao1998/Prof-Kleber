// ^ PERGUNTAS DENTRO DO VETOR
// * Dentro do vetor terão diversos objetos (estruturas com {} com dados dentro)

const perguntas = [
    {
        pergunta: "Qual linguagem é usada para deixar uma página interativa?",
        alternativas: ["HTML", "CSS", "JavaScript", "SQL"],
        correta: 2
    },
    {
        pergunta: "Qual tag HTML cria um botão?",
        alternativas: ["<button>", "<inputText>", "<click>", "<btn>"],
        correta: 0
    },
    {
        pergunta: "Qual propriedade CSS que muda a cor do texto?",
        alternativas: ["background-color", "font-size", "color", "border"],
        correta: 2
    },
    {
        pergunta: "Qual comando exibe algo no console do navegador?",
        alternativas: [
            "print()",
            "console.log()",
            "show()",
            "document.console()"
        ],
        correta: 1
    },

]

// * Pegando Tags / Elementos do HTML
const tagPergunta = document.getElementById("pergunta")
const tagAlternativas = document.getElementById("alternativas")
const tagResultado = document.getElementById("resultado")
const tagNumero = document.getElementById("numero-pergunta")

// * Variáveis de controle
let perguntaAtual = 0
let pontos = 0