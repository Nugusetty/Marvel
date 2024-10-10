import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validation Patterns
  const ExpUsername = /^[A-Z][a-zA-Z ]{2,}$/;
  const ExpPassword = /^[A-Za-z0-9@_-]{7,25}$/;

  // Handle validation
  const validateUsername = () => {
    if (!ExpUsername.test(username)) {
      setUsernameError('Username must start with an uppercase letter and be at least 3 characters long.');
    } else {
      setUsernameError('');
    }
  };

  const validatePassword = () => {
    if (!ExpPassword.test(password)) {
      setPasswordError('Password must be between 7-25 characters long and can include letters, numbers, @, _, -.');
    } else {
      setPasswordError('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    validateUsername();
    validatePassword();

    if (!usernameError && !passwordError && username && password) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className='container w-50'>
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={validateUsername}
            />
            {usernameError && <p className="error">{usernameError}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
            {passwordError && <p className="error">{passwordError}</p>}
            <div className="forgot">
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button type="submit" className="sign">Login</button>
        </form><br/>
        <p className="signup">Don't have an account?
          <Link to="Signup" className=""> Signup</Link>
        </p>
        <div className='col'>
          <Link to='/'>Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
