const express = require('express');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/clientRoutes');
const acountRoutes = require('./routes/acountRoutes');
const transactiontRoutes = require('./routes/transactionRoutes');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
//routes

app.use(cookieParser());
app.use(express.json());
app.use('/api', clientRoutes);
app.use('/api', acountRoutes);
app.use('/api', transactiontRoutes);


app.use("/api/healthcheck", (_, res) =>
    res.status(200).send({ status: "OK" })
);

//mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to Mongo DB")).catch((error) => console.error(error));

module.exports = app;