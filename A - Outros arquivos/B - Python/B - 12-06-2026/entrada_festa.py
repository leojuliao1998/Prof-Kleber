pode_entrar = False

while pode_entrar == False:
    eh_maior = input("Você tem mais de 18 anos?(s/n) ")
    if eh_maior == "s" or eh_maior == "S":
        tem_ingresso = input("Tem ingresso?(s/n) ")
        if tem_ingresso == "s" or tem_ingresso == "S":
            pode_entrar = True
        else:
            print("Infelizmente sem ingresso não entrar")
    else:
        print("Num pode rapá, Vaza!")
    print("\n")

print("Bem-vindo a festa!!!")