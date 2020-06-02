//needs testing against data

import gql from 'graphql-tag';

const heatmapGet = gql`
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

export default heatmapGet;
