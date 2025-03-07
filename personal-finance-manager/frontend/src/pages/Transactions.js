import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../services/api'; // Update this import

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get('/transactions'); // Fetching transactions from the API
        setTransactions(response.data); // Setting the transactions state with the fetched data
      } catch (error) {
        console.error('Error fetching transactions:', error); // Handling errors
      }
    };

    fetchTransactions(); // Calling the fetchTransactions function
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const handleAdd = async () => {
    if (editMode) {
      await handleUpdate(); // If in edit mode, call the update function
      return;
    }
    try {
      const response = await api.post('/transactions', { description, amount }); // Sending a POST request to add a transaction
      setTransactions([...transactions, response.data]); // Adding the new transaction to the state
      setDescription(''); // Resetting the description input
      setAmount(''); // Resetting the amount input
    } catch (error) {
      console.error('Error adding transaction:', error); // Handling errors
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/transactions/${id}`); // Sending a DELETE request to delete the transaction
      setTransactions(transactions.filter((transaction) => transaction._id !== id)); // Removing the deleted transaction from the state
    } catch (error) {
      console.error('Error deleting transaction:', error); // Handling errors
    }
  };

  const handleEdit = (transaction) => {
    setEditMode(true); // Setting edit mode to true
    setCurrentTransaction(transaction); // Setting the current transaction being edited
    setDescription(transaction.description); // Setting the description input to the transaction's description
    setAmount(transaction.amount); // Setting the amount input to the transaction's amount
  };

  const handleUpdate = async () => {
    try {
      const response = await api.put(`/transactions/${currentTransaction._id}`, {
        description,
        amount,
      }); // Sending a PUT request to update the transaction
      const updatedTransactions = transactions.map((transaction) =>
        transaction._id === currentTransaction._id ? response.data : transaction
      ); // Updating the state with the modified transaction
      setTransactions(updatedTransactions); // Setting the updated transactions state
      setDescription(''); // Resetting the description input
      setAmount(''); // Resetting the amount input
      setEditMode(false); // Exiting edit mode
      setCurrentTransaction(null); // Clearing the current transaction
    } catch (error) {
      console.error('Error updating transaction:', error); // Handling errors
    }
  };

  return (
    <div>
      <Navbar /> {/* Rendering the Navbar component */}
      <h2>Transactions</h2> {/* Heading */}
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.description}: ${transaction.amount} {/* Displaying transaction details */}
            <button onClick={() => handleDelete(transaction._id)}>Delete</button> {/* Delete button */}
            <button onClick={() => handleEdit(transaction)}>Edit</button> {/* Edit button */}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        /> {/* Input for description */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        /> {/* Input for amount */}
        <button onClick={handleAdd}>{editMode ? 'Update' : 'Add'}</button> {/* Add/Update button */}
      </div>
    </div>
  );
};

export default Transactions; // Exporting the Transactions component
