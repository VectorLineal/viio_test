// Managers
const acountManager = require("../managers/acountManager");

const createAcount = async (req, res) => {
	const data = req.body;
	try {
		const newAcount = Manager.createAcount(data);
		return res.status(200).send(newAcount);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};

const getAcounts = async (req, res) => {
	try {
		const acounts = acountManager.getAcounts();
		return res.status(200).send(acounts);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};
const getAcountsClient = async (req, res) => {
	const { id } = req.params;
	try {
		const acounts = acountManager.getAcountsClient(id);
		return res.status(200).send(acounts);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};
const getAcount = async (req, res) => {
	const { id } = req.params;
	try {
		const acount = acountManager.getAcount(id);
		return res.status(200).send(acount);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};
const updateAcount = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	try {
		const acount = acountManager.updateAcount(id, data);
		return res.status(200).send(acount);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};
const deleteAcount = async (req, res) => {
	const { id } = req.params;
	try {
		const acount = acountManager.deleteAcount(id);
		return res.status(200).send(acount);
	} catch (e) {
		return res.status(500).send({ message: e });
	}
};

module.exports = {
	createAcount,
	getAcounts,
	getAcountsClient,
	getAcount,
	updateAcount,
	deleteAcount,
};
