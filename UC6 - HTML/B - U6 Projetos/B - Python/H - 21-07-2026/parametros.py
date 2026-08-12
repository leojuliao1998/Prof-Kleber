import math

#! Parâmetros são valores "de fora da função" que são passados em sua CHAMADA
#! É quando uma função NECESSITA de um valor para funcionar
#? O parâmetro "ano_nascimento" funcionará como uma VARIÁVEL dentro da função

def calcular_idade(ano_nascimento):
    print("Ano de nascimento é:", ano_nascimento)
    idade = 2026 - ano_nascimento
    print("A idade é:", idade)

print("Chamando a função:")
calcular_idade(1995)

meu_ano_nascimento = 1997
calcular_idade(meu_ano_nascimento)

ano_perguntado = int(input("Digite um ano de nascimento: "))
calcular_idade(ano_perguntado)