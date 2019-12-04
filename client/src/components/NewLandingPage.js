import React from 'react';
import {useAuth0} from '../auth-wrapper';
import {Element, animateScroll as scroll} from 'react-scroll';

import LandingPageNav from './LandingPageNav';
import arrow from '../ASSETS/arrow.svg';
import footerLogo from '../ASSETS/landing-footer-logo.svg';
import poweredBy from '../ASSETS/powered-by.svg';
import messagingicon from '../ASSETS/messaging-icon.svg';
import heatmapicon from '../ASSETS/heatmap-icon.svg';
import casestudiesicon from '../ASSETS/casestudies-icon.svg';
import collaborateicon from '../ASSETS/collaborate-icon.svg';
import allinoneicon from '../ASSETS/allinone-icon.svg';
import feedbackicon from '../ASSETS/feedback-icon.svg';
import explorepagetemp from '../ASSETS/tempexplore.svg'
import macscreenshot from '../ASSETS/macscreenshot.png';
import '../SASS/NewLandingPage.scss';
import TestimonialCarousel from './TestimonialCarousel';


const NewLandingPage = () =>{
  const {loginWithRedirect} = useAuth0();

  const scrollToTop = () =>{
    scroll.scrollToTop();
  };
  return(
    <>
    <div className="landing-background">
      {/* <img src={background} className="background" alt="Landing page background image" /> */}
    <div className="page-container">
    <LandingPageNav />
    <Element name="home">
    <section className="top">
    <div className="top-left">
      <p>WELCOME TO</p>
      <h1>
        DESIGN<span>HUB</span>
      </h1>
      <div className="buttons">
      <button
        className="auth0-redirect-btn signup-btn"
        onClick={() => loginWithRedirect({})}
      >
        Sign Up
      </button>
      <button
        className="auth0-redirect-btn login-btn"
        onClick={() => loginWithRedirect({})}
      >
       Log In
      </button>
      </div>

      {/* <button
        className="auth0-redirect-btn"
        onClick={() => loginWithRedirect({})}
      >
        Create an account or Sign in
      </button> */}
    
      <h4>
        Super-charge your design workflow now <br/> and start collaborating like
        a beast
      </h4>
    </div>
    <div className="top-right">
      <img src = {macscreenshot} className="background" alt= "mac screen"/>
    </div>
    </section>
    </Element>
    <Element name="about">
    <div className="how-it-works">
      <div className="how-it-works-heading">
        <h2>HOW IT WORKS</h2>
        </div>
      <div className="step">
        <div className= "icons">
      <img src = {allinoneicon} className="icons collaborate-icon" alt= "colaboration icon"/>
        </div>
        <h5>Step 1</h5>
        <p>Login or create a new account to view your profile</p>
      </div>
      <div className="step">
        <div className= "icons">
      <img src = {allinoneicon} className="icons allinone-icon" alt= "all in one icon"/>
        </div>
        <h5>Step 2</h5>
        <p>Click on the add button to create a new project</p>
      </div>
      <div className="step">
        <div className= "icons">
      <img src = {messagingicon} className="icons messaging-icon" alt= "messaging icon"/>
        </div>
        <h5>Step 3</h5>
        <p>Add your files and get collaborating!</p>
      </div>
    </div>
    <div className="inspiration">
      <div className="inspiration-screenshot">
      <img src={explorepagetemp} className="explore-pic" alt="Explore page screen shot image" />
      </div>
      <div className="inspiration-text">
        <h5>Find inspiration from your fellow designers</h5>
        <p>Not sure where to start? Check out projects by other designers on the Explore page for inspiration!</p>
      </div>
    </div>
    </Element>
    <Element className="features">
    <div className="features-heading">
      <h3>DesignHub is built for designers<br></br>by designers</h3>
      </div>
      <div className="feature-box">
        <div className = "icons">
        <img src = {messagingicon} className="messaging-icon" alt= "messaging icon"/>
        </div>
        <h5>Messaging</h5>
        <p>Easily reach out to other designers through the messaging feature</p>
      </div>
      <div className="feature-box">
        <div className = "icons">
        <img src = {heatmapicon} className="heatmap-icon" alt= "heatmap icon"/>
        </div>
        <h5>Heatmap</h5>
        <p>Track your contributions, and have a visual representation to share</p>
      </div>
      <div className="feature-box">
        <div className = "icons">
        <img src = {casestudiesicon} className="casestudies-icon" alt= "case studies icon"/>
        </div>
        <h5>Case Studies</h5>
        <p>Keep track of your case studies in a single location</p>
      </div>
      <div className="feature-box">
        <div className = "icons">
      <img src = {allinoneicon} className="collaborate-icon" alt= "colaboration icon"/>
      </div>
        <h5>Collaborate</h5>
        <p>Work with other designers to collaborate on projects</p>
      </div>
      <div className="feature-box">
        <div className = "icons">
        <img src = {allinoneicon} className="allinone-icon" alt= "all in one icon"/>
        </div>
        <h5>All in One</h5>
        <p>House your case studies, deliverables, assets, links, and design files all in one place</p>
      </div>
      <div className="feature-box">
        <div className = "icons">
        <img src = {feedbackicon} className="feedback-icon" alt= "feedback icon"/>
        </div>
        <h5>Feedback</h5>
        <p>Give and receive feedback on projects easily including using sticky comments to comment directly on a specific element of the design</p>
      </div>
    
    </Element>
    <div className="testimonials">
      <h3>But don't take our word for it...</h3>
      <h4>This is what actual users have to say about DesignHub</h4>
      <TestimonialCarousel />
    </div> 
    <img className='arrow'
      src={arrow} 
      onClick={scrollToTop}
    />
    <Element className="contact">
    <div className="footer">
      <div className="footerLogo">
        <img src={footerLogo} />
      </div>
      <div className="footer-text">
        <div className="our-company">
          <h5>Our Company</h5>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>The Team</li>
          </ul>
        </div>
        <div className="social-networks">
          <h5>Social Networks</h5>
          <ul>
            <li>Dribbble</li>
            <li>Instagram</li>
            <li>Behance</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="policy">
          <h5>Policy</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="poweredBy">
        <img src={poweredBy} />
      </div>
    </div>
    </Element>
    </div>
   </div>
    </>
  )
}

export default NewLandingPage;