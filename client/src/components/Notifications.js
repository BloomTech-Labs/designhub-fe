import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const Notifications = props => {
  const [state, setState] = useState([]);
  const { id } = props.activeUser;

  useEffect(() => {
    try {
      const getNotifications = async id => {
        const { data } = await axiosWithAuth().get(`api/v1/invite/${id}`);
        setState(data);
      };
      getNotifications(id);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const renderBasedOnType = item => {};

  const renderUnread = array => {};

  const renderRead = array => {};

  console.log(state);
  return <div>{JSON.stringify(state)}</div>;
};

export default Notifications;
