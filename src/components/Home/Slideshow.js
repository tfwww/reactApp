import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './Slideshow.css'
import banner from '../../images/index_banner.png'

class Slideshow extends Component {
    componentDidMount() {
        new Swiper(this.swiperID, {
            pagination: {
                el: this.paginateID,
            }
        });
    }
    render() {
        const list = [1, 2, 3]
        const listItems = list.map((item, index) => {
            return (
                <li className="swiper-slide" key={index}>
                    <a href="">
                        <img src={banner} alt="" />
                    </a>
                </li>
            )
        })

        return (
            <div className="wxchat-banner" id="indexBanner">
                <section className="new_custom swiper-container index_tab_con" ref={self => this.swiperID = self}>
                    <ul className="swiper-wrapper">
                        {listItems}
                    </ul>
                    <div className="swiper-pagination banner-pagination" ref={self => this.paginateID = self}></div>
                </section>
            </div>
        )
    }
}

export default Slideshow;


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './style.less';
// import '../../lib/css/lib-base.less';
// import 'flex.css/dist/data-flex.css';
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.min.css';


// export default class Main extends Component {
//     render() {
//         const {
//             style,
//             children,
//             ...other
//         } = this.props;

//         return (
//             <main className="content" data-flex="dir:top" data-flex-box="1" style={style}>
//                 <div className="swiper-container" ref={self => this.swiperID = self} data-flex-box="1" style={{width: '100%'}}>
//                     <div className="swiper-wrapper">
//                         <div {...other} className="swiper-slide">
//                             {children}
//                         </div>
//                     </div>
//                     <div className="swiper-scrollbar"></div>
//                 </div>
//             </main>
//         )
//     }

//     componentDidMount() {
//         new Swiper(this.swiperID, {
//             direction: 'vertical',
//             scrollbar: '.swiper-scrollbar',
//             slidesPerView: 'auto',
//             freeMode: true,
//             observer: true,
//             observeParents: true,
//             setWrapperSize: true
//         });
//     }
// }