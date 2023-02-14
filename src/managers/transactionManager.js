// Schemas
const transactionSchema = require("../models/Transaction");
const acountSchema = require("../models/Acount");

const createTransaction = async (data) => {
    try {
        const originAcount = await acountSchema.findById(data.origin);
        const targetAcount = await acountSchema.findById(data.target);
        if(originAcount == null || targetAcount == null) data.status = "fallida"
        else{
            if(originAcount.amount >= data.amount){
                originAcount.amount -= Number(data.amount);
                targetAcount.amount += Number(data.amount);
                await originAcount.save();
                await targetAcount.save();
            }else{
                data.status = "fallida"
            }
        }
        const newTransaction = await transactionSchema.create(data);
        return newTransaction;
    } catch (e) {
        throw new Error(e);
    }
}

const getTransactions = async () => {
    try {
        const transactions = await transactionSchema.find();
        return transactions;
    } catch (e) {
        throw new Error(e);
    }
}

const getTransactionsAcount = async (id) => {
    try {
        const transactions = await transactionSchema.find().or([{origin: id}, {target: id}]);
        return transactions;
    } catch (e) {
        throw new Error(e);
    }
}

const getTransaction = async (id) => {
    try {
        const transaction = await transactionSchema.findById(id);
        return transaction;
    } catch (e) {
        throw new Error(e);
    }
}

const updateTransaction = async (id, data) => {
    try {
        const transaction = await transactionSchema.updateOne({_id: id}, {$set: {status: data.status}});
        return transaction;
    } catch (e) {
        throw new Error(e);
    }
}

const deleteTransaction = async (id) => {
    try {
        const transaction = await transactionSchema.remove({ _id: id });
        return transaction;
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    createTransaction, getTransactions, getTransactionsAcount, getTransaction, updateTransaction, deleteTransaction
}