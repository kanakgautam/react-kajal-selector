import React ,{useState} from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Dropdown from './components/Dropdown.js'
import SavedItems from './components/SavedItems';

function App() {

  const[dropDown,setDropDown]=useState(false);
  const [items, setItems] = useState([]);

  function handleclick () {
    setDropDown(!dropDown);
  }

  function addItem (item){
    setItems(items => [...items, item]);
  }

  return (
    <>
    <Router>
      <div className='container'>
      <div className='option-selector-wrapper'>
        <div className='option-selector'>
          <h2>Kajal</h2>
          <button className='btn' onClick={handleclick}>Choose your preferred brand</button>
        </div>
        {dropDown && <Dropdown addItem={addItem} handleClick1={handleclick}/>}
        </div>
        <ul className="list">
          {items.map((item, index) => {
            return <SavedItems value={item.title} key={index} src={item.src}/>
          })}
        </ul>
      </div>
      </Router>
    </>
  );
}

export default App;
