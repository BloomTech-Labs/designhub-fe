//needs testing against data

import gql from 'graphql-tags';

const researchById = gql`
  query User_research($id: ID!) {
    researchbyid(id: $id) {
      id
      url
      projectId
      created_at
    }
  }
`;

export default researchById;
