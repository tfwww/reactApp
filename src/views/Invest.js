import React, { Component } from 'react';
import Footer from '../shared/Footer'

// import { Switch, Route } from 'react-router-dom'
import './Invest.css'

class Invest extends Component {
    render() {
        return (
            <div className="Invest">
                <Footer initInx={1}/>
            </div>
        );
    }
}

export default Invest;
