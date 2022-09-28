import React from "react";
// import logo from './logo.svg';
// import mylogo from './blood_type_coffee.svg';
// import myLogo from './myLogo.png';
import './App.css';
import Text from "./components/Text/Text";
import Logo from "./components/Logo/Logo";
import Counter from "./components/Counter/Counter";
import Time from "./components/Time/Time";
import counter from "./components/Counter/Counter";

const MyFunction = props => {
    return <div>{props.text}</div>
};

function secondTime(){
    const element = (
      <p>{new Date().toLocaleDateString()}</p>
    );
    return (element);
}

function App() {
  return (
    <div className="App">

      <header className="App-header">



          <Time/>
          <p>Hello world</p>

          <Logo/>
        {/*<img src={myLogo} className="App-logo" alt="logo" />*/}
          <MyFunction text="Garret"/>

          <Counter name="Counter" state={count}/>

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
