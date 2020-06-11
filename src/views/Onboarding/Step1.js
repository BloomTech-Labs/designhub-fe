import React, { useState } from 'react';

import welcome from '../../ASSETS/welcome.svg';

import CharacterCount from '../../common/CharacterCount/CharacterCount';

const Step1 = ({ alert, formUser, onChange, showPrev, handleNextButton, handlePrevButton, logout, submitButton }) => {
	return (
		<div className="form-step">
			<div className="left-side">
				<h6 className="steps">Step 1 / 2</h6>
				<div className="left-container">
					<header>
						<h1>Let's get to know you more!</h1>
						<p>This information will be visible on your profile.</p>
					</header>
					<div className="first_lastname-flex">
						<div>
							<div className="required input-field">
								<label htmlFor="firstName">First Name</label>
								<input required id="firstName" name="firstName" type="text" placeholder="i.e. Erik" />
							</div>
						</div>

						<div>
							<div className="required input-field">
								<label htmlFor="lastName">Last Name</label>
								<input required id="lastName" name="lastName" type="text" placeholder="i.e. Lambert" />
							</div>
						</div>
					</div>

					<div>
						<div className="required input-field">
							<label htmlFor="username">Username</label>
							<input required id="username" name="username" type="text" placeholder="i.e. eriklambert" />
						</div>
					</div>

					<div>
						<div className="required input-field">
							<label className="req" htmlFor="email">
								Email
							</label>
							<input
								required
								id="email"
								name="email"
								type="text"
								placeholder="i.e. eriklambert@designhubx.com"
							/>
						</div>
					</div>
					<div className="input-field">
						<label className="bio" htmlFor="bio">
							Bio
						</label>
						<textarea
							cols="30"
							rows="4"
							name="bio"
							id="bio"
							maxLength="240"
							placeholder="Describe yourself! This will appear on your profile in your bio!"
						/>
						<CharacterCount />
					</div>
					<div className="location-website-flex">
						<div className="input-field">
							<label htmlFor="location">Location</label>
							<input id="location" name="location" type="text" placeholder="i.e. Austin, TX" />
						</div>
						<div className="input-field">
							<label htmlFor="website">Website</label>
							<input id="website" name="website" type="text" placeholder="i.e. https://eriklambert.ux" />
						</div>
					</div>
					<div className="buttons">
						{showPrev ? (
							<button name="prev" className="prev-btn" onClick={handlePrevButton}>
								Previous
							</button>
						) : (
							<button name="cancel" className="prev-btn" onClick={logout}>
								Cancel
							</button>
						)}
						{submitButton ? (
							<button className="next-btn" type="submit">
								Submit
							</button>
						) : (
							<button name="next" className="next-btn" onClick={handleNextButton}>
								Next
							</button>
						)}
					</div>
				</div>
			</div>

			<div className="right-side">
				<header>
					<img src={welcome} alt="welcome to designhub" className="welcome" />
					<h2>Create projects and receive feedback by displaying your work on DesignHub</h2>
				</header>
			</div>
		</div>
	);
};

export default Step1;
