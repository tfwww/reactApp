import React, { Component } from 'react'
import Topbar from '../shared/Topbar'
import Footer from '../shared/Footer'
// import { Switch, Route } from 'react-router-dom'
import './Invest.css'
const navTitle = '投资'

class Invest extends Component {
    render() {
        return (
            <div className="Invest">
                <Topbar title={navTitle} />
                <Footer initInx={1} />
            </div>
        );
    }
}

export default Invest;
