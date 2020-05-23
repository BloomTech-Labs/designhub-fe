//needs testing against data

import gql from 'graphql-tags';

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
