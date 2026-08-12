Algoritmo "peso_planetas"

Var
peso, resultado: real
numero_planeta: inteiro
nome_usuario: caractere

Inicio
escreval ("Bem-vindo ao sistema CPE - Conversão de Pesos no Espaço!")
escreva ("Qual seu nome? ")
leia (nome_usuario)

limpatela //Zera as informações na tela preta

escreval ("--------------------------------------------")
escreval ("1 - Mercúrio")
escreval ("2 - Vênus")
escreval ("3 - Marte")
escreval ("4 - Júpiter")
escreval ("5 - Saturno")
escreval ("6 - Urano")
escreval ("--------------------------------------------")

escreval ("Olá,", nome_usuario)
escreva ("Qual planeta  você escolhe? ")
leia (numero_planeta)

escreva ("Qual o peso(kg)? ")
leia (peso)

limpatela

// Escolha-Caso - muito útil para menus
//(quando há várias opções de escolha)

//Ele pede a variável que determina a mudança de comportamento
escolha numero_planeta

    caso 1
        resultado <- peso * 0.37
    caso 2
        resultado <- peso * 0.88
    caso 3
        resultado <- peso * 0.38
    caso 4
        resultado <- peso * 2.64
    caso 5
        resultado <- peso * 1.15
    caso 6
        resultado <- peso * 1.17
    outrocaso
        escreval ("Planeta incorreto")
fimescolha

se resultado <> 0 entao
    escreval (peso," kg no planeta escolhido foi", resultado," kg")
senao
    escreval ("Escolha um planeta disponível")
    escreval ("Ou coloque um peso positivo")
fimse


Fimalgoritmo