import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './containers/login';

function App() {
  return (
    <div>
      <Login/>
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Tick/> */}
    </div>
  );
}

export default App;
