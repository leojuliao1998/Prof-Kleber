//^ Entrada de dados - Input
//*  perguntar/pedir ao usuário alguma informação
//~ prompt() == input()

let nome = prompt("Digite seu nome")

//^ Number converte para número
//^ Pois o prompt() traz o que a pessoa digitou como "string" que é texto
//^ O JavaScript até fez conta de multiplicação com texto
//^ Porém é mais seguro converter já na base pois "adição" não daria certo
let salario = Number(prompt("Digite seu salário"))

//^ Aumento de 10%
//^ 1 = 100% e 0.10 = 10%
//^ 1+0.10 = 1.10 ou 110%

let aumento = salario * 1.10

alert("O seu salário com o aumento é: " + aumento)

let idade = Number(prompt("Digite sua idade: "))

if (idade >= 18){
    alert("É maior de idade")
}
else{
    alert("É menor de idade")
}