const filmes = [
    {
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9A50qaA5zV3AeyrPpiULKVAtddBnxBn47py3gWll_gjQtWiDby9TZV8sxh4VhMKptjPmi011dHeAaYhK6Ofh-LWBM18g1wudw04-SkaAp1wrkZg68NwtXvoKiPJNh4hOUq1G1Hdnp_zjn/s1600/3009257683_1_13_k3d8dxV8.gif",
        alternativas: ["Percy Jackson", "Indiana Jones", "A Casa Monstro", "Harry Potter"],
        correta: 3
    },
    {
        image: "https://deliriumnerd.com/wp-content/uploads/2023/10/coralinecreepyparents.0.jpg",
        alternativas: ["Coraline", "A Volta dos Que Não Foram", "Superman", "Resident Evil"],
        correta: 0
    },
    {
        image: "https://s2.glbimg.com/VISWYqOhB7qUxMMNrB2iEXAc7Bs=/s.glbimg.com/og/rg/f/original/2017/01/06/percy620.gif",
        alternativas: ["O Senhor dos Anéis", "Homem Aranha", "Percy Jackson", "Eragon"],
        correta: 2
    },
    {
        image: "https://i.pinimg.com/736x/ca/19/96/ca1996ff7fe278283111ba8a067119da.jpg",
        alternativas: ["Fallen", "Crepúsculo", "Sombras da Noite", "Harry Potter"],
        correta: 1
    }
]

const numero = document.getElementById ("numero-filme")
const filme = document.getElementById ("img-filme")
const alternativas = document.getElementById ("alternativas")
const resultado = document.getElementById ("resultado")
const proximo = document.getElementById ("proximo")
const imagem = document.getElementById("img-filme")

let filmeAtual = 0
let pontos = 0

function mostrarFilme(){
    let filmao = filmes[filmeAtual]

    numero.innerHTML = "Filme " + (filmeAtual + 1) + " de " + filmes.length;

    imagem.src = filmao.image

    alternativas.innerHTML = "";
    resultado.innerHTML = "";

    proximo.style.display = "none";

    for (let i = 0; i < filmao.alternativas.length; i++){
        let botao = document.createElement("button")

        botao.innerHTML = filmao.alternativas[i]

        botao.className = "alternativa"

        botao.onclick = function(){
            responder(i)
        }

        alternativas.appendChild(botao)
    }
}

function responder(resposta){
    let filmao = filmes[filmeAtual]

    if (resposta == filmao.correta){
        pontos++
        resultado.innerHTML = "✅ Resposta Correta!"
        resultado.style.color = "var(--cor-acerto)"
    }
    else{
        resultado.innerHTML = "❌ Resposta Errada!"
        resultado.style.color = "var(--cor-erro)"
    }

    let botoes = document.getElementsByClassName("alternativa")

    for (botao of botoes){
        botao.disabled = true
    }

    proximo.style.display = "block"
}

function proximoFilme(){
    filmeAtual++

    if (filmeAtual < filmes.length){
        mostrarFilme()
    }
    else {
        finalizarQuiz()
    }
}

function finalizarQuiz(){
    numero.innerHTML = "Quiz Finalizado!"
    filme.src = ""
    filme.style.display = "none"

    const textoFinal = document.getElementById("text-final")
    
    textoFinal.innerHTML = "Você acertou " + pontos + " de " + filmes.length + " filmes";
    alternativas.innerHTML = ""
    resultado.innerHTML = "🎉 Obrigado por jogar!"
    proximo.style.display = "none"
}

mostrarFilme()