/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Cliente` (
    `cpf` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `clienteCPF` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`nome`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `categoriaNome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modelo` (
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,

    UNIQUE INDEX `Modelo_nome_key`(`nome`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NumeroSerie` (
    `numero` VARCHAR(191) NOT NULL,
    `modeloNome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `NumeroSerie_numero_key`(`numero`),
    PRIMARY KEY (`numero`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `fabricante` VARCHAR(191) NOT NULL,
    `qtdEstoque` INTEGER NOT NULL,
    `subcategoriaID` INTEGER NOT NULL,
    `modeloNome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataCompra` DATETIME(3) NOT NULL,
    `formaPag` VARCHAR(191) NOT NULL,
    `desconto` DOUBLE NOT NULL,
    `entregaNoid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemPedido` (
    `qtd` INTEGER NOT NULL,
    `compraID` INTEGER NOT NULL,
    `produtoID` INTEGER NOT NULL,
    `clienteCPF` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`compraID`, `produtoID`, `clienteCPF`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_clienteCPF_fkey` FOREIGN KEY (`clienteCPF`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategoria` ADD CONSTRAINT `Subcategoria_categoriaNome_fkey` FOREIGN KEY (`categoriaNome`) REFERENCES `Categoria`(`nome`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NumeroSerie` ADD CONSTRAINT `NumeroSerie_modeloNome_fkey` FOREIGN KEY (`modeloNome`) REFERENCES `Modelo`(`nome`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_subcategoriaID_fkey` FOREIGN KEY (`subcategoriaID`) REFERENCES `Subcategoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_modeloNome_fkey` FOREIGN KEY (`modeloNome`) REFERENCES `Modelo`(`nome`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_entregaNoid_fkey` FOREIGN KEY (`entregaNoid`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemPedido` ADD CONSTRAINT `ItemPedido_compraID_fkey` FOREIGN KEY (`compraID`) REFERENCES `Compra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemPedido` ADD CONSTRAINT `ItemPedido_produtoID_fkey` FOREIGN KEY (`produtoID`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemPedido` ADD CONSTRAINT `ItemPedido_clienteCPF_fkey` FOREIGN KEY (`clienteCPF`) REFERENCES `Cliente`(`cpf`) ON DELETE RESTRICT ON UPDATE CASCADE;
