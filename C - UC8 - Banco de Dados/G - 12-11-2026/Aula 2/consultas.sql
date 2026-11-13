-- ! Pegando tudo
SELECT * FROM Produto;

SELECT * FROM Funcionario;

-- ? Filtrando
SELECT nome, setor FROM Funcionario WHERE setor = "Vendas";

SELECT nome, preco FROM Produto WHERE preco > 1000;

-- * Combinando filtros
-- * AND = E (2000 reais e eletrônicos)
SELECT nome, preco FROM Produto WHERE preco > 2000 AND categoria = "Eletrônico";

-- todo Ordenando
SELECT nome, preco FROM Produto WHERE preco > 2000 AND categoria = "Eletrônico" ORDER BY preco;