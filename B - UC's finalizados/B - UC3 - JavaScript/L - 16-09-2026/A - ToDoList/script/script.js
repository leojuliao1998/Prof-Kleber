// ^ Pegando tags iniciais

const inputTask = document.getElementById("task")
const taskList = document.getElementById("task-list")
const btnAdd = document.getElementById("btnAdd")

function addTask(){
    // *  Chegando se o nome da tarefa foi digitada
    if (inputTask.value == ""){
        alert("Você precisa escrever algo!")
    }
    else{
        // ^ Criando um <li> aqui no JS
        // * createElement = criar TAG
        let li = document.createElement("li")
        li.innerHTML = inputTask.value

        // ^ Limpando o campo do texto após de adicionado a tarefa
        inputTask.value = ""

        // ^ Criando TAG do "X" de deletar a tarefa
        // ^ spam = texto genérico
        let span = document.createElement("span")
        span.innerHTML = "x"

        // ^ Posicionando o span para dentro do <li>
        li.appendChild(span)
        
        // ^ Falta posicionar onde esse <li> novo ficará:
        // * appendChild = Acrescenta a tag dentro do <ul>
        taskList.appendChild(li)

        // ^ Chama a função de salvar informações
        saveData()

    }
}

btnAdd.addEventListener('click', addTask)

// ^ Esse "e" como parâmetro servirá para descobrirmos o que foi clicado
taskList.addEventListener('click', function (e){
    // * Checando se o que foi clicado foi o <li>
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName == "SPAN"){
        // ^ Se o <span> que é o "x" foi clicado, então seu "parent/"pai" que é o <li> é deletado
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// todo Fora de tudo, pois quando abrir o site, já rodar a função (nisso as informações são carregadas ao abrir o site)
loadTasks()

// ^ Permanência de dados 
// ^ Salvarmos as tarefas no cachê do navegador
// ^ Assim a pessoa poderá sair do site e voltar com as mesmas tarefas

// *  Salvar informação (Tarefas) quando for adicionado, marcado ou removido
function saveData(){
    // ? localStorage = armazenamento local (Desse PC/Navegador)
    // ? setItem = Cria uma variável no "hd"
    // ? task_data = É o nome da variável salva no amazenamento
    // ? taskList.innerHTML = É o valor salvo nessa variável 'task_data'
    // ? taskList.innerHTML representa todos os <li> dentro (inner) do <ul> (taskList)
    localStorage.setItem('task_data', taskList.innerHTML)
}

// *  Ler dados aos carregar o site
function loadTasks(){
    // ^ Ao 'carregar' os dados. Ele reescreve o taskList (o ul)
    // * innerHTML = Reescreve dentro do <ul>
    // ^ getItem("task_data") = Pega o que está salvo no armazenamento
    taskList.innerHTML = localStorage.getItem("task_data")
}