import React from "react";
import '../SASS/Error401Projects.scss';
import empty from './Icons/empty_project.svg';

function Error401Projects(props){

    return(

        <div className="empty-state">
            <h1 className="no-projects-title">
                Whoops!
            </h1>
            <img src={empty} alt="empty" className="empty-icon" />
            <h1 className="no-projects">
                You are not authorized to view this project.
            </h1>
        </div>
    );

}

export default Error401Projects;