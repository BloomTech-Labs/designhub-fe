//needs testing against data

import gql from 'graphql-tag';

const projectPhoto = gql`
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

export default projectPhoto;
