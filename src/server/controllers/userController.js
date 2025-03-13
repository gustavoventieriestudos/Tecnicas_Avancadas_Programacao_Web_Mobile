import { User } from "../database/models/User.js";

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();

    const usersMapped = users.map((user) => user.dataValues);

    res.render("user/list", { users: usersMapped });
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

const renderizeCreatePage = (req, res) => {
  res.render("user/create");
};

const renderizeUpdatePage = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    
    if (!user) {
      res.redirect("/user/get/all");
      
    }
   
    res.render("user/update", { user: user.dataValues });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar usuário", error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
};

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validação para garantir que 'nome', 'email' e 'password' não são nulos ou vazios
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Nome, email e password são obrigatórios!" });
    }

    // Criação do usuário
    await User.create({
      name,
      email,
      password,
    });

    // Obter a lista de todos os usuários e renderizar a página

    res.redirect("/user/get/all");
  } catch (error) {
    res.status(500).json({ error: `Error creating user: ${error}` });
  }
};

const updateById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.update(req.body);

    const users = await User.findAll();
    res.status(201).render("user/list", { users: users });
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
};

const deleteById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();

    const users = await User.findAll();
    res.status(201).render("user/list", { users: users });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user" });
  }
};

export const UserController = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  renderizeCreatePage,
  renderizeUpdatePage,
};
