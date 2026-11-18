-- ! Parte 3
-- ! 4 - Selecionando todas as colunas
SELECT * FROM Livros;

-- !  5 -Selecionando Título e Autor
SELECT titulo, autor FROM Livros;

-- ! 6 - elecionando Título, Gênero e Preço
SELECT titulo, genero, preco FROM Livros;

-- ! 7 - Selecionando Título e Quantidade
SELECT titulo, quantidade FROM Livros;

-- ? Parte 4
-- ? 8 - Consulta de Título de um só Gênero
SELECT titulo, genero FROM Livros WHERE genero = "Fantasia";

-- ? 9 - Consulta de Título e de Preço menor que R$ 50.00
SELECT * FROM Livros WHERE preco < 50.00 ORDER BY preco;

-- ? 10 - Consulta de Título e de Quantidade menor que 5
SELECT titulo, quantidade FROM Livros WHERE quantidade < 5;

-- ? 11 - Consulta de Título e livros publicados após anos 2000
SELECT titulo, ano_publicacao FROM Livros WHERE ano_publicacao > 2000 ORDER BY ano_publicacao;

-- ? 12 - Consulta de Título, Autor e Preço
SELECT titulo, autor, preco FROM Livros WHERE autor = "J.K. Rowling" ORDER BY preco;

-- * Parte 5
-- * 13 - Consulta de Título de um só Gênero
SELECT titulo, genero, preco FROM Livros WHERE genero = "Fantasia" AND preco < 60 ORDER BY preco;

-- * 14 - Consulta de Título, ano de publicação e quantidade, publicados após o ano de 2000
SELECT titulo, ano_publicacao, quantidade FROM Livros WHERE ano_publicacao > 2000 AND quantidade > 5 ORDER BY ano_publicacao;

-- * 15 - Consulta de Título, ano de publicação e quantidade, publicados após o ano de 2000
SELECT titulo, preco FROM Livros WHERE genero = "Romance" AND preco > 50 ORDER BY preco;

-- * 16 - Consulta de Título, ano de publicação e quantidade, publicados após o ano de 2000
SELECT titulo, quantidade, preco FROM Livros WHERE quantidade < 10 AND preco > 70 ORDER BY preco;

-- todo Parte 6
-- todo 17 - Ordenado do mais barato para o mais caro
SELECT * FROM Livros ORDER BY preco;

-- todo 18 - Ordenado do mais barato para o mais caro
SELECT * FROM Livros ORDER BY titulo;

-- todo 19 - Ordenado do mais barato para o mais caro
SELECT titulo, ano_publicacao FROM Livros ORDER BY ano_publicacao;

-- todo 20 - Ordenado do mais barato para o mais caro
SELECT * FROM Livros WHERE genero = "Fantasia" ORDER BY preco DESC;

-- todo 21 - Ordenado da menor quantidade para maior
SELECT * FROM Livros WHERE quantidade < 10 ORDER BY quantidade;

-- ! Desafio Final
-- ! 22 - Ordenado do mais barato para o mais caro (Na tabela de Cadastro)

-- ! 23 - Consulta de valor de R$ 60.00 do mais caro para o mais barato
SELECT * FROM Livros WHERE preco > 60 ORDER BY preco DESC;