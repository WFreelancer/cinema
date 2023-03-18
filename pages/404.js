import {useEffect} from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import {motion} from 'framer-motion'
import {MButton} from '../components/Button'
import {Container} from '../components/Container'
import {animationContent, animationImage} from '../helpers/Animations';
import poster from '../public/error.svg';
import human from '../public/human-error.svg';

const Wrapper = styled(motion.section)`
	height: 100%;
	display: flex;
	align-items: center;
	overflow: hidden;

	@media (max-width: 1024px){
		padding: 12vh 0;
	}
`
const Title = styled(motion.h4)`
	margin-bottom: 15px;

	span{
		font-size: 100px;
		font-weight: var(--fw-bold);
		color: var(--bg-pink);
		position: relative;
	}

	img{
		position: absolute;
		left: -50px;
		top: 52px;
		width: 61px;
		height: 138px;
	}

	@media (min-width: 1800px){
		margin-bottom: 25px;
		span{
			font-size: 9rem;
		}
		img{
		
			left: -60px;
			top: 90px;
			width: 71px;
			height: 148px;
		}
	}

	@media (max-width: 1024px){
		span{
			font-size: 70px;
		}
	}

	@media (max-width: 650px){
		display: none;
	}
`
const Body = styled(motion.div)`
	flex: 1 1 auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	
	@media (max-width: 650px){
		display: block;
	}
`
const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	a{
		max-width: 170px;
	}

	@media (max-width: 650px){
		align-items: center;
	}
`
const ImageBg = styled.div`
	${Title} {
		text-align: center;
		margin-bottom: 35px;
		display: none;

		span{
			font-size: 56px;
		}

		img{
			left: -24px;
			top: 30px;
			width: 30px;
			height: 69px;
		}
		
		@media (max-width: 650px){
			display: block;
		}
	}
	@media (max-width: 650px){
		margin-bottom: 25px;
	}
`
const ImageBody = styled(motion.div)`
	position: relative;
	height: 100%;
	display: flex;
    justify-content: center;

	img{
		position: absolute;
		height: 100%;
		object-fit: contain;
	}

	@media (max-width: 650px){
		height: 200px;
		img{
			transform: translateX(25px);
		}
		
	}
`
const SubTitle = styled(motion.span)`
	font-size: 30px;
	margin-bottom: 25px;
	@media (min-width: 1800px){
		font-size: 40px;
	}

	@media (max-width: 1024px){
		font-size: 20px;
		margin-bottom: 20px;
	}
`
const Text = styled(motion.span)`
	font-size: 30px;
	font-weight: var(--fw-bold);
	margin-bottom: 25px;

	@media (min-width: 1800px){
		font-size: 40px;
	}

	@media (max-width: 1024px){
		font-size: 20px;
		margin-bottom: 20px;
	}
	
`

const ImageEl = styled(Image)``

const Error = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
		// eslint-disable-next-line
	}, [])

	return(
		<Wrapper 
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			>
			<Container>
				<Body
					viewport={{once: true}}
					initial='hidden'
					whileInView="visible"
				>
					<ImageBg>
						<Title variants={animationContent} custom={1}>
							<span>
							404
							<ImageEl
								initial={{transform: 'scale(0)'}}
								animate={{transform: 'scale(1)'}}
								transition={{ delay: 1, duration: 0.4}}
								src={human}
								alt="human"
								fill
							/>
							</span>
						</Title>
						<ImageBody variants={animationImage}>
							<Image src={poster} alt="error-poster" fill/>
						</ImageBody>
					</ImageBg>
					<Content>
						<Title variants={animationContent} custom={1}>
							<span>
								404
								<ImageEl
									initial={{transform: 'scale(0)'}}
									animate={{transform: 'scale(1)'}}
									transition={{ delay: 1, duration: 0.4}}
									src={human}
									alt="human"
								/>
							</span>
						</Title>
						<SubTitle variants={animationContent} custom={2}>
							Oh No! Something went wrong
						</SubTitle>
						<Text variants={animationContent} custom={3}>
							Please try again later !
						</Text>
						<MButton
							initial="hidden"
							whileInView="visible"
							viewport={{once: true}}
							variants={animationContent}
							custom={4}
							orange
							magnetic
							href="/"
						>
							Go Home
						</MButton>
					</Content>
				</Body>
			</Container>
		</Wrapper>
	)
}

export default Error;