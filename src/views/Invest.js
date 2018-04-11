import React, { Component } from 'react'
import Nav from '../shared/Nav'
import Footer from '../shared/Footer'
// import { Switch, Route } from 'react-router-dom'
import './Invest.css'
const navTitle = '投资'
const navPath = '/'

class Invest extends Component {
    render() {
        return (
            <div className="Invest">
                <Nav title={navTitle} />
                <Footer initInx={1} />
            </div>
        );
    }
}

export default Invest;
