import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

// Rota para listar todos os usuários
router.get("/user/get/all", UserController.getAll);

// Rota para listar um usuário por ID
router.get("/user/get/:id", UserController.getById);

// Rota para criação de um novo usuário - Recebe os dados do formulário
router.post("/user/create", UserController.create);

// Rota para atualização de usuário - Atualiza as informações do usuário
router.put("/user/update/:id", UserController.updateById);

// Rota para deletar um usuário
router.delete("/user/delete/:id", UserController.deleteById);

export { router };
