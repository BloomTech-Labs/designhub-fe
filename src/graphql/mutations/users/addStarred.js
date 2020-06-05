import gql from 'graphql-tag';

const ADD_STARED_MUTATION = gql`
  mutation addStarred($data: addStarredInput!) {
    addStarred(data: $data) {
      id
      userId
      projectId
      count
      created_at
    }
  }
`;

export default ADD_STARED_MUTATION;
