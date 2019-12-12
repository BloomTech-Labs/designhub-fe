import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import defaultImg from '../ASSETS/default_thumbnail.svg';

const ProjectThumbnail = ({ project, user }) => {
    return (
        <div className="project-content">
            <Link to={`/project/${project.id}`}>
                <div className="project-info">
                    {project.name.length > 35 ? (
                        <h1>{project.name.slice(0, 35)}...</h1>
                    ) : (
                            <h1>{project.name}</h1>
                        )}
                    <h1 className="created">
                        {moment(project.created_at).format('MMM DD, YYYY')}
                    </h1>
                </div>
                <img
                    src={project.mainImg ? project.mainImg : defaultImg}
                    className="project-thumbnail"
                    alt="test"
                    key={project.id}
                />
            </Link>
        </div>
    )
}

export default ProjectThumbnail;
