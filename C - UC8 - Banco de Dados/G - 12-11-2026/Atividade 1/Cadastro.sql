INSERT INTO Livros (id_livro, titulo, autor, genero, ano_publicacao, quantidade, preco)
VALUES
-- ! Harry Potter
(1, "Harry Potter e a Pedra Filosofal", "J.K. Rowling", "Fantasia", 2000, 100, 50.00),

(2, "Harry Potter e a Câmara Secreta", "J.K. Rowling", "Fantasia", 2000, 100, 50.00),

(3, "Harry Potter e o Prisioneiro de Azkaban", "J.K. Rowling", "Fantasia", 2000, 100, 60.00),

(4, "Harry Potter e o Cálice de Fogo", "J.K. Rowling", "Fantasia", 2001, 100, 70.00),

(5, "Harry Potter e a Ordem da Fênix", "J.K. Rowling", "Fantasia", 2003, 100, 105.00),

(6, "Harry Potter e o Enigma do Príncipe", "J.K. Rowling", "Fantasia", 2005, 100, 70.00),

(7, "Harry Potter e as Relíquias da Morte", "J.K. Rowling", "Fantasia", 2007, 100, 75.00),

-- ! Crepúsculo

(8, "Crepúsculo", "Stephenie Meyer", "Romance", 2005, 200, 65.00),

(9, "Lua Nova", "Stephenie Meyer", "Romance", 2006, 200, 65.00),

(10, "Eclipse", "Stephenie Meyer", "Romance", 2007, 200, 60.00),

(11, "Amanhecer", "Stephenie Meyer", "Romance", 2008, 200, 70.00),

-- ! Outros
-- ! Desafio Final - 22
(12, "Frankenstein", "Mary Shelley", "Gótico", 1818, 50, 50.00),

(13, "O Médico e o Monstro", "Robert Louis Stevenson", "Gótico", 1886, 50, 50.00),

(14, "Drácula", "Bram Stoker", "Gótico", 2008, 50, 70.00)

(15, "O Chamado de Cthulhu", "H.P. Lovecraft", "Terror Cósmico", 1928, 30, 50.00)

(16, "Psicose", "Robert Bloch", "Suspense", 1959, 10, 55.00)

-- * Atualizando um valor ou dado
-- * UPDATE (nome da tabela)
UPDATE Livros
-- * SET (nome do atributo) = (valor ou dado novo do atributo)
SET preco = 25.00
-- * WHERE (chave primária para ser localizado) = (identificador do dado)
WHERE id_livro = 12;

-- todo -------------------------------------------------------------------------------------
UPDATE Livros
SET quantidade = 3
WHERE id_livro = 14;

-- todo -------------------------------------------------------------------------------------
UPDATE Livros
SET quantidade = 8
-- * IN () - para atualizar vários de uma vez
WHERE id_livro IN (1, 3, 5, 7)