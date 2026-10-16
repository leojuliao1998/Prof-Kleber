# Input - Entrada de dados
# Quando pedimos para o usuário digitar algo

# Isso faz com que nosso programa fiqeu personalizado, pois funcionará com dados dos clientes/usuários

# input() = leia()
# Mas nele colocamos a pergunta junto!
nome_filme = input("Digite o nome do seu filme favorito: ")
ano_filme = int(input("Digite o ano do lançamento dele: "))

total_anos = 2026 - ano_filme

print("O seu filme tem", total_anos, "anos de criação.")