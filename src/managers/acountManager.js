// Schemas
const acountSchema = require("../models/Acount");

const createAcount = async (data) => {
	try {
		const newAcount = await acountSchema.create(data);
		return newAcount;
	} catch (e) {
		throw new Error(e);
	}
};

const getAcounts = async () => {
	try {
		const acounts = await acountSchema.find();
		return acounts;
	} catch (e) {
		throw new Error(e);
	}
};

const getAcountsClient = async (id) => {
	try {
		const acounts = await acountSchema.find({ client: id });
		return acounts;
	} catch (e) {
		throw new Error(e);
	}
};

const getAcount = async (id) => {
	try {
		const acount = await acountSchema.findById(id);
		return acount;
	} catch (e) {
		throw new Error(e);
	}
};

const updateAcount = async (id, data) => {
	try {
		const acount = await acountSchema.updateOne({ _id: id }, { $set: { code: data.code } });
		return acount;
	} catch (e) {
		throw new Error(e);
	}
};

const deleteAcount = async (id) => {
	try {
		const acount = await acountSchema.remove({ _id: id });
		return acount;
	} catch (e) {
		throw new Error(e);
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
