import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './components/cal'

class App extends React.Component {

  state = {
    selectedDate: "",
    selectedMonth: "",
  }

componentDidMount() {
  this.setState({
    selectedDate: this.getTodaysDay("date"),
    selectedMonth: this.getTodaysDay("month")
  })
}

getTodaysDay = (request) =>{
  //Takes in a string request and returns part of the date 
  //from the string "day month date year"

let d = new Date()
let date = d.toDateString().split(' ');
    switch(request) {
      case "day":
      return date[0].toLowerCase()
      case "month":
      return date[1].toLowerCase()
      case "date":
      return date[2]
      case "year":
      return date[3]
      default:
      return null
    }
}

arrowClick =(e, month)=> {
 
  let direction = e.currentTarget.getAttribute("name")
  console.log(direction," arrow clicked", month)

}

monthObject = [
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

render() {


return (
    <div className="App">
    <Cal 
    monthObject={this.monthObject}
    currentMonth={this.getTodaysDay("month")} 
    currentDate={this.getTodaysDay("date")}
    month={this.state.selectedMonth}
    date={this.state.selectedDate}
    arrowClick={this.arrowClick}
    />
    </div>
  );
}
}

export default App;
