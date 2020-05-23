//needs testing against data.

import gql from 'graphql-tags';

const allProjectInvites = gql`
  query Project_invite {
    allprojectinvites {
      id
      email
      projectId
      created_at
      updated_at
    }
  }
`;

export default allProjectInvites;
