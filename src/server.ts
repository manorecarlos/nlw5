// Importando o express
import express from  "express";

// Criando e iniciando o servidor
const app = express();
app.listen(3333, () => console.log("Server is running on port 3333"));

// Rota GET
app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW05"
  })
});

// Rota POST
app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" });
});