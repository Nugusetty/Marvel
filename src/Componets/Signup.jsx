import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { useState } from 'react';


function Signup() {
	var [name, setName] = useState('');
	var [email, setEmail] = useState('');
	var [PhoneNumber, setPhoneNumber] = useState('');
	var [Password, setPassword] = useState('');
	var [ConformPassword, setConformPassword] = useState('');

	var [nameError, setNameError] = useState('');
	var [emailError, setEmailError] = useState('');
	var [PhoneNumberError, setPhoneNumberError] = useState('');
	var [PasswordError, setPasswordError] = useState('');
	var [ConformPasswordError, setConformPasswordError] = useState('');

	// ValidationPatterns
	const ExpName = /^[A-z][a-z]$/
	const ExpEmail = /^[a-z 0-9.%$]+@[a-z]+\.[a-z]{2,}$/
	const ExptelNumber = /^[6-9][0-9]{9}$/
	const ExpPassword = /^[A-Za-z0-9@_-]{7,25}$/

	// Function 
	 const handlevalidation = () => {
		if (ExpName.test(name)){
			setNameError('')
		}else{
			setNameError('First letter should be capital')
		}
	 }


  return (
    <div className='continer w-50 mt-5'>
      <div class="form-container">
	<p class="title">Sign in</p>
	<form class="form">  
		<div class="input-group">
			<label for="UserName">UserName</label>
			<input type="text" name="UserName" id="UserName" placeholder="UserName" onChange={(event) => {
				setName(event.target.value)
			}}/>
			<div className='text-danger'>
				{nameError}
			</div>

      <label for="Email">Email</label>
			<input type="Email" name="Email" id="Email" placeholder="Email" onChange={(event) => {
				setEmail(event.target.value)
			}}/>

			<label for="number">PhoneNumber</label>
			<input type="tel" name="number" id="number" placeholder="PhoneNumber" onChange={(event) => {
				setPhoneNumber(event.target.value)
			}}/>
		</div>
		
		<div class="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" onChange={(event) => {
				setPassword(event.target.value)
			}}/>

      <label for="Conform password">Conform Password</label>
			<input type="Conform password" name="Conform Password" id="Conform Password" placeholder="Conform Password" onChange={(event) => {
				setConformPassword(event.target.value)
			}}/>
		</div><br/>
		<button class="sign" onClick={handlevalidation}>Sign in</button>
	</form><br/>
	<p class="signup">Don't have an account?
		<a rel="noopener noreferrer" href="Login" class="">Login</a>
	</p>
	<div className='col'>
	<Link to='/'>Home</Link>
</div>
</div>
    </div>
  )
}

export default Signup;
