import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a className="navbar-brand n" href="#">
            <img className="navbar-logo" src={process.env.PUBLIC_URL + "ScalaBridge-small.png"}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to='/' className='active nav-link'>About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link">Our Impact</Link>
                </li>
                <li className="nav-item">
                    <Link to='/events' className="nav-link">Events</Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link">Organizers</Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link">Mentors</Link>
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link">Curriculums</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa fa-twitter" aria-hidden="true"/></a>
                </li>
                <li className="nav-item">
                    <button type="button" className="btn btn-outline-danger">Get In Touch</button>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;