//^ Criando variáveis

let nomeSite = "Combustível++"
let anoLancamento = 2026

//* alert = saída de dados (Igual ao print)
//^ prompt() == input()
//* Number() Converte para número
//^ Pois o prompt retorna como "string" que é texto

alert("Bem vindo ao Sistema " + nomeSite)
alert("Lançado em " + anoLancamento)
let precoGasolina = Number(prompt("Digite o valor da Gasolina"))
let precoEtanol = Number(prompt("Digite o valor do Etanol"))

//^ Só compensa pegar o Etanol se o preço do litro for menor ou igual a 70% do preço do litro da Gasolina
//* Por exemplo: Se a gasolina for 6.80 só compensa pegar Etanol se o preço dele for 4.75 ou menos

let porcentagem = precoEtanol / precoGasolina

if (porcentagem <= 0.7){
    //^ Compensa Etanol
    //* O .toFixed(n) contro quantos números após a vírgula
    //^ document.write() - aparece na tela do navegador
    alert("Neste caso o valor do Etanol é " + (porcentagem * 100).toFixed(2) + "% do valor da Gasolina")
    document.write("<h1>Use Etanol</h1>")
}
else{
    //^ Compensa Gasolina
    document.write("<h1>Use Gasolina</h1>")
    alert("O valor do Etanol é mais de 70% do valor da Gasolina")
}