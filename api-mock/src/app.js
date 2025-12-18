
import express from "express";

import selecoesroutes from "../infra/conexao.js";

const app = express();

// Indicar para express ler o body com json
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!");
});


//usando rota de selecoes
app.use("/selecoes", selecoesroutes);

export default app;