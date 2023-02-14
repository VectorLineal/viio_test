const express = require("express");
const clientRoutes = require("./routes/clientRoutes");
const acountRoutes = require("./routes/acountRoutes");
const transactiontRoutes = require("./routes/transactionRoutes");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./configs/db");

const app = express();
//routes

app.use(cookieParser());
app.use(express.json());
app.use("/api", clientRoutes);
app.use("/api", acountRoutes);
app.use("/api", transactiontRoutes);

app.use("/api/healthcheck", (_, res) => res.status(200).send({ status: "OK" }));

module.exports = app;
