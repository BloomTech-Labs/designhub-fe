import React, { useEffect } from 'react';
// import { } from 'path';
import Loading from '../Loading';

import {useHistory} from 'react-router';

const Callback = ({ userData }) => {
    const history = useHistory()
     useEffect(()=>{
       userData?.user?.username === null ? history.push('/') : history.push('/onboarding')
     },[userData, history])
  return <Loading />
};

export default Callback;
