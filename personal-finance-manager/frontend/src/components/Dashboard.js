import React, { useEffect, useState } from 'react'; // Import React hooks
import axios from 'axios'; // Import axios for making HTTP requests

// Dashboard component that displays financial information and stats
const Dashboard = () => {
  // State to store the balance and transactions
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [alert, setAlert] = useState('');

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        const response = await axios.get('http://localhost:5000/api/your-secure-endpoint', {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the Authorization header
          }
        });

        // Update state with fetched data
        setBalance(response.data.balance);
        setTransactions(response.data.transactions);
        setAlert(response.data.alert);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard</h1>

      {/* Row for organizing the card components in a grid */}
      <div className="row">
        {/* Column containing a card component for the balance */}
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Current Balance</h5>
              <p className="card-text">${balance.toFixed(2)}</p> {/* Display the balance */}
            </div>
          </div>
        </div>
        
        {/* Column containing a card for alerts */}
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Alerts</h5>
              <p className="card-text">{alert}</p> {/* Display the alert */}
            </div>
          </div>
        </div>
      </div>

      {/* Section for recent transactions with a list group */}
      <div className="recent-transactions mb-4">
        <h2>Recent Transactions</h2>
        <ul className="list-group">
          {transactions.map((transaction, index) => (
            <li key={index} className="list-group-item">
              {transaction.description} - ${transaction.amount.toFixed(2)} {/* Display each transaction */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
