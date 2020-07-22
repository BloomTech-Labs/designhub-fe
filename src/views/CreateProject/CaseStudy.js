<<<<<<< HEAD
import React, { PropTypes, useState } from 'react';
=======
import React from 'react';
>>>>>>> cba8fd1f468182ef11996ae0c9d4418870d57b7b
import './styles.scss';
import './SASS/CaseStudy.scss';

const CaseStudy = () => {
  const [state, setState] = useState();
  const [researchFile, setResearchFile] = useState([]);

  const handleResearchInput = (e) => {
    if (e.target.files.length > 0) {
      setResearchFile([e.target.files[0]]);
    }
  };

  return (
    <>
      <p className="label p-case-study">Case Study</p>
      <div className="case-study-div">
        <div className="case-study-input-container">
          <label
            htmlFor="case-study"
            className="custom-case-study case-study-grey"
          >
            {/*uplaod case study*/}
          </label>
          <input
            className="case-study-input"
            type="file"
            accept="application/pdf"
            id="case-study"
            onChange={handleResearchInput}
          />
        </div>
        <div className="case-study-delete">
          <button
            onClick={(e) => {
              e.preventDefault();
              setState({
                ...state,
                // deletingResearch: projectResearch[0].id,
                modal: true,
              });
            }}
          >
            Delete Case Study
          </button>
        </div>

        <div className="case-study-delete disabled">
          <button disabled>Delete Case Study</button>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
