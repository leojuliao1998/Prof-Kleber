Algoritmo "escolha-caso"

Var
opcao: inteiro


Inicio
escreval ("Escolha um produto: ")
escreval ("1- Maçã")
escreval ("2- Morango")
escreval ("3- Carambola")
escreval ("4- Banana")

//Estrutura escolha-caso
// É uma condicional, perfeito para menu de opções
// Não muito diferente do SE ... ENTAO

escreva ("-: ")
leia (opcao)

escolha opcao

caso 1
     escreva ("Você escolheu Maçã!")
     
caso 2
     escreva ("Você escolheu Morango!")
     
caso 3
     escreva ("Você escolheu Carambola!")
     
caso 4
     escreva ("Você escolheu Banana!")
     
outrocaso
     escreva ("Opção Inválida!")
fimescolha

escreval ("Fim do programa")



Fimalgoritmo