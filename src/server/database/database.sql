-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS user_management;

-- Usar o banco de dados recém-criado
USE user_management;

-- Criar a tabela de usuários
CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

