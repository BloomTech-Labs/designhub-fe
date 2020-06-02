//needs testing against data

import gql from 'graphql-tag';

const projectInvitesById = gql`
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

export default projectInvitesById;
