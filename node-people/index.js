const express = require("express");
const app = express();
app.use(express.json()); // necessário para ler JSON no body
const PORT = 3000;

// ---------------- MOCKS ----------------

const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "70" },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

// ---------------- FUNÇÕES AUXILIARES ----------------

// NOMES
function buscarNomePorId(id) {
  return nomes.filter((nome) => nome.id == id);
}

function buscarIdNomes(id) {
  return nomes.findIndex((nome) => nome.id == id);
}

// TIMES
function buscarTimePorId(id) {
  return times.filter((time) => time.id == id);
}

function buscarIdTimes(id) {
  return times.findIndex((time) => time.id == id);
}

// ---------------- ROTAS GERAIS ----------------

app.get("/", (req, res) => {
  res.send("Rota principal");
});

app.get("/teste", (req, res) => {
  res.send("API nodePeople está funcionando!");
});

// ---------------- ROTAS NOMES ----------------

// Buscar todos
app.get("/listaNomes", (req, res) => {
  res.send(nomes);
});

// Buscar por ID
app.get("/listaNomes/:id", (req, res) => {
  res.json(buscarNomePorId(req.params.id));
});

// Cadastrar
app.post("/listaNomes", (req, res) => {
  nomes.push(req.body);
  res.status(201).send("Nome cadastrado com sucesso!");
});

// Editar
app.put("/listaNomes/:id", (req, res) => {
  let index = buscarIdNomes(req.params.id);

  if (index === -1) {
    return res.status(404).send("Nome não encontrado!");
  }

  nomes[index].nome = req.body.nome;
  nomes[index].idade = req.body.idade;

  res.json(nomes);
});

// Excluir
app.delete("/listaNomes/:id", (req, res) => {
  let index = buscarIdNomes(req.params.id);

  if (index === -1) {
    return res.status(404).send("Nome não encontrado!");
  }

  nomes.splice(index, 1);
  res.send(`Nome com id ${req.params.id} excluído com sucesso!`);
});

// ---------------- ROTAS TIMES ----------------

// Buscar todos
app.get("/listaTimes", (req, res) => {
  res.send(times);
});

// Buscar por ID
app.get("/listaTimes/:id", (req, res) => {
  res.json(buscarTimePorId(req.params.id));
});

// Cadastrar
app.post("/listaTimes", (req, res) => {
  times.push(req.body);
  res.status(201).send("Time cadastrado com sucesso!");
});

// Excluir
app.delete("/listaTimes/:id", (req, res) => {
  let index = buscarIdTimes(req.params.id);

  if (index === -1) {
    return res.status(404).send("Time não encontrado!");
  }

  times.splice(index, 1);
  res.send(`Time com id ${req.params.id} excluído com sucesso!`);
});

// ---------------- INICIAR SERVIDOR ----------------

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
