//needs testing against data

import gql from 'graphql-tag';

const photoComments = gql`
  query Comments($id: ID!) {
    photocomments(id: $id) {
      id
      userId
      projectId
      username
      imageId
      top
      left
      text
      created_at
    }
  }
`;

export default photoComments;
