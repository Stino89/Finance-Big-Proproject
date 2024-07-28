// Import necessary React and React Router DOM libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Footer from './components/Footer'; // Make sure the path is correct based on your project structure

// The main App component that sets up the router and navigation for the application
const App = () => {
  return (
    <Router>
      {/* Navigation bar for the application using Bootstrap styling */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Link that acts as the logo/brand, navigates to the home page */}
        <Link className="navbar-brand" to="/">FinanceApp</Link>
        <div className="collapse navbar-collapse">
          {/* Navigation items */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* Navigation link to the Home page */}
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {/* Navigation link to the Transactions page */}
              <Link className="nav-link" to="/transactions">Transactions</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content container using Bootstrap for consistent spacing */}
      <div className="container mt-4">
        {/* React Router Routes defining the path and the component to render for each path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>

      {/* Footer component that appears at the bottom of all pages */}
      <Footer />
    </Router>
  );
};

// Export the App component to be used in index.js
export default App;
