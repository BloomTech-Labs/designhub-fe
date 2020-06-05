//needs testing against data

import gql from 'graphql-tag';

const GET_RECENT_QUERY = gql`
  query Explore {
    getrecent {
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

export default GET_RECENT_QUERY;
