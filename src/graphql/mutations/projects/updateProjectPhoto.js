import gql from 'graphql-tag';

const UPDATE_PROJECT_PHOTO_MUTATION = gql`
 mutaiton updateProjectPhoto(data:$data){
    id
    projectId
    description
    title
    url
  }
}
`;
export default UPDATE_PROJECT_PHOTO_MUTATION;
