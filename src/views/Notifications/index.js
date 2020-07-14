import React, { useEffect, useState } from 'react';
import Layout from '../../common/Layout';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import empty from '../../ASSETS/Icons/empty_project.svg';
import './styles.scss';

export default function Notifications() {
  const [state, setState] = useState([]);
  // const { id } = props.activeUser;
  // const { invite, getInvitesByUser } = props;

  // useEffect(() => {
  //   try {
  //     const turnToRead = async data => {
  //       if (data.unReadNotifications) {
  //         return await Promise.all(
  //           data.unReadNotifications.map(async i => {
  //             await axiosWithAuth().put(`api/v1/invite/${i.id}`, {
  //               unread: false
  //             });
  //           })
  //         );
  //       }
  //     };
  //     const getNotifications = async id => {
  //       const { data } = await axiosWithAuth().get(`api/v1/invite/${id}`);
  //       setState(data);
  //       turnToRead(data);
  //     };
  //     getNotifications(id);
  //     getInvitesByUser();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [id, invite, getInvitesByUser]);

  // const handleInvites = (accept, invite) => {
  //   if (accept) {
  //     props.acceptInvite(invite.id);
  //   } else {
  //     props.deleteInvite(invite);
  //   }
  // };

  // const renderBasedOnType = item => {
  //   if (item.type === 'comment') {
  //     return (
  //       <div key={item.id} className="commented_notification">
  //         <div className="commented_left">
  //           {item.unread === true ? <h2 className="unread">.</h2> : null}
  //           <img src={item.activeUserAvatar} className="avatar" alt="avatar" />
  //           <p className="commented">
  //             {item.activeUsername} commented:
  //             <mark className="comment_text">
  //               &nbsp;{item.commentText}&nbsp;
  //             </mark>
  //             <mark className="from_now">
  //               {moment(item.created_at).fromNow()}&nbsp;
  //             </mark>
  //           </p>
  //         </div>
  //         <Link to={`/project/${item.projectId}`}>
  //           <img
  //             src={item.mainImgUrl}
  //             className="thumbnail_preview"
  //             alt="thumbnail"
  //           />
  //         </Link>
  //       </div>
  //     );
  //   } else if (item.type === 'follow') {
  //     return (
  //       <div key={item.id} className="notification">
  //         {item.unread === true && <h2 className="unread">.</h2>}
  //         <img src={item.activeUserAvatar} className="avatar" alt="avatar" />
  //         <p className="followed_you">
  //           {item.activeUsername}&nbsp;followed&nbsp;
  //         </p>
  //         <p>you</p>
  //         <p>&nbsp;{moment(item.created_at).fromNow()} </p>
  //       </div>
  //     );
  //   } else if (item.type === 'collab') {
  //     const [id] = item.message ? item.message.split(' ') : [null, null];
  //     const invite = props.userInvites.length === 0 ? null : props.userInvites.find(invite => invite.id === Number(id));
  //     return (
  //       <div key={item.id} className="commented_notification">
  //         <div className="commented_left">
  //           {item.unread === true ? <h2 className="unread">.</h2> : null}
  //           <img src={item.activeUserAvatar} className="avatar" alt="avatar" />
  //           <p className="commented">
  //             {item.activeUsername} invited you to their project{' '}
  //             {item.projectName}
  //             <span> </span>
  //             <mark className="from_now">
  //               {moment(item.created_at).fromNow()}&nbsp;
  //             </mark>
  //           </p>
  //         </div>
  //         <div className="actions">
  //           {!invite ? null : !invite.pending ? (
  //             <p></p>
  //           ) : (
  //             <>
  //               <button className = "notifications-accept-btn" onClick={() => handleInvites(true, invite)}>
  //                 Accept
  //               </button>
  //               <button className = "notifications-reject-btn" onClick={() => handleInvites(false, invite)}>
  //                 Decline
  //               </button>
  //             </>
  //           )}
  //         </div>
  //         <Link to={`/project/${item.projectId}`}>
  //           <img
  //             src={item.mainImgUrl}
  //             className="thumbnail_preview"
  //             alt="thumbnail"
  //           />
  //         </Link>
  //       </div>
  //     );
  //   }
  // };

  // const renderUnread = array => {
  //   return array.map(i => {
  //     return renderBasedOnType(i);
  //   });
  // };

  // const renderRead = array => {
  //   return array.map(i => {
  //     return renderBasedOnType(i);
  //   });
  // };

  return (
    <Layout classname='notification-container'>
      <h1>Notifications go here</h1>
      {/* {(state.unReadNotifications === undefined || state.unReadNotifications.length > 0) || (state.readNotifications === undefined || state.readNotifications.length > 0) ? null : 
                      <div className="empty">
                        <img alt='empty' className="empty-icon" src={empty} />
                        <p>No notifications found!</p>
                      </div>}
      {state.unReadNotifications && renderUnread(state.unReadNotifications)}
      {state.readNotifications && renderRead(state.readNotifications)} */}
    </Layout>
  );
}
