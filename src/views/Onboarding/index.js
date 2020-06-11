import React, { useState } from 'react';

import { useAuth0 } from '../../utilities/auth-spa';

import Loading from '../../common/Loading';
import Step1 from './Step1.js';
import Step2 from './Step2.js';

import './styles.scss';
export default function OnboardingForm() {
	return (
		<div>
			<div className="onboarding-form">
				<form>
					<section className="step-components">
						<Step1 />
						<Step2 />
					</section>
				</form>
			</div>
		</div>
	);
}
