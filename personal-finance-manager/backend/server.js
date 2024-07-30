// Import necessary modules and configurations
const app = require('./app'); // Import the Express application
const connectMongo = require('./config/db'); // Import the MongoDB connection setup
const { connectPostgres } = require('./config/sequelize'); // Import the PostgreSQL connection setup
require('dotenv').config(); // Ensure environment variables from the .env file are available

const PORT = process.env.PORT || 5000; // Set the port for the server to listen on, default to 5000 if not specified in .env

// Asynchronous function to handle database connections and server startup
async function startServer() {
  // Check for necessary environment variables
  if (!process.env.MONGO_URI || !process.env.POSTGRES_URI) {
    console.error('Environment configuration error: Database URIs are not defined.');
    process.exit(1); // Exit if critical configuration is missing
  }

  // Attempt to connect to MongoDB
  try {
    await connectMongo();
    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit if MongoDB connection fails
  }

  // Attempt to connect to PostgreSQL
  try {
    await connectPostgres();
    console.log('PostgreSQL connected successfully.');
  } catch (err) {
    console.error('Failed to connect to PostgreSQL:', err);
    process.exit(1); // Exit if PostgreSQL connection fails
  }

  // Start the Express server
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  // Handle graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      console.log('HTTP server closed.');
      // Additional cleanup can go here
      process.exit(0);
    });
  });
}

startServer(); // Call the startServer function to initiate the connections and start the server
