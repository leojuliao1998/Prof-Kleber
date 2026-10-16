produto_1 = ["PlayStation 5", 3500]
produto_2 = ["GTA VI", 549]
produto_3 = ["RTX 5090", 27999]
produto_4 = ["Injeção na testa", "grátis"]

#! Podemos colocar uma lista dentro da outra

produtos = [produto_1, produto_2, produto_3, produto_4]

#! Mostra o que tem dentro de "produtos"
print(produtos)

#! Acessando o nome de um produto
#? [1] - Acessa a lista toda do produto_2
#? [1][0] - Acessa o produto_2 e pega o nome (indice 0)
print("Nome do produto: ", produtos[1][0])

#! Também podemos colocar uma lista dentro da outra na criação

carros = ["Fiat", ["Palio", "Punto", "Fastback", "Toro"]]
print("Acessando a Toro: ", carros[1][3])