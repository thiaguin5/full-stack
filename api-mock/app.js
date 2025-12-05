import expresss from "express"
import conexao from ".../infra/conexao.js"
const app = expresss();

app.get ("/", (req, res) => {

    res.send("ola node .js");
})

export default app;


