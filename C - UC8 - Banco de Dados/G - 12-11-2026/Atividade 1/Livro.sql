CREATE TABLE Livros (
    id_livro INTEGER PRIMARY KEY,
    titulo VARCHAR (100),
    autor VARCHAR (100),
    genero VARCHAR (100),
    ano_publicacao INTEGER,
    quantidade  INTEGER,
    preco DECIMAL (6, 2)
);