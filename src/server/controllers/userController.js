import { User } from "../database/models/User.js";

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
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
    const { nome, email, telefone, cpf, data, hora } = req.body;
    const newUser = await User.create({
      nome,
      email,
      telefone,
      cpf,
      data,
      hora,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

const updateById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.update(req.body);
    res.status(200).json(user);
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
    res.status(204).send();
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
};
