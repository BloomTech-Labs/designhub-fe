//needs testing against data

import gql from 'graphql-tag';

const heatmapCount = gql`
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

export default heatmapCount;
