import express from "express";
import { fileURLToPath } from "node:url";
import rotas from "./routes/index.js";

const porta = process.env.APP_PORT || 3001;
const app = express();
const frontendPath = fileURLToPath(new URL("../../", import.meta.url));

app.use(express.json());
app.use("/api", rotas);

// Serve o index.html e os arquivos públicos a partir de ABP/app.
// Assim, frontend e API ficam na mesma origem e não precisam de CORS.
app.use(express.static(frontendPath));

app.use(function (req, res) {
    res.status(404).json({ error: "Rota desconhecida" });
});

app.listen(porta, function () {
    console.log(`Rodando em http://localhost:${porta}`);
});
