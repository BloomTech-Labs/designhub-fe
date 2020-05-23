//needs testing against data

import gql from 'graphql-tags';

const userProjectInviteById = gql`
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

export default userProjectInviteById;
