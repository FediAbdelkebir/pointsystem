import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Route render={(props)=><App {...props} />}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);