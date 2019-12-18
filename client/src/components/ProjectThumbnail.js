import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import defaultImg from '../ASSETS/default_thumbnail.svg';

import '../SASS/ProjectThumbnail.scss';

const ProjectThumbnail = ({ project, user }) => {
    return !project || !user ? null : (
        <div className="project-content">
            <Link to={`/project/${project.id}`}>
                <div className="project-info">
                    <div className='project-flex'>
                        <img className='avatar' src={user.avatar} alt={user.firstName} />
                        <div className="project-middle">
                            {project.name.length > 35 ? (
                                <h1>{project.name.slice(0, 35)}...</h1>
                            ) : (
                                    <h1>{project.name}</h1>
                                )}
                            <h1 className='project-username'>{user.username}</h1>
                        </div>
                        <h1 className="created">
                            {moment(project.created_at).format('MMM DD, YYYY')}
                        </h1>
                    </div>
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
