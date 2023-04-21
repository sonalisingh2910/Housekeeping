import React, { useState } from 'react';
import { Register } from '../services/User_service';

function Login() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate user inputs
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (!phone.trim()) {
      setError('Please enter your phone number');
      return;
    }

    // Authenticate user
    Register({ name, phone })
      .then(token => {
        // Set token in local storage
        localStorage.setItem('token', token);

        // Clear login fields and error message
        setName('');
        setPhone('');
        setError('');

        // Redirect to dashboard
        window.location.href = '/header';
      })
      .catch(error => setError('Wrong login credentials. Please try again.'));
  };

  return (
    <div className="login-container">
      <h2 className='text-center'>Sign In</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>} {/* render error message if there is an error */}
        <label className="login-label">
          Name:
          <input className="name-input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="login-label">
          Phone Number:
          <input className="login-input" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <button className="login-submit blue-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
