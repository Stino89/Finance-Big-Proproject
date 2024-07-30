// Importing necessary libraries and components from React and React Router DOM
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing the individual page components to be used in routing
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Dashboard from './components/Dashboard';
import RegistrationPage from './pages/RegistrationPage'; // Ensure the path to RegistrationPage is correct

// Main App component that defines the structure and navigation of the application
const App = () => {
  return (
    <Router> {/* Using BrowserRouter to handle the routing of our application */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Navigation bar using Bootstrap for styling */}
        <Link className="navbar-brand" to="/">FinanceApp</Link> {/* Brand link for the application, redirects to Home */}
        <div className="collapse navbar-collapse"> {/* Responsive navigation bar content */}
          <ul className="navbar-nav mr-auto"> {/* Navigation items container */}
            <li className="nav-item"> {/* Individual navigation item */}
              <Link className="nav-link" to="/">Home</Link> {/* Link to the Home page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transactions">Transactions</Link> {/* Link to the Transactions page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link> {/* Link to the Dashboard */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link> {/* New link for the registration page */}
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4"> {/* Main content container with a top margin */}
        <Routes> {/* Container for defining Route components */}
          <Route path="/" element={<Home />} /> {/* Route for the Home page */}
          <Route path="/transactions" element={<Transactions />} /> {/* Route for the Transactions page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Route for the Dashboard */}
          <Route path="/register" element={<RegistrationPage />} /> {/* New route for the registration page */}
        </Routes>
      </div>
    </Router>
  );
};

// Export the App component to be used in other parts of the application, particularly index.js
export default App;
