// seed.js
const mongoose = require('mongoose');
const User = require('./models/User');
const Transaction = require('./models/Transaction');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/yourDatabaseName';

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Transaction.deleteMany({});

    // Create users
    const user1 = new User({ email: 'user1@example.com', password: 'password123', name: 'User One' });
    const user2 = new User({ email: 'user2@example.com', password: 'password123', name: 'User Two' });

    await user1.save();
    await user2.save();

    // Create transactions
    const transactions = [
      {
        userId: user1._id,
        amount: 1000,
        type: 'income',
        category: 'Salary',
        date: new Date(),
        description: 'Monthly salary'
      },
      {
        userId: user1._id,
        amount: 200,
        type: 'expense',
        category: 'Groceries',
        date: new Date(),
        description: 'Weekly groceries'
      },
      {
        userId: user2._id,
        amount: 500,
        type: 'income',
        category: 'Freelancing',
        date: new Date(),
        description: 'Freelance project'
      },
      {
        userId: user2._id,
        amount: 100,
        type: 'expense',
        category: 'Transport',
        date: new Date(),
        description: 'Monthly bus pass'
      }
    ];

    await Transaction.insertMany(transactions);

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  }
}

seedDatabase();
