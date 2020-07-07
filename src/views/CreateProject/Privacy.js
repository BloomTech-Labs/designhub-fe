import React, { PropTypes, useState } from 'react';
import './styles.scss';

const Privacy = ({ isEditing, project, user }) => {
  //useQuery?

  const [privacy, setPrivacy] = useState(
    isEditing ? (project.privateProjects ? 'private' : 'public') : 'public'
  );
  const [state, setState] = useState({
    project: {
      userId: user.id,
      name: isEditing ? project.name : '',
      description: isEditing ? project.description : '',
      figma: isEditing ? project.figma : '',
      invision: isEditing ? project.invision : '',
      privateProjects: isEditing ? project.privateProjects : false,
      mainImg: isEditing ? project.mainImg : '',
    },
  });

  const handlePrivacySetting = (e) => {
    setPrivacy(e.target.value);
    const isPrivate = e.target.value === 'private' ? true : false;

    setState({
      ...state,
      project: {
        ...state.project,
        privateProjects: isPrivate,
      },
    });
  };
  //import from auth0
  //user.id would be user.sub
  //user?.sub
  return (
    <>
      <label htmlFor="privacyLink" className="label">
        Privacy
      </label>
      <select
        type="select"
        name="privacy"
        value={privacy}
        placeholder="Select privacy settings"
        id="privacyLink"
        onChange={handlePrivacySetting}
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
    </>
  );
};

export default Privacy;
