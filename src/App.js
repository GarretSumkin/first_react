import React from "react";
// import logo from './logo.svg';
// import mylogo from './blood_type_coffee.svg';
import myLogo from './myLogo.png';
import './App.css';
import Text from "./components/Text/Text";

const MyFunction = props => {
    return <div>{props.text}</div>
};
const MyFunctionSecond = props => {
    return <div>{props.href}</div>
};
function App() {
  return (
    <div className="App">

      <Text/>



      <header className="App-header">
          <p>Hello world</p>
        <img src={myLogo} className="App-logo" alt="logo" />
          <MyFunction text="Garret"/>
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
