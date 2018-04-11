import React, { Component } from 'react'
// import Swiper from 'swiper'
import Swiper from 'swiper/dist/js/swiper.js'
import log from '../../utils/tool.js'

import 'swiper/dist/css/swiper.min.css'
import './Slideshow.css'
// import banner from '../../images/index_banner.png'

class Slideshow extends Component {
    componentDidMount() {
        new Swiper(this.swiperID, {
            pagination: {
                el: this.paginateID,
            },
            observer: true,
        });
    }

    renderList() {
        const list = this.props.list
        let listItems = []
        if (list.length > 0) {
            listItems = list.map((item, index) => {
                return (
                    <li className="swiper-slide" key={index}>
                        <a href={item.link}>
                            <img src={"/static/pic/banner/"+item.picture} alt="" />
                        </a>
                    </li>
                )
            })
        }
        return listItems
    }

    render() {
        return (
            <div className="wxchat-banner" id="indexBanner">
                <section className="new_custom swiper-container index_tab_con" ref={self => this.swiperID = self}>
                    <ul className="swiper-wrapper">
                        {this.renderList()}
                    </ul>
                    <div className="swiper-pagination banner-pagination" ref={self => this.paginateID = self}></div>
                </section>
            </div>
        )
    }
}

export default Slideshow;