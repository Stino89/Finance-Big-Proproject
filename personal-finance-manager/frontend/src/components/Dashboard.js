import React from 'react';

// Dashboard component that displays financial information and stats
const Dashboard = () => {
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
              <p className="card-text">$3,250.00</p>
            </div>
          </div>
        </div>
        
        {/* Column containing a card for alerts */}
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Alerts</h5>
              <p className="card-text">You are nearing your budget limit for Dining Out this month!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section for recent transactions with a list group */}
      <div className="recent-transactions mb-4">
        <h2>Recent Transactions</h2>
        <ul className="list-group">
          <li className="list-group-item">Gas Station - $40.00</li>
          <li className="list-group-item">Grocery Store - $76.30</li>
          <li className="list-group-item">Coffee Shop - $4.25</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
