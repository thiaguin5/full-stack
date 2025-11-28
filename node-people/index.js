const express = require("express");
const app = express();
const PORT = 3000; // executar na porta 3000

// mock
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
      

// Criando Funções Auxiliares
// Retornar o objeto por Id
function buscarNomePorId(id) {
  return nomes.filter((nome) => nome.id == id)
}

// Pegar a posição ou index do elemento do Array por id
function buscarIdNomes(id) {
  return nomes.findIndex((nome) => nome.id == id);
}

// Rota Principal
app.get("/", (req, res) => {
  res.send("Rota principal");
});

// Rota teste
app.get("/teste", (req, res) => {
  res.send("API nodePeople está funcionando!");
});

// Buscando nomes (listaNomes)
app.get("/listaNomes", (req, res) => {
  res.send(nomes);
});

// Buscando por ID
app.get("/listaNomes/:id", (req, res) => {
  let index = req.params.id;

  res.json(buscarNomePorId(index))
});

// Criando Post para cadastrar
app.post("/listaNomes", (req, res) => {
   nomes.push(req.body);
   res.status(201).send('Nomes cadastrado com sucesso!');
});


// Criando Rota Excluir
app.delete("/listaTimes/:id", (req, res) => {
  let index = buscarIdTimes(req.params.id);
  times.splice(index, 1);
  res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);
});





//  let index = buscarIdNomes(req.params.id);
//  nomes.splice(index, 1);
//res.send(`Nomes com id ${req.params.id} excluida com sucesso!`);



app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});




//criando rotas para times 



// Criando Funções Auxiliares
// Retornar o objeto por Id
function buscarTimePorId(id) {
  return times.filter((time) => time.id == id)
}

// Pegar a posição ou index do elemento do Array por id
function buscarIdTimes(id) {
  return times.findIndex((time) => time.id == id);
}

// Rota Principal
app.get("/", (req, res) => {
  res.send("Rota principal");
});

// Rota teste
app.get("/teste", (req, res) => {
  res.send("API nodePeople está funcionando!");
});

// Buscando times (listaTimes)
app.get("/listaTimes", (req, res) => {
  res.send(times);
});

// Buscando por ID
app.get("/listaTimes/:id", (req, res) => {
  let index = req.params.id;

  res.json(buscarTimePorId(index))
});

// Criando Post para cadastrar
app.post("/listaTimes", (req, res) => {
   times.push(req.body);
   res.status(201).send('Time cadastrado com sucesso!');
});

// Criando Rota Excluir
app.delete("/listaTimes/:id", (req, res) => {
  let index = buscarIdTimes(req.params.id);
  times.splice(index, 1);
  res.send(`Time com id ${req.params.id} excluído com sucesso!`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});