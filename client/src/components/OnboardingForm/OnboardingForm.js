import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useAuth0 } from '../../auth-wrapper.js';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';

import Step1 from './Step1.js';
import Step2 from './Step2.js';

import '../../SASS/OnboardingForm.scss';

const uuidv1 = require('uuid/v1');

const OnboardingForm = props => {
  const { user } = useAuth0();

  const stepComponents = [Step1, Step2];
  const [formStep, setFormStep] = useState(1);
  const submitButton = formStep === stepComponents.length ? true : false;

  const [formUser, setFormUser] = useState({
    avatar: user.picture || '',
    bio: '',
    email: user.email || '',
    firstName: user.given_name || '',
    id: user.id,
    lastName: user.family_name || '',
    location: '',
    phoneNumber: uuidv1(),
    username: user.nickname || '',
    website: ''
  });

  const handleChange = e => {
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };

  const handleClick = e => {
    e.preventDefault();
    const move = e.target.name === 'next' ? 'next' : 'prev';
    if (move === 'next' && formStep < stepComponents.length) {
      setFormStep(n => ++n);
    } else if (move === 'prev' && formStep > 1) {
      setFormStep(n => --n);
    }
  };

  const handleSubmit = async (e, id, changes) => {
    e.preventDefault();
    try {
      await axiosWithAuth().put(`/api/v1/users/${id}`, changes);
      props.history.push(`/profile/${id}/${changes.username}`);
      props.setOnboarding(false);
    } catch (err) {
      console.log('OnboardingForm.js handleSubmit() ERROR', err);
    }
  };

  return (
    <div className="OnboardingForm">
      <form onSubmit={handleSubmit}>
        <header>
          <h1>Welcome to DesignHub</h1>
          <h2>Let's get started by creating your profile</h2>
        </header>
        <section className="stepComponents">
          {stepComponents.map((Step, i) => {
            if (i + 1 === formStep) {
              return (
                <Step
                  key={formUser.id}
                  formUser={formUser}
                  onChange={handleChange}
                />
              );
            } else return null;
          })}
        </section>

        <div className="buttons">
          <button name="prev" className="prev-btn" onClick={handleClick}>
            Previous
          </button>
          {submitButton ? (
            <button
              name="next"
              className="next-btn"
              onClick={e => handleSubmit(e, formUser.id, formUser)}
            >
              Submit
            </button>
          ) : (
            <button name="next" className="next-btn" onClick={handleClick}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default withRouter(OnboardingForm);
