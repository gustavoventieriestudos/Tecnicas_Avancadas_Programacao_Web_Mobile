import { Sequelize } from "sequelize";

console.log(process.env.DATABASE_DIALECT);

export const connection = new Sequelize(
  `${process.env.DATABASE_NAME}`,
  `${process.env.DATABASE_USER}`,
  `${process.env.DATABASE_PASS}`,
  {
    host: `${process.env.DATABASE_HOST}`,
    dialect: `${process.env.DATABASE_DIALECT}`,
  }
);
