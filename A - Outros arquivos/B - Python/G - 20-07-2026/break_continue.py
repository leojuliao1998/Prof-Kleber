
#! Break e Continue são comandos para contrle de loop's (laços de repetição)

contador = 0
maximo = 50
while contador < maximo:
    #! O sinal "+=" quer dizer "Mais e Igual"
    #! É quando queremos "Adicionar" um valor a variável
    #? É a forma resumida de: contador = contador + 1
    #! É uma forma de "Não perder o que tem na variável" e adicionar aquele valor.
    #? Se o contador tem 5. Contador += 1 || Ele vai para 6
    contador += 1

    #& COMANDOS BREAK E CONTINUE
    #! Se o resto da divisão do contador atual for 0
    #! OU: Se o contador for da tabuada do 4 então...
    #? Continue = INTERROMPE O LOOP AQUI E VAI PARA A PRÓXIMA REPETIÇÃO
    #? Break = INTERROMPE O LOOP TOTALMENTE
    if contador % 4 == 0:
        continue
    if contador == 38:
        break
    print(contador)
print("Fim do código")