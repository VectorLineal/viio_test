const express = require("express");
const router = express.Router();

// Controllers
const clientController = require("../controllers/clientController");

//Auth
const JWTAuth = require("../middleware/JWTAuth");

//create
router.post("/clients", (req, res) => {
	clientController.createClient(req, res);
});

//autentication
router.post("/login", (req, res) => {
	clientController.login(req, res);
});

//read
//all users
router.get("/clients", (req, res) => {
	JWTAuth.validateAuth({ req, res }, clientController.getClients);
});

//a single user
router.get("/clients/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, clientController.getClient);
});

//update
//a single user
router.put("/clients/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, clientController.updateClient);
});

//delete
//a single user
router.delete("/clients/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, clientController.deleteClient);
});

module.exports = router;
