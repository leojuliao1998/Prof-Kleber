import math

def unir_nomes(nome, sobrenome):
    #! Soma de textos = CONCATENAÇÃO
    nome_completo = nome + " " + sobrenome
    print("O nome completo é:", nome_completo)

unir_nomes("Cuca", "Beludo")

#! A diferença entre função "com resultado" e função "sem resultado"

#? COM RESULTADO:
#? "Retorna" um valor após "executar" a função
potencia = math.pow(25, 5)
print("A potência é:", potencia)

#? SEM RESULTADO
#? Não pode ser usado como um "valor". Ele não "retorna" NADA.
#? Ele NÃO representa um valor.
nome = unir_nomes("Mudrungo", "Souza")
print("O nome é:", nome)

#! Strind Replace
#! Pega uma string e troca palavra ou caractere de um para outro
#! Troca a string da esquerda pela string da direita
pais = "Brasil"
trocado = pais.replace("B", "P")
print("O nome trocado é:", trocado)