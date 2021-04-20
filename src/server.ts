// Importando o express
import express from  "express";

// Importando o banco de dados
import "./database";

// Importando as rotas da aplicação
import { routes } from "./routes";

// Criando e iniciando o servidor
const app = express();
app.listen(3333, () => console.log("Server is running on port 3333"));

// Habilitando o express para trabalhar com JSON
app.use(express.json());

// Usando as rotas da aplicação
app.use(routes);