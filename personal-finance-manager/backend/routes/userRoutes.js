const express = require('express');
const bcrypt = require('bcryptjs');  // Import bcryptjs for password hashing
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();  // Changed from findAll to find for Mongoose
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Updated POST route for user registration
router.post('/register', async (req, res) => {
  const { name, email, password, profilePicture, preferences, contactInfo } = req.body;
  try {
    // Hash password before saving the user
    const hashedPassword = await bcrypt.hash(password, 10);  // Hashing the password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      profilePicture,
      preferences,
      contactInfo
    });
    const savedUser = await newUser.save();  // Save the new user
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

//bcryptjs for Password Hashing: The password is hashed using bcryptjs before creating the new user object. This ensures that plain text passwords are never stored in the database.

//Handling Additional Fields: The route now explicitly handles profilePicture, preferences, and contactInfo, which you can adjust based on what data you expect and require.

//Error Status Codes: I’ve adjusted the error codes to be more appropriate (using 400 for bad requests where data might be missing or incorrect).

//Security: Password hashing and other security-related tasks should be handled on the server to prevent exposure of sensitive logic and data.
//Functionality: bcryptjs is a Node.js library, which cannot be executed in a browser environment used by the frontend.
