//needs testing against data

import gql from 'graphql-tag';

const GET_FOLLOWING_QUERY = gql`
  query Explore($id: ID!) {
    getfollowing(id: $id) {
      recent {
        id
        userId
        privateProjects
        name
        description
        figma
        invision
        created_at
        updated_at
        mainImg
      }
      following {
        id
        userId
        privateProjects
        name
        description
        figma
        invision
        created_at
        updated_at
        mainImg
      }
      popular {
        id
        userId
        privateProjects
        name
        description
        figma
        invision
        created_at
        updated_at
        mainImg
      }
    }
  }
`;

export default GET_FOLLOWING_QUERY;
