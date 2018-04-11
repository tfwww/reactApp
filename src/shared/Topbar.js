/**
 * 顶栏使用实例
 * @param {string} navTitle 标题文本
 * <Topbar title='投资' />
 */

import React, { Component } from 'react'

import './Nav.css'

class Topbar extends Component {
    render() {
        return (
            <div className="app-title">
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default Topbar

