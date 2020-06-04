//needs testing against data

import gql from 'graphql-tag';

const GET_ALL_COMMENTS_QUERY = gql`
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

export default GET_ALL_COMMENTS_QUERY;
