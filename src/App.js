import React from "react";
import {Route, Switch} from "react-router-dom";
import Taches from "./components/Dashboard/Taches/Taches"
import AjouterTache from "./components/Dashboard/Taches/AjouterTache";


function App(props) {
    return (
        <div className="App">
            <Switch>
                <Route exact={true} path={"/"} render={(props)=><Taches {...props} />} />
                <Route path={"/add"} render={(props)=><AjouterTache {...props} />} />
            </Switch>
        </div>
    );
}

export default App;