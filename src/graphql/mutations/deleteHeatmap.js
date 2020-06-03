import gql from 'graphql-tag';

const deleteHeatmap = gql`
  mutation deleteHeatmap($id: ID!) {
    deleteHeatmap(id: $id)
  }
`;
export default deleteHeatmap;
