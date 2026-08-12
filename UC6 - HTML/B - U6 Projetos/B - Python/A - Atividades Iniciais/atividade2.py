print("Digite seu salário para saber seus descontos mensais.")

salario = float(input("Digite seu salário: "))

salario_final = salario + 50 - (salario * 0.25)

print(f"Seu salário final será de R$ {salario_final:.2f}.")