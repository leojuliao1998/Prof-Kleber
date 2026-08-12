//^ Sintaxe de uma função
//* nota1, nota2, nota3 são parâmetros
//^ Parâmetros são informações que a FUNÇÃO necessita para funcionar
function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3
    alert("A média é: " + media.toFixed(1))
}

//^ Lendo as informações do usuário
let n1 = Number(prompt("Digite nota 1: "))
let n2 = Number(prompt("Digite nota 2: "))
let n3 = Number(prompt("Digite nota 3: "))

//^ Chamando a função
calcularMedia(n1, n2, n3)

//^ Chamando a função com valores brutos
calcularMedia(10, 7.5, 6)