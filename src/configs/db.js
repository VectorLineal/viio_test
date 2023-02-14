const mongoose = require("mongoose");

//mongodb connection
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to Mongo DB"))
	.catch((error) => console.error(error));