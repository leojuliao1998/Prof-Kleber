-- ? Decimal - É um float com limite de números após a vírgula
-- ! DECIMAL(10, 2) - 10 NÚMEROS TOTAIS (antes e depois da vírgula) e 2 NÚMEROS DEPOIS DA VÍRGULA: 99999999.99

CREATE TABLE Produto(
    id_produto INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    categoria VARCHAR(50),
    quantidade INTERGER,
    preco DECIMAL(10, 2)
);

CREATE TABLE Funcionario(
    id_funcionario INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    setor VARCHAR(30)
);