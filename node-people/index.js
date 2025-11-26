const express = require ("express");
const app= express();
const port = 3000;

// mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];

app.listen (port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

//rota de teste
app.get("/teste", (req, res) => {
    res.send("Rota de teste funcionando!");
});

//rota para listar nomes
app.get("/nomes", (req, res) => {
    res.json(nomes);
});






