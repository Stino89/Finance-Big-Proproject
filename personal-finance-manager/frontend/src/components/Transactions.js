// In your Transactions.js component
import React from 'react';

const Transactions = () => {
  // Example data, replace with your actual data fetching logic
  const transactions = [
    { id: 1, date: "2021-07-01", description: "Groceries", amount: "-$50" },
    { id: 2, date: "2021-07-02", description: "Salary", amount: "+$3000" },
    { id: 3, date: "2021-07-03", description: "Coffee", amount: "-$5" },
  ];

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <th scope="row">{transaction.id}</th>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
