import gql from 'graphql-tag';

const DELETE_USER_RESEARCH_MUTATION = gql`
  mutation deleteUserResearch($id: ID!) {
    deleteUserResearch(id: $id)
  }
`;
export default DELETE_USER_RESEARCH_MUTATION;
