import React, { Component } from 'react';
import '../../styles/pageLayout.css';
import Header from './Header';
import banner1 from '../../styles/img/banner1.jpg';
import banner3 from '../../styles/img/banner3.jpg';

class Content extends Component {

    render() {
        return (
            <div>
                <Header />
                <section className="content">
                    <article className="post">
                        <div className="container">
                            <h2>This is the super cool section title</h2>
                            <div className="columns">
                                <div className="item">
                                    <h4 className="item-title">Sample title</h4>
                                    <img src={banner3} className="item-image" alt="herbs on a table" />
                                    <p>Sample Paragraph</p>
                                </div>

                                <div className="item">
                                    <h4 className="item-title">Sample title</h4>
                                    <p>Sample Paragraph</p>
                                    <img src={banner1} className="item-image" alt="relaxing candles" />
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className="full-bleed cool-photo2"></div>
                    <article className="post">
                        <div className="container">
                            <h3>Recent Blog Posts</h3>
                            <div className="columns thirds">
                                <div className="item"> <h4 className="item-title">Sample title</h4>
                                    {/* <img src="http://lorempixel.com/400/100/nature" className="item-image" /> */}
                                    <p>Sample Paragraph</p>
                                    <p>Sample Paragraph</p>
                                </div>
                                <div className="item">
                                    <h4 className="item-title">Sample title</h4>
                                    <p>Sample Paragraph</p>
                                    <p>
                                        {/* <img src="http://lorempixel.com/400/100/cats" className="item-image" /> */}
                                    </p>
                                </div>
                                <div className="item">
                                    <h4 className="item-title">Sample title</h4>
                                    {/* <img src="http://lorempixel.com/400/100/fashion" className="item-image" /> */}
                                    <p>Sample Paragraph</p>
                                </div>
                                <div className="item">
                                    <h4 className="item-title">Sample title</h4>
                                    <p>Sample Paragraph</p>
                                </div>
                                <div className="item">
                                    <h4 className="item-title">Sample title</h4>
                                    {/* <img src="http://lorempixel.com/400/100/nightlife" className="item-image" /> */}
                                    <p>Sample Paragraph</p>
                                    <p>Sample Paragraph</p>
                                </div>
                                <div className="item">
                                    <h4 className="item-title">Sample title</h4>
                                    <p>Sample Paragraph</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                <footer className="footer">
                    <div className="container">

                    </div>
                </footer>
            </div>
        )
    }
}

export default Content;