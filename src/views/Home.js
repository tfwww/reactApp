import React, { Component } from 'react';
import Footer from '../shared/Footer'
import SlideshowWrapper from '../containers/SlideshowWrapper'
import IndexLink from '../components/Home/IndexLink'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <SlideshowWrapper />
                <IndexLink />
                <Footer />
            </div>
        );
    }
}

export default Home;
