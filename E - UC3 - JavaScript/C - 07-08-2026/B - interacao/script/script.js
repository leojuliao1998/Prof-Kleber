//^ Descobrir tags que serão editadas
//^Salvaremos tags em variáveis

//* document == Arquivo HTML
//* getElementById() -> Peque a TAG que tenha o ID "x"

let tagTitulo = document.getElementById("titulo")
let tagCliques = document.getElementById("botao")
let tagBtnMudaTitulo = document.getElementById("mudarTitulo")

let contadorCliques = 0

//^ Para fazer com que os botões façam algo ao serem clicados, precisamos de funções
function mudarTituloH1(){
    //^tag.style = Editando o "CSS" ou Estilo daquela TAG
    tagTitulo.style.fontSize = "52px"
    tagTitulo.style.color = "red"
    tagTitulo.style.backgroundColor = "black"
}

//^ Função para o botão contador
function aumentarContador(){
    //* += => quer dizer "Peque o que já tem nele e adicione 1"
    contadorCliques += 1
    //* Editando o que está escrito dentro da TAG
    //* Editando o "content" ou "conteúdo" dela
    if (contadorCliques == 1){
        tagCliques.innerHTML = "Fui Clicado " + contadorCliques + " vez!"
    }
    else{
        tagCliques.innerHTML = "Fui clicado " + contadorCliques + " vezes!"
    }
}