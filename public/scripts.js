<<<<<<< HEAD
const { Sequelize } = require("sequelize");

// Option 1: Passing a connection URI
const sequelize = new Sequelize(
  "AAPI_Art_Corner_377",
  "student",
  "INST377@UMD",
  {
    host: "localhost",
    dialect: "mysql"
  }
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
=======
>>>>>>> 7b39db21d4bc57d8b4a5c2fc4fddf27c1b601b9f
