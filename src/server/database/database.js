import { connection } from "./config/connection.js";

export const startDatabase = async () => {
  await connection
    .authenticate()
    .then(
      async () =>
        await connection
          .sync({ force: true })
          .then(() => console.log("Database successfully synchronized!"))
          .catch((error) => console.log("Failed Connection: ", error))
    )
    .catch((error) => console.log("Failed Connection: ", error));
};
