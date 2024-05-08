// config.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "password",
  database: "express-crud",
  host: "localhost"
});

module.exports = sequelize;
