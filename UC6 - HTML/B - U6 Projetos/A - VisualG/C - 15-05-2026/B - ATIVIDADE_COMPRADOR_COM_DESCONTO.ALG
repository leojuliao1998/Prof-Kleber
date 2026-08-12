Algoritmo "atividade_comprador_com_desconto"

Var

usuario: caractere
categoria_comprador: inteiro
valor_para_pagar, resultado: real

Inicio

escreval ("Bem-vindo ao sistema de descontos!")
escreval ("Identifique-se: ")
leia (usuario)

limpatela

escreval ("Olá, ", usuario," agora vamos verificar sua categoria de comprador!")
escreval ("As categorias tem descontos diferentes")
escreval ("----------------------------------------------------------------")
escreval ("1- Cliente Comum - sem desconto")
escreval ("2- Funcionário - 10% de desconto")
escreval ("3- Cliente V.I.P. - 5% de desconto")
escreval ("----------------------------------------------------------------")

escreval ("Digite o número de sua categoria de comprador")
leia (categoria_comprador)

escreval ("Qual o valor de sua compra?(em R$)")
leia (valor_para_pagar)

limpatela

escolha categoria_comprador

    caso 1
        escreval ("Infelizmente você não tem desconto, vamos se tornar cliente V.I.P.!!!")
    caso 2
        resultado <- valor_para_pagar - (valor_para_pagar * 0.10)
//resultado <- valor_para_pagar * 0.90) JÁ DA O VALOR FINAL
        escreval ("Parabéns! Você pagará R$", resultado)
    caso 3
        resultado <- valor_para_pagar - (valor_para_pagar * 0.05)
//resultado <- valor_para_pagar * 0.95) JÁ DA O VALOR FINAL
        escreval ("Parabéns! Você pagará R$", resultado)
    outrocaso
        escreval ("Cliente não reconhecido!")
fimescolha







Fimalgoritmo