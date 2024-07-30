const express = require('express');
const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

// Use routes
app.use('/api/users', authRoutes); // Use authRoutes for user registration and login
app.use('/api/users', userRoutes); // Ensure this doesn't conflict with authRoutes
app.use('/api/transactions', transactionRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
