import React, { useState } from 'react';
import './Signup.css'; 
  
  const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSignup = () => {
      if (username === '' || email === '' || password === '' || confirmPassword === '') {
        setError('All fields are required');
      } else if (password !== confirmPassword) {
        setError('Passwords do not match');
      } else {
        console.log('Signup successful!');
        // Add your signup logic here (e.g., calling an API)
      }
    };
  
    return (
      <div className="signup-container">
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Signup</button>
      </div>
    );
  };
  
  export default Signup;
  