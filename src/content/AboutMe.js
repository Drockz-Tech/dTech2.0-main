import React from 'react';
import '../styles/AboutMe.css';
const AboutMe = () => {
	return (
		<div className="AboutMe">
			<div className="AboutMe-Intro">
				<p className="Title">About Me</p>
				<ul>
					<li>
						Full-Stack <b>Web Developer</b> and <b>Software Engineer [not yet lol :)]</b>
					</li>
					<li>{`Born in Rajkot, Gujarat --> now in VIT Vellore, Tamil Nadu.`}</li>
					<li>Love learning new technologies! It's arguably my number ONE hobby.</li>
					<li>I just love learning in general, favorite show growing up, "Taarak Mehta Ka Oolta Chashma".</li>
					<li style={{ color: 'red' }}>Danger Zone: - <a href='https://i.pinimg.com/originals/9b/bb/28/9bbb28fecad2a29b4ebdc1ddbecbb6e6.gif' styles={{ color: 'red' }}>Don't Click Here</a></li>
				</ul>
			</div>
		</div>
	);
};
export default AboutMe;
