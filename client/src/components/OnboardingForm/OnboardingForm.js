import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
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
  const showPrev = formStep === 1 ? false : true;

  //avatar image handlers
  const [file, setFile] = useState(null);
  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

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
      const newAvatar = await handleImageUpload(file);
      changes = { ...changes, avatar: newAvatar };
      console.log('newAvatar!!!!', newAvatar);
      console.log('changes!!!!', changes);
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}api/v1/users/${id}`,
        changes
      );
      props.history.push(`/profile/${id}/${changes.username}`);

      props.setOnboarding(false);
    } catch (err) {
      console.log('OnboardingForm.js handleSubmit() ERROR', err);
    }
  };

  const handleImageUpload = async file => {
    console.log(file);
    try {
      const {
        data: { key, url }
      } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/v1/photo/projects/signed`,
        {
          id: 8000
        }
      );
      console.log(key, url);

      await axios.put(url, file, {
        headers: {
          'Content-Type': 'image/*'
        }
      });

      return `http://my-photo-bucket-123.s3.us-east-2.amazonaws.com/${key}`;
    } catch (err) {
      console.log('OnboardingForm.js handleSubmit() ERROR', err);
    }
  };

  return (
    <div className="OnboardingForm">
      <form onSubmit={handleSubmit}>
        <section className="stepComponents">
          {stepComponents.map((Step, i) => {
            if (i + 1 === formStep) {
              return (
                <Step
                  key={formUser.id}
                  formUser={formUser}
                  onChange={handleChange}
                  onFileChange={onFileChange}
                />
              );
            } else return null;
          })}
        </section>

        <div className="buttons">
          {showPrev && (
            <button name="prev" className="prev-btn" onClick={handleClick}>
              Previous
            </button>
          )}
          {submitButton ? (
            <button
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
