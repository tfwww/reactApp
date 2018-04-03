import React, { Component } from 'react'
// import './App.css';
import ft1 from '../images/ft_1.png'
import './Footer.css';


class Footer extends Component {
  render() {
    return (
        <ul className="cf">
            <li className="on">
                <h2 className="footer-icon"><img src={ft1} alt="ft1" /></h2>
                <p>首页</p>
            </li>
            <li className="">
                <h2 className="footer-icon"><img src={ft1} alt="ft1" /></h2>
                <p>投资</p>
            </li>
            <li className="">
                <h2 className="footer-icon"><img src={ft1} alt="ft1" /></h2>
                <p>发现</p>
            </li>
            <li className="">
                <h2 className="footer-icon"><img src={ft1} alt="ft1" /></h2>
                <p>我的</p>
            </li>
        </ul>
    );
  }
}

export default Footer;
