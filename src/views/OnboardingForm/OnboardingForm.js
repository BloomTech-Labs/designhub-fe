import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
import { useAuth0 } from '../../utilities/auth-wrapper.js';
//import { connect } from 'react-redux';

import Loading from '../../common/Loading.js';
import Step1 from './Step1.js';
import Step2 from './Step2.js';

//import { updateUser } from '../../store/actions/usersActions';
import updateUser from '../../graphql/mutations/updateUser';
import { useMutation } from 'react-apollo';
import './SASS/OnboardingForm.scss';

const OnboardingForm = ({ history, isLoading }) => {
  const [updateNewUser] = useMutation(updateUser);
  const [loading, setLoading] = useState(false);
  // user data from auth0 context wrapper
  const { user, logout } = useAuth0();

  // individual form steps & state to track which step to display
  const stepComponents = [Step1, Step2];
  const [formStep, setFormStep] = useState(1);

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
    username: user.nickname || '',
    website: '',
  });

  // alert state for required form inputs
  const [alert, setAlert] = useState({
    username: false,
    firstName: false,
    lastName: false,
    email: false,
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
    if (email.trim().length === 0) newAlert.email = true;
    if (!newAlert.username) {
      try {
        const res = await axiosWithAuth().get(
          `api/v1/users/check/${formUser.username}`
        );
        if (res.data.length !== 0) newAlert.username = 'taken';
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
      setLoading(true);
      let newAvatar;
      if (files.length === 0) {
        newAvatar = user.picture;
      } else {
        newAvatar = await handleImageUpload(files);
      }
      //TODO ADD AUth0ID prop to changes object BEFORE SENDING
      changes = { ...changes, avatar: newAvatar, auth0Id: user.sub };
      updateNewUser(id, changes).then((res) => {
        if (res && !isLoading) {
          history.push(`/profile/${id}/${changes.username}`);
        }
      });
    } catch (err) {
      console.error('OnboardingForm.js handleSubmit() ERROR', err);
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const {
        data: { key, url },
      } = await axiosWithAuth().post(`api/v1/photo/projects/signed`, {
        id: user.sub,
      });

      await axios.put(url, file[0], {
        headers: {
          'Content-Type': 'image/*',
        },
      });
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));

      return `https://my-photo-bucket-123.s3.us-east-2.amazonaws.com/${key}`;
    } catch (err) {
      console.error('OnboardingForm.js handleImageUpload() ERROR', err);
    }
  };

  if (loading || isLoading) return <Loading />;
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
                      picture={user.picture}
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

// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.users.isLoading,
//   };
// };

export default OnboardingForm;

