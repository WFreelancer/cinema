import styled from 'styled-components';
import Image from 'next/image';
import dynamic from "next/dynamic";
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import {openPopupTrailer} from '../../store/popup/actions-popup';
import {MTitle} from '../Title';
import {MButton} from '../Button';
import {animationContent , animationImage} from '../../helpers/Animations';
import useWindowSize from '../../helpers/windowSize';
import poster from '../../public/Puss-in-Boots-The-Last-Wish-Featured.webp';
import posterMobile from '../../public/main.jpg';

const LazyPopupVideo = dynamic(() => import('../Popups/PopupVideo'), {
	ssr: false,
	loading: () => <></>
});

const HeroWrapper = styled(motion.section)`
	position: relative;
	overflow: hidden;
	width: 100%;
	min-height: calc(100vh - 146px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--bg-dark);

	@media (min-width: 1800px){
		min-height: calc(100vh - 216px);
	}

	@media (max-width: 1024px){
		min-height: calc(100vh - 126px);
	}

	@media (max-width: 768px){
		min-height: calc(100vh - 116px);
	}
`

const Content = styled.div`
	position: relative;
	z-index: 3;
	padding: 110px 20px;
	max-width: 600px;
	margin: 0 auto;
	text-align: center;

	@media (min-width: 1800px){
		max-width: 1100px;
	}
`

const Actions = styled.div`
	display: flex;
	justify-content: center;

	a,
	button{
		margin: 0 5px;
	}
	
	@media (min-width: 1800px){
		a,
		button{
			margin: 0 15px;
		}
	}
`

const Text = styled(motion.p)`
	font-size: 1.1rem;
	color: var(--color-text);
	margin-bottom: 20px;
	line-height: 1.5rem;
	font-weight: var(--fw-light);

	@media (min-width: 1800px){
		font-size: 1.8rem;
		line-height: 2.3rem;
		margin-bottom: 40px;
	}

	@media (max-width: 767px){
		font-size: 1rem;
		line-height: 1.3rem;
	}
`

const HeroImage = styled(motion.picture)`
	position: absolute;
	top:0;
	right: 0;
	width: 100%;
	height: 100%;

	img{
		position: absolute;
		top:0;
		right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	:before{
		content: "";
		background-color: rgba(0, 0, 0, 0.2);
		position: absolute;
		top:0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
`

const Hero = ({hero}) => {
	const {title, overview, id} = hero;
	const dispatch = useDispatch();
	const {width} = useWindowSize();
	const separateTitle = title.split(':')

	return (
		<HeroWrapper initial="hidden" whileInView="visible" viewport={{once: true}}>
			<HeroImage variants={animationImage} delay={0.3}>
				<Image src={width > 768 ? poster: posterMobile} alt={title} fill priority/>
			</HeroImage>
			<Content>
				<MTitle variants={animationContent} delay={0.5} custom={3} type="h2" light marginBottom="2vh" style={{opacity: 0}}>
					{separateTitle[0]}
					<br/>
					{separateTitle[1]}
				</MTitle>
				<Text variants={animationContent} custom={4} delay={0.5} style={{opacity: 0}}>
					{overview.slice(0, 157)}...
				</Text>
				<Actions>
					<MButton style={{opacity: 0}}
						pink
						magnetic
						href={`/movie/${id}`}
						variants={animationContent}
						custom={5}
						delay={0.5}
					>
						Learn More
					</MButton>
					<MButton style={{opacity: 0}}
						light
						button
						magnetic
						variants={animationContent}
						custom={6}
						onClick={() => dispatch(openPopupTrailer())}
						delay={0.5}
					>
						Watch Trailer
					</MButton>
				</Actions>
			</Content>
			<LazyPopupVideo src="RqrXhwS33yc"/>
		</HeroWrapper>
	)
}

export {Hero}