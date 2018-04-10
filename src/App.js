import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Invest from './views/Invest'
import './App.css';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Invest' component={Invest}/>
            </Switch>
        );
    }
}

export default App;
