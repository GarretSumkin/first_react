import React from "react";
// import logo from './logo.svg';
// import mylogo from './blood_type_coffee.svg';
// import myLogo from './myLogo.png';
import './App.css';
import Text from "./components/Text/Text";
import Logo from "./components/Logo/Logo";

const MyFunction = props => {
    return <div>{props.text}</div>
};

function App() {
  return (
    <div className="App">


      <header className="App-header">
          <p>Hello world</p>

          <Logo/>
        {/*<img src={myLogo} className="App-logo" alt="logo" />*/}
          <MyFunction text="Garret"/>

          <Text/>
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
