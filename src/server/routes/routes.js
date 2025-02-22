import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

// Rota para listar usuários - Página principal
router.get("/user/list", UserController.getUser); // Exibe todos os usuários

// Rota para renderizar o formulário de criação de usuário
router.get("/user/create", UserController.renderizeCreatePage);

// Rota para criação de um novo usuário - Recebe os dados do formulário
router.post("/user/create", UserController.createUser); // Cria um usuário e redireciona para a lista

// Rota para renderizar o formulário de edição de usuário
router.get("/user/update/:id", UserController.renderizeUpdatePage);

// Rota para atualização de usuário - Atualiza as informações do usuário
router.put("/user/update/:id", UserController.updateUser); // Atualiza o usuário e redireciona para a lista

// Rota para deletar um usuário
router.delete("/user/delete/:id", UserController.deleteUser); // Deleta um usuário

export { router };
