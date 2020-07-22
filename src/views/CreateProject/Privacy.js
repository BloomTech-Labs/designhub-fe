import React from 'react';
import './styles.scss';
const Privacy = () => {
  return (
    <>
      <label htmlFor="privacyLink" className="label">
        Privacy
      </label>
      <select
        type="select"
        name="privacy"
        /*value={privacy}*/
        placeholder="Select privacy settings"
        id="privacyLink"
        /*onChange={handlePrivacySetting}*/
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
    </>
  );
};
export default Privacy;
