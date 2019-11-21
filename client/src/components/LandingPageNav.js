import React, {Component} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

import ScrollToTop from './Icons/ScrollToTop';
import arrow from '../ASSETS/arrow.svg';

export default class LandingPageNav extends Component{
  scrollToTop = () =>{
    scroll.scrollToTop();
  };

  render() {
    return(
      <nav className="landing-nav">
        <div className="nav-content">
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