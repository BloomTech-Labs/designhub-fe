//needs testing against data

import gql from 'graphql-tags';

const userProjectInvites = gql`
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

export default userProjectInvites;
