import React, {Component} from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

export default class LandingPageNav extends Component{
  scrollTo(offset){
    scroll.scrollTo({
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset
    })
  }

  render() {
    return(
      <nav className="landing-nav">
        <div className="nav-content">
          <ul className="nav-items">
          <li className="nav-item">
              <a
                to="home"
                onClick={() => this.scrollTo(-50)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                to="about"
                onClick={() => this.scrollTo(-50)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                to="features"
                onClick={() => this.scrollTo(-50)}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                to="contact"
                onClick={() => this.scrollTo(-50)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}