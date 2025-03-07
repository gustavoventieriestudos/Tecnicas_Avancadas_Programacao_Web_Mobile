import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/user/create/page", UserController.renderizeCreatePage);

routes.get("/user/update/:id", UserController.renderizeUpdatePage);

// Rota para listar todos os usuários
routes.get("/user/get/all", UserController.getAll);

// Rota para listar um usuário por ID
routes.get("/user/get/:id", UserController.getById);

// Rota para criação de um novo usuário - Recebe os dados do formulário
routes.post("/user/create", UserController.create);

// Rota para atualização de usuário - Atualiza as informações do usuário
routes.put("/user/update/:id", UserController.updateById);

// Rota para deletar um usuário
routes.delete("/user/delete/:id", UserController.deleteById);

export { routes };
