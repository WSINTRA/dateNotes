import React from 'react';

function NewNote(props){

let noteStyle={
	borderRadius: "1rem",
	position: "absolute",
	marginTop: "-32vh",
	marginLeft: "25vw",
	borderStyle: "solid",
	borderColor: "#FFF9BA",
	backgroundColor: "yellow",
	boxShadow: "10px 10px 10px rgba(11,10,9,0.1)",
	
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

	return (<div style={noteStyle}>
		<div style={noteList}>Note List for current date</div>
		<label><textarea type="text" placeholder="Type memo here"style={inputStyle}/></label></div>)

}
export default NewNote;