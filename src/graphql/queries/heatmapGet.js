//needs testing against data

import gql from 'graphql-tags';

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
