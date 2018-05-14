import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../assets/images/logo.svg';
import List from './list'

const App = () => (
    <div>
        <div className="container">
            <h1 className="center">Quehaceres</h1>
            <List/>
        </div>
    </div>
);

export default App;
