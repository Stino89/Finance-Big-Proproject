// Import necessary React and React Router DOM components for routing and linking
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import components representing different pages in the app
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Dashboard from './components/Dashboard'; // Ensure this path matches the location of Dashboard

// Main component defining the structure of the application
const App = () => {
  return (
    // Router component to handle routing across different URLs
    <Router>
      {/* Navigation bar using Bootstrap classes for styling */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Brand link that leads to the home page when clicked */}
        <Link className="navbar-brand" to="/">FinanceApp</Link>
        {/* Responsive navigation bar content */}
        <div className="collapse navbar-collapse">
          {/* List of navigation items */}
          <ul className="navbar-nav mr-auto">
            {/* Navigation item with a link to the Home page */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {/* Navigation item with a link to the Transactions page */}
            <li className="nav-item">
              <Link className="nav-link" to="/transactions">Transactions</Link>
            </li>
            {/* Navigation item with a link to the Dashboard */}
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Main content area where different pages will be rendered based on the current route */}
      <div className="container mt-4">
        {/* Routes container to define Route components */}
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the Transactions page */}
          <Route path="/transactions" element={<Transactions />} />
          {/* Route for the Dashboard page */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

// Export the App component to be used in other parts of the application, particularly index.js
export default App;
