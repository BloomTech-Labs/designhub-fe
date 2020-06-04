//needs testing against data

import gql from 'graphql-tag';

const GET_PHOTO_COMMENTS_BY_ID_QUERY = gql`
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

export default GET_PHOTO_COMMENTS_BY_ID_QUERY;
