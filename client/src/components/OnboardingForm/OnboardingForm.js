import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGGEDIN, updateUser } from '../../store/actions/usersActions';

import Step1 from './Step1.js';
import Step2 from './Step2.js';

import '../../SASS/OnboardingForm.scss';

const uuidv1 = require('uuid/v1');

const OnboardingForm = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.users);
  const [formStep, setFormStep] = useState(1);
  const [formUser, setFormUser] = useState({
    avatar: '',
    bio: '',
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    location: '',
    phoneNumber: uuidv1(),
    username: '',
    website: ''
  });

  useEffect(() => {
    let newFormUser = {};
    for (let prop in currentUser) {
      if (currentUser[prop] && formUser[prop] === '')
        newFormUser[prop] = currentUser[prop];
    }
    setFormUser({ ...formUser, ...newFormUser });
    // eslint-disable-next-line
  }, [currentUser]);

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
    console.log({ id, changes });
    dispatch(updateUser(id, changes));
    dispatch({ type: SET_LOGGEDIN });
  };

  const stepComponents = [Step1, Step2];

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
          <button name="next" className="next-btn" onClick={handleClick}>
            Next
          </button>
          <button
            name="next"
            className="next-btn"
            onClick={e => handleSubmit(e, formUser.id, formUser)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
