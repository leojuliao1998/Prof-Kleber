
def calcular_anos_caninos(idade):
    idade_humana = 0
    if idade >= 1:
        idade_humana = 15

    if idade >= 2:
        idade_humana += 9

    if idade >= 3:
        idade_humana += (idade - 2) * 5
    #^ Transformando em "Função com Resultado"
    #^ O comando Return faz com que o valor possa ser extraído daqui
    #? EStou falando que o "idade_hamana" é o resultado desta função. Ou o valor que é "exportado"
    return idade_humana

#^ ESCOPO GLOBAL (colado a esquerda)
#* Chamando a função
idade_final = calcular_anos_caninos(5)
print("A idade humana é:", idade_final)

print("O segundo dog tem", calcular_anos_caninos(20), "anos humanos")