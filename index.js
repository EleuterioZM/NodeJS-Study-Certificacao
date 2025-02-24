const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const Post = require('./models/Post'); // Importando o modelo de postagens

// Configuração do Handlebars como Template Engine
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configuração do body-parser para processar os dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para renderizar o formulário
app.get('/post', (req, res) => {
    res.render('formulario');
});

// Rota para criar a postagem
app.post('/criarPostagem', (req, res) => {
    const { titulo, conteudo } = req.body; // Pega os dados do formulário

    // Criando o novo post no banco de dados
    Post.create({
        titulo: titulo,
        conteudo: conteudo
    })
    .then(() => {
        res.redirect('/'); // Redireciona para a página inicial após criar a postagem
    })
    .catch((error) => {
        res.status(500).send('Erro ao criar postagem: ' + error);
    });
});

// Definir onde estão os arquivos de views
app.set("views", "./views");

// Rota para renderizar a página inicial e mostrar as postagens
app.get("/", (req, res) => {
    // Buscando todas as postagens do banco de dados
    Post.findAll()
        .then((posts) => {
            res.render("home", { 
                mensagem: "Bem-vindo ao Handlebars!",
                posts: posts.map(post => post.toJSON()) // Garantindo que as postagens sejam convertidas em um formato adequado para o Handlebars
            });
        })
        .catch((error) => {
            res.status(500).send('Erro ao carregar as postagens: ' + error);
        });
});

// Rota para excluir uma postagem
app.post('/excluirPostagem/:id', (req, res) => {
    const { id } = req.params; // Pega o ID da postagem a ser excluída

    // Encontra a postagem no banco de dados e a exclui
    Post.destroy({
        where: { id: id }
    })
    .then(() => {
        res.redirect('/'); // Redireciona para a página inicial após excluir a postagem
    })
    .catch((error) => {
        res.status(500).send('Erro ao excluir postagem: ' + error);
    }); 
});             

// Iniciar o servidor na porta 8081 
app.listen(8081, () => {
    console.log("Servidor rodando na URL http://localhost:8081");
});
