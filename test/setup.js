const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
require("dotenv").config();

beforeAll(async () => {
	global.TEST_MONGO_SERVER = await MongoMemoryServer.create();
	global.TEST_MONGO_SERVER_URI = await global.TEST_MONGO_SERVER.getUri();

	const mongooseOpts = {
		useNewUrlParser: true,
		keepAlive: 1,
		connectTimeoutMS: 30000,
		autoIndex: true,
		useUnifiedTopology: true,
	};

	await mongoose.connect(global.TEST_MONGO_SERVER_URI, mongooseOpts);
});

afterEach(async () => {
	const collections = mongoose.connection.collections;

	for (const key in collections) {
		const collection = collections[key];
		await collection.deleteMany();
	}
});

afterAll(async () => {
	await global.TEST_MONGO_SERVER.stop();
});
