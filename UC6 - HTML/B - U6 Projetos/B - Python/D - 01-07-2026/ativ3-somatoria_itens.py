numeros = [1, 10, 100, 1000, 10000]
total = 0

for soma in numeros:
    print("Atual:",total)
    print(total, "+", soma, "=")
    total = total + soma
    print(total)
    print("-"*20)

print("O total somado é: ",total)