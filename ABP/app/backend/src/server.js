import express from "express";
import rotas from "./routes/index.js";

const porta = process.env.APP_PORT;

const app = express();
app.use( express.json() );

app.use("/api", rotas);
app.use(function (req, res) {
    res.json({error:"Rota desconhecida"});
});

app.listen(porta, function () {
    console.log(`Rodando em http://localhost:${porta}`);
});