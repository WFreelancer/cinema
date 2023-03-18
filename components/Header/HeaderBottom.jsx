import {  useEffect, useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import {motion, AnimateSharedLayout} from 'framer-motion'
import axios from 'axios';

const HeaderBottomWrapper = styled.div`
	background-color: var(--bg-pink);
	margin: 0 auto;
`;

const MenuEl = styled.ul`
	display: flex;
	white-space: nowrap;
	padding: 20px;
	overflow-x: scroll;
	max-width: max-content;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	scrollbar-width: none;

	@media (min-width: 1800px){
		padding: 30px 20px;
	}

	li{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--white);
	}

	::-webkit-scrollbar {
		display: none;
	}
	-scrollbar {
		display: none;
	}

	@media (max-width: 1024px){
		padding: 10px 20px;
	}
`

const MenuLink = styled.a`
	color: inherit;
	font-size: 14px;
	text-transform: uppercase;
	padding: 10px 20px;
	cursor: pointer;
	transition: var(--transition-sm);
	z-index: 2;

	@media (min-width: 1800px){
		font-size: 18px;
		padding: 15px 30px;
	}

`

const AnimBackground = styled(motion.div)`
	position: absolute;
	top:0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: var(--white);
	border-radius: 30px;
`

const HeaderBottom = () => {
	const [allLink, setAllLink] = useState([]);
	const [activeLink, setActiveLink] = useState(0);

	const loadMenuLink = async () => {
		const response = await axios.get('http://localhost:5000/BottomLinks');


		setAllLink(response.data);
	}

	useEffect(() => {
		loadMenuLink();
		// eslint-disable-next-line
	}, []);



	return(
		
			<HeaderBottomWrapper>
				<MenuEl>
					<AnimateSharedLayout>
					{allLink.length > 0 &&
						allLink.map((link, index) => (
							<motion.li 
								key={index}
								initial={{color: 'var(--white)'}}
								animate={{color: activeLink === index ? 'var(--bg-pink)': 'var(--white)'}}
								transition={{ duration: 0.1 }}
								onClick={() => setActiveLink(index)}
							>
								{activeLink === index && <AnimBg/>}
								<Link href={link.href} legacyBehavior>
									<MenuLink>{link.title}</MenuLink>
								</Link>
							</motion.li>
							)
						)
					}
					</AnimateSharedLayout>
				</MenuEl>
			</HeaderBottomWrapper>
	)
}

const AnimBg = () => {
	return(
		<AnimBackground
			id='1'
			layoutId='active'
			transition={{
				type: 'tween',
				duration: 0.5
			}}
		/>
	)
}


export {HeaderBottom};