//needs testing against data

import gql from 'graphql-tags';

const getFollowing = gql`
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

export default getFollowing;
