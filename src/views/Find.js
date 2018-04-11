import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../shared/Footer'
import Topbar from '../shared/Topbar'
// import { Switch, Route } from 'react-router-dom'
import './Find.css'
const navTitle = '发现'

class Find extends Component {
    render() {
        return (
            <div className="Find">
                <Topbar title={navTitle} />
                <div>about</div>
                <div>about</div>
                <div>about</div>
                <Link to={'/test'}>
                    <div>about</div>
                </Link>
                <Footer initInx={2} />
            </div>
        );
    }
}

export default Find;
