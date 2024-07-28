// Import necessary modules and configurations
const app = require('./app'); // Import the Express application
const connectMongo = require('./config/db'); // Import the MongoDB connection setup
const { connectPostgres } = require('./config/sequelize'); // Import the PostgreSQL connection setup
require('dotenv').config(); // Ensure environment variables from the .env file are available

const PORT = process.env.PORT || 5000; // Set the port for the server to listen on, default to 5000 if not specified in .env

// Asynchronous function to handle database connections and server startup
async function startServer() {
  try {
    await connectMongo(); // Attempt to connect to MongoDB
    console.log('MongoDB connected successfully.'); // Log success message for MongoDB connection
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err); // Log any errors if MongoDB connection fails
  }

  try {
    await connectPostgres(); // Attempt to connect to PostgreSQL
    console.log('PostgreSQL connected successfully.'); // Log success message for PostgreSQL connection
  } catch (err) {
    console.error('Failed to connect to PostgreSQL:', err); // Log any errors if PostgreSQL connection fails
  }

  // Start the Express server on the specified port
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the port the server is running on for confirmation
  });
}

startServer(); // Call the startServer function to initiate the connections and start the server
