//^ Para pegar os valores do <inputs> temos que descobrí-los aqui no JS

//^ Selecionamos eles pelo seu ID (Colocado na TAG)
let tagNome = document.getElementById("nome")
let tagEmail = document.getElementById("email")
let tagTelefone = document.getElementById("telefone")
let tagIdade = document.getElementById("idade")

function cadastro(){
    //^ Pegando os valores escritos nos <inputs>
    //* .value pega o valor digitado na caixa
    //^ Iniciando as variáveis como vazias
    let nome = ""
    let email = ""
    let telefone = ""
    let idade = 0

    //^ Checar se os campos estão preenchidos
    if (tagNome.value == ""){
        alert("Preencha o campo Nome!")
        //^ O return é como um "break" só que para funções
        //^ Ele PARA/INTERROMPE a função aqui
        //* .value => é o que está escrito na caixa de texto
        return
    }
    else if(tagEmail.value == ""){
        alert("Preencha o campo E-mail!")
        return
    }
    else if(tagTelefone.value == ""){
        alert("Preencha o campo Telefone")
        return
    }
    else if(tagIdade.value == 0){
        alert("Preencha o campo Idade")
        return
    }
    //todo Isso seria para fazer o alerta aparecer um atrás do outro, se o usuário não preencher nenhum campo
    //~ if (tagNome.value == ""){
    //~     alert("Preencha o campo Nome!")
    //~ }
    //~ if(tagEmail.value == ""){
    //~     alert("Preencha o campo E-mail!")
    //~ }
    //~ if(tagTelefone.value == ""){
    //~     alert("Preencha o campo Telefone")
    //~ }
    //~ if(tagIdade.value == 0){
    //~     alert("Preencha o campo Idade")
    //~     return
    //~ }

    //^ Após checar CADA CAMPO continua o cadastro (Os Returns impedirão de chegar aqui caso algum campo falhe)
    nome = tagNome.value
    email = tagEmail.value
    telefone = tagTelefone.value
    idade = Number(tagIdade.value)

    //^ querySelector é como se fosse o "getElementById" porém mais livre
    //^ Só colocando o nome dentro dos parênteses, ele pega aquela tag
    let tagBody = document.querySelector("body");

    if (idade < 18){
        alert("Não pode ser cadastrados menores de idade!")
        //^ background = none => Para remover a imagem
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "red"
    }
    else{
        alert("Cadastro realizado com sucesso!")
        tagBody.style.background = "none"
        tagBody.style.backgroundColor = "green"
    }
}