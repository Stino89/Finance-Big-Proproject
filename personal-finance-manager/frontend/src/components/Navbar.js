// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Finance Manager</h1>
      <div>
        <a href="/">Home</a>
        <a href="/transactions">Transactions</a>
        <a href="/add">Add Transaction</a>
      </div>
    </Nav>
  );
};

export default Navbar;
