import React from 'react';

import '../styles/Work.css';
const Work = () => {
	return (
		<div className="Work">
			<div className="Work-Intro">
				<p className="Title">Work History</p>

				<p className="Work-Job">GauthMath, Remote</p>

				<p className="Work-Date">04/2023 -06/2023</p>
				<p className="Work-Position">Subject Matter Expert</p>
				<ul className="Work-Detail">
					<li>
						<b>800+ Questions</b> solved of varied subjects including maths, physics and economics.
					</li>
					<li>
						{' '}
						<b>Created Unique solutions</b> for students to understand the concept very well.
					</li>
				</ul>
				<p className="Work-Job">Technica 2024,INDIAN SOCIETY FOR TECHNICAL EDUCATION (ISTE), VIT</p>
				<p className="Work-Date">03/2024</p>
				<p className="Work-Position">KrishiSarthi</p>
				<ul className="Work-Detail">
					<li>
						{' '}
						Programmed website in <b>JavaScript</b> using <b>MERN STACK</b>.
					</li>
					<li>Secured a spot among the <b>Top Ten Teams </b> in the hackathon!</li>
					<li>
						Designed website with <b> Bootstrap CSS</b>.
					</li>
					<li>
						{' '}
						<b>Created KrishiSarthi</b> a revolutionary platform providing farmers with a comprehensive solution to all their needs.
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Work;
