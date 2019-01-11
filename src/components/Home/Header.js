import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <div className="full-bleed cool-photo">
                            <h1 className="site-title">NETTLE & SAGE</h1>
                            <div className="site-tagline">Essential Balance. Massage and Wellness.</div>
                        </div>


                    </div>
                </header>
                <nav className="main-nav">
                    <div className="container">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Appointments'>Appointments</Link></li>
                            <li><Link to='/Offerings'>Offerings</Link></li>
                            <li><Link to='/About'>About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };
}

export default Header; 