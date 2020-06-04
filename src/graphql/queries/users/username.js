//needs testing against data

import gql from 'graphql-tag';

const DOES_USERNAME_EXIST_QUERY = gql`
  query Username($username: String!) {
    username(username: $username)
  }
`;

export default DOES_USERNAME_EXIST_QUERY;
