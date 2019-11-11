import React from 'react';
import RegisterForm from './registerForm'
import {labelStyle, inputStyle, buttonStyle} from './style'

function LoginForm(props){

	return (
    props.registered ? <RegisterForm 
    username={props.username}
    password={props.password}
    email={props.email}
    inputCatcher={props.inputCatcher}
    submit={props.submit}/> : 
	<div>
	<h2>LOG IN EXISTING USER</h2>
		<form>
		  <label style={labelStyle}>
		    Username:
		    <input onChange={(e)=>props.inputCatcher(e)}
		    style={inputStyle} 
		    type="text" 
		    value={props.username}
		    name="username" />
		  </label><br/>
		   <label>
		    Password:
		     <input style={inputStyle} 
		    value={props.password}
		    onChange={(e)=>props.inputCatcher(e)}
		    type="password" 
		    name="password" />
		  </label><br/>
		  <input style={buttonStyle} onClick={(e)=>props.loginUser(e)}type="submit" value="Login" />
		<br/>
         <input style={buttonStyle} onClick={(e)=>props.register(e)}type="submit" value="Click to register new user" />
		</form>

	</div>
	)
}
export default LoginForm;