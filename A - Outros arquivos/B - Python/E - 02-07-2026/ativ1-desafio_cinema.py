import locale
from datetime import date
#todo Definir Localizade Brasil Opção comum em Windows
locale.setlocale(locale.LC_TIME, 'Portuguese_Brazil')
#todo 2. Obter a data de hoje
data_hoje = date.today()
#todo 3. Formatar a data para obter o nome do dia da semana em português
#todo %A retorna o nome completo do dia da semana (ex: "Quinta-feira")
dia_da_semana = data_hoje.strftime('%A')

#todo -----------------------------------------------------------------------------
sair = False
while sair == False:
    print(" ")
    print("Bem vindo ao O Cinema!")
    print("Filmes em exibição!")
    print("-"*55)
    print("Código - Nome                      - Gênero")
    print("D039   - O Poderoso Chefão         - Máfia")
    print("B678   - Matrix                    - Ação")
    print("D889   - O Senhor dos Anéis        - Fantasia")
    print("M912   - Interestelar              - Ficção Científica")
    print("G007   - O resgate do Soldado Ryan - Guerra")
    print("-"*55)

    filme_escolhido = input("Digite o código do filme: ").upper()
    quantidade_filme = int(input("Digite a quantidade de ingressos: "))

    if dia_da_semana == "segunda-feira" or "quarta-feira" or "sexta-feira":
        valor_final_filme = 32.50 * quantidade_filme
        sair = True

    elif dia_da_semana == "terça-feira" or "quinta-feira" or "sábado" or "domingo":
        valor_final_filme = quantidade_filme * 36.00
        sair = True
    else:
        print("Digite um código válido!")

#todo -----------------------------------------------------------------------------
print("-"*55)
sair = False
while sair == False:
    combo = input("Você irá querer combo para acompanhar seu filme(S/N): ").upper()
    if combo == "S":
        print("Escolha o combo de sua preferência!")
        print("-"*55)
        print("Código    - Combo                                         - Valor")
        print("COMBO-005 - Doritos + Refri Lata                          - R$ 15,90")
        print("COMBO-072 - Pipoca Salgada + Copo de Coca Cola            - R$ 17,90")
        print("COMBO-777 - Pipoca Doce + Copo de Suco                    - R$ 14,90")
        print("COMBO-215 - Refil de Pipoca Salgada + 2 Recargas de Refri - R$ 25,90")
        print("-"*55)

        combo_escolhido = input("Digite o código do combo: ").upper()
        quantidade_combo = int(input("Digite a quantidade de combos: "))

        match combo_escolhido:
            case "COMBO-005":
                valor_total = 15.90 * quantidade_combo
                valor_compra = valor_total + valor_final_filme
                print("O valor final da sua compra é de:", valor_compra)
                sair = True
            
            case "COMBO-072":
                valor_total = 17.90 * quantidade_combo
                valor_compra = valor_total + valor_final_filme
                print("O valor final da sua compra é de:", valor_compra)
                sair = True

            case "COMBO-777":
                valor_total = 14.90 * quantidade_combo
                valor_compra = valor_total + valor_final_filme
                sair = True
                
            case "COMBO-215":
                valor_total = 25.90 * quantidade_combo
                valor_compra = valor_total + valor_final_filme
                print("O valor final da sua compra é de:", valor_compra)
                sair = True

            case _:
                print("Digite um código válido!")

    elif combo == "N":
        print("O valor total da sua compra é de:", valor_final_filme)