require("dotenv").config();
module.exports = {
  development: {
    url: process.env.DB_URL,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: "0",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: "0",
  },
};
