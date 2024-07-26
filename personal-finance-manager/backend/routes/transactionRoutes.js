const express = require('express');
const router = express.Router();
const { getAllTransactions, createTransaction } = require('../controllers/transactions');

router.get('/', getAllTransactions);
router.post('/', createTransaction);

module.exports = router;
