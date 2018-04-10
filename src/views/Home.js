import React, { Component } from 'react';
import Footer from '../shared/Footer'
import SlideshowWrapper from '../containers/SlideshowWrapper'
import IndexBtn from '../components/Home/IndexBtn'
import IndexContent from '../components/Home/IndexContent'
// import { Switch, Route } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <SlideshowWrapper />
                <IndexBtn />
                <IndexContent />
                <Footer initInx={0} />
            </div>
        );
    }
}

export default Home;