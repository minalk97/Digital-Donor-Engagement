const express = require("express");
const cors = require("cors");
const { findAll } = require("./controller/UserController");

const app = express();

var corsOptions = {
  origin: "http://localhost:8085",
};

app.use(cors(corsOptions));

(async function () {
  findAll();
})();

app.use(express.json());
