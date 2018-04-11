import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import './Nav.css'

class Nav extends Component {

    constructor(props) {
        super(props);
        // this.state = {inx: this.props.initInx}

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(inx, event) {
    //     this.setState({inx: inx})
    // }

    // 渲染 footer 目录
    // renderItems() {
    //     const list = [
    //         {inx: 0, img: ft1, onImg: ftOn1, content: '首页', link: '/'},
    //         {inx: 1, img: ft2, onImg: ftOn2, content: '投资', link: '/Invest'},
    //         {inx: 2, img: ft3, onImg: ftOn3, content: '发现', link: '/Find'},
    //         {inx: 3, img: ft4, onImg: ftOn4, content: '我的', link: '/Mine'},
    //     ]
    //     return list.map((item) =>
    //         <Link to={item.link} key={item.inx}>
    //             <li className={this.state.inx === item.inx ? 'on' : ''} onClick={() => this.handleClick(item.inx)}>
    //                 <h2 className="footer-icon">
    //                     <img src={this.state.inx === item.inx ? item.onImg : item.img} alt="index" />
    //                 </h2>
    //                 <p>{item.content}</p>
    //             </li>
    //         </Link>
    //     )
    // }

    render() {
        return (
            <div className="app-title">
                {
                    this.props.back &&
                    <a className="goBack" href=""></a>
                }
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default Nav;

