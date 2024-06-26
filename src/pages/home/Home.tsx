import NavigationButtonsActive from '../../components/navigationButtonsActive/NavigationButtonsActive.tsx';
import './home.scss';

function Home() {
	return (
		<section className='homeSection'>
			<h1><span className='firText'>Star<span className='ligatures'>fl</span><span className='owFollowing'>ow</span></span><span className='secText'> Design</span></h1>
			<NavigationButtonsActive/>
			<section className='welcomeUnder'>
                    <span className='bracket1'>(</span>
                        <p className='navbarText'>
                            Открыт для любого<br></br>сотрудничества и предложений
                        </p>
                    <span className='bracket2'>)</span>
            </section>
			<article className='homeText'>
				<p>Эмпатичный дизайнер, стремлюсь<br></br>сделать ваш бренд понятным<br></br>и выделяющимся</p>
				<p>Моя цель — объединить эстетику,<br></br>функциональность и значимость<br></br>в единое целое</p>
			</article>
		</section>
	);
}

export default Home;
