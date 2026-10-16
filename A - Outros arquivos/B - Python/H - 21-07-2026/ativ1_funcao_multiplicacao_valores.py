
#todo 1- Faça uma função que recebe dois números como parâmetros e faça uma multiplicação e imprima seu resultado.

def numeros(n1, n2):
    multiplicacao = n1 * n2
    print("O valor da multiplicação dos números é:", multiplicacao)

#! Exemplo 1
n1 = float(input("Número 1: "))
n2= float(input("Número 2: "))
numeros(n1, n2)

#! Exemplo 2
num2 = 20
num1 = 8
numeros(num1, num2)

#! Exemplo 3
numeros(float(input("Número 1: ")), float(input("Número 2: ")))