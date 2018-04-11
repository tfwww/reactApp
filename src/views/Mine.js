import React, { Component } from 'react';
import Footer from '../shared/Footer'
import Topbar from '../shared/Topbar'
import Nav from '../shared/Nav'

// import { Switch, Route } from 'react-router-dom'
import './Mine.css'

class Mine extends Component {
    render() {
        return (
            <div className="Mine">
                {/* <Topbar title={'我的'} /> */}
                <Nav title={'我的'} />
                <Footer initInx={3} />
            </div>
        );
    }
}

export default Mine;
