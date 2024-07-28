const express = require('express');
const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies

// Import authRoutes
const authRoutes = require('./routes/authRoutes');

// Use authRoutes
app.use('/api/auth', authRoutes);

// Other routes
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
