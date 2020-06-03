import gql from 'graphql-tag';

const deleteUserResearch = gql`
  mutation deleteUserResearch($id: ID!) {
    deleteUserResearch(id: $id)
  }
`;
export default deleteUserResearch;
