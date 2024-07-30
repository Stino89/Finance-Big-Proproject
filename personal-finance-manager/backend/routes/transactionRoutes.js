const express = require('express');
const router = express.Router();

// Import the controller functions
const {
    getAllTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getTransaction
} = require('../controllers/transactions');

// Import the authentication middleware
const { protect } = require('../middleware/authMiddleware');

// Apply the 'protect' middleware to secure routes
router.get('/', protect, getAllTransactions);
router.get('/:id', protect, getTransaction);
router.post('/', protect, createTransaction);
router.put('/:id', protect, updateTransaction);
router.delete('/:id', protect, deleteTransaction);

module.exports = router;

//Authentication Check: The protect middleware will verify the JWT in the incoming request's Authorization header. If the token is valid, it will allow the request to proceed to the controller function. 
//If the token is invalid (or missing), it will block the request and return an unauthorized error.
//Secure Routes: By applying this middleware, you ensure that only authenticated users can access these routes.
//This is particularly important for operations like creating, updating, and deleting transactions, which should be restricted to logged-in users.