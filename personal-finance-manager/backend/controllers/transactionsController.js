const Transaction = require('../models/Transaction'); // Adjust the path as needed

// Retrieve all transactions
exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({});
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching transactions: " + error.message });
    }
};

// Retrieve a single transaction by ID
exports.getTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: "Error finding transaction: " + error.message });
    }
};

// Create a new transaction
exports.createTransaction = async (req, res) => {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: "Error creating transaction: " + error.message });
    }
};

// Update an existing transaction
exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: "Error updating transaction: " + error.message });
    }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error deleting transaction: " + error.message });
    }
};
