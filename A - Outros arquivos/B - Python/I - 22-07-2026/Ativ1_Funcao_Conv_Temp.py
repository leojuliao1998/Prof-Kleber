
#todo Faça uma função que receba uma temperatura em graus Celsius como parâmetro. Dentro da função, converta a temperatura para Fahrenheit e imprima o resultado. A leitura da temperatura deve ser feita fora da função.

def temp(celsius):
    fahrenheit = (celsius * 9 / 5) + 32
    print("A conversão de °C para °F é", fahrenheit)

celsius = float(input("Celsius: "))
temp(celsius)