Algoritmo "operador_matematico"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Kleber Lucas
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Leonardo De Oliveira Julião
// Data atual  : 17/04/2026
Var
// Seção de Declarações das variáveis 
preco_maca: real
 preco_morango: real
 qtd_maca: inteiro
 qtd_morango: inteiro
 total_pago_maca:  real
 total_pago_morango: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Seja bem-vindo ao Varejão!")
escreval ("Temos os melhores preços!")
preco_maca <- 2
preco_morango <- 5

escreval ("----------------------------")
escreval ("Maçã: R$", preco_maca)
escreval ("Morango: R$", preco_morango)
escreval ("----------------------------")
qtd_maca <- 10
qtd_morango <- 5

total_pago_maca <- preco_maca*qtd_maca
total_pago_morango <- preco_morango*qtd_morango

escreval ("O total pago de maça é R$", total_pago_maca)
escreval ("O total pago do morango é R$", total_pago_morango)
Fimalgoritmo