//needs testing against data

import gql from 'graphql-tag';

const GET_ALL_USER_PROJECT_INVITES_QUERY = gql`
  query Project_invite {
    userprojectinvites {
      id
      email
      projectId
      created_at
      updated_at
    }
  }
`;

export default GET_ALL_USER_PROJECT_INVITES_QUERY;
