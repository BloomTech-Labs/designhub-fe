//needs testing against data

import gql from 'graphql-tags';

const comments = gql`
  query Comments($projectId: Int!) {
    comments(projectId: $projectId) {
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
export default comments;
