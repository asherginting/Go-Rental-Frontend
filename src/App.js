import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import React from 'react'

function App() {
  const [toggle, setToggle] = React.useState(true)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {toggle && <Button sapa = "Hello" />}
          <button onClick={()=>setToggle(false)}>Hide </button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
