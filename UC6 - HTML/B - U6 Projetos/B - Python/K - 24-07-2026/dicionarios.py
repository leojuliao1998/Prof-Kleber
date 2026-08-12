
#^ Listas e Dicionários são "Coleções de Dados"
#^ Lista = Vetor/Arrays (Em outras linguagens)
lista = ["God Of War", "GTA San Andreas", "Resident Evil 4", "Crash Bandicoot"]

#^ Descobrindo o comprimento de uma lista/dicionário com a função len()
#^ A quantidade de itens dentro da lista
#^ Lista = length (comprimento)
print("Dentro da lista tem:", len(lista), "itens.")

#* CRIANDO UM DICIONÁRIO
carro_1 = {
    "modelo": "Marea",
    "marca": "Fiat",
    "ano": 2005,
    "cor": "Roxo"
}

carro_2 = ["TT", "Audi", 2010, "Azul"]

#^ Exibindo um valor
#* lista
print("O carro a venda é:", carro_2[1], "-", carro_2[0])
print("-" * 20)
#* dicionário
print("O carro a venda é:", carro_1["marca"], "-", carro_1["modelo"])