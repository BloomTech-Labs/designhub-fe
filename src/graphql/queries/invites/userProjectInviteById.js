//needs testing against data

import gql from 'graphql-tag';

const GET_USER_PROJECT_INVITE_QUERY = gql`
  query Project_invite($id: ID!) {
    userprojectinvitebyid(id: $id) {
      id
      email
      projectId
      created_at
      updated_at
    }
  }
`;

export default GET_USER_PROJECT_INVITE_QUERY;
