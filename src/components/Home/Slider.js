import React, { Component } from 'react';

import '../../styles/banner.css'
import banner1 from '../../styles/img/banner1.jpg';
import banner2 from '../../styles/img/banner2.jpg';
import banner3 from '../../styles/img/banner3.jpg';

class Slider extends Component {

    render() {
        return (
            <div id="slider">
                <div id="slide-holder">
                    <div class="slide"><img src={banner1} alt="" /></div>
                    <div class="slide"><img src={banner2} alt="" /></div>
                    <div class="slide"><img src={banner3} alt="" /></div>
                    Home
                </div>
            </div>
        );
    }
}

export default Slider; 