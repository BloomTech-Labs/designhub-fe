import gql from 'graphql-tag';

const GET_DOES_USER_EXIST_QUERY = gql`
  query doesUserExist{
    doesUserExist(id: $id)
  }
`;
export default GET_DOES_USER_EXIST_QUERY;
