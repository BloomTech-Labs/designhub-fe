import gql from 'graphql-tag';

const ADD_USER_RESEARCHING_MUTATION = gql`
  mutation addUserResearching($data: UserResearchInput!) {
    addUserResearching(data: $data) {
      id
      url
      projectId
      created_at
    }
  }
`;

export default ADD_USER_RESEARCHING_MUTATION;
