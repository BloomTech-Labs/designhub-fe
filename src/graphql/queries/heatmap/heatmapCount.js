//needs testing against data

import gql from 'graphql-tag';

const GET_HEATMAP_COUNT_QUERY = gql`
  query Heatmap($id: ID!) {
    heatmapcount(id: $id) {
      userId
      projectId
      imageId
      count
      date
      contribution
    }
  }
`;

export default GET_HEATMAP_COUNT_QUERY;
