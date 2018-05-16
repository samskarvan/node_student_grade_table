import React from 'react';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../assets/images/logo.svg';
import List from './list'
import AddItem from './add_item';
import SingleItem from './single_item';

const App = () => (
    <div>
        <div className="container">
            <Route exact path ="/" component={List}/>
            <Route path="/add-item" component={AddItem}/>
            <Route path="/item/:id" component={SingleItem}/>
        </div>
    </div>
);

export default App;
