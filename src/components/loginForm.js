import React from 'react';
import RegisterForm from './registerForm'

function LoginForm(props){

	let labelStyle = {
		color: "Blue"
	}
	let inputStyle = {

	}
	let buttonStyle = {

	}
	let loggedInTestToken = props.registered

	return (
    loggedInTestToken ? <RegisterForm 
    username={props.username}
    password={props.password}
    email={props.email}
    inputCatcher={props.inputCatcher}
    submit={props.submit}/> : 
	<div>
	LOG IN EXISTING USER
		<form>
		  <label style={labelStyle}>
		    Username:
		    <input style={inputStyle} type="text" name="username" />
		  </label>
		   <label>
		    Password:
		    <input style={inputStyle} type="password" name="password" />
		  </label>
		  <input style={buttonStyle} onClick={()=>props.loginUser()}type="submit" value="Submit" />
		</form>

	</div>
	)
}
export default LoginForm;