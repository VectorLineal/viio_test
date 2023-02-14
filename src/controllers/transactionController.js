// Managers
const transactionManager = require("../managers/transactionManager");

const createTransaction = async (req, res) => {
	const data = req.body;
	try {
		const newTransaction = await transactionManager.createTransaction(data);
		return res.status(200).send(newTransaction);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};

const getTransactions = async (req, res) => {
	try {
		const transactions = await transactionManager.getTransactions();
		return res.status(200).send(transactions);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};
const getTransactionsAcount = async (req, res) => {
	const { id } = req.params;
	try {
		const transactions = await transactionManager.getTransactionsAcount(id);
		return res.status(200).send(transactions);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};
const getTransaction = async (req, res) => {
	const { id } = req.params;
	try {
		const transaction = await transactionManager.getTransaction(id);
		return res.status(200).send(transaction);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};
const updateTransaction = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	try {
		const transaction = await transactionManager.updateTransaction(id, data);
		return res.status(200).send(transaction);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};
const deleteTransaction = async (req, res) => {
	const { id } = req.params;
	try {
		const transaction = await transactionManager.deleteTransaction(id);
		return res.status(200).send(transaction);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};

module.exports = {
	createTransaction,
	getTransactions,
	getTransactionsAcount,
	getTransaction,
	updateTransaction,
	deleteTransaction,
};
