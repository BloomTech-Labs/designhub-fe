import React from 'react';
import {useAuth0} from '../auth-wrapper';

const NewLandingPage = () =>{
  const {loginWithRedirect} = useAuth0();
  return(
    <>
    <div className="top-left">
      <p>WELCOME TO</p>
      <h1>
        DESIGN<em>HUB</em>
      </h1>
      <button
        className="auth0-redirect-btn"
        onClick={() => loginWithRedirect({})}
      >
        Create an account or Sign in
      </button>
      <h1>
        Super-charge your design workflow now and start collaborating like
        a beast
      </h1>
    </div>
    <div className="top-right">
      <p>this will be the mac image</p>
    </div>
    <div className="how-it-works">
      <div className="step1">
        <p>this will be a screenshot of login</p>
        <h5>Step 1</h5>
        <p>Login or create a new account to view your profile</p>
      </div>
      <div className="step2">
        <p>this will be a screenshot of new project creation tab</p>
        <h5>Step 2</h5>
        <p>Click on the add button to create a new project</p>
      </div>
      <div className="step3">
        <p>this will be a screenshot of new project creation form</p>
        <h5>Step 3</h5>
        <p>Add your files and get collaborating!</p>
      </div>
    </div>
    <div className="inspiration">
      <p>this is a screenshot of the explore page</p>
      <div className="inspiration-text">
        <h5>Find inspiration from fellow designers</h5>
        <p>Not sure where to start? Check out projects by other designers on the Explore page for inspiration!</p>
      </div>
    </div>
    <div className="features">
      <h3>DesignHub is built for designers by designers</h3>
      <h4>Features</h4>
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
    </div>
    <div className="testimonials">
      <h3>But don't take our word for it...</h3>
      <h4>See what actual users are saying about DesignHub</h4>
      <p>This is the carosel</p>
    </div>
    </>
  )
}

export default NewLandingPage;