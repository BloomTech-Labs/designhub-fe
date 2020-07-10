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

  return (
    <Layout>
      <h1>Notifications!</h1>
    </Layout>
  );
}
