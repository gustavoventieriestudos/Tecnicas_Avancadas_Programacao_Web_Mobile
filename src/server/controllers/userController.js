import { connectToDatabase } from "../database/database.js";

const getUser = async (req, res) => {
  try {
    const connection = await connectToDatabase();

    const [rows] = await connection.execute("SELECT * FROM users");

    await connection.end();
    res.render("user/list", { users: rows });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar usuário", error: error.message });
  }
};

const renderizeCreatePage = (req, res) => {
  res.render("user/create");
};

const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const connection = await connectToDatabase();

    await connection.execute("INSERT INTO users (name, email) VALUES (?, ?)", [
      name,
      email,
    ]);

    const [rows] = await connection.execute("SELECT * FROM users");

    res.render("user/list", { users: rows });

    await connection.end();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar usuário", error: error.message });
  }
};

const renderizeUpdatePage = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectToDatabase();

    const [user] = await connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );

    if (user.length > 0) {
      res.render("user/update", { user: user[0] }); // Exibe a página de edição de usuário
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }

    await connection.end();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar usuário", error: error.message });
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

    const [rows] = await connection.execute("SELECT * FROM users");

    res.render("user/list", { users: rows });

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

    const [rows] = await connection.execute("SELECT * FROM users");

    res.render("user/list", { users: rows });

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
  renderizeUpdatePage,
  renderizeCreatePage,
};
