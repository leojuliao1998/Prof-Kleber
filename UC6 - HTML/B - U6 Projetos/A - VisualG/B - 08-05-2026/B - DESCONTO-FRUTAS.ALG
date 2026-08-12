Algoritmo "desconto-frutas"



Var
qtd_macas: inteiro
preco_macas: real
preco_desconto: real



Inicio
escreval ("Seja bem-vindo ao Varejão!")
escreval ("--------------------------")
escreval ("Quantas maçãs você irá levar?")
escreva ("-: ")
leia (qtd_macas)

preco_macas <- 1.5
preco_desconto <- 1


// Aqui quero que o propgrama tenha 2 comportamentos
// SE ele comprar 12 maçãs, a maçã terá desconto
// SENÂO será preço normal!

//OPERADORES DE COMPARAÇÃO:
// >  MAIOR
// <  MENOR
// <> DIFERENTE
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL
// =  IGUAL

// "TODA COMPARAÇÃO GERA UM VALOR LÓGICO!"
// "VALOR LÓGICO: VERDADERIO OU FALSO"
// INTEIRO: 1, 2, 3, 4, 5, 6... (NÚMERO INTEIRO)
// REAL: 1.56, 1.98, 2.10... (NÚMERO QUEBRADO)
// CARACTERE: LEONARDO, ESCOLA, VOCÊ... (LETRAS)
// LÓGICO: VERDEIRO OU FALSO


se qtd_macas >= 12 entao
   //CAMINHO SIM / VERDADEIRO
   escreval ("Você terá desconto!")
   se qtd_macas >= 50 entao
      escreval ("Total pago: ", qtd_macas * (preco_desconto* 0.75))
   senao
      escreval ("Total pago: ", qtd_macas * preco_macas)
   fimse
senao
     // CAMINHO NÃO / FALSO
     escreval ("Total pago: ", qtd_macas * preco_macas)
fimse



Fimalgoritmo