//needs testing against data

import gql from 'graphql-tag';

const GET_ALL_PROJECT_PHOTOS_QUERY = gql`
  query Project_Photos {
    projectphoto {
      id
      projectId
      url
      description
      title
      created_at
    }
  }
`;

export default GET_ALL_PROJECT_PHOTOS_QUERY;
