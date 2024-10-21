DROP DATABASE IF EXISTS `LojaDB`;
CREATE DATABASE `LojaDB`;
USE `LojaDB`;

CREATE TABLE `Cliente` (
  `cpf` VARCHAR(14) PRIMARY KEY NOT NULL COMMENT '000.000.000-00',
  `nomeCompleto` VARCHAR(100) NOT NULL,
  `dataNasc` DATE NULL COMMENT 'YYYY-MM-DD',
  `numCelular` VARCHAR(15) NOT NULL COMMENT '(00)00000-0000',
  `email` VARCHAR(254) NOT NULL
  );

CREATE TABLE `Endereco` (
  `idEndereco` int NOT NULL AUTO_INCREMENT,
  `Logradouro` varchar(100) NOT NULL,
  `CEP` varchar(9) NOT NULL,
  `idCPF` varchar(14) NOT NULL,
  PRIMARY KEY (`idEndereco`),
  FOREIGN KEY (`idCPF`)
	REFERENCES `Cliente` (`cpf`)
    ON UPDATE RESTRICT
    ON DELETE CASCADE
);

CREATE TABLE `Modelo` (
	`nome` varchar(50) PRIMARY KEY NOT NULL
);

CREATE TABLE `numSerie` (
	`numero` varchar(50) NOT NULL PRIMARY KEY,
    `modelo` varchar(50) NOT NULL,
    FOREIGN KEY (`modelo`)
		REFERENCES `Modelo` (`nome`)
        ON UPDATE RESTRICT
        ON DELETE CASCADE
);

CREATE TABLE `Subcategoria` (
	`nome` varchar(50) NOT NULL PRIMARY KEY
);

CREATE TABLE `Categoria` (
	`nome` varchar(50) NOT NULL PRIMARY KEY,
    `Subcategoria` varchar(50) NOT NULL,
    FOREIGN KEY (`Subcategoria`)
		references `Subcategoria` (`nome`)
        on update restrict
        on delete cascade
);

CREATE TABLE `Produto` (
	`idProduto` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `fabricante` varchar(50) NOT NULL,
    `precoBase` double(6,2) NOT NULL,
    `qtdDisp` int default 0 NOT NULL,
    `modelo` varchar(50),
    `categoria` varchar(50) NOT NULL,
     CONSTRAINT fk_modelo FOREIGN KEY (`modelo`)
     references `Modelo` (`nome`)
     on update restrict
     on delete cascade,
     CONSTRAINT fk_categoria FOREIGN KEY(`categoria`)
     references `Categoria` (`nome`)
      on update restrict
     on delete cascade
);

CREATE TABLE `Compra` (
	`idCompra` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `formaPag` varchar(50) NOT NULL,
    `dataHora` DATETIME DEFAULT NOW(),
    `desconto` double(6,2) NOT NULL,
    `destino` int NOT NULL,
    constraint fk_Endereco FOREIGN KEY(`destino`)
    references `Endereco` (`idEndereco`)
    on update restrict
    on delete cascade
);

CREATE TABLE `Escolha` (
	`idCliente` varchar(14) NOT NULL,
    `idProduto` int NOT NULL,
    `idCompra`  int NOT NULL,
    `qtd` int NOT NULL DEFAULT 0,
    PRIMARY KEY (idCliente, idProduto, idCompra),
    constraint fk_idCliente
    FOREIGN KEY (`idCliente`)
	REFERENCES `Cliente` (`cpf`)
    ON UPDATE RESTRICT
    ON DELETE CASCADE,
    constraint fk_idProduto
    FOREIGN KEY (`idProduto`)
	REFERENCES `Produto` (`idProduto`)
    ON UPDATE RESTRICT
    ON DELETE CASCADE,
    constraint fk_idCompra
    FOREIGN KEY (`idCompra`)
	REFERENCES `Compra` (`idCompra`)
    ON UPDATE RESTRICT
    ON DELETE CASCADE
);
