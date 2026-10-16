paises = ["Brasil", "Japão", "Butão", "Noruega", "Cabo Verde", "Costa do Marfim", "México", "Bélgica", "Argentina", "França,", "Paraguai", "Equador"]

#! loop for é muito utilizado em "sequências" onde vetor é uma das sequências
#? Na tradução ele se chama "para"
#! O loop funciona muito bem com vetores
#? Aqui usamos o operador "in" para outra coisa
#! "paises" é o vetor
#? "pais" no singular é como cada "item" da lista será chamado dentro da loop


for pais in paises:
    print("Classificado: ", pais)

print("-"*50)
print("Fim do loop")