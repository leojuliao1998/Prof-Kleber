
#! CRIANDO UMA LISTA VAZIA

produtos=[]

#? Variável auxiliar para controlar o loop principal
sair = False

print("Bem vindo o Sistema de Estoque!")
#! Repita enquanto sair é igual a false
while sair == False:
    #! Para copiar uma linha - Alt + Shift + Seta para baixo
    #! Para andar com a linha - Alt + Seta para baixo ou para cima
    print("-"*30)
    print("1 - Listar produtos")
    print("2 - Cadastrar um novo produto")
    print("3 - Deletar um produto")
    print("0 - Sair do sistema")
    print("-"*30)
    #! Pedir para a pessoa digitar a opção:
    opcao = input("Sua opção: ")
    #! Escolha Caso / Match Case
    match opcao:
        case "0":
            #? Colocamos sair como verdadeiro para que quando rodar o loop ele sair.
            sair = True
        case "1":
            print("Lista de produtos: ")
            for p in produtos:
                print("-",p)
            print("#"*30)
            input("Precione enter para continuar...")
        case "2":
            print("Cadastrar novo produto: ")
            nome_produto = input("Nome do produto: ")
            #! A função append adiona um novo item em uma lista
            produtos.append(nome_produto)
        case "3":
            print("Remover produto: ")
            nome_produto = input("Produto a ser deletar: ")
            #! Checar se o produto deletado existe na lista
            if nome_produto in produtos:
                produtos.remove(nome_produto)
                print("Removido com sucesso")
            else:
                print(nome_produto, "não existe na lista!")
            input("Precione enter para continuar...")
        case _ :
            print("Opção Inválida!")
            input("Pressione enter para continuar...")