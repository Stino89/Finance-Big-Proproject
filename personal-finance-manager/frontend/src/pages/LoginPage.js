import React, { useState } from 'react'; // Import necessary hooks from React
import { useNavigate } from 'react-router-dom'; // Import hook to navigate between routes
import axios from 'axios'; // Import axios for making HTTP requests

// Define the LoginPage component
const LoginPage = () => {
  // State hooks for email and password fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function from react-router-dom

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send POST request to login endpoint with email and password
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      // Save the received token in local storage
      localStorage.setItem('token', response.data.token);
      // Navigate to the dashboard page
      navigate('/dashboard');
    } catch (error) {
      // Log the full error to the console for debugging
      console.error('Error logging in:', error);
      // Show an alert with the error message
      alert('Login failed: ' + (error.response ? JSON.stringify(error.response.data) : error.message));
    }
  };

  // Return the login form JSX
  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* Email input field */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Password input field */}
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage; // Export the LoginPage component to be used in other parts of the application
