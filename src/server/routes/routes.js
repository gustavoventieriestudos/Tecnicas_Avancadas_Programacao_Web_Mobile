import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const router = Router();

router.get("/user", UserController.getUser);
router.post("/user/create", UserController.createUser);
router.put("/user/update/:id", UserController.updateUser);
router.delete("/user/delete/:id", UserController.deleteUser);

export { router };
