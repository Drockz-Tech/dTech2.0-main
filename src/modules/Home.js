import React from 'react';
import profile from '../media/DHAIRYA_22BCE3595.jpg';
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
	const navigate = useNavigate();

	document.addEventListener('keydown', function(event) {
		if (event.key === 'Enter') {
			navigate('/terminal');
			console.log('clicking');
		}
	});
	return (
		<div className="Home">
			<div className="Home-Name">
				<TypeAnimation
					sequence={[ 'Drockz-Tech', 1000, 'my bad', 100, 'Dhairya Shah' ]}
					wrapper="h1"
					cursor={true}
				/>
			</div>

			<div className="Home-TitleIMG">
				<div className="Home-IMGFrame">
					<img src={profile} alt="Dhairya" />
				</div>

				<p>Full-Stack Developer</p>
			</div>
			<div className="Home-More">
				<h3>
					click <Link to={'/terminal'}> Enter</Link> for more information
				</h3>
			</div>

			<div className="Home-Links">
				<a href="https://github.com/Drockz-Tech" target='blank'>
					<AiOutlineGithub />
				</a>
				<a href="mailto: dhairyatheboss@gmail.com">
					<AiOutlineMail />
				</a>
				<a href="https://www.linkedin.com/in/dhairya-shah-962049196/" target='blank'>
					<AiOutlineLinkedin />
				</a>
			</div>
		</div>
	);
};

export default Home;
