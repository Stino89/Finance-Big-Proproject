const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: '' // Default value if not provided
  },
  preferences: {
    type: Map,
    of: String,
    default: {}  // Default to an empty map if not provided
  },
  contactInfo: {
    phone: { type: String, default: '' }, // Default phone number is empty string
    address: { type: String, default: '' } // Default address is empty string
  }
}, {
  timestamps: true // Keep the existing timestamps setting
});

const User = mongoose.model('User', userSchema);

module.exports = User;
