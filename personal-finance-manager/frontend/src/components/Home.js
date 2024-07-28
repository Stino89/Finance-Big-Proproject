// In your Home.js component
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Hello, Finance Manager!</h1>
        <p className="lead">Manage your finances easily and efficiently.</p>
        <hr className="my-4" />
        <p>Track your expenses, view transaction history, and analyze your financial habits.</p>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Budget</div>
            <div className="card-body">
              <h5 className="card-title">Monthly Budget</h5>
              <p className="card-text">Keep track of your monthly spending limits.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Savings</div>
            <div className="card-body">
              <h5 className="card-title">Annual Savings</h5>
              <p className="card-text">See how much you've saved this year.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
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
