import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useAuth0 } from '../../utilities/auth-spa.js';

import Loading from '../../common/Loading/index.js';
import Step1 from './Step1.js';
import Step2 from './Step2.js';

import { useMutation, useQuery } from '@apollo/react-hooks';
import { UPDATE_USER_MUTATION, GET_ALL_USERS_QUERY } from '../../graphql/index';

import './styles.scss';

const OnboardingForm = ({ history, newUser, isLoading }) => {
  const [loadingPage, setLoadingPage] = useState(false);
  // user data from auth0-spa
  const { user, logout } = useAuth0();

  // individual form steps & state to track which step to display
  const stepComponents = [Step1, Step2];
  const [formStep, setFormStep] = useState(1);

  //conditional render for next/submit/prev buttons
  const submitButton = formStep === stepComponents.length ? true : false;
  const showPrev = formStep === 1 ? false : true;

  //avatar image handler
  const [files, setFiles] = useState([]);

  const {loading, error, data, refetch } = useQuery(
    GET_ALL_USERS_QUERY,
    {
      fetchPolicy: 'network-only',
    }
  );

  const [updateUser] = useMutation(UPDATE_USER_MUTATION, { 
    refetchQueries: [{query: GET_ALL_USERS_QUERY, variables: { data: {
          username: data?.username,
        } },
        awaitRefetchQueries: true,
        }]}); 

  //local form state populated by auth0 user info
  const [formUser, setFormUser] = useState({
    avatar: user?.picture || '',
    bio: '',
    email: user?.email || '',
    firstName: user?.given_name || '',
    id: user?.sub,
    lastName: user?.family_name || '',
    location: '',
    username: user?.nickname || '',
  });

  // alert state for required form inputs
  const [alert, setAlert] = useState({
    username: false,
    firstName: false,
    lastName: false,
   // email: false,
  });

  const handleChange = (e) => {
    setAlert({
      ...alert,
      [e.target.name]: false,
    });
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };

  const handleNextButton = async (e) => {
    e.preventDefault();
    const { username, firstName, lastName, email } = formUser;
    const newAlert = {};
    if (username.trim().length === 0) newAlert.username = true;
    if (firstName.trim().length === 0) newAlert.firstName = true;
    if (lastName.trim().length === 0) newAlert.lastName = true;
   // if (email.trim().length === 0) newAlert.email = true;
    if (!newAlert.username) {
      try {
        // const res = refetchQueries() 
        console.log("check userId",formUser.id);
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

  const handleSubmit = async (e, id, changes) => {
    e.preventDefault();
    try {
      setLoadingPage(true)
      let newAvatar;
      if (files.length === 0){
        newAvatar = user.picture
      } else {
        newAvatar = await handleImageUpload(files)
      }
      changes = {...changes, avatar: newAvatar, auth0Id: user.sub}
      updateUser({variables:{ data: {
        changes
      }}})
      history.push(`/`)
      console.log("res submit:", changes)
    } catch (err) {
      console.error('OnboardingForm.js handleSubmit() ERROR', err);
    }
  };

  const handleImageUpload = async (file) => {
    console.log(file)
  };

  if (loadingPage || isLoading) return <Loading />;
  else
    return (
      <>
        <div className="OnboardingForm">
          <form onSubmit={(e) => handleSubmit(e, formUser.id, formUser)}>
            <section className="stepComponents">
              {stepComponents.map((Step, i) => {
                if (i + 1 === formStep) {
                  return (
                    <Step
                      key={i}
                      alert={alert}
                      files={files}
                      picture={user?.picture}
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
