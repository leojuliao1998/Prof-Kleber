 #! Aqui criaremos nossas próprias funções
#? Sintaxe:

#& def nome_funcao():
#! def = definir/definição (Criar)
def mensagem_boas_vindas():
    #? Dentro de uma função é o que chamamos de "bloco de códigos"
    #! (Que são códigos identados)
    #! Eles só serão EXECUTADOS quando essa função for chamada!
    print("Seja bem-vindo ao sistema TechProject!")
    print("A sua principal ferramenta de organização")
    print("-"*10)
    print("Segue abaixo o menu: ")

def cantar_musica():
    print("And we dance all night")
    print("To the best song ever")

print("Início do código...")

#! Chamando uma função
mensagem_boas_vindas()
print("Após a função")
print("-"*10)

cantar_musica()
cantar_musica()
cantar_musica()