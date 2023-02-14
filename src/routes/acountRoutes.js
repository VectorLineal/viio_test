const express = require("express");
const router = express.Router();

// Controllers
const acountController = require("../controllers/acountController");

//Auth
const JWTAuth = require("../middleware/JWTAuth");

//create
//crea una cuenta bancaria para el usuario de cierta ID
router.post("/acounts", (req, res) => {
	JWTAuth.validateAuth({ req, res }, acountController.createAcount);
});

//read
//all acounts
router.get("/acounts", (req, res) => {
	JWTAuth.validateAuth({ req, res }, acountController.getAcounts);
});
//all acounts from an user with certain id
router.get("/acounts_client/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, acountController.getAcountsClient);
});

//a single acount
router.get("/acounts/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, acountController.getAcount);
});

//update
//a single acount
router.put("/acounts/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, acountController.updateAcount);
});

//delete
//a single acount
router.delete("/acounts/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, acountController.deleteAcount);
});

module.exports = router;
