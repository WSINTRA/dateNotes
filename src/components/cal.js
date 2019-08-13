import React from 'react';

function Cal(props) {

const dayStyling = {
	display: "inline",
	padding: "0.2rem",
}
const highlightedDayStyle = {
	border: "solid",
}

const monthStyling = {
	marginBottom: "10vh",
	display: "grid",
	gridTemplateColumns: "repeat(7, auto)",
	gridTemplateRows: "repeat(5, 20px)",
}
const boxStyle = {
	marginBottom: "10vh",
	gridGap: "3vw",
	display: "grid",
	gridTemplateColumns: "repeat(4, auto)",
	gridAutoRows: "minmax(100px, auto)",
}
const calStyle = {
	height: "70px",
	width: "70px",
}
const monthObject = [
   {name: "jan",
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
	{name: "feb", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]},
	{name: "mar", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
	{name: "apr", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},
	{name: "may", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
	{name: "jun", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},
	{name: "jul", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
	{name: "aug", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
	{name: "sep", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},
	{name: "nov", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},
	{name: "dec", 
	days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
]
const selection = monthObject.filter(month => month.name === props.month)

  return (
    <div style={calStyle}>

    <div style={boxStyle}>

    {selection.map( month => { 
    	return ( <div style={monthStyling}> 
    		{month.name}
    		{month.days.map( day=> {
		    			return (day===props.day ? 
		    				<p style={dayStyling}>
		    				<b style={highlightedDayStyle}>{day}
		    				</b></p> : 
		    				<p style={dayStyling}>{day}
		    				</p>
		    				)
    					  }
    					)
    				}
    			</div>
    			) 
 		    } 
   		) 
	}
    </div>
    </div>
  );
}

export default Cal;


