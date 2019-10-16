import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import moment from 'moment';

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
        <div
          key={item.id}
          style={{
            marginBotton: '20px',
            marginTop: '20px',
            display: 'flex',
            width: '500px'
          }}
        >
          {item.unread === true ? <h2>UNREAD</h2> : <h2>READ</h2>}
          <img
            style={{ width: '120px', height: '120px' }}
            src={item.activeUserAvatar}
          />
          <p>
            <span style={{ marginRight: '10px' }}>
              {item.activeUsername} commented
            </span>{' '}
            {item.commentText}
          </p>
          <p>{moment(item.created_at).fromNow()} </p>
          <img
            style={{ width: '120px', height: '120px' }}
            src={item.mainImgUrl}
          />
        </div>
      );
    } else if (item.type === 'follow') {
      return (
        <div
          key={item.id}
          style={{
            marginBotton: '20px',
            marginTop: '20px',
            display: 'flex',
            width: '500px'
          }}
        >
          {item.unread === true && <h2>UNREAD</h2>}
          <img
            style={{ width: '120px', height: '120px' }}
            src={item.activeUserAvatar}
          />
          <p>
            <span>{item.activeUsername} followed</span>
          </p>
          <p>{'  '}you</p>
          <p> {moment(item.created_at).fromNow()} </p>
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
    <div>
      {state.unReadNotifications && renderUnread(state.unReadNotifications)}
      {state.readNotifications && renderRead(state.readNotifications)}
    </div>
  );
};

export default Notifications;
