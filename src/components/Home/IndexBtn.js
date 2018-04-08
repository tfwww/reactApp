import React, { Component } from 'react'
import log from '../../utils/tool.js'
import './IndexBtn.css'

class IndexLink extends Component {
    render() {
        return (
            <div className="index-links col-2">
                <a href={process.env.REACT_APP_ROOT_PATH + '/wxfront/about/about_details'}>
                    <span className="baozhang">安全保障</span>
                </a>
		        <a href={process.env.REACT_APP_ROOT_PATH + '/wxfront/friend/inviteFriends'}>
                    <span className="invit">邀请有奖</span>
                </a>
		    </div>
        )
    }
}

export default IndexLink