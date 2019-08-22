import React from 'react';
import {
	arrowLeft, 
	arrowRight,
        } from './constants'
import {	
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
  		} from './style'


function Cal(props) {

const selection = props.monthObject.filter(month => month.name === props.month)
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


