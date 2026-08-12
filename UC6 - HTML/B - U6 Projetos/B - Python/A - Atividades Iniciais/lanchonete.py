print("<----- Produtos Disponíveis ----->")
print(" ")
print("100 - Cachorro Quente")
print("101 - Bauru Simples")
print("102 - Bauru com Ovo e Bacon")
print("103 - Hamburguer")
print("104 - X-Tudo")
print("105 - Refrigerante Lata")
print(" ")
print("<-------------------------------->")
print(" ")

print("Selecione o produto: ")
print(" ")
cod = int(input("Digite o código: "))
print(" ")
print("<-------------------------------->")
print(" ")
quant = int(input("Quantidade: "))
print(" ")
print("<-------------------------------->")
print(" ")

match cod:
    
    case 100:
        preco = 4.80 * quant
        print(f"Sua compra ficará R$ {preco:.2f}")
    case 101:
        preco = 11.00 * quant
        print(f"Sua compra ficará R$ {preco:.2f}")
    case 102:
        preco = 14.00 * quant
        print(f"Sua compra ficará R$ {preco:.2f}")
    case 103:
        preco = 12.00 * quant
        print(f"Sua compra ficará R$ {preco:.2f}")
    case 104:
        preco = 17.00 * quant
        print(f"Sua compra ficará R$ {preco:.2f}")
    case 105:
        preco = 3.50 * quant
        print(f"Sua compra ficará R$ {preco:.2f}")
    case _:
        print("Escolha errada, selecione novamente!")

print(" ")
print("Obrigado por nos escolher! Volte sempre!")
print(" ")