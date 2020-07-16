import gql from 'graphql-tag';

const SEARCH_MUTATION = gql`
  mutation($searchText: String!) {
    search(searchText: $searchText) {
      users {
        id
        username
        firstName
        lastName
        email
        location
        bio
        website
        avatar
      }
      projects {
        id
        name
        description
        private
        figma
        invision
        mainImg
        created_at
        updated_at
      }
    }
  }
`;
export default SEARCH_MUTATION;
