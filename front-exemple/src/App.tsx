import React, { createContext, useContext, useEffect, useState } from "react";
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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClickComponent from "./Components/ClickComponent/ClickComponent";
import StateComponent from "./Components/SateComponent/StateComponent";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { imagePublic } from "./Services/connexionService";
import ImageUser from "./Models/ImageUser";
import Connect from "./Components/Connect/Connect";

export const contextTheme = createContext<string>("dark");

function App() {
  const [listImage, setListImage] = useState<ImageUser[]>();

  const darkMode = useContext(contextTheme);
  const [theme, setTheme] = useState(darkMode);

  useEffect(() => {
    imagePublic().then((res) => {
      console.log(res);
      setListImage(res);
    });
  }, []);
  let name = "";
  if (listImage) {
    name = listImage[0].name;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <contextTheme.Provider value="darkmode">
            <Route path="/test" element={<Exo profession="physicist"></Exo>} />
            <Route path="/chemin/:id" element={<IfComponent />} />
            <Route path="/connexion" element={<Connect></Connect>} />
          </contextTheme.Provider>
        </Routes>

        <img src={name} alt="" />
        {listImage && listImage[0].name}

        {/* <Badge badgeContent={3} color="primary">
          <BorderColorIcon></BorderColorIcon>
        </Badge> */}

        {/* 

        <Button variant="contained">Contained</Button>
        <FirstComponent />
        <Test2Component></Test2Component>
        <SecondComponent></SecondComponent>
        <IfComponent></IfComponent>
        <MapComponent></MapComponent>
        <ClickComponent compteur={1}></ClickComponent>
        <StateComponent></StateComponent>
        <Link to="/test">Liens vers test</Link> */}
      </header>
    </div>
  );
}

export default App;
