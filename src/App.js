import React from "react";
import Home from './components/Home/Home';
import Test from './components/Test';
import SideBar from './components/Dashboard/SideBar';
import './App.css';
import Taches from "./components/Dashboard/Taches/Taches";
import AjouterTache from"./components/Dashboard/Taches/AjouterTache";
import ModifierTache from"./components/Dashboard/Taches/ModifierTache";
function App() {
    return ( 
        <Taches />
      
    );
}

export default App;