import React from 'react';
import { useDropzone } from 'react-dropzone';

import DottedLine from '../../ASSETS/Icons/DottedLine';
import UploadCloud from '../../ASSETS/Icons/UploadCloud.js';
import remove from '../../ASSETS/remove.svg';
import welcome from '../../ASSETS/welcome.svg';

export default function Step2() {
	return (
		<div className="form-step">
			<div className="left-side">
				<h6 className="steps">Step 2 / 2</h6>
				<div className="left-container">
					<header>
						<h1>Welcome to the community </h1>
						<h2>Customize your profile even more by uploading a profile picture.</h2>
					</header>

					<div className="avatar-upload-container">
						<section className="dropzone-container">
							<div className="upload-container">
								<div className="drop-text-container">
									<UploadCloud />
								</div>
							</div>
						</section>

						<span className="DottedLine">
							<DottedLine />
						</span>
						<span className="avatarBlank-container">
							<aside className="Step2-thumbnail-container" />
						</span>
					</div>
					<p className="upload-help">
						Click or drag and drop on the upload icon to upload your profile picture
					</p>
					<div className="buttons">
						<button name="prev" className="prev-btn">
							Previous
						</button>

						<button name="cancel" className="prev-btn">
							Cancel
						</button>

						<button className="next-btn" type="submit">
							Submit
						</button>

						<button name="next" className="next-btn">
							Next
						</button>
					</div>
				</div>
			</div>
			<div className="right-side">
				<header>
					<img src={welcome} alt="welcome to designhub" className="welcome" />
					<h2>Discover new designers, get inspiration, and share your work with the community</h2>
				</header>
			</div>
		</div>
	);
}
