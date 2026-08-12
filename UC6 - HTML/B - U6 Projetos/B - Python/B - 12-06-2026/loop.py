# Loop  - Laço de repetição

# Repetirá o código dele X vezes
# contador = 0 (posso colocar um valor para iniciar o contador)
contador = int(input("Começa onde? "))
max = int(input("Quantas vezes roda? "))

#while em português é "enquanto"

while contador < max:
    print("O contador é:", contador)
    contador = contador + 1

print("Fim do loop")