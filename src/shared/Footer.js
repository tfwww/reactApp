import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import ft1 from '../images/ft_1.png'
import ftOn1 from '../images/ft_1_on.png'
import ft2 from '../images/ft_2.png'
import ftOn2 from '../images/ft_2_on.png'
import ft3 from '../images/ft_3.png'
import ftOn3 from '../images/ft_3_on.png'
import ft4 from '../images/ft_4.png'
import ftOn4 from '../images/ft_4_on.png'

import './Footer.css'

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {inx: this.props.initInx}

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(inx, event) {
        this.setState({inx: inx})
    }

    // 渲染 footer 目录
    renderItems() {
        const list = [
            {inx: 0, img: ft1, onImg: ftOn1, content: '首页', link: '/'},
            {inx: 1, img: ft2, onImg: ftOn2, content: '投资', link: '/Invest'},
            {inx: 2, img: ft3, onImg: ftOn3, content: '发现', link: '/Find'},
            {inx: 3, img: ft4, onImg: ftOn4, content: '我的', link: '/Mine'},
        ]
        return list.map((item) =>
            <Link to={item.link}>
                <li className={this.state.inx === item.inx ? 'on' : ''} onClick={() => this.handleClick(item.inx)} key={item.inx}>
                    <h2 className="footer-icon">
                        <img src={this.state.inx === item.inx ? item.onImg : item.img} alt="index" />
                    </h2>
                    <p>{item.content}</p>
                </li>
            </Link>
        )
    }

    render() {
        const items = this.renderItems()

        return (
            <footer id="footer" className="menu">
                <ul className='cf'>{items}</ul>
            </footer>
        )
    }
}

export default Footer;
