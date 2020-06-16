import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './styles.scss';

import defaultImg from '../../ASSETS/default_thumbnail.svg';

export default function ProjectThumbnail() {
	const [ user, setUser ] = useState({
		avatar: null,
		firstName: null,
		username: null
	});

	return (
		<div className="project-content">
			<Link>
				{/* <Link to={`/project/${project.id}`}> */}
				<div className="project-info">
					<div className="project-flex">
						<img className="avatar" src={user.avatar} alt={user.firstName} />
						<div className="project-middle">
							<h1>project.name.slice(0, 35)...</h1>

							<h1>project.name</h1>

							<h1 className="project-username">{user.username}</h1>
						</div>
						<h1 className="created">moment.project.created_at.format('MMM DD, YYYY')</h1>
					</div>
				</div>
				<img className="project-thumbnail" /> // src={''}
			</Link>
		</div>
	);
}
