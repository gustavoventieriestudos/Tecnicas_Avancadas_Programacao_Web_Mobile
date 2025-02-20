import mysql from "mysql2/promise";

const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NOME,
    });
    console.log("Conectado com sucesso ao Banco de Dados!");
    return connection;
  } catch (error) {
    console.error("Erro ao conectar com o Banco de Dados:", error);
    throw error;
  }
};

export { connectToDatabase };
