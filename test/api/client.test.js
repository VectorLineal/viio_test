// Dependencies
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const ObjectId = mongoose.Types.ObjectId;

// Managers
const clientManager = require("../../src/managers/clientManager");

// Models
const clientSchema = require("../../src/models/Client");

describe("Client", () => {
	test("Create new client", async () => {
		const data = {
			email: "fulanito@test.com",
			pasword: "123456",
		};

		// Create new client
		const newClient = await clientManager.createClient(data);

		// Get the new entry
		const client = await clientSchema.findById(newClient._id);

		// Compare values
		expect(newClient?.email).toBe(data.email);
		expect(newClient?.pasword).toBe(data.pasword);
	});

	test("Try to login a new client", async () => {
		const data = {
			email: "fulanito@test.com",
			pasword: "123456",
		};

		// Create new client
		const newClient = await clientManager.createClient(data);

		const loginData = {
			email: newClient.email,
			password: newClient.password,
		};

		// Try to login
		const token = await clientManager.login(loginData);
		const decoded = jwt.verify(token, process.env.MY_SECRET);

		// Compare values
		expect(decoded).toBe(loginData.email);
	});
});
