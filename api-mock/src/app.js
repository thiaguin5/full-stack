import expresss from "express"
const app = expresss();

app.get ("/", (req, res) => {

    res.send("ola node .js");
})

export default app;


//------------CONST DE CADASTROS-----------------


const cadastros = [
{
id: 1,
nome: "Fernanda Silva",
telefone: "11987654321",
cpf: "123.456.789-00",
email: "fernanda@gmail.com",
idade: 28,
endereco: "Rua das Flores, 123"
},
{
id: 2,
nome: "Caio Oliveira",
telefone: "11922223333",
cpf: "987.654.321-11",
email: "caio@gmail.com",
idade: 32,
endereco: "Avenida Brasil, 450"
},
{
id: 3,
nome: "Pedro Almeida",
telefone: "21999998888",
cpf: "321.654.987-55",
email: "pedro@hotmail.com",
idade: 45,
endereco: "Rua Central, 999"
}
];


//------------FUNÇÕES DE CADASTRO-----------------

function buscarTodosCadastros() {
    return cadastros;
}

function buscarCadastroPorId(id) {
    return cadastros.findIndex(cadastro => cadastro.id === id);
}


//------------ROTAS DE CADASTRO-----------------


//rota principal
app.get("/", (req, res) => {
  res.send("Rota principal");
});


//rota para buscar todos os cadastros
app.get("/cadastros", (req, res) => {
    const todosCadastros = buscarTodosCadastros();
    res.json(todosCadastros);
})

//rota para buscar cadastro por id
app.get("/cadastros/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const indice = buscarCadastroPorId(id);

})

// routes/usuarios.js
const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// EDITAR cadastro por ID

app.put("/cadastro/:id", (req, res) => {
  let app = buscarIdNomes(req.params.id);

  if (app === -1) {
    return res.status(404).send("Cadastro não encontrado!");
  }

  // Atualizando os campos
  cadastros[app].nome = req.body.nome;
  cadastros[app].telefone = req.body.telefone;
  cadastros[app].cpf = req.body.cpf;
  cadastros[app].email = req.body.email;
  cadastros[app].idade = req.body.idade;
  cadastros[app].endereco = req.body.endereco;

  res.json(cadastros [app]);
});

//rota para deletar cadastro por id
app.delete("/cadastros/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const indice = buscarCadastroPorId(id);
})
   