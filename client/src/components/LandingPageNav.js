import React, {Component} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';


import logo from '../ASSETS/logo.svg';
import '../SASS/LandingPageNav.scss';
export default class LandingPageNav extends Component{

  render() {
    return(
      <nav className="landing-nav">
        
        <div className="nav-content">
        <img src={logo} className="logo" alt="Logo"/>
          <ul className="nav-items">
          <li className="nav-item">
          
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}