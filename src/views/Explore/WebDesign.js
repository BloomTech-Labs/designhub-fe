import React from 'react';

import { TabPanel } from 'react-tabs';
import ProjectThumbnail from '../Project/ProjectThumbnail';

export default function WebDesign() {
	return (
		<TabPanel className="tabs-container">
			<div className="empty-state">
				<img src={''} className="empty-icon" />
				<h1 className="no-projects">There are no projects in this category.</h1>
			</div>

			<div className="explore-projects-array">
				<ProjectThumbnail />;
			</div>
		</TabPanel>
	);
}
