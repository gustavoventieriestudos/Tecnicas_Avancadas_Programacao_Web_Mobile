import express from "express";
import { routes } from "./routes/routes.js";

// Criar o servidor
const server = express();

// Middleware para interpretar JSON e formulários
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Usar rotas
server.use(routes);

export { server };
