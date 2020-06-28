import gql from 'graphql-tag';

const GET_USER_BY_ID_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      username
      email
      firstName
      lastName
      location
      bio
      website
      avatar
      projects {
        id
        userId
        private
        name
        description
        figma
        invision
        mainImg
        created_at
        photos {
          id
          projectId
          url
          description
          title
          created_at
        }
        comments {
          id
          userId
          projectId
          text
          created_at
          user {
            id
            username
          }
        }
      }
      followers {
        id
        username
      }
    }
  }
`;
export default GET_USER_BY_ID_QUERY;
