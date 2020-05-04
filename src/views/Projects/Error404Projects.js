import React from "react";
import './SASS/Error404Projects.scss';
import empty from '../../common/Icons/empty_project.svg';

function Error404Projects(props){

    return(

        
        <div className="empty-state">
            <h2 className="no-projects-title">
                Whoops!
            </h2>
            <img src={empty} alt="empty" className="empty-icon" />
            <h1 className="no-projects">
                Looks like there's nothing here.
            </h1>
        </div>
                
    );

}

export default Error404Projects;