import React, { Component } from 'react';
import '../../styles/about.css';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';


class About extends Component {
    render() {
        console.log('Heroku!!'); 
        return (
            <div><Header />
                <div className="canyon"></div>
                <Link to="/appointments">
                    <div className="appointmentButton">
                        <b className="appointmentText"><u>Request to Schedule an Appointment</u></b>
                    </div>
                </Link>
                <div className="about">
                    <section className="about">
                        <h2>About Us</h2>
                        <p>We are a home-based spa located in Holladay, Utah focused on offering quality bodywork, coaching sessions & holistic spa treatments at affordable rates.</p>
                        <p></p>
                    </section>
                    <section className="questions">
                        <h2>We Believe</h2>
                        <h3>Everyone Deserves Body Work</h3>
                        <p>Nettle & Sage does not discriminate by income, sexual orientation, gender, age, or disability</p>
                        <h3>Contact Us</h3>
                        <p>About your specific needs or with any further questions you may have</p>
                    </section>
                </div>
            </div>
        )
    }
}
export default About; 