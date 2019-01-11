import React, { Component } from 'react';
import Header from '../Home/Header';
import '../../styles/offerings.css';

class Offerings extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1 className="offerings">Offerings & Pricing</h1>
                <div className="pricing">
                    <section className="standard">
                        <h2><b><u>Standard Massage Pricing</u></b></h2>
                        <ul className="standardPricing">
                            <li className="standardList">30 Minutes / $40</li>
                            <li className="standardList">60 Minutes / $70</li>
                            <li className="standardList">75 Minutes / $85</li>
                            <li className="standardList">90 Minutes / $100</li>
                        </ul>
                        <div className="standardPricingFooter">* Includes aromatherapy & hot towel treatment</div>
                    </section>
                    <section className="addOns">
                        <h2 className="addOnsTitle"><b><u>ADD-ONS / $15 per add-on</u></b></h2>
                        <h3>Extras to elevate your massage</h3>
                        <ul className="addOnsList">
                            <li className="addOn">Hot Stone Massage</li>
                            <li className="addOn">JoJoba Acupressure Facial</li>
                            <li className="addOn">Craniosacral Therapy</li>
                            <li className="addOn">Rosehip Acupressure Facial</li>
                            <li className="addOn">Reflexology Foot Treatment</li>
                            <li className="addOn">Sauna</li>
                        </ul>
                    </section>
                    <section className="specialtyTreatments">
                        <h2 className="therapeutic"><b><u>Specialty Treatments</u></b></h2>
                        <h3>Therapeutic Massage</h3>
                        <div>Clinical massage aimed to treat pain from injury or chronic condition / ailment</div>
                        <ul className="therapeuticPricing">
                            <li className="theraputicTimePrice">60 minutes / $80</li>
                            <li className="theraputicTimePrice">90 minutes / $110</li>
                        </ul>
                        <h3>Somatic Coaching Session</h3>
                        <div>Intuitive body mapping & localized focus massage on one or two areas to address emotional tension buildup stored in the body</div>
                        <ul className="somaticPricing">
                            <li className="somaticTimePrice">30 minutes / $30</li>
                            <li className="somaticTimePrice">60 minutes / $60</li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    };
}

export default Offerings; 