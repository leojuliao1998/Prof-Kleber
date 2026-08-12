
#^ Usamos o len() para saber quantas notas foram enviadas
#* Desta forma a função funcionará com QUALQUER QUANTIDADE DE NOTAS
def calcula_media(lista_notas):
    #^ SUM = Soma dos itens da lista
    #^ len = Quantas notas são
    media = sum(lista_notas) / len(lista_notas)
    return media

notas_aluno1 = [7.5 ,10, 2, 8, 4.5]
media_aluno1 = calcula_media(notas_aluno1)
print("A média do Regervaldo é:", media_aluno1)

media_aluno2 = calcula_media([10, 5.5])
