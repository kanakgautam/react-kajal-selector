import React ,{useState} from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Dropdown from './components/Dropdown.js'

function App() {

  const[dropDown,setDropDown]=useState(false);

  const handleclick = () =>{
    setDropDown(!dropDown);
  }
  return (
    <>
    <Router>
      <div className='container'>
        <div className='option-selector'>
          <h2>Kajal</h2>
          <button className='btn' onClick={handleclick}>Choose your preferred brand</button>
        </div>
        {dropDown && <Dropdown />}
      </div>
      </Router>
    </>
  );
}

export default App;
