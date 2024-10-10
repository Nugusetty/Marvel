import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className='continer w-50'>
<div class="form-container">
	<p class="title">Login</p>
	<form class="form">
		<div class="input-group">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" placeholder="username" />
		</div>
		<div class="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" />
			<div class="forgot">
				<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
			</div>
		</div>
		<button class="sign" href="Login">Login</button>
	</form><br/>
	<p class="signup">Don't have an account?
		<a rel="noopener noreferrer" href="Signup" class="">Signup</a>
	</p>
	<div className='col'>
	<Link to='/'>Home</Link>
</div>
</div>
    </div>
  )
}

export default Login;
