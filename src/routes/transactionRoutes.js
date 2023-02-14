const express = require("express");
const router = express.Router();

// Controllers
const transactionController = require("../controllers/transactionController");

//Auth
const JWTAuth = require("../middleware/JWTAuth");

//create
router.post("/transactions", (req, res) => {
	JWTAuth.validateAuth({ req, res }, transactionController.createTransaction);
});

//read
//all transactions
router.get("/transactions", (req, res) => {
	JWTAuth.validateAuth({ req, res }, transactionController.getTransactions);
});

//all transactions of certain acount
router.get("/transactions_acount/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, transactionController.getTransactionsAcount);
});

//a single transaction
router.get("/transactions/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, transactionController.getTransaction);
});

//update
//a single transaction
router.put("/transactions/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, transactionController.updateTransaction);
});

//delete
//a single transaction
router.delete("/transactions/:id", (req, res) => {
	JWTAuth.validateAuth({ req, res }, transactionController.deleteTransaction);
});

module.exports = router;
