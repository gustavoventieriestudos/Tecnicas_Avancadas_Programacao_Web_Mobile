import { connectToDatabase } from "../database/database.js";

const getUser = async (req, res) => {
  try {
    const connection = await connectToDatabase();
    const [rows] = await connection.execute("SELECT * FROM users");
    res.json(rows);
    await connection.end();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar usuário", error: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const connection = await connectToDatabase();
    await connection.execute("INSERT INTO users (name, email) VALUES (?, ?)", [
      name,
      email,
    ]);
    res.json({ message: "User Created" });
    await connection.end();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar usuário", error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const connection = await connectToDatabase();
    await connection.execute(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id]
    );
    res.json({ message: "User Updated" });
    await connection.end();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar usuário", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await connectToDatabase();
    await connection.execute("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "User Deleted" });
    await connection.end();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao deletar usuário", error: error.message });
  }
};

export const UserController = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
