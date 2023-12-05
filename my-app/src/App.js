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
      <div className='Card--placing'>
        <Card
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </div>
      <p>Page end</p>
    </div>
  );
}
// ReactDOM.render(<App/>,document.getElementById("root"));
export default App;
