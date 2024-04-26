import { Link } from 'react-router-dom';
import './navigationbuttonsstatic.scss'

function NavigationButtonsStatic() {
	const linksMain = [
		{id: '1', number: '00-1', title: 'Проекты', link: '/projects'},
		{id: '2', number: '00-2', title: 'Услуги', link: '/services'},
		{id: '3', number: '00-3', title: 'Обо мне', link: '/about'},
		{id: '4', number: '00-4', title: 'Контакты', link: '/contacts'},
	];
	
	return (
		<section className='navigationSectionStatic'>
			{linksMain.map((link) => (
				<div key={link.id}>
					<p className='upperText'>{link.number}</p>
					<Link className='navigationLink' to={`${link.link}`}>{link.title}</Link>
				</div>
			))}
			<p className='navigationText'>©2024</p>
		</section>
	);
}

export default NavigationButtonsStatic;
