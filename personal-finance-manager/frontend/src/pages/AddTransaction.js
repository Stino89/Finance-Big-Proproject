// src/pages/AddTransaction.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../services/api';

const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/transactions', { description, amount });
      setDescription('');
      setAmount('');
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTransaction;
