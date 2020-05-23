//needs testing against data

import gql from 'graphql-tags';

const researchByProject = gql`
  query User_research($projectId: String!) {
    researchbyproject(projectId: $projectId) {
      id
      url
      projectId
      created_at
    }
  }
`;

export default researchByProject;
