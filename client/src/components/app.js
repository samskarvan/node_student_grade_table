import React from 'react';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../assets/images/logo.svg';
import Test from './test';

const App = () => (
    <div>
        <div className="app">
            <h1>Welcome to React</h1>
            <Route exact path="/students" component={Test} />
        </div>
    </div>
);

export default App;
