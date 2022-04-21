import './App.css';
import React from 'react';
import Dogs from './components/Dogs';
import NavBar from './components/Nav'

function App() {
  return (
    <div className="App">
      <h1>This is the home page for Dogs!</h1>
      <Dogs />

    </div>
  );
}

export default App;
