import React, { useEffect } from 'react';
// import { } from 'path';
import Loading from '../Loading';
import { Redirect } from 'react-router-dom';
import {useHistory} from 'react-router';

const Callback = ({ userData }) => {
    const history = useHistory()
     useEffect(()=>{
       userData?.user?.username === null ? history.push('/') : history.push('/onboarding')
     },[userData])
  // if (userData?.user?.username === null) return <Redirect to="/onboarding" />
  //   if (userData?.user?.username) return <Redirect to='/' />
  // return (
  //     <h1>hello world</h1>
  // );
  return <Loading />
};

export default Callback;
