import React, { Component } from 'react'
import Slideshow from '../components/Home/Slideshow'

class SlideshowWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [0, 0]
        }
    }

    componentDidMount() {
        const url = '/appInterfaceController/getBanner'
        fetch(url).then(res => res.json()).then(
            (result) => {
                this.setState({
                    list: result.list
                })
            },
            (error) => {
                this.setState({
                    // isLoaded: true,
                    // error
                });
            }
        )
    }

    render() {

        const {list} = this.state
        return (
            <Slideshow list={list} />
        )
    }
}

export default SlideshowWrapper;
