require("dotenv").config();
const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes");

const app = express();

app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentação da API",
      version: "1.0.0",
      description: "Documentação gerada pelo Swagger para a API",
    },
  },
  apis: ["./routes.js"], // Aponta para o arquivo onde estão as rotas
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Carregar rotas da aplicação
app.use(routes);

const PORT = process.env.PORT;
// Iniciar o servidor
app.listen(PORT, () => {
  console.log("Servidor online na porta", PORT);
  console.log("Acesse a documentação em http://localhost:4002/api-docs");
});
