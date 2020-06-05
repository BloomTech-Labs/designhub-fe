import gql from 'graphql-tag';

const DELETE_HEATMAP_MUTATION = gql`
  mutation deleteHeatmap($id: ID!) {
    deleteHeatmap(id: $id)
  }
`;
export default DELETE_HEATMAP_MUTATION;
