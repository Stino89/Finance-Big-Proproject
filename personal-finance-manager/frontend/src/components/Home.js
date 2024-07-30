// Import necessary React library and components
import React from 'react';
import FinancialQuote from '../components/FinancialQuote'; // Import the FinancialQuote component for motivational financial planning content

// Define the Home component as a functional component
const Home = () => {
  return (
    <div>
      <div className="jumbotron"> {/* Jumbotron for the primary introduction and call to action */}
        <h1 className="display-4">Hello, Finance Manager!</h1>
        <p className="lead">Manage your finances easily and efficiently.</p>
        <hr className="my-4" />
        <p>Track your expenses, view transaction history, and analyze your financial habits.</p>
      </div>
      <FinancialQuote /> {/* FinancialQuote component inserted to provide motivational insights into the benefits of financial planning */}
      <div className="row"> {/* Grid layout to display key features in cards */}
        <div className="col-md-4"> {/* Individual card for budget management feature */}
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Budget</div>
            <div className="card-body">
              <h5 className="card-title">Monthly Budget</h5>
              <p className="card-text">Keep track of your monthly spending limits.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4"> {/* Individual card for savings tracking feature */}
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Savings</div>
            <div className="card-body">
              <h5 className="card-title">Annual Savings</h5>
              <p className="card-text">See how much you've saved this year.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4"> {/* Individual card for investment portfolio management */}
          <div className="card text-white bg-info mb-3">
            <div className="card-header">Investments</div>
            <div className="card-body">
              <h5 className="card-title">Portfolio Status</h5>
              <p className="card-text">Review your investment portfolio's performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
