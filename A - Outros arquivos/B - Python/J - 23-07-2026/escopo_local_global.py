
#^ Aqui (Colado a esquerda) estamos no "Escopo Global"

def divisao (num2):
    #? Aqui (Dentro da função) estamos no "Escopo Local"
    #? Utilizo a variável aqpenas aqui dentro da função
    resultado = num1 / num2
    print("o resultado é:", resultado)

#? Se a variável está aqui no escopo global, ela seria armazenada para o programa inteiro
num1 = 500
divisao(6)

#^ Usando uma variável "local" aqui no escopo global
#^ print("o resultado aqui fora é:", resultado)