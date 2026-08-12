//* Pegando a tag lá do HTML
//^ Aqui vamos descobrir a tag que será editada e vamos salvar a tag em uma variável
//* getElementById = "Pegue a tag pelo id "tal""
let tagBtn = document.getElementById("botao")




//^ Essa função será chamada só quando o botão for clicado!

function evento(){
    alert("Fui clicado!")
    //^ Editando a tag
    tagBtn.style.backgroundColor = "red"
}