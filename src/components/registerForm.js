import React from 'react';
import {labelStyle, inputStyle, buttonStyle} from './style'

function RegisterForm(props){

	return (
	<div>
	CREATE A NEW USER
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
		   <label>
		    email:
		    <input style={inputStyle} 
		    value={props.email}
		    onChange={(e)=>props.inputCatcher(e)}
		    type="text" 
		    name="email" />
		  </label><br/>
		  <input style={buttonStyle} 
		  onClick={(e)=>props.submit(e)}
		  type="submit" 
		  value="Register" />
		</form>

	</div>
	)
}
export default RegisterForm;