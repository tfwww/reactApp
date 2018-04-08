import React, { Component } from 'react'
import log from '../../utils/tool.js'
import './IndexLink.css'

class IndexLink extends Component {
    render() {
        return (
            <div className="index-links col-2">
		        <a href=''>
                    <span className="baozhang">安全保障</span>
                </a>
		        <a href=''>
                    <span className="invit">邀请有奖</span>
                </a>
		    </div>
        )
    }
}

export default IndexLink