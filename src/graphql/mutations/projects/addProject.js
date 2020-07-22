import gql from 'graphql-tag';

const ADD_PROJECT_MUTATION = gql`
  mutation addProject($data: ProjectInput!) {
    addProject(data: $data) {
      id
      userId
      private
      name
      category
      description
      figma
      invision
      mainImg
    }
  }
`;
export default ADD_PROJECT_MUTATION;


