import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './components/cal'
function App() {
  return (
    <div className="App">
    <Cal month={"feb"} day={12}/>
    </div>
  );
}

export default App;
