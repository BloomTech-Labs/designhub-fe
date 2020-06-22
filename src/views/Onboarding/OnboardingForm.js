import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useAuth0 } from '../../utilities/auth-spa.js';

import Loading from '../../common/Loading/index.js';
import Step1 from './Step1.js';
import Step2 from './Step2.js';

import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  UPDATE_USER_MUTATION,
  GET_USER_BY_ID_QUERY,
} from '../../graphql/index';

import './styles.scss';

const OnboardingForm = ({ history, isLoading }) => {
  const [loadingPage, setLoadingPage] = useState(false);
  // user data from auth0-spa
  const { logout, user } = useAuth0();

  const { data, loading } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: user?.sub },
  });
  const id = user?.sub;
  console.log('AUTH-USER-OB', data?.user?.id);

  // individual form steps & state to track which step to display
  const stepComponents = [Step1, Step2];
  const [formStep, setFormStep] = useState(1);

  //conditional render for next/submit/prev buttons
  const submitButton = formStep === stepComponents.length ? true : false;
  const showPrev = formStep === 1 ? false : true;

  //avatar image handler
  const [files, setFiles] = useState([]);

  const [updateUser] = useMutation(UPDATE_USER_MUTATION);

  //local form state populated by auth0 user info
  const [formUser, setFormUser] = useState({
    avatar: data?.user?.avatar || '',
    bio: '',
    firstName: data?.user?.lastName || '',
    id: data?.user?.id,
    lastName: data?.user?.firstName || '',
    location: '',
    username: data?.user?.username || '',
  });

  console.log('ob-db-DATA', formUser);
  // alert state for required form inputs
  const [alert, setAlert] = useState({
    username: false,
    firstName: false,
    lastName: false,
    // email: false,
  });

  const handleChange = (e, id) => {
    setAlert({
      ...alert,
      [e.target.name]: false,
    });
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };

  const handleNextButton = async (e) => {
    e.preventDefault();
    const { username, firstName, lastName } = formUser;
    const newAlert = {};
    if (username.trim().length === 0) newAlert.username = true;
    if (firstName.trim().length === 0) newAlert.firstName = true;
    if (lastName.trim().length === 0) newAlert.lastName = true;
    // if (email.trim().length === 0) newAlert.email = true;
    if (!newAlert.username) {
      try {
        console.log('check userId', data?.user);
        // if (res.data.length !== 0) newAlert.username = 'taken'
      } catch (err) {
        console.error('OnboardingForm.js handleNextButton() ERROR', err);
      }
    }
    const v = Object.values(newAlert);
    if (v.includes(true) || v.includes('taken')) {
      setAlert({ ...alert, ...newAlert });
    } else setFormStep((n) => ++n);
  };

  const handlePrevButton = async (e) => {
    e.preventDefault();
    setFormStep((n) => --n);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadingPage(true);
      let newAvatar;
      if (files.length === 0) {
        newAvatar = data?.user?.avatar;
      } else {
        newAvatar = await handleImageUpload(files);
      }

      //changes = {...changes, avatar: newAvatar, auth0Id: user?.sub}
      updateUser({
        variables: {
          data: {
            id: user?.sub,
            avatar: newAvatar,
            username: formUser?.username,
            firstName: formUser?.firstName,
            lastName: formUser?.lastName,
            bio: formUser?.bio,
            location: formUser?.location,
            website: formUser?.website,
          },
        },
        refetchQueries: [{ query: GET_USER_BY_ID_QUERY }],
      });
      history.push(`/`);
      console.log('res submit:', data);
    } catch (err) {
      console.error('OnboardingForm.js handleSubmit() ERROR', err);
    }
  };

  const handleImageUpload = async (file) => {
    console.log('obFile', file);
  };

  if (loadingPage || isLoading) return <Loading />;
  else
    return (
      <>
        <div className="OnboardingForm">
          <form onSubmit={(e) => handleSubmit(e, formUser?.id, formUser)}>
            <section className="stepComponents">
              {stepComponents.map((Step, i) => {
                if (i + 1 === formStep) {
                  return (
                    <Step
                      key={i}
                      alert={alert}
                      files={files}
                      picture={data?.user?.picture}
                      setFiles={setFiles}
                      formUser={formUser}
                      onChange={handleChange}
                      showPrev={showPrev}
                      handlePrevButton={handlePrevButton}
                      handleNextButton={handleNextButton}
                      logout={logout}
                      submitButton={submitButton}
                    />
                  );
                } else return null;
              })}
            </section>
          </form>
        </div>
      </>
    );
};

export default withRouter(OnboardingForm);
