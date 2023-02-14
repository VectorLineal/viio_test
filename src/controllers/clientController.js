// Managers
const clientManager = require("../managers/clientManager");

const createClient = async (req, res) => {
    const data = req.body;
    try {
        const newClient = await clientManager.createClient(data);
        return res.status(200).send(newClient);
    } catch (e) {
        return res.status(500).send({ message: e });
    }
}

const login = async (req, res) => {
    const data = req.body;
    try {
        const token = await clientManager.login(data);
        if(token === "" || token == null) return res.status(403).send({ message: "invalid authentication"});
        else {
            res.cookie("token", token, {
                httpOnly: true/*,
                secure: true,
                signed: true,
                maxAge: 100000*/
            });
            return res.status(200).send(token);
        }
    } catch (e) {
        console.log("fallo aca")
        return res.status(500).send({ message: e });
    }
}

const getClients = async (req, res) => {
    try {
        const clients = await clientManager.getClients();
        return res.status(200).send(clients);
    } catch (e) {
        return res.status(500).send({ message: e });
    }
}
const getClient = async (req, res) => {
    const {id} = req.params;
    try {
        const client = await clientManager.getClient(id);
        return res.status(200).send(client);
    } catch (e) {
        return res.status(500).send({ message: e });
    }
}
const updateClient = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const client = await clientManager.updateClient(id, data);
        return res.status(200).send(client);
    } catch (e) {
        return res.status(500).send({ message: e });
    }
}
const deleteClient = async (req, res) => {
    const {id} = req.params;
    try {
        const client = await clientManager.deleteClient(id);
        return res.status(200).send(client);
    } catch (e) {
        return res.status(500).send({ message: e });
    }
}

module.exports = {
    createClient, login, getClients, getClient, updateClient, deleteClient
}