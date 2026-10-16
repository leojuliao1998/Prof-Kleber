valor_compra = float(input("Digite o valor da compra: R$ "))
valor_pago = float(input("Digite o valor pago pelo cliente: R$ "))
 
if valor_pago < valor_compra:
    print("Pagamento insuficiente.")
else:
    troco = valor_pago - valor_compra
 
    print(f"\nTroco: R$ {troco:.2f}")
    print("Organização do troco:")
 
    # Nota de R$ 100,00
    quantidade = int(troco / 100)
    troco = troco - quantidade * 100
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} nota(s) de R$ 100,00")
 
    # Nota de R$ 50,00
    quantidade = int(troco / 50)
    troco = troco - quantidade * 50
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} nota(s) de R$ 50,00")
 
    # Nota de R$ 20,00
    quantidade = int(troco / 20)
    troco = troco - quantidade * 20
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} nota(s) de R$ 20,00")
 
    # Nota de R$ 10,00
    quantidade = int(troco / 10)
    troco = troco - quantidade * 10
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} nota(s) de R$ 10,00")
 
    # Nota de R$ 5,00
    quantidade = int(troco / 5)
    troco = troco - quantidade * 5
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} nota(s) de R$ 5,00")
 
    # Nota de R$ 2,00
    quantidade = int(troco / 2)
    troco = troco - quantidade * 2
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} nota(s) de R$ 2,00")
 
    # Moeda de R$ 1,00
    quantidade = int(troco / 1)
    troco = troco - quantidade * 1
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} moeda(s) de R$ 1,00")
 
    # Moeda de R$ 0,50
    quantidade = int(troco / 0.50)
    troco = troco - quantidade * 0.50
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} moeda(s) de R$ 0,50")
 
    # Moeda de R$ 0,25
    quantidade = int(troco / 0.25)
    troco = troco - quantidade * 0.25
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} moeda(s) de R$ 0,25")
 
    # Moeda de R$ 0,10
    quantidade = int(troco / 0.10)
    troco = troco - quantidade * 0.10
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} moeda(s) de R$ 0,10")
 
    # Moeda de R$ 0,05
    quantidade = int(troco / 0.05)
    troco = troco - quantidade * 0.05
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} moeda(s) de R$ 0,05")
 
    # Moeda de R$ 0,01
    quantidade = int(troco / 0.01)
    troco = troco - quantidade * 0.01
    troco = round(troco, 2)
    if quantidade > 0:
        print(f"{quantidade} moeda(s) de R$ 0,01")