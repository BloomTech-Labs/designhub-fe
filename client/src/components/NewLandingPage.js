import React from 'react';
import {useAuth0} from '../auth-wrapper';
import {Element, animateScroll as scroll} from 'react-scroll';

import LandingPageNav from './LandingPageNav';
import arrow from '../ASSETS/arrow.svg';
import background from '../ASSETS/landing.svg';
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
      <img src={background} className="background" alt="Landing page background image" />
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
        <p>this will be a screenshot of login</p>
        <h5>Step 1</h5>
        <p>Login or create a new account to view your profile</p>
      </div>
      <div className="step">
        <p>this will be a screenshot of new project creation tab</p>
        <h5>Step 2</h5>
        <p>Click on the add button to create a new project</p>
      </div>
      <div className="step">
        <p>this will be a screenshot of new project creation form</p>
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
      <h3>DesignHub is built for designers by designers</h3>
      <h4>Features</h4>
      </div>
      <div className="feature-box">
        <p>this will be a screenshot/icon</p>
        <h5>Messaging</h5>
        <p>Easily reach out to other designers through the messaging feature</p>
      </div>
      <div className="feature-box">
        <p>this will be a screenshot/icon</p>
        <h5>Heatmap</h5>
        <p>Track your contributions, and have a visual representation to share</p>
      </div>
      <div className="feature-box">
        <p>this will be a screenshot/icon</p>
        <h5>Case Studies</h5>
        <p>Keep track of your case studies in a single location</p>
      </div>
      <div className="feature-box">
        <p>this will be a screenshot/icon</p>
        <h5>Collaborate</h5>
        <p>Work with other designers to collaborate on projects</p>
      </div>
      <div className="feature-box">
        <p>this will be a screenshot/icon</p>
        <h5>All in One</h5>
        <p>House your case studies, deliverables, assets, links, and design files all in one place</p>
      </div>
      <div className="feature-box">
        <p>this will be a screenshot/icon</p>
        <h5>Feedback</h5>
        <p>Give and receive feedback on projects easily including using sticky comments to comment directly on a specific element of the design</p>
      </div>
    
    </Element>
    {/* <div className="testimonials">
      <h3>But don't take our word for it...</h3>
      <h4>See what actual users are saying about DesignHub</h4>
      <TestimonialCarousel />
    </div> */}
    {/* <img
      src={arrow} 
      onClick={scrollToTop}
    /> */}
    </div>
   </div>
    </>
  )
}

export default NewLandingPage;