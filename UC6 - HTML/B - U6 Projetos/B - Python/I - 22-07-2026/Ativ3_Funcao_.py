
#todo Faça uma função que receba o preço de um produto e a porcentagem de desconto como parâmetros. Dentro da função, calcule e mostre:
#! • O valor do desconto;
#? • O preço original;
#! • O preço final após o desconto.
#? A leitura do preço e da porcentagem deve ser feita fora da função.
#~ Exemplo:
#~ Preço do produto: R$ 200
#~ Desconto: 10%
#~ Valor do desconto: R$ 20
#~ Preço final: R$ 180

def preco (produto, desconto):
    valor_pagar = produto - (produto * desconto) / 100
    print(f"O valor a ser pago no produto com o desconto será de {valor_pagar:.2f}")

produto = float(input("Digite o valor do produto(R$): "))
desconto = float(input("Digite a porcentagem de desconto da peça: "))
preco(produto, desconto)