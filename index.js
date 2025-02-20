const express = require("express");
const app = express();

// Rota principal
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
});

// Rota sobre
app.get("/sobre", (req, res) => {
    res.send("Minha Página Sobre");
});

// Rota blog
app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog");
});

// Rota dinâmica com parâmetros
app.get("/ola/:nome/:cargo/:ano", (req, res) => {
    const { nome, cargo, ano } = req.params;

    res.send(`
        <h1>Olá, ${nome}! Como está?</h1>
        <p>Seu cargo: <strong>${cargo}</strong></p>
        <p>Ano informado: <strong>${ano}</strong></p>
    `);
});

// Iniciando o servidor na porta 8081
app.listen(8081, () => {
    console.log("Servidor rodando na URL http://localhost:8081");
});
