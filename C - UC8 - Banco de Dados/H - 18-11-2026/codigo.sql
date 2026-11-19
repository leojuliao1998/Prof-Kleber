-- ? Agora com as chaves estrangeiras
-- ! Criamos as Entidades/Tabelas FORTES primeiro
CREATE TABLE Genero(
    id_genero INTEGER PRIMARY KEY,
    nome VARCHAR (50)
);

-- * Agora criamos a entidade FRACA (Dependente de Gênero)
CREATE TABLE Filme(
    id_filme INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR (150),
    ano INTERGER,
    id_genero INTERGER,
    FOREIGN KEY (id_genero) REFERENCES Genero (id_genero)
);

-- ! Inserindo dados
INSERT INTO Genero (id_genero, nome)
VALUES
(1, "Ação"),
(2, "Aventura"),
(3, "Comédia"),
(4, "Terror");

INSERT INTO Filme (titulo, ano, id_genero)
VALUES
("Matrix", 1999, 1),
("Mercenários", 2010, 1),
("Gente Grande", 2012, 3),
("Atividade Paranormal", 2009, 4);

-- ? Consultas
SELECT * FROM Filme;

-- * Atualizando um valor ou dado
-- * UPDATE (nome da tabela)
UPDATE Filme
-- * SET (nome do atributo) = (valor ou dado novo do atributo)
SET ano = 2010
-- * WHERE (chave primária para ser localizado) = (identificador do dado)
WHERE id_filme = 3;

UPDATE Filme
SET titulo = "Atividade Paranormal 4", ano = 2012
WHERE id_filme = 4;

-- todo Deletando um dado
DELETE FROM Filme
WHERE id_genero = 1;