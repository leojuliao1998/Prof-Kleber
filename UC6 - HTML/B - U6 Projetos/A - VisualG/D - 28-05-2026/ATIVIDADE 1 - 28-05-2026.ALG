Algoritmo "Atividade 1 - 28-05-2026"

Var
cod, quant: inteiro
preco:real

Inicio

escreval ("<----- Produtos Disponíveis ----->")
escreval (" ")
escreval ("100 - Cachorro Quente")
escreval ("101 - Bauru Simples")
escreval ("102 - Bauru com Ovo e Bacon")
escreval ("103 - Hamburguer")
escreval ("104 - X-Tudo")
escreval ("105 - Refrigerante Lata")
escreval (" ")
escreval ("<-------------------------------->")
escreval (" ")
escreval ("Selecione o produto: ")
leia(cod)
escreval (" ")
escreval ("Quantidade: ")
leia (quant)

limpatela

escolha (cod)
    Caso 100
    preco <- 4.80 * quant
        escreval("Sua compra ficará R$", preco:1:2)
    Caso 101
    preco <- 11.00 * quant
        escreval("Sua compra ficará R$", preco:1:2)
    Caso 102
    preco <- 14.00 * quant
        escreval("Sua compra ficará R$", preco:1:2)
    Caso 103
    preco <- 12.00 * quant
        escreval("Sua compra ficará R$", preco:1:2)
    Caso 104
    preco <- 17.00 * quant
        escreval("Sua compra ficará R$", preco:1:2)
    Caso 105
    preco <- 3.50 * quant
        escreval("Sua compra ficará R$", preco:1:2)
fimescolha

Fimalgoritmo