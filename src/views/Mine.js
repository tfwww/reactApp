import React, { Component } from 'react';
import Footer from '../shared/Footer'

// import { Switch, Route } from 'react-router-dom'
import './Mine.css'

class Mine extends Component {
    render() {
        return (
            <div className="Mine">
                Mine
                <Footer initInx={3} />
            </div>
        );
    }
}

export default Mine;
