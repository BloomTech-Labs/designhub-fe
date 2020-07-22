import gql from 'graphql-tag';

const UPDATE_PROJECT_MUTATION = gql`
  mutation updateProject($data: UpdateProjectInput!) {
    updateProject(data: $data) {
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
export default UPDATE_PROJECT_MUTATION;
