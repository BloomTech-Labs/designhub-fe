import gql from 'graphql-tag';

const ADD_HEATMAP_MUTATION = gql`
  mutation addHeatmap($data: addHeatmapInput!) {
    addHeatmap(data: $data) {
      userId
      projectId
      imageId
      count
      date
      contribution
    }
  }
`;

export default ADD_HEATMAP_MUTATION;
