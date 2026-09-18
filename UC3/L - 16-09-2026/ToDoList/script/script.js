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
        
        // ^ Falta posicionar onde esse <li> novo ficará:
        // * appendChild = Acrescenta a tag dentro do <ul>
        taskList.appendChild(li)

    }
}

btnAdd.addEventListener('click', addTask)

// ^ Esse "e" como parâmetroservirá para descobrirmos o que foi clicado
taskList.addEventListener('click', function (e){
    // * Checando se o que foi clicado foi o <li>
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
    }
}, false)