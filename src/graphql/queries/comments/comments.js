//needs testing against data

import gql from 'graphql-tag';

const GET_PROJECT_COMMENTS_QUERY = gql`
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
export default GET_PROJECT_COMMENTS_QUERY;
