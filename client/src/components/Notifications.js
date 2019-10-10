import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import moment from 'moment';

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

  const renderBasedOnType = item => {
    if (item.type === 'comment') {
      return (
        <div>
          {item.unRead === true && <h2>UNREAD</h2>}
          <img src={item.activeUserAvatar} />
          <p>
            <span>{item.activeUsername} commented</span>
            {item.commentText}
          </p>
          <p>{moment(item.created_at).fromNow()} </p>
          <img src={item.mainImgUrl} />
        </div>
      );
    } else if (item.type === 'follow') {
    }
  };

  const renderUnread = array => {};

  const renderRead = array => {};

  console.log(state);
  return <div>{'notifications'}</div>;
};

export default Notifications;
