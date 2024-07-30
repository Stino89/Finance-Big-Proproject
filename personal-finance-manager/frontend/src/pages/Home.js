// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';  // Import the Navbar component for consistent navigation
import FinancialQuote from '../components/FinancialQuote'; // Import the FinancialQuote component for motivational content

// Defines the Home component as a functional component
const Home = () => {
  return (
    <div>
      {/* Include the Navbar at the top of the home page for navigation */}
      <Navbar />
      {/* Main heading for the home page */}
      <h2>Welcome to your Personal Finance Manager</h2>
      {/* Embed the FinancialQuote component to provide insightful content about financial planning */}
      <FinancialQuote />
    </div>
  );
};

// Export the Home component to make it available for use in other parts of the app
export default Home;
