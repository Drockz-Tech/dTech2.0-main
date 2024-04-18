import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Projects.css';
import modernchair from '../media/modernchair.jpg';
import discord from '../media/discord.jpg';
import KrishiSarthi from '../media/Krishi-Sarthi.jpg';
import portfolio from '../media/portfolio.jpg';
const Projects = () => {
	return (
		<div className="Projects ">
			<p className="Title">Projects</p>
			<ul className="Projects-Mods">
				<li>
					<TypeAnimation cursor={false} sequence={[ 'First Website [HTML & CSS only :)]' ]} />
					<a href="https://drockz-tech.github.io/Modern-Chair/" target='blank'>
						<img src={modernchair} alt="chair olx" />
					</a>
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={[ 'First Cloned Website' ]} />
					<a href="https://github.com/Drockz-Tech/Discord-Clone" target='blank'>
						<img src={discord} alt="discord" />
					</a>
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={[ 'Krishi Sarthi [Group Project for Hackathon!]' ]} />
					<a href="https://github.com/Drockz-Tech/Krishi-Saarthi" target='blank' >
						<img src={KrishiSarthi} alt="krishi sarthi" />
					</a>
				</li>
				<li>
					<TypeAnimation cursor={false} sequence={[ 'Portfolio Website' ]} />
					<a href="https://github.com/Drockz-Tech/portfolio" target='blank'>
						<img src={portfolio} alt="portfolio" />
					</a>
				</li>
			</ul>
		</div>
	);
};
export default Projects;
