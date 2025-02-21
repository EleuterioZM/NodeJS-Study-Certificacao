const { Sequelize, DataTypes } = require("sequelize");
const express = require("express");
const { engine } = require("express-handlebars"); 
const bodyParser = require("body-parser"); 
const app = express();


// Configuração do Handlebars como Template Engine
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//body Parser

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


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




    app.get('/post', (req, res) =>{
        res.render('formulario')
    })
    app.post('/criarPostagem', (req, res) =>{
        res.send('Texto :'+req.body.titulo+" "+"Conteudo :"+req.body.conteudo)
    })
// Definir onde estão os arquivos de views
app.set("views", "./views");

// Criar uma rota para renderizar uma página usando Handlebars
app.get("/", (req, res) => {
    res.render("home", { mensagem: "Bem-vindo ao Handlebars!" });
});

// Iniciar o servidor na porta 8081
app.listen(8081, () => {
    console.log("Servidor rodando na URL http://localhost:8081");
});
