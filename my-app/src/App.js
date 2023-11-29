import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom';
import React from "react";

function Header(){
  return (
    <header>
      <nav >
        <img src='https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png' width={40} />
      </nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </header>
  )
}
function Footer(){
  return(
    <footer>
      <p>@ all rights are reserved</p>
    </footer>
  )
}
function Table(){
  return(
  <div>
    <table border={5} cellPadding={20} >
      <tr>
        <th>Name</th>
        <th>Gmail</th>
        <th>Phno</th>
      </tr>
      <tr>
        <td>Nithin</td>
        <td>nithin@gmail.com</td>
        <td>12345...</td>
      </tr>
      <tr>
        <td>Pavan</td>
        <td>P@gmail.com</td>
        <td>12345...</td>
      </tr>
      <tr>
        <td>Kalyan</td>
        <td>K@gmail.com</td>
        <td>12345...</td>
      </tr>
    </table>
  </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Table/>
      <Footer/>
      <p>Page end</p>
    </div>
  );
}
// ReactDOM.render(<App/>,document.getElementById("root"));
export default App;
