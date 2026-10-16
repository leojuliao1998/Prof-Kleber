let tagContador = document.getElementById("contador")
let = tagTitulo = document.getElementById("titulo")

let contador = 0

//^ Função que chamará o Loop
function iniciarContadorWhile(){
    //^ Loop While -> Continua repetindo enquanto a condicional for verdadeira
    //* Enquanto o contador for menor que 10 mil repita...
    while (contador < 10000){
        //^ Aumentar o contador
        contador++
        console.log(contador)
    }
}

function iniciarContadorFor(){
    //^ O loop "for" do javaScript é BEEEM diferente do Python
    //^ No corpo dele possui:
    //* 1 - A criação da variável contadora dele (Aqui se chama 'i')
    //* 2 - O limite do contador (Aqui é o 'i' < 100)
    //* 3 - De quanto em quanto ele vai subindo (Aqui é o i++)
    for (let i = 0; i < 100; i++){
        console.log("Valor de i:" + i)
    }
}

function contadorVetor(){
    //^ Vetor são variável como lista com muitos valores dentro
    let consoles = ["Atari 2600", "Nintendo", "Master System", "Intelevision", "Mega Drive", "Super Nintendo", "Wonderswan"]

    //^ Mostrando o valor de vetor. É por meio de índice
    //^ Os índices (posições) contam à partir do 0
    console.log("O 3º Console da Lista: " + consoles[2])

    //^ Mostrando a lista toda com o loop for
    for (let i=0; i <= 6; i++)
        console.log(consoles[i])
}

function trocarClasse(){
    //^ Estamos manipulando a tag acessando suas classes com "classList"
    //^ O toggle funciona como um "interruptor" de liga e desliga
    //* Se a tag NÃO tiver a classe "trocado" ele adicionado nela
    //* Se a tag JÁ tiver a classe a classe ele RETIRA dela
    tagTitulo.classList.toggle("trocado")
}