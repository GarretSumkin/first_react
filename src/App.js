import React, {Component} from "react";
import './App.css';
// import Text from "./components/Text/Text";
import Logo from "./components/Logo/Logo";
// import Counter from "./components/Counter/Counter";
// import LifeCycle from "./components/LifeCycle/LifeCycle";
// import ClassComponent from "./components/temp/ClassComponent/ClassComponent";
// import LifeCycleSecond from "./components/LifeCycleSecond/LifeCycleSecond";
// import FirstForm from "./components/FirstForm/FirstForm";
// import SecondForm from "./components/SeconForm/SeconForm";
import LifeCycleAll from "./components/LifeCycleAll/LifeCycleAll";
import HandoverFirst from "./components/Handover/HandoverFirst/HandoverFirst";

class App extends Component {

    state={
        hideOrSow:true
    }

    render() {


        return (
            <div className="App">

                <header className="App-header">

                    <p>Hello world</p>

                    <Logo/>

                    {/*{this.state.hideOrSow&&<LifeCycle name="Garret"/>}*/}
                    {/*<button onClick={()=>this.setState({hideOrSow:!this.state.hideOrSow})}>Hide or Show</button>*/}

                    <LifeCycleAll/>

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    <HandoverFirst/>

                </header>

            </div>
        );
    }
}


//
// function App() {
//
//
//   return (
//     <div className="App">
//
//       <header className="App-header">
//
//           <button onClick={}>hide LifeCycle</button>
//
//           <p>Hello world</p>
//
//           <Logo/>
//
//           <LifeCycle name="Garret"/>
//
//
//
//           <Counter name="Counter"/>
//
//           <Text content="Props text"/>
//           <Text content="Second props text" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//
//     </div>
//   );
// }

export default App;
