/**
 * 导航栏使用实例
 * @param {string} navPath 跳转路径
 * @param {string} navTitle 标题文本
 * <Nav path='/' title='投资' />
 * 如果不需指定跳转链接，只是回退上一页，则无需 path 属性
 * <Nav title='投资' />
 */

import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import log from '../utils/tool.js'
import './Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props)
        // This binding is necessary to make `this` work in the callback
        this.back = this.back.bind(this)
    }

    back() {
        this.props.history.goBack()
    }
    render() {
        const path = this.props.path
        let navComponent = null
        if (path) {            
            navComponent = <LinkNav path={path} />
        } else {            
            navComponent = <BackNav back={this.back} />
        }
        return (
            <div className="app-title">
                {navComponent}
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default withRouter(Nav)

function BackNav(props) {
    return (
        <button className="goBack" onClick={() => props.back()}></button>
    )
}

function LinkNav(props) {
    return (
        <Link className="goBack" to={props.path}></Link>
    )
}

