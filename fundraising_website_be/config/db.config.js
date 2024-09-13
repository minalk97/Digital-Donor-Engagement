require("dotenv").config();

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 10,
    min: 2,
    acquire: 30000,
    idle: 10000,
  },
};
