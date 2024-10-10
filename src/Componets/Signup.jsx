import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Validation Patterns
  const ExpName = /^[A-Z][a-zA-Z ]{2,}$/;
  const ExpEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const ExptelNumber = /^[6-9][0-9]{9}$/;
  const ExpPassword = /^[A-Za-z0-9@_-]{7,25}$/;

  // Validation Function
  const handleValidation = (event) => {
    event.preventDefault();
    let isValid = true;

    if (ExpName.test(name)) {
      setNameError('');
    } else {
      setNameError('Name should start with a capital letter and be at least 3 characters long.');
      isValid = false;
    }

    if (ExpEmail.test(email)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (ExptelNumber.test(phoneNumber)) {
      setPhoneNumberError('');
    } else {
      setPhoneNumberError('Phone number should start with 6-9 and be 10 digits long.');
      isValid = false;
    }

    if (ExpPassword.test(password)) {
      setPasswordError('');
    } else {
      setPasswordError('Password should be between 7-25 characters and include letters, numbers, and special characters.');
      isValid = false;
    }

    if (password === confirmPassword) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      // Handle the form submission (e.g., API call here)
    }
  };

  return (
    <div className='container w-50 mt-5'>
      <div className="form-container">
        <p className="title">Sign up</p>
        <form className="form" onSubmit={handleValidation}>  
          <div className="input-group">
            <label htmlFor="UserName">UserName</label>
            <input 
              type="text" 
              name="UserName" 
              id="UserName" 
              placeholder="UserName" 
              value={name} 
              onChange={(event) => setName(event.target.value)}
            />
            <div className='text-danger'>{nameError}</div>

            <label htmlFor="Email">Email</label>
            <input 
              type="email" 
              name="Email" 
              id="Email" 
              placeholder="Email" 
              value={email} 
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className='text-danger'>{emailError}</div>

            <label htmlFor="number">Phone Number</label>
            <input 
              type="tel" 
              name="number" 
              id="number" 
              placeholder="Phone Number" 
              value={phoneNumber} 
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <div className='text-danger'>{phoneNumberError}</div>
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password" 
              value={password} 
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className='text-danger'>{passwordError}</div>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              id="confirmPassword" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <div className='text-danger'>{confirmPasswordError}</div>
          </div>
          <br/>
          <button type="submit" className="sign">Sign up</button>
        </form>
        <br/>
        <p className="signup">Already have an account? 
          <Link to="/Login" className=""> Login</Link>
        </p>
        <div className='col'>
          <Link to='/'>Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
