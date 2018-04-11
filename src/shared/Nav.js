/**
 * 导航栏使用实例
 * @param {string} navPath 跳转路径
 * @param {string} navTitle 标题文本
 * <Nav path='/' title='投资' />
 * 如果不需跳转功能，则无需 path 属性
 * <Nav title='投资' />
 */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="app-title">
                {
                    this.props.path &&
                    <Link className="goBack" to={this.props.path}></Link>
                }
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default Nav;

