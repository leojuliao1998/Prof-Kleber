--* Representando uma "entidade" como tabela no SQL
--? Criando "atributos"

-- TODO VARCHAR() = string com limite de caracteres
-- TODO INTEGER = Número inteiro
CREATE TABLE Cliente(
    id_cliente INTEGER PRIMARY KEY,
    nome VARCHAR(150),
    profissao VARCHAR(50),
    idade INTEGER 
);

-- * Cadastrando clientes
INSERT INTO Cliente(id_cliente, nome, profissao, idade)
VALUES
(1, "Cuca Beludo", "Mecânico", 47),
(2, "Eva Dias", "Enfermeira", 29),
(3, "Lucas Trado", "Pintor", 50),
(4, "Flavin Do Pneu", "Borracheiro", 31),
(5, "Shaolin Matador de Porco", "Açogueiro", 65);

-- * Realziando buscas/consultas
-- ? Busca geral (Todas as informações da tabela)
SELECT * FROM Cliente;

-- ? Busca específica (Coluna)
SELECT nome, profissao FROM Cliente;

-- ? Filtros (Quase um IF)
SELECT nome, profissao FROM Cliente WHERE idade > 40;

-- ? Ordenado
-- * POr padrão, é ordenado por inserção do dado (do primeiro ao último)
SELECT nome, profissao, idade FROM Cliente WHERE idade > 40 ORDER BY idade;

-- ? Ordenando do maior para o menor ou de Z - A
SELECT nome, profissao, idade FROM Cliente WHERE idade > 40 ORDER BY idade DESC;