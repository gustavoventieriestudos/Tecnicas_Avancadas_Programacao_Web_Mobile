import express from "express";
import { engine } from "express-handlebars";
import { routes } from "./routes/routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Criar o servidor
const server = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

server.set("views", join(__dirname, "views"));

// Configurar o Handlebars
server.engine("handlebars", engine({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

// Middleware para interpretar JSON e formulários
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Usar rotas
server.use(routes);

export { server };
