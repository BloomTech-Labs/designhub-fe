import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import moment from 'moment';

import '../SASS/Notifications.scss';

const Notifications = props => {
  const [state, setState] = useState([]);
  const { id } = props.activeUser;

  useEffect(() => {
    try {
      const turnToRead = async data => {
        if (data.unReadNotifications) {
          return await Promise.all(
            data.unReadNotifications.map(async i => {
              console.log('ran');
              await axiosWithAuth().put(`api/v1/invite/${i.id}`, {
                unread: false
              });
            })
          );
        }
      };
      const getNotifications = async id => {
        const { data } = await axiosWithAuth().get(`api/v1/invite/${id}`);
        setState(data);
        turnToRead(data);
      };

      getNotifications(id);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const renderBasedOnType = item => {
    console.log(item.unread);
    if (item.type === 'comment') {
      return (
        <div key={item.id} className="commented_notification">
          <div className="commented_left">
            {item.unread === true ? <h2 className="unread">.</h2> : <h2></h2>}
            <img src={item.activeUserAvatar} className="avatar" alt="avatar" />
            <p className="commented">
              {item.activeUsername} commented:
              <mark className="comment_text">
                &nbsp;{item.commentText}&nbsp;
              </mark>
              <mark className="from_now">
                {moment(item.created_at).fromNow()}&nbsp;
              </mark>
            </p>
          </div>
          <Link to={`/project/${item.projectId}`}>
            <img
              src={item.mainImgUrl}
              className="thumbnail_preview"
              alt="thumbnail"
            />
          </Link>
        </div>
      );
    } else if (item.type === 'follow') {
      return (
        <div key={item.id} className="notification">
          {item.unread === true && <h2>UNREAD</h2>}
          <img src={item.activeUserAvatar} className="avatar" alt="avatar" />
          <p className="followed_you">
            {item.activeUsername}&nbsp;followed&nbsp;
          </p>
          <p>&nbsp;you&nbsp;</p>
          <p>&nbsp;{moment(item.created_at).fromNow()} </p>
        </div>
      );
    }
  };

  const renderUnread = array => {
    return array.map(i => renderBasedOnType(i));
  };

  const renderRead = array => {
    return array.map(i => renderBasedOnType(i));
  };
  return (
    <div className="notification-container">
      {state.unReadNotifications && renderUnread(state.unReadNotifications)}
      {state.readNotifications && renderRead(state.readNotifications)}
    </div>
  );
};

export default Notifications;
