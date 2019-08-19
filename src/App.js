import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './components/cal'
import LoginForm from './components/loginForm'
import NewNote from './components/newNote'
class App extends React.Component {

  state = {
    selectedDate: "",
    selectedMonth: "",
    username: "",
    password: "",
    email: "",
    userData: [],
    loggedIn: false,
    registered: false,
  }

componentDidMount() {
  this.setState({
    selectedDate: this.getTodaysDay("date"),
    selectedMonth: this.getTodaysDay("month")
  })

  if (localStorage.JWT) {
    fetch("http://localhost:3050/api/v1/notes", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.JWT}`
      }
    }).then(res => res.json()).then(res => this.setState({
      userData: res,
      loggedIn: true
    }) );
  }

}
/////////////////////////////////////////////////////////
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
//pass the date along with a 1 or a -1 for right and left,
arrowClick =(e, month)=> {
  let direction = e.currentTarget.getAttribute("name")
  switch(direction) {
    case "right":
    this.getDate(month, 1)
    break;
    case "left":
    this.getDate(month, -1)
    break;
  }
}

getDate = (prev,upOrDown) => {
  let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
  let selectedMonth = "";

  if ( prev === "dec" && upOrDown === 1 ){
    selectedMonth = "jan"
  }
  else if (prev === "jan" && upOrDown === -1){
    selectedMonth = "dec"
  }
  else {
    selectedMonth = months[months.indexOf(prev) + upOrDown]
  }

  this.setState({
    selectedMonth: selectedMonth
  })
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
  {name: "oct", 
  days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
  {name: "nov", 
  days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},
  {name: "dec", 
  days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},
]


//////////////////////////////////////////
createNewUser = (event) => {
  event.preventDefault()
  //Build some sort of error handling for username, email and password
  console.log("submitting",{user: {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email

      } } )
  fetch("http://localhost:3050/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user: {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email

      }

    })
  }
  ).then(res=> res.json()).then(user => {
    localStorage.setItem("JWT", user.jwt);
    this.setState( {userData: user.auth} )
  }).then(()=> alert("Registered"))

}

inputCatcher=(event)=>{
  event.preventDefault()
  this.setState({
    [event.target.name] : event.target.value
  } )
}


render() {

console.log(this.state)
 const {registered, username, email, password, loggedIn} = this.state
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
    {loggedIn ? <NewNote/> : <LoginForm
    loggedIn={loggedIn}
    registered={registered}
    inputCatcher={this.inputCatcher} 
    username={username}
    password={password}
    email={email}
    submit={this.createNewUser}/>}
    </div>
  );
}
}

export default App;
