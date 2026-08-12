salarios = [20000, 3000, 3200, 1700, 12000, 2500]

total = 0

#! Somares todos os salários

for sal in salarios:
    print("Atual:", total)
    print(total, "+", sal, "=" )
    total = total + sal
    print(total)
    print("#"*10)

print("-"*50)
print("O total somado é:", total)