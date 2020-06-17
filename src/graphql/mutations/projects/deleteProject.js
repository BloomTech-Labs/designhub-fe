import gql from 'graphql-tag';

const DELETE_PROJECT_MUTATION = gql`
  mutation deleteProject {
    deleteProject(id: "")
  }
`;
export default DELETE_PROJECT_MUTATION;
