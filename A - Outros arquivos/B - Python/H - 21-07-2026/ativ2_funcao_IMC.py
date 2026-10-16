
#todo 2- Faça uma função que receba a altura e peso de uma pessoa como parâmetros, para receber esses dados faça uma leitura(input) (Fora da função). Com esses valores calcule o IMC e mostre o resultado e a situação na tela.

def calculo_imc(peso, altura):
    imc = peso / (altura * altura)
    print("Seu IMC é de:", round(imc, 2))

    if imc >= 30:
        print("E seu grau é OBESIDADE")
    elif imc >= 25:
        print("E seu grau é SOBREPESO")
    elif imc >= 18.5:
        print("E seu grau é NORMAL")
    else:
        print("E seu grau é BAIXO PESO")

print("Calcule seu IMC!")
calculo_imc(float(input("Peso(kg): ")), float(input("Altura(m): ")))