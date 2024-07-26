const Transaction = require('../models/Transaction');

// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new transaction
const createTransaction = async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllTransactions,
  createTransaction,
};
