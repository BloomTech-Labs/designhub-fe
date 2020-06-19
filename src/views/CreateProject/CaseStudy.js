import React, { PropTypes } from 'react';
import './styles.scss';
import './SASS/CaseStudy.scss';

const CaseStudy = () => {
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
            /*onChange={handleResearchInput}*/
          />
        </div>
        <div className="case-study-delete">
          <button
          /*              onClick={(e) => {
                e.preventDefault();
                setState({
                  ...state,
                  deletingResearch: projectResearch[0].id,
                  modal: true,
                });
              }}*/
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