// src/components/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profilePicture: '',
        preferences: {},  // You can expand this based on the type of preferences you expect
        contactInfo: {
            phone: '',
            address: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone' || name === 'address') {
            setFormData({
                ...formData,
                contactInfo: { ...formData.contactInfo, [name]: value }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', formData);
            console.log('Registration successful', response.data);
            // Implement a redirect or update UI upon successful registration
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <input type="text" name="profilePicture" value={formData.profilePicture} onChange={handleChange} placeholder="Profile Picture URL" />
            <input type="text" name="phone" value={formData.contactInfo.phone} onChange={handleChange} placeholder="Phone Number" />
            <input type="text" name="address" value={formData.contactInfo.address} onChange={handleChange} placeholder="Address" />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
