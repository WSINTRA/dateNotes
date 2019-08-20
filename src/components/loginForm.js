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
	

	return (
    props.registered ? <RegisterForm 
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
		    <input onChange={(e)=>props.inputCatcher(e)}
		    style={inputStyle} 
		    type="text" 
		    value={props.username}
		    name="username" />
		  </label>
		   <label>
		    Password:
		     <input style={inputStyle} 
		    value={props.password}
		    onChange={(e)=>props.inputCatcher(e)}
		    type="password" 
		    name="password" />
		  </label>
		  <input style={buttonStyle} onClick={(e)=>props.loginUser(e)}type="submit" value="Login" />
		
         <input style={buttonStyle} onClick={(e)=>props.register(e)}type="submit" value="Click to register new user" />
		</form>

	</div>
	)
}
export default LoginForm;