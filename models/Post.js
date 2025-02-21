const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');  // Importando a conexão com o banco de dados

// Definindo o modelo de Postagem
const Postagem = db.sequelize.define("postagens", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false, // O título não pode ser nulo
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false, // O conteúdo não pode ser nulo
    },
});

// Sincronizando a tabela, com a opção {force: true} para recriar a tabela toda vez
Postagem.sync({ force: true })
    .then(() => {
        console.log("Tabela 'postagens' sincronizada com sucesso!");
    })
    .catch((error) => {
        console.error("Erro ao sincronizar a tabela 'postagens':", error);
    });

module.exports = Postagem;
