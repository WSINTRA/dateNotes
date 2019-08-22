const dateStyling = {
    color: "#13094D",
	padding: "0.2rem",
}
const highlightedDateStyle = {
	border: "solid",
    borderBottomRightRadius: '1rem',
}
const currentHighlightedDateStyle = {
	border: "solid",
    borderBottomRightRadius: '1rem',
    color: '#FC0030',
}
const arrowLeftStyle = {
	gridColumnStart: "1"
}
const arrowRightStyle = {
	gridColumnStart: "9"
}
const monthStyling = {
	marginBottom: "10vh",
	display: "grid",
	gridTemplateColumns: "repeat(7, auto)",
	gridTemplateRows: "repeat(5, 20px)",
	cursor: "crosshair",
}
const boxStyle = {
	marginBottom: "10vh",
	gridGap: "3vw",
	display: "grid",
	gridTemplateColumns: "repeat(4, auto)",
	gridAutoRows: "minmax(100px, auto)",
}
const monNameStyle = {
	gridColumnStart: "span 7",
	color: "#FC1440",
	textTransform: "uppercase",
}
const currentMonNameStyle = {
	gridColumnStart: "span 7",
	textDecoration: "underline",
	color: "#FC1440",
	textTransform: "uppercase",
}
const calStyle = {
    borderBottomRightRadius: '2rem',
	height: "43vh",
	width: "15vw",
}
const labelStyle = {
	color: "Blue"
}
const inputStyle = {

}
const buttonStyle = {

}
const noteStyle={
	borderRadius: "1rem",
	position: "absolute",
	marginTop: "-32vh",
	marginLeft: "25vw",
	borderStyle: "dashed",
	borderColor: "#364B5D",
	backgroundColor: "#E2A887",
	
	
}
const textInputStyle={
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
const noteAreaStyle = {

}

export {
    noteAreaStyle,
    noteStyle,
    textInputStyle,
	calStyle, 
	currentMonNameStyle, 
	monNameStyle, 
	boxStyle, 
	monthStyling, 
	arrowLeftStyle,
	arrowRightStyle,
	currentHighlightedDateStyle,
  	dateStyling,
  	highlightedDateStyle,
  	labelStyle,
  	inputStyle,
  	buttonStyle,
}