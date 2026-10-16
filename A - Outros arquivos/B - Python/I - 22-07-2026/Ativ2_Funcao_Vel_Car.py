
#todo Faça uma função que receba a velocidade de um veículo e o limite de velocidade da via como parâmetros. Dentro da função:
#! • Se a velocidade estiver dentro do limite, mostre "Velocidade permitida";
#? • Se a velocidade estiver acima do limite, mostre "Velocidade acima do permitido";
#! • Mostre também quantos quilômetros por hora o motorista ultrapassou.
#? A leitura da velocidade e do limite da via deve ser feita fora da função.
#~ Exemplo:
#~ Velocidade do veículo: 75 km/h
#~ Limite da via: 60 km/h
#~ Velocidade acima do permitido!
#~ Você ultrapassou o limite em 15 km/h.

def vel (vel_car, vel_via):
    vel_dif = vel_car - vel_via
    if vel_car > 80:
        print("Velocidade acima do permitido.", "Você ultrapassou o limite em", vel_dif, "km/h.")
    else:
        print("Velocidade Permitida")

print("Digite a velocidade do carro e a permitida da via para saber se ultrapassou!")
vel_car = int(input("Velocidade do carro(km/h): "))
vel_via = int(input("Velocidade da via(km/h): "))

vel(vel_car, vel_via)