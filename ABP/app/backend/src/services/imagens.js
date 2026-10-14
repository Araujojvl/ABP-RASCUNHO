import pool from "../config/database.js";

export async function buscarImagemPathService(id) {
    const { rows } = await pool.query(
        `SELECT imagem_url FROM questoes WHERE id = $1`,
        [id],
    );
    return rows[0].imagem_url;
}