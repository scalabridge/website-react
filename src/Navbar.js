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
                <li className="nav-item active">
                    <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Our Impact</a>
                    {/* <Link to='/impact'>Our Impact</Link> */}
                </li>
                <li className="nav-item">
                    <Link to='/events'>Events</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Organizers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Mentors</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Curriculums</a>
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