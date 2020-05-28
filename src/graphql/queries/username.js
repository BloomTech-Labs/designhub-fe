//needs testing against data

import gql from 'graphql-tag';

const username = gql`
  query Username($username: String!) {
    username(username: $username)
  }
`;

export default username;
