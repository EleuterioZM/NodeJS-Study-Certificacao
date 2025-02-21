const { Sequelize, DataTypes } = require("sequelize");

// Configuração do Sequelize para conectar ao banco de dados
const sequelize = new Sequelize("postapp", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false, // Desativa logs SQL no console (opcional)
});

// Testando a conexão com o banco de dados
sequelize
    .authenticate()
    .then(() => {
        console.log("✅ Conexão bem-sucedida com o banco de dados!");
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar ao banco de dados:", error);
    });


// Sincronizando os modelos com o banco de dados

module.exports = { sequelize, Sequelize };
