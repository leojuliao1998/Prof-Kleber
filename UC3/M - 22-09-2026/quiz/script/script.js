// ^ PERGUNTAS DENTRO DO VETOR
// * Dentro do vetor terão diversos objetos (estruturas com {} com dados dentro)

const perguntas = [
    {
        pergunta1: "Qual linguagem é usada para deixar uma página interativa?",
        alternativas: ["HTML", "CSS", "JavaScript", "SQL"],
        correta: 2
    },
    {
        pergunta1: "Qual tag HTML cria um botão?",
        alternativas: ["<button>", "<inputText>", "<click>", "<btn>"],
        correta: 0
    },
    {
        pergunta1: "Qual propriedade CSS que muda a cor do texto?",
        alternativas: ["background-color", "font-size", "color", "border"],
        correta: 2
    },
    {
        pergunta1: "Qual comando exibe algo no console do navegador?",
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
const botaoProxima = document.getElementById("proxima")

// * Variáveis de controle
let perguntaAtual = 0
let pontos = 0

// * Mostrar pergunta atual
function mostrarPergunta(){
    // * A variável 'perguntaAtual' será usada pcomo indíce na lista de perguntas
    let pergunta2 = perguntas[perguntaAtual]

    // * Edita o <p> com o número da pergunta atual
    // ? Mostrando algo como "Pergunta 3 de 4"
    // * 'length' conta o total de itens que tem no vetor 'perguntas'
    // ? ';' quando se tem 2 linhas de comando é bom colocar o ';' para mostrar que o comando acabou
    tagNumero.innerText = "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;

    // * Mostrando a pergunta:
    // * pergunta.pergunta = o primeira a variável e o segundo é o 'atributo' dentro do objeto
    tagPergunta.innerHTML = pergunta2.pergunta1

    // * Zerando as alternativas e resultados
    tagAlternativas.innerHTML = "";
    tagResultado.innerHTML = "";
    // * Sumindo com o botão (Editando CSS)
    botaoProxima.style.display = "none"

    // * Criar botão para cada alternativa (com loop)
    // ^ i < perguntas.alternativas.length = enquanto a "quantidade" for menor que 4 ou o núemro máximo de alternativas dentro da pergunta
    // * i++ aumenta de 1 em 1
    for(let i = 0; i < pergunta2.alternativas.length; i++){
        // * Criar TAG
        let botao = document.createElement("button")
        // * Escrevendo dentro do botão = a alternativa da vez
        botao.innerText = pergunta2.alternativas[i]
        // * Colocar classe dentro da tag recém criada para o CSS
        botao.className = "alternativa"

        // ! Programando o botão (colocando função no click dele)
        botao.onclick = function(){
            // * Chama a função "responder" passando o nº da alternativa
            responder(i)    
        }

        tagAlternativas.appendChild(botao)
    }
}

// * Função que verifica se o jogador acertou
// ^ Ele é chamado pelo <button> de alternativa
// ! Recebe como parâmetro o número/índice daquela alternativa clicada
// ? A alternativa clicada é um índice
function responder(resposta){
    // ~ Pega a pergunta que está na  tela (pergunta atual)
    let pergunta = perguntas[perguntaAtual]

    if (resposta == pergunta.correta){
        tagResultado.innerText = "✅ Resposta Correta!"
        tagResultado.style.color = "var(--cor-acerto)"
    }
    else{
        tagResultado.innerText = "❌ Resposta Errada!"
        tagResultado.style.color = "var(--cor-erro)"
    }

    // ^ Desativando os botões das outras alternativas
    // ~ Selecionando TODOS OS BOTÕES
    let botoes =document.getElementsByClassName("alternativa")

    for (botao of botoes){
        botao.disabled = true
    }

    // ^ Fazendo o botão 'Próxima Pergunta' aparecer
    // * Por natureza ele é display: none (invisível)
    // ~ Aqui, após ele responder, mudamos o display dele
    botaoProxima.style.display = "block"
}


mostrarPergunta()