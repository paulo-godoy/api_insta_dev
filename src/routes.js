const { Router } = require("express");

const routes = new Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verificar o status da API
 *     description: Retorna uma mensagem confirmando que a API está online.
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Connected with success!"
 */
routes.get("/health", (req, res) => {
  return res.send({ message: "Connected with success!" });
});

module.exports = routes;
