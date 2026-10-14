import {Router} from "express";
import {buscarQuestaoService, sortearQuestaoService, responderQuestaoService} from "../services/questoes.js";

const rotas = Router();

/*
curl http://localhost:3001/api/questoes/1 -H "Authorization: Bearer SEU_TOKEN"
*/
rotas.get("/:id", async function(req, res) {
    const id = req.params.id;
    const resposta = await buscarQuestaoService(id);
    res.json(resposta);
});

/*
curl -X POST http://localhost:3001/api/questoes/sortear/ -H "Authorization: Bearer SEU_TOKEN"
*/
rotas.post("/sortear", async function(req, res) {
    const questao = await sortearQuestaoService(req.candidatoId);
    res.json({questao, concluido: questao == null});
});

/*
curl -X POST http://localhost:3001/api/questoes/8/responder/ -H "Content-Type: application/json" -H "Authorization: Bearer SEU_TOKEN" -d '{"letra_resposta":"C"}'
*/
rotas.post("/:id/responder", async function(req, res) {
    const questaoId = Number(req.params.id);
    const letraResposta = req.body.letra_resposta;
    const resposta = await responderQuestaoService(req.candidatoId,questaoId,letraResposta);
    res.json(resposta);
});

export default rotas;