import { useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import {motion, AnimateSharedLayout} from 'framer-motion'

const HeaderBottomWrapper = styled.div`
	background-color: var(--bg-pink);
	margin: 0 auto;
	min-height: 74px;
	display: flex;
	align-items: center;
	@media (min-width: 1800px){
		min-height: 108px;
	}

	@media (max-width: 1024px){
		min-height: 56px;
	}
`;

const MenuEl = styled.ul`
	display: flex;
	white-space: nowrap;
	padding: 0px 20px;
	overflow-x: scroll;
	max-width: max-content;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	scrollbar-width: none;

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
`

const MenuLink = styled.a`
	font-family: var(--font-lexend);
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
const links = [
	{title: "Cinema Movies", href: "/"},
	{title: "Tv series", href: "/"},
	{title: "Carhrefons", href: "/"},
	{title: "Anime", href: "/"},
	{title: "New Movies", href: "/"}
]

const HeaderBottom = () => {
	const [activeLink, setActiveLink] = useState(0);

	return(
		
			<HeaderBottomWrapper>
				<MenuEl>
					<AnimateSharedLayout>
					{links.length > 0 &&
						links.map((link, index) => (
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