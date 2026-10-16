
#^ Variáveis booleanas são variáveis que aceitam apenas dois tipos de valores: True e False
#^ Muito usada para situações de "Apenas dois casos" SIM ou NÃO

def eh_idoso(idade):
    if idade >= 60:
        return True
    else:
        return False

def pode_usar_excalibur(nivel, classe):
    if nivel >= 100 and classe == "Paladino":
        return True
    elif nivel >= 500:
        return True
    else:
        return False

idade = int(input("Digite sua idade: "))

#^ Usando a função como "condição" em um IF
#^ Já que o retorno dele é booleano, ele serve como uma condição!

if eh_idoso(idade):
    print("Bem vindo ao sistema da Melhor Idade ++")
    input("Pressione enter para continuar...")
else:
    print("Este sistema é exclusivo para idosos!")
    input("Pressione enter para continuar...")

nivel = 500
classe = "Mago"

if pode_usar_excalibur(nivel, classe):
    print("Equipou!")