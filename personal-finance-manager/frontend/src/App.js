// Importing necessary libraries and components from React and React Router DOM
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { ThemeProvider, useTheme } from './ThemeContext';

// Lazy loading the page components to improve performance
const Home = lazy(() => import('./pages/Home'));
const Transactions = lazy(() => import('./pages/Transactions'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

// Component for the theme toggle button
const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant="secondary">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

// Main App component that defines the structure and navigation of the application
const App = () => {
  return (
    <ThemeProvider> {/* Wrap the entire application in the ThemeProvider to provide theme context */}
      <Router> {/* Router component to handle routing within the application */}
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light"> {/* Responsive navbar using Bootstrap */}
          <Container>
            <Navbar.Brand as={NavLink} to="/">FinanceApp</Navbar.Brand> {/* Navigation brand that links to home */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* Toggle button for collapsible navbar */}
            <Navbar.Collapse id="responsive-navbar-nav"> {/* Collapsible navbar content */}
              <Nav className="me-auto"> {/* Navigation links */}
                <Nav.Link as={NavLink} to="/" end>Home</Nav.Link> {/* NavLink for home page */}
                <Nav.Link as={NavLink} to="/transactions">Transactions</Nav.Link> {/* NavLink for transactions page */}
                <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link> {/* NavLink for dashboard */}
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link> {/* NavLink for registration page */}
              </Nav>
              <ThemeToggleButton /> {/* Button to toggle the theme */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4"> {/* Main content container with top margin */}
          <Suspense fallback={<div>Loading...</div>}> {/* Suspense component for handling the loading state of lazy-loaded components */}
            <Routes> {/* Routes container to define different routes */}
              <Route path="/" element={<Home />} /> {/* Route for the Home page */}
              <Route path="/transactions" element={<Transactions />} /> {/* Route for the Transactions page */}
              <Route path="/dashboard" element={<Dashboard />} /> {/* Route for the Dashboard */}
              <Route path="/register" element={<RegistrationPage />} /> {/* Route for the Registration page */}
              <Route path="*" element={<div>Not Found</div>} /> {/* Catch-all route for undefined paths */}
            </Routes>
          </Suspense>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
