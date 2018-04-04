import React, { Component } from 'react'
// import './App.css';
import ft1 from '../images/ft_1.png'
import ftOn1 from '../images/ft_1_on.png'
import ft2 from '../images/ft_2.png'
import ftOn2 from '../images/ft_2_on.png'
import ft3 from '../images/ft_3.png'
import ftOn3 from '../images/ft_3_on.png'
import ft4 from '../images/ft_4.png'
import ftOn4 from '../images/ft_4_on.png'

import './Footer.css';

const list = [{
    inx: 1,
    img: ft1,
    onImg: ftOn1,
    content: '首页'
}, {
    inx: 2,
    img: ft2,
    onImg: ftOn2,
    content: '投资'
}, {
    inx: 3,
    img: ft3,
    onImg: ftOn3,
    content: '发现'
}, {
    inx: 4,
    img: ft4,
    onImg: ftOn4,
    content: '我的'
}]

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {inx: 1}

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(inx, event) {
        this.setState({inx: inx})
    }

    render() {

        const listItems = list.map((item) =>
            <li className={this.state.inx === item.inx ? 'on' : ''} onClick={() => this.handleClick(item.inx)} key={item.inx}>
                <h2 className="footer-icon">
                    <img src={this.state.inx === item.inx ? item.onImg : item.img} alt="index" />
                </h2>
                <p>{item.content}</p>
            </li>
        )

        return (
            <ul className='cf'>{listItems}</ul>
        )
    }
}

export default Footer;
