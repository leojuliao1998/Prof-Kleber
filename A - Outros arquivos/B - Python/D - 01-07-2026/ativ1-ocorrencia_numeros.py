lista = [1,3,5,3,7,9,3]
print("1,3,5,3,7,9,3")
num_dig = int(input("Digite o número da lista para saber a quantidade de ocorrências: "))

contagem = 0

for numero in lista:
    if numero == num_dig:
        contagem = contagem + 1
    
print("A quantidade de vezes que o número apareceu foi",contagem)