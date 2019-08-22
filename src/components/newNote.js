import React from 'react';
import {noteStyle, textInputStyle, noteAreaStyle } from './style'
function NewNote(props){

return (<div style={noteStyle}>
		<div style={noteAreaStyle}>
		</div>
		<label><textarea 
		value={props.noteValue}
		type="text" 
		name="noteValue"
		placeholder={props.dailyNote}
		onChange={(e)=>props.onChange(e)}
		style={textInputStyle}></textarea></label><br/><button 
		onClick={(event)=>props.onClickSave(event)}
		style={{backgroundColor: "#C35653", color: "#364B5D"}}><b>
		<br/>Save</b></button>
		</div>)

}
export default NewNote;