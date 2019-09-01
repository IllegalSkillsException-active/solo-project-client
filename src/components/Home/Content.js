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
                            <h2 className="homeTitle">This is the super cool section title</h2>
                            <div className="columns">
                                <div className="item">
                                    <h4 className="item-title">Sample title</h4>
                                    <img src={banner3} className="item-image" alt="herbs on a table" />
                                    <h4 className = "homeParagraph">Sample Paragraph</h4>
                                </div>

                                <div className="item">
                                    <h4 className="item-title">Sample title</h4>
                                    <img src={banner1} className="item-image" alt="relaxing candles" />
                                    <h4 className = "homeParagraph">Sample Paragraph</h4>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className="full-bleed cool-photo2"></div>
                    <article className="post">
                        <div className="blogContainer">
                            <h3 className="blogTitle">Recent Blog Posts</h3>
                            <div className="thirds">
                                <div className="blogItem"> <h4 className="item-title">Sample title</h4>
                                    {/* <img src="http://lorempixel.com/400/100/nature" className="item-image" /> */}
                                    <h4 className = "blogParagraph">Sample Paragraph</h4>
                                </div>
                                <div className="blogItem">
                                    <h4 className="item-title">Sample title</h4>
                                    <h4 className = "blogParagraph">Sample Paragraph</h4>
                                    <p>
                                        {/* <img src="http://lorempixel.com/400/100/cats" className="item-image" /> */}
                                    </p>
                                </div>
                                <div className="blogItem">
                                    <h4 className="item-title">Sample title</h4>
                                    {/* <img src="http://lorempixel.com/400/100/fashion" className="item-image" /> */}
                                    <h4 className = "blogParagraph">Sample Paragraph</h4>
                                </div>
                                <div className="blogItem">
                                    <h4 className="item-title">Sample title</h4>
                                    <h4 className = "blogParagraph">Sample Paragraph</h4>
                                </div>
                                <div className="blogItem">
                                    <h4 className="item-title">Sample title</h4>
                                    {/* <img src="http://lorempixel.com/400/100/nightlife" className="item-image" /> */}
                                    <h4 className = "blogParagraph">Sample Paragraph</h4>
                                </div>
                                <div className="blogItem">
                                    <h4 className="item-title">Sample title</h4>
                                    <h4 className = "blogParagraph">Sample Paragraph</h4>
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