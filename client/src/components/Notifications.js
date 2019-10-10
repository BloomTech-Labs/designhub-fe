import React, { useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const Notifications = props => {
  const { id } = props.activeUser;
  console.log(id);
  const getNotifications = id => {
    axiosWithAuth().get(`api/v1/invite/${id}`);
  };

  console.log(props);
  return <div>Notifications</div>;
};

export default Notifications;
