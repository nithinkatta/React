// import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
import React from "react";
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Card/>
      <p>Page end</p>
    </div>
  );
}
// ReactDOM.render(<App/>,document.getElementById("root"));
export default App;
