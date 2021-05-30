import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'
import './Navbar.css'
const Navbar = (props) => {

    return (
        <div className="navbar-fixed">
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <label className="logo flow-text">poke'Times</label>
                <ul  id="nav-mobile" className="right" >

                    <li> <Link to="/">home</Link> </li>
                    <li> <Link to="/about">about</Link></li>
                    <li><NavLink to="/contact">contact</NavLink></li>

                </ul>
                
            </div>
        </nav>
        </div>
    );
}

export default withRouter(Navbar);