import math
#! Acima importamos as "funções matemáticas" do Python
#! Sen essa importação as informações ficam "travadas" ou impossibilitadas de serem utilizadas

#? Aqui poderemos ver o padrão ao usar "FUNÇÕES" na programação

nota_bimestre = 8.7

#! Tudo que abriu e fechou parênteses, é uma função. Ex: Print("") é uma função.

print("Arredondando para baixo:", math.floor(nota_bimestre))
print("Arredondando para cima:", math.ceil(8.1))
print("Arredondando por proximidade:", round(5.6)) #!---> Já tem no Python, não precisa importar
print("Arredondando por proximidade:", round(9.4)) #!---> Já tem no Python, não precisa importar

#! No caso do math.pow() ele pede 2 parâmetros
#! ... que é o valor e o expoente.
print("Calculando potência: ", math.pow(20, 3))