import React from 'react';

function NewNote(props){

let noteStyle={
	borderRadius: "1rem",
	position: "absolute",
	marginTop: "-32vh",
	marginLeft: "25vw",
	borderStyle: "dashed",
	borderColor: "#364B5D",
	backgroundColor: "#E2A887",
	
	
}
let inputStyle={
		borderRadius: "1rem",
		borderStyle: "none",
		textAlign: "left",
		color: "#CD4C5E",
		padding: "2rem",
		width: "50vw",
		fontSize: "3rem",
        height: "50vh",
		background: "radial-gradient(#F5FF16, #FFFAA1)",
		outlineStyle: "none",
}
let noteList = {

}
/// Function I was messing around with to make background color change on mouseover
// let grabArandom=()=> {
	
// 		return Math.floor(Math.random() * 255) + 150;
// 	}
// function changeInputStyle(inputStyle){
// 	let outStyle = {...inputStyle}  
//     outStyle.background = `radial-gradient(rgb(${255},${255},${grabArandom()}),rgb(255,255,${grabArandom()}))`
    
//     setTimeout(function(){ props.colorChange(outStyle); }, 900); 

// }
// let mouseMoveTrick=()=>{
// 	let color = ["rgb(148,230,126)","#E082A8","#8A65E2","#5FA6E2","#71E784","#C4E770"]
// 	let count = 5
// 	let test = changeInputStyle(inputStyle)
// 	//build a function that sets a random color
// 	return test
// }

	return (<div style={noteStyle}>
		<div style={noteList}>
		</div>
		<label><textarea 
		value={props.noteValue}
		type="text" 
		name="noteValue"
		placeholder={props.dailyNote}
		onChange={(e)=>props.onChange(e)}
		style={inputStyle}></textarea></label><br/><button 
		onClick={(event)=>props.onClickSave(event)}
		style={{backgroundColor: "#E2A887", color: "#364B5D"}}>
		Click To<br/>Save</button>
		</div>)

}
export default NewNote;