import React, { Component } from 'react';
import Footer from '../shared/Footer'
import SlideshowWrapper from '../containers/SlideshowWrapper'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <SlideshowWrapper />
                <Footer />
            </div>
        );
    }
}

export default Home;
