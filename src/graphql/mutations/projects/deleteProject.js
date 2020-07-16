import gql from 'graphql-tag';

const DELETE_PROJECT_MUTATION = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id)
  }
`;
export default DELETE_PROJECT_MUTATION;
