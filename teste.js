const { Sequelize, DataTypes } = require("sequelize");

// Configuração do Sequelize
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false, // Desativa logs SQL no console (opcional)
});

// Testando a conexão
sequelize
    .authenticate()
    .then(() => {
        console.log("✅ Conexão bem-sucedida com o banco de dados!");
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar ao banco de dados:", error);
    });

// Definição do modelo Postagem
const Postagem = sequelize.define("postagens", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false, // O título não pode ser nulo
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false, // O conteúdo não pode ser nulo
    },
});

// Postagem.create({
//     titulo: "Aprendendo Sequelize",
//     conteudo: "Este é um teste para salvar postagens no banco de dados usando Sequelize.",
// })
//     .then((post) => {
//         console.log("✅ Postagem criada com sucesso! ID:", post.id);
//     })
//     .catch((error) => {
//         console.error("❌ Erro ao criar postagem:", error);
//     });
// Definição do modelo Usuario (corrigindo nome da tabela)
const Usuario = sequelize.define("usuarios", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Garantir que o email seja único
        validate: {
            isEmail: true, // Validação para garantir formato de email
        },
    },
});
// Criando um novo usuário
// Usuario.create({
//     nome: "João",
//     sobrenome: "Silva",
//     idade: 25,
//     email: "joao.silva@email.com",
// })
//     .then((usuario) => {
//         console.log("✅ Usuário criado com sucesso! ID:", usuario.id);
//     })
//     .catch((error) => {
//         console.error("❌ Erro ao criar usuário:", error);
//     });
// Sincronizando os modelos com o banco de dados
sequelize
    .sync()
    .then(() => {
        console.log("✅ Tabelas 'postagens' e 'usuarios' sincronizadas com sucesso!");
    })
    .catch((error) => {
        console.error("❌ Erro ao sincronizar tabelas:", error);
    });

module.exports = { sequelize, Postagem, Usuario };
