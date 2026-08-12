import random

#! Importante o módulo de "sorteio" ou aleatoriedade.

#! Dentro dele há uma função chamada "randint" que usaremos para o sorteio da jogada da MÁQUINA

#? Iniciando variáveis

pontos_player = 0
pontos_cpu = 0

#! Jogadas:
#! 0 = Pedra | 1 = Papel | 2 = Tesoura
#? Números são representados mais leves do que palavras
jogada_player = 0
jogada_cpu = 0

#! Variável auxiliar para controlar o loop
vai_sair = False

#? O loop "While" funciona em conjunto com uma condição (tanto para entrar na primeira vez, quanto para saber se vai repetir na próxima)
while vai_sair  == False:
    print("Bem vindo ao JO-KEN-PÔ!")
    print("-"*10)
    print("0 - Pedra")
    print("1 - Papel")
    print("2 - Tesoura")
    print("Faça sua jogada!")
    jogada_player = int(input("->"))
    if jogada_player < 0 or jogada_player >2:
        print("Jogada Inexistente!")
        #! Input auxiliar para "congelar o código"
        input("Pressione enter para continuar...")
        #? Continue é um comando de loop que serve para "interromper o loop aqui" e ir para a próxima repetição. É como se ele fosse reiniciado antes do fim.
        print("#"*20)
        print("#"*20)
        continue
    #! Jogada da máquina. Sorteia um número inteiro (Randint) entre 0 e 2
    jogada_cpu = random.randint(0, 2)

    #! Variáveis com nome da jogada (Para mostrar bonitinho pro jogador)
    nome_jogada_player = ""
    nome_jogada_cpu = ""

    match jogada_player:
        case 0:
            nome_jogada_player = "Pedra"
        case 1:
            nome_jogada_player = "Papel"
        case 2:
            nome_jogada_player = "Tesoura"

    match jogada_cpu:
        case 0:
            nome_jogada_cpu = "Pedra"
        case 1:
            nome_jogada_cpu = "Papel"
        case 2:
            nome_jogada_cpu = "Tesoura"

    print("A máquina jogou: ", nome_jogada_cpu)
    print("Você jogou: ", nome_jogada_player)
    #! Vitórias do player
    if jogada_player == 0 and jogada_cpu ==2:
        #? Player Pedra e Máquina Tesoura  = Vitória
        print("Você venceu!")
        pontos_player = pontos_player + 1

    elif jogada_player == 1 and jogada_cpu == 0:
        #? Player Papel e Máquina Pedra = Vitória
        print("Você venceu!")
        pontos_player = pontos_player + 1

    elif jogada_player == 2 and jogada_cpu == 1:
        #? Player Tesoura e Máquina Papel = Vitória
        print("Você venceu!")
        pontos_player = pontos_player + 1

    #! Vitórias da Máquina ################################
    elif jogada_player == 2 and jogada_cpu == 0:
        #& Player Tesoura e Máquina Pedra = Derrota
        print("Você perdeu!")
        pontos_cpu = pontos_cpu + 1

    elif jogada_player == 0 and jogada_cpu == 1:
        #& Player Pedra e Máquina Papel = Derrota
        print("Você perdeu!")
        pontos_cpu = pontos_cpu + 1

    elif jogada_player == 1 and jogada_cpu == 2:
        #& Player Papel e Máquina Tesoura = Derrota
        print("Você perdeu!")
        pontos_cpu = pontos_cpu + 1

    elif jogada_player == jogada_cpu:
        print("Empatou!")

    #! Ao final do resultado o código da uma pausa:
    input("Pressione enter para continuar...")
    print("Placar: ")
    print("-|-"*10)
    print("Player: ", pontos_player)
    print("CPU: ", pontos_cpu)
    #! Pergunta se quer continuar
    #! Upper - transforma a resposta em maiúscula para facilitar o IF

    resposta = input("Quer jogar mais uma? (s/n)").upper()
    if resposta != "S":
        vai_sair = True
    
print("Fim do jogo!")