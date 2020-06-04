import gql from 'graphql-tag';

const ADD_USER_RESEARCH_MUTATION = gql`
  mutation addUserResearch($data: UserResearchInput!) {
    addUserResearch(data: $data) {
      id
      url
      projectId
      created_at
    }
  }
`;

export default ADD_USER_RESEARCH_MUTATION;
