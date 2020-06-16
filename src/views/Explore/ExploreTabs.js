import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';

import AllTab from './AllTab';
import Illustration from './Illustration';
import WebDesign from './WebDesign';
import GrapicDesign from './GraphicDesign';
import UXDesign from './UXDesign';
import UIDesign from './UIDesign';
import MotionDesign from './MotionDesign';
import Animation from './Animation';
import ProductDesign from './ProductDesign';

export default function ExploreTabs() {
	return (
		<div className="explore-tabs-container">
			<div>
				<Tabs defaultIndex={0}>
					<TabList className="explore-nav-links">
						{/*<div className = "explore-nav-div">*/}

						<Tab key={0} className="tabs-8">
							All
						</Tab>

						{/*CHIPS*/}

						{/*</div> */}
					</TabList>
					<AllTab />
					<Illustration />
					<WebDesign />
					<GrapicDesign />
					<UXDesign />
					<UIDesign />
					<MotionDesign />
					<Animation />
					<ProductDesign />
				</Tabs>
			</div>
		</div>
	);
}
