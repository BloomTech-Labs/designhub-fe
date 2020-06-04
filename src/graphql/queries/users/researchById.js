//needs testing against data

import gql from 'graphql-tag';

const GET_RESEARCH_BY_ID_QUERY = gql`
  query User_research($id: ID!) {
    researchbyid(id: $id) {
      id
      url
      projectId
      created_at
    }
  }
`;

export default GET_RESEARCH_BY_ID_QUERY;
