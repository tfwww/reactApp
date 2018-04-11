import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Invest from './views/Invest'
import Find from './views/Find'
import Mine from './views/Mine'
import './App.css';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Invest' component={Invest} />
                <Route path='/Find' component={Find} />
                <Route path='/Mine' component={Mine} />
                <Route path='/test' component={Mine} />
            </Switch>
        );
    }
}

export default App;
