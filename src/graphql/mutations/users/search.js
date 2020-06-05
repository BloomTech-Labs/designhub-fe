import gql from 'graphql-tag';

const SEARCH_MUTATION = gql`
  mutation search($text: String!) {
    search(text: $text) {
      user {
        id
      }
      project {
        id
      }
    }
  }
`;

export default SEARCH_MUTATION;
