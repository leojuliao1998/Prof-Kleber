
pokemon = ["Ninetails", "Sandshrew", "Bulbasaur"]

#^ O loop vai percorrer a lista acessando CADA ITEM POR VEZ
#^ Então a cada repetição a variável "poke" receberá um dos itens naquele turno. (Ninetails será o primeiro e assim por diante)

for poke in pokemon:
    print("O", poke, "é um dos favoritos")

#? O operador "in" do "IF" tem outro comportamento!!! Que é o de perguntar se tem outro item dentro da lista

if "Chamander" in pokemon:
    print("Tem sim!!!")

#^ ----------------------------------------------------------------------------------------------------------------------------

#* Loop em dicionários

consoles = {
    "PlayStation 1": 1994,
    "Super Nintendo": 1990,
    "Mega Driver": 1988,
    "Nintendo": 1983,
    "Atari 2600": 1977
}

for chave in consoles:
    #! Quando usamos "for" em um dicionário,ele percorre pelas "chaves"/"keys" do dicionário (Os nomes dos video-games) e não os valores!
    #! Para ver o valor, teremos que usar dentro dos []
    print(chave, "-", consoles[chave])