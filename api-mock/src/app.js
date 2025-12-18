
import express from "express";

import selecoesroutes from "../routes/selecoes.routes.js";

const app = express();

// Indicar para express ler o body com json
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!");
});

//usando rota de selecoes
app.use("/selecoes", selecoesroutes);

//rota 404
app.use((req, res) => {
    res.status(404).send({ mensagem: "Rota não encontrada!" });
});

export default app;