import { Router } from "express";
import { UserController } from "../controllers/userController.js";
import { AuthController } from "../controllers/authController.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("index");
});

// Auth Routes
routes.post("/register", AuthController.SignUp);
routes.post("/login", AuthController.SignIn);
routes.get("/login", AuthController.LoginPage);
routes.get("/register", AuthController.RegisterPage);

// User Routes
routes.get("/user/create/page", UserController.renderizeCreatePage);
routes.get("/user/update/:id", UserController.renderizeUpdatePage);
routes.get("/user/get/all", UserController.getAll);
routes.get("/user/get/:id", UserController.getById);
routes.post("/user/create", UserController.create);
routes.put("/user/update/:id", UserController.updateById);
routes.delete("/user/delete/:id", UserController.deleteById);

export { routes };
