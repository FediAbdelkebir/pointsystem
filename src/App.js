import React from "react";
import {Route, Switch} from "react-router-dom";
import Taches from "./components/Dashboard/Taches/Taches"
import AjouterTache from "./components/Dashboard/Taches/AjouterTache";
import Societes from "./components/Dashboard/Sociétés/Societes";
import AjouterSocietes from "./components/Dashboard/Sociétés/AjouterSociete";

function App(props) {
    return (
        <div className="App">
            <Switch>
                <Route exact={true} path={"/"} render={(props)=><Taches {...props} />} />
                <Route path={"/AjouterTache"} render={(props)=><AjouterTache {...props} />} />
                <Route path={"/Taches"} render={(props)=><Taches {...props} />} />
                <Route path={"/AjouterSocietes"} render={(props)=><AjouterSocietes {...props} />} />
                <Route path={"/Societes"} render={(props)=><Societes {...props} />} />
            </Switch>
        </div>
    );
}

export default App;