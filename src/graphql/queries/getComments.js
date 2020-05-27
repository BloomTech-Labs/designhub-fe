//needs testing against data

import gql from 'graphql-tag';

const getComments = gql`
  query Comments {
    getcomments {
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

export default getComments;
