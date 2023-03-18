import Link from 'next/link'
import { useRouter } from 'next/router';
import styled from 'styled-components';


const MenuBody = styled.nav`
	display: flex;
	align-items: center;
	transition: var(--transition-sm);

	@media (max-width: 767px){
		display: none
	}
`

const MenuList = styled.ul`
	display: flex;
	align-items: center;

	li{
		margin-right: 5px;
	}

	@media (max-width: 767px){
		flex-direction: column;
		align-items: flex-start;
		li{
			margin-right: 0px;
			margin-bottom: 25px;
		}
	}
`

const CustomLink = styled.a`
	position: relative;
	color: var(--grey);
	cursor: pointer;
	font-size: 14px;
	text-transform: uppercase;
	transition: var(--transition-sm);
	padding: 7px 15px;



	&:before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: scaleY(2);
		opacity: 0;
		transition: 0.5s;
		border-top: 2px solid var(--bg-pink);
		border-bottom: 2px solid var(--bg-pink);
	}
	&:after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--bg-pink);
		transform: scaleY(0);
		transition: 0.5s;
		
	}
	span{
		position: relative;
		z-index: 2;
	}

	@media (min-width: 1800px){
		font-size: 18px;
	}

	${({activeLink}) => activeLink &&`
		color: var(--white);
		&:before{
			display: none;
		}
		&:after{
			display: none;
		}
	`}

	@media (any-hover: hover){
		:hover{
			color: var(--white);
			&:before{
				transform: scaleY(1.2);
				opacity: 1;
			}
			&:after{
				transform: scaleY(1);
			}
		}
	}

	@media (max-width: 767px){
		font-size: 22px;
	}
`

const Menu = ({links}) => {
	const router = useRouter();

	return(
		<MenuBody>
			<MenuList>
				{links.map((link, index) => <li key={index}><Link href={link.href} legacyBehavior><CustomLink activeLink={router.pathname === link.href ? true : false}><span>{link.title}</span></CustomLink></Link></li>)}
			</MenuList>
		</MenuBody>
	)
}

export {Menu}