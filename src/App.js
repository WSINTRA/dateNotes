import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './components/cal'
import LoginForm from './components/loginForm'
import NewNote from './components/newNote'
import dateString from './components/dateString'
import getTodaysDay from './components/getTodaysDay'


class App extends React.Component {

  state = {
    selectedDate: "",
    selectedMonth: "",
    username: "",
    password: "",
    email: "",
    userData: [],
    noteData: [],
    loggedIn: null,
    registered: null,
    color: {},
    noteValue: ""
  }

componentDidMount() {
  this.setState({
    selectedDate: getTodaysDay("date"),
    selectedMonth: getTodaysDay("month")
  })
  if (localStorage.JWT) {
    fetch("http://localhost:3050/api/v1/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.JWT}`
      }
    }).then(res => res.json()).then(res => this.setState({
      userData: res,
      loggedIn: true
    }) );
  fetch("http://localhost:3050/api/v1/notes", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.JWT}`
      }
    }).then(res => res.json()).then(res => this.setState({
      noteData: res,
    }) );
  }

}
/////////////////////////////////////////////////////////
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

//write a function that returns only notes made for the selected day
dailyNotes=()=>{

  let date = dateString(this.state.selectedDate, this.state.selectedMonth)

  let dailyNote = this.state.noteData.filter(el => el.date === date)
  if (dailyNote.length >0){
    
     return dailyNote[0].note
   
  }
  else return null
 
}

getDate =(prev,upOrDown,state)=>{
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
  // console.log("submitting",{user: {
  //       username: this.state.username,
  //       password: this.state.password,
  //       email: this.state.email

  //     } } )
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
    this.setState( {
      userData: user,
      loggedIn: true} )
  }).then(()=> alert("Registered"))

}
////////////////////////////////////////////////
//Login needs to return a JWT
loginUser = (event) => {
  event.preventDefault()
  fetch("http://localhost:3050/api/v1/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
        }
  })
  }).then(res=> {
    if (!res.ok) {
      const error = new Error(res)
      error.message = res.statusText
      error.name = res.status
      throw error
    }
    return res.json()
  })
  .then(user => {
      localStorage.setItem("JWT", user.jwt);
      this.setState({
        userData: user,
        loggedIn: true,
        noteData: user.user.memos
      })
    }).catch(err=> {
      console.log("error:",err)
    })
}

inputCatcher=(event)=>{
  event.preventDefault()
  this.setState({
    [event.target.name] : event.target.value
  } )
}
onClickSave=(event)=>{
  // let prevMemo = this.dailyNotes()  
  let date = dateString(this.state.selectedDate, this.state.selectedMonth)
  
  fetch("http://localhost:3050/api/v1/save", {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.JWT}`
    },
    body: JSON.stringify({
        memo: {
          user_id: this.state.userData["user"].id,
          note: this.state.noteValue,
          date: date
        }        
    }) 
   }
  ).then(res=> res.json()).then(data=>this.setState({
  noteData: data
  }) )
  // 
} 



register=(event)=>{
event.preventDefault()
this.setState({
  registered: true
})
}
getSelectedDay=()=>{
let date = dateString(this.state.selectedDate, this.state.selectedMonth)
let day = new Date(date)
let name = day.getDay();
let dayArray = ["Moons day","Týrs day","Odins day","Thors day","Frijas day","Saturns day","Sun day"]
return dayArray[name]
}
onDateClick=(event)=>{
  //Find out what day of the week this is
  this.setState({
    selectedDate: event,
    noteValue: "",
  })

}

render() {

 const {registered, noteValue, userData, username, email, password, loggedIn} = this.state
return (

    <div className="App">
    Today is : {getTodaysDay("date")}/{getTodaysDay("month").toUpperCase()}/{getTodaysDay("year")}
  
    <Cal 
    monthObject={this.monthObject}
    currentMonth={getTodaysDay("month")} 
    currentDate={getTodaysDay("date")}
    month={this.state.selectedMonth}
    date={this.state.selectedDate}
    arrowClick={this.arrowClick}
    onDateClick={this.onDateClick}
    dayName={this.getSelectedDay()}
    />
    

    {loggedIn ? <NewNote 
      onClickSave={this.onClickSave}
      noteData={this.state.noteData}
      userData={userData}
      noteValue={noteValue}
      dailyNote={this.dailyNotes()}
      onChange={this.inputCatcher}
      /> : <LoginForm
      register={this.register}
      loginUser={this.loginUser}
      loggedIn={loggedIn}
      registered={registered}
      inputCatcher={this.inputCatcher} 
      username={username}
      password={password}
      email={email}
      submit={this.createNewUser}/>}
    
    </div>
  ) ;
}
}

export default App;
