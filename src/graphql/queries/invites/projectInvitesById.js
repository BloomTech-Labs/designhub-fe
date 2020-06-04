//needs testing against data

import gql from 'graphql-tag';

const GET_PROJECT_INVITE_BY_ID_QUERY = gql`
  query Project_invite($id: ID!) {
    projectinvitesbyid(id: $id) {
      id
      email
      projectId
      created_at
      updated_at
    }
  }
`;

export default GET_PROJECT_INVITE_BY_ID_QUERY;
