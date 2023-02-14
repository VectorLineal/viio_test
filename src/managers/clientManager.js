const jwt = require("jsonwebtoken");

// Schemas
const clientSchema = require("../models/Client");

const createClient = async (data) => {
	try {
		const newClient = await clientSchema.create(data);
		return newClient;
	} catch (e) {
		throw new Error(e);
	}
};

const login = async (data) => {
	try {
		const newClient = await clientSchema.find({ email: data.email });
		if (!newClient || newClient.length == 0) return "";
		else if (newClient[0].password != data.password) return "";

		const token = jwt.sign({ email: newClient[0].email }, process.env.MY_SECRET, { expiresIn: "50s" });
		return token;
	} catch (e) {
		throw new Error(e);
	}
};

const getClients = async () => {
	try {
		const clients = await clientSchema.find();
		return clients;
	} catch (e) {
		throw new Error(e);
	}
};

const getClient = async (id) => {
	try {
		const client = await clientSchema.findById(id);
		return client;
	} catch (e) {
		throw new Error(e);
	}
};

const updateClient = async (id, data) => {
	try {
		const client = await clientSchema.updateOne({ _id: id }, { $set: { email: data.email, password: data.password } });
		return client;
	} catch (e) {
		throw new Error(e);
	}
};

const deleteClient = async (id) => {
	try {
		const client = await clientSchema.remove({ _id: id });
		return client;
	} catch (e) {
		throw new Error(e);
	}
};

module.exports = {
	createClient,
	login,
	getClients,
	getClient,
	updateClient,
	deleteClient,
};
