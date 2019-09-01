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
                        <h3>We are a home-based spa located in Holladay, Utah focused on offering quality bodywork, coaching sessions & holistic spa treatments at affordable rates.</h3>
                        <p></p>
                    </section>
                    <section className="questions">
                        <h2>We Believe</h2>
                        <h3>Everyone Deserves Body Work</h3>
                        <h3>Nettle & Sage does not discriminate by income, sexual orientation, gender, age, or disability</h3>
                        <h2>Contact Us</h2>
                        <h3>About your specific needs or with any further questions you may have</h3>
                    </section>
                </div>
            </div>
        )
    }
}
export default About; 