import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent, {
  Test2Component,
} from "./Components/FirstComponent/FirstComponent";
import SecondComponent from "./Components/SecondComponent/SecondComponent";
import ComponentWithProps from "./Components/ComponentWithProps/ComponentWithProps";
import IfComponent from "./Components/IfComponent/IfComponent";
import MapComponent from "./Components/MapComponent/MapComponent";
import Exo from "./Components/Exo/Exo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <FirstComponent />
        <Test2Component></Test2Component>
        <SecondComponent></SecondComponent>
        <IfComponent></IfComponent>
        <MapComponent></MapComponent>
        <Exo profession="physicist"></Exo>
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
