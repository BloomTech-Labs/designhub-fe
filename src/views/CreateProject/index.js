import React from 'react';
import Layout from '../../common/Layout';
import DeleteProjectModal from './DeleteProjectModal';
import InviteModal from './InviteModal';
import ProjectFormBody from './ProjectFormBody';

import { useAuth0 } from '../../utilities/auth-spa.js';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_BY_ID_QUERY } from '../../graphql/index';

import './styles.scss';

export default function CreateProject() {

    const { logout, user } = useAuth0();

  const { data: userData } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: user?.sub },
  });
  return (
    <Layout>
      <div className="project-form-wrapper">
        <DeleteProjectModal />
        <div className="project-form-wrapper">
          <InviteModal />
        </div>
        <ProjectFormBody userData={userData} user={user}/>
      </div>
    </Layout>
  );
}