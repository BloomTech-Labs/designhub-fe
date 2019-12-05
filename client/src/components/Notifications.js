import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { connect } from 'react-redux'
import moment from 'moment';

import { deleteInvite, acceptInvite, getInviteById } from '../store/actions';

import '../SASS/Notifications.scss';

const Notifications = props => {
  const [state, setState] = useState([]);
  const [invites, setInvites] = useState([])
  const { id } = props.activeUser;

  useEffect(() => {
    try {
      const turnToRead = async data => {
        if (data.unReadNotifications) {
          return await Promise.all(
            data.unReadNotifications.map(async i => {
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
  }, [id]);


  const handleInvites = (accept, id, email) => {
    if (accept) {
      props.acceptInvite(id);
    }
    else {
      props.deleteInvite(id, email);
    }
  }


  const renderBasedOnType = item => {
    if (item.type === 'comment') {
      return (
        <div key={item.id} className="commented_notification">
          <div className="commented_left">
            {item.unread === true ? <h2 className="unread">.</h2> : null}
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
          {item.unread === true && <h2 className="unread">.</h2>}
          <img src={item.activeUserAvatar} className="avatar" alt="avatar" />
          <p className="followed_you">
            {item.activeUsername}&nbsp;followed&nbsp;
          </p>
          <p>you</p>
          <p>&nbsp;{moment(item.created_at).fromNow()} </p>
        </div>
      );
    } else if (item.type === 'collab') {
      const [id, email] = item.message ? item.message.split(' ') : [null, null];
      const invite = invites.length === 0 ? null : invites.find(invite => invite.id === id);
      console.log(invite, invites);
      return (
        <div key={item.id} className="commented_notification">
          <div className="commented_left">
            {item.unread === true ? <h2 className="unread">.</h2> : null}
            <img src={item.activeUserAvatar} className="avatar" alt="avatar" />
            <p className="commented">
              {item.activeUsername} invited you to their project {item.projectName}
              <span> </span>
              <mark className="from_now">
                {moment(item.created_at).fromNow()}&nbsp;
              </mark>
            </p>
          </div>
          <div className='actions'>
            {!invite ? null : !invite.pending ? <p>Invite Accepted</p> : (
              <>
                <button onClick={() => handleInvites(true, id, email)}>Accept</button>
                <button onClick={() => handleInvites(false, id, email)} >Reject</button>
              </>
            )}
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
    }
  };

  const getInviteData = async (i) => {
    if (i.type === 'collab') {
      const [id] = i.message ? i.message.split(' ') : [null, null];
      setInvites([...invites, await props.getInviteById(id)]);
    }
  }


  const renderUnread = array => {
    return array.map(i => {
      getInviteData(i);
      return renderBasedOnType(i);
    });
  };

  const renderRead = array => {
    return array.map(i => {
      getInviteData(i);
      return renderBasedOnType(i);
    });
  };
  return (
    <div className="notification-container">
      {state.unReadNotifications && renderUnread(state.unReadNotifications)}
      {state.readNotifications && renderRead(state.readNotifications)}
    </div>
  );
};

export default connect(null, { acceptInvite, deleteInvite, getInviteById })(Notifications);
