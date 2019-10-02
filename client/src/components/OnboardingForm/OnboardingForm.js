import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
import { useAuth0 } from '../../auth-wrapper.js';

import Step1 from './Step1.js';
import Step2 from './Step2.js';

import '../../SASS/OnboardingForm.scss';

const uuidv1 = require('uuid/v1');

const OnboardingForm = props => {
  // user data from auth0 context wrapper
  const { user } = useAuth0();

  // individual form pages in an array
  const stepComponents = [Step1, Step2];

  // state to track which page to display
  const [formStep, setFormStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  //conditional render for next/submit/prev buttons
  const submitButton = formStep === stepComponents.length ? true : false;
  const showPrev = formStep === 1 ? false : true;

  //avatar image handler
  const [files, setFiles] = useState([]);

  //local form state populated by auth0 user info
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

  // alert state triggered by unique username fail
  const [alert, setAlert] = useState(false);
  // username <input/> ref for focus() on fail
  const [usernameInput, setUsernameInput] = useState(null);

  const handleChange = e => {
    setAlert(false);
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };

  // click 'next' or 'prev' button
  const handleClick = async e => {
    e.preventDefault();
    const move = e.target.name === 'next' ? 'next' : 'prev';
    if (move === 'next' && formStep < stepComponents.length) {
      try {
        const res = await axiosWithAuth().get(
          `api/v1/users/check/${formUser.username}`
        );
        if (res.data.length === 0) {
          setAlert(false);
          setFormStep(n => ++n);
        } else {
          usernameInput.focus();
          setAlert(true);
        }
      } catch (err) {
        console.log('OnboardingForm.js handleClick() ERROR', err);
      }
    } else if (move === 'prev' && formStep > 1) {
      setFormStep(n => --n);
    }
  };

  // click submit
  const handleSubmit = async (e, id, changes) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const newAvatar = await handleImageUpload(files);
      //TODO ADD AUth0ID prop to changes object BEFORE SENDING
      changes = { ...changes, avatar: newAvatar, auth0Id: user.sub };
      // console.log('OnboardingForm.js handleSubmit() newAvatar', newAvatar);
      // console.log('OnboardingForm.js handleSubmit() changes', changes);
      await axiosWithAuth().put(`api/v1/users/${id}`, changes);
      // console.log('OnboardingForm.js handleSubmit() res.data', res.data);
      props.history.push(`/profile/${id}/${changes.username}`);
      props.setOnboarding(false);
    } catch (err) {
      console.log('OnboardingForm.js handleSubmit() ERROR', err);
    }
  };

  const handleImageUpload = async file => {
    // console.log('OnboardingForm.js handleImageUpload() file', file);
    console.log('user.sub', user.sub);
    try {
      const {
        data: { key, url }
      } = await axiosWithAuth().post(`api/v1/photo/projects/signed`, {
        id: user.sub
      });
      // console.log('OnboardingForm.js handleImageUpload() key, url', key, url);

      await axios.put(url, file[0], {
        headers: {
          'Content-Type': 'image/*'
        }
      });

      return `https://my-photo-bucket-123.s3.us-east-2.amazonaws.com/${key}`;
    } catch (err) {
      console.log('OnboardingForm.js handleSubmit() ERROR', err);
    }
  };
  return (
    <div className="OnboardingForm">
      <form className={alert ? 'alert' : null} onSubmit={handleSubmit}>
        <section className="stepComponents">
          {stepComponents.map((Step, i) => {
            if (i + 1 === formStep) {
              return (
                <Step
                  key={formUser.id}
                  alert={alert}
                  files={files}
                  setFiles={setFiles}
                  formUser={formUser}
                  onChange={handleChange}
                  setUsernameInput={setUsernameInput}
                />
              );
            } else return null;
          })}
        </section>

        <div className="buttons">
          {showPrev && (
            <button
              name="prev"
              className="prev-btn"
              onClick={handleClick}
              style={submitting ? { display: 'none' } : null}
            >
              Previous
            </button>
          )}
          {submitButton ? (
            <button
              className="next-btn"
              onClick={e => handleSubmit(e, formUser.id, formUser)}
              style={submitting ? { display: 'none' } : null}
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
