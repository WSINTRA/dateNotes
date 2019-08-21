import React from 'react';

function Cal(props) {

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

const selection = props.monthObject.filter(month => month.name === props.month)
const arrowLeft = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.54 6.88"><defs><linearGradient id="a" x1="0.99" y1="2.37" x2="5.55" y2="2.37" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cce0f4"/><stop offset="0.06" stop-color="#c3dcf2"/><stop offset="0.16" stop-color="#a9d2ee"/><stop offset="0.28" stop-color="#80c2e7"/><stop offset="0.43" stop-color="#47acde"/><stop offset="0.52" stop-color="#1e9cd7"/><stop offset="0.87" stop-color="#0075be"/><stop offset="0.99" stop-color="#005b97"/></linearGradient><linearGradient id="b" x1="1.05" y1="4.38" x2="5.49" y2="4.38" xlink:href="#a"/></defs><title>arrowLeft</title><path d="M4.29.19.73,2A1.53,1.53,0,0,0,.19,4a1.54,1.54,0,0,0,2.06.53L5.8,2.78A1.52,1.52,0,0,0,6.34.72a1.52,1.52,0,0,0-2-.53Z" style="fill:url(#a)"/><path d="M5.75,4.08l-3.45-2A1.5,1.5,0,0,0,.79,4.68l3.44,2A1.5,1.5,0,0,0,5.75,4.08Z" style="fill:url(#b)"/></svg>'
const arrowRight = '<svg viewBox="0 0 6.54 6.88"><defs><linearGradient id="a" x1="0.99" y1="1.37" x2="4.55" y2="1.37" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cce0f4"/><stop offset="0.06" stop-color="#c3dcf2"/><stop offset="0.16" stop-color="#a9d2ee"/><stop offset="0.28" stop-color="#80c2e7"/><stop offset="0.43" stop-color="#47acde"/><stop offset="0.52" stop-color="#1e9cd7"/><stop offset="0.87" stop-color="#0075be"/><stop offset="0.99" stop-color="#005b97"/></linearGradient><linearGradient id="b" x1="1.05" y1="4.38" x2="5.49" y2="4.38" xlink:href="#a"/></defs><title>arrow</title><path d="M.73,2.77,4.29,4.55A1.54,1.54,0,0,0,6.34,4,1.51,1.51,0,0,0,5.8,2L2.25.18A1.55,1.55,0,0,0,.19.72,1.53,1.53,0,0,0,.73,2.77Z" style="fill:url(#a)"/><path d="M2.3,6.67l3.45-2A1.5,1.5,0,0,0,4.23,2.09l-3.44,2A1.5,1.5,0,0,0,2.3,6.67Z" style="fill:url(#b)"/></svg>'
  return (
    <div style={calStyle}>
    <div style={boxStyle}>

    {selection.map( month => { 
    	return ( 
    	<div style={monthStyling}> 
        
    	<div name="left" onClick={(e)=>props.arrowClick(e, month.name)}style={arrowLeftStyle} dangerouslySetInnerHTML={{ __html: arrowLeft }} />
    	{ props.currentMonth === props.month ? <h4 style={currentMonNameStyle}>{month.name}</h4> : <h4 style={monNameStyle}>{month.name}</h4>}
    	<div name="right" onClick={(e)=>props.arrowClick(e, month.name )}style={arrowRightStyle} dangerouslySetInnerHTML={{ __html: arrowRight }} />	
    	
    		{month.days.map( date=> {
		    			return (date===parseInt(props.date) ? 
		    				<p style={dateStyling} onClick={(e)=>props.onDateClick(e.target.innerText)}>
		    				<b style={highlightedDateStyle}>{date}
		    				</b></p> : 
		    				<p style={dateStyling}onClick={(e)=>props.onDateClick(e.target.innerText)}>{date}
		    				</p>
		    				)
    					  }
    					)
    				}
    			</div>
    			) 
 		    } 
   		) 
	}{props.dayName}
    </div>
    </div>
  );
}

export default Cal;


