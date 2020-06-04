//needs testing against data

import gql from 'graphql-tag';

const GET_HEATMAP_BY_ID = gql`
  query Heatmap($id: ID!) {
    heatmapget(id: $id) {
      userId
      projectId
      imageId
      count
      date
      contribution
    }
  }
`;

export default GET_HEATMAP_BY_ID;
