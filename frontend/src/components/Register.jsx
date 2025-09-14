// frontend/src/components/Register.jsx

import React, { useState } from 'react';

function Register() {
  // Create state variables to hold the email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // This function will be called when the form is submitted
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      // If the server response is not OK (e.g., 409 Conflict), throw an error
      throw new Error(data.message || 'Something went wrong');
    }

    // If registration is successful
    alert('Registration successful!');
    console.log('Success:', data);

  } catch (error) {
    // If there's an error with the fetch or the server response
    alert(`Registration failed: ${error.message}`);
    console.error('Error:', error);
  }
};

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email} // The input's value is tied to our state
            onChange={(e) => setEmail(e.target.value)} // Update state when user types
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password} // The input's value is tied to our state
            onChange={(e) => setPassword(e.target.value)} // Update state when user types
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;