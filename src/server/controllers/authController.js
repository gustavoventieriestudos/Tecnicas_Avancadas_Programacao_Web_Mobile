import bcrypt from "bcrypt";
import { User } from "../database/models/User.js";

const LoginPage = (res, req) => {
  res.render("/auth/register");
};

const RegisterPage = (req, res) => {
  res.render("/auth/register");
};

const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se os dados obrigatórios foram fornecidos
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Nome, email e senha são obrigatórios!" });
    }

    // Verificar se o email já está em uso
    const existingUser = await User.findOne({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email já está em uso!" });
    }

    // Gerar o hash da senha antes de salvar
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Criar o usuário no banco de dados
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Redirecionar para a página de login ou outro caminho após sucesso
    // Redirecionar para a página de login após o cadastro
    res.render("index");
  } catch (error) {
    res.status(500).json({ error: `Erro ao criar usuário: ${error.message}` });
  }
};

const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se os dados obrigatórios foram fornecidos
    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios!" });
    }

    // Buscar o usuário no banco de dados pelo email
    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    // Comparar a senha fornecida com a senha armazenada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // Login bem-sucedido, redirecionar para a página de home ou outra res.redirect("/home"); // Redirecionar para a página inicial ou outra página após o login
    res.render("index");
  } catch (error) {
    res.status(500).json({ error: `Erro ao fazer login: ${error.message}` });
  }
};

export const AuthController = {
  RegisterPage,
  LoginPage,
  SignIn,
  SignUp,
};
