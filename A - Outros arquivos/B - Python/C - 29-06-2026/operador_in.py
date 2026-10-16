cores = ["Verde", "Roxo", "Azul"]

#! Operador "in" é um teste se algum item está dentro de uma lista

if "Rosa" in cores:
    print("A cor está dentro da lista!")
elif "Verde" in cores:
    print ("Agora sim, está lá dentro!")
else:
    print("Não tem essa cor lá!")

#! Índice negativo (começa pelo final - ordem inversa)

arsenal = ["Espada", "Lança", "Machado", "Arco", "Besta", "Estrela da manhã", "Maça", "Marreta", "Montante", "Cimitarra", "Sabre", "Alabarda", "Tacape", "Porrete", "Clava", "Faca", "Adaga", "Punhal", "Katar", "Katana", "Rapieira"]

print("-1: ", arsenal[-1])
print("-2: ", arsenal[-2])