import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './components/cal'

class App extends React.Component {

render() {

let getTodaysDay = (request) =>{
  //Takes in a string request and returns part of the date 
  //from the string "day month date year"
  //Returns date and year as Int
let d = new Date()
let date = d.toDateString().split(' ');
    switch(request) {
      case "day":
      return date[0].toLowerCase()
      case "month":
      return date[1].toLowerCase()
      case "date":
      return parseInt(date[2])
      case "year":
      return parseInt(date[3])
      default:
      return null
    }
}

return (
    <div className="App">
    <Cal month={getTodaysDay("month")} date={getTodaysDay("date")}/>
    </div>
  );
}
}

export default App;
