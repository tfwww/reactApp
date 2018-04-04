import React, { Component } from 'react';
import Footer from './shared/Footer'
import Slideshow from './components/Home/Slideshow'
import './App.css';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Slideshow />
			<Footer />
		</div>
    );
  }
}

export default App;
