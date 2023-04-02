import {useEffect, useMemo} from 'react';
import styled from 'styled-components';
import {mouseMoveAnim, mouseEnterAnim, mouseLeaveAnim} from './ButtonAnimation';

import {useSelector, useDispatch} from 'react-redux';
import {actionOpenMenu, actionSchowIcon} from '../../store/menu/actions-menu';


const BurgerWrapper = styled.button`
	will-change: transform;
	background: transparent;
	position: fixed;
	top: 30px;
	right: 30px;
	z-index: 100;
	cursor:pointer;
	transform: translateY(0%) scale(0) rotate(0.001deg);
	transition: transform 0.4s cubic-bezier(0.36, 0, 0.66, 0) 0s;
	

	@media (min-width: 1800px){
		top: 50px;
		right: 50px;
	};

	@media (max-width: 480px){
		top: 20px;
		right: 20px;
	};
	
	${({showIcon, menuOpen}) => (showIcon || menuOpen) &&`
		transform: translateY(0%) scale(1) rotate(0.001deg);
		transition: transform 0.4s cubic-bezier(0.34, 1.5, 0.64, 1) 0s;
	`}
`
const BurgerBody = styled.div`
	position: relative;
	background-color: var(--bg-dark);
	display:flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	overflow: hidden;
	width: 5.5vw;
	height: 5.5vw;
	transition: transform .2s linear, color .1s linear, background-color 0.25s cubic-bezier(0.36, 0, 0.66, 0) 0s, box-shadow 0.25s cubic-bezier(0.36, 0, 0.66, 0) 0s;
	box-shadow: 5px 5px 19px -5px #353B48;
	@media (max-width: 1024px){
		width: 70px;
		height: 70px;
	};

	${({menuOpen}) => menuOpen &&`
		background-color: var(--bg-pink);
	`}
`
const BurgerLines = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
const BurgerLine = styled.div`
	position: absolute;
	width: 28%;
	height: 8%;
	opacity: 1;
	z-index: 2;
	transition: transform .25s linear;

	&:after,
	&:before{
		content: "";
		display: block;
		position: absolute;
		left: 50%;
		height: 1px;
		width: 100%;
		transform: translate(-50%, -50%) rotate(0.001deg);
		background: var(--white);
		transition: var(--transition-sm);
	}

	&:before{
		top: 0;
		transform: translate(-50%, -50%);
	}

	&:after{
		top: 100%;
		transform: translate(-50%, -50%);
	}

	${({menuOpen}) => menuOpen &&`
		&:before{
			top: 50%;
			transform: translate(-50%, -50%) rotate(-45deg);
		}

		&:after{
			top: 50%;
			transform: translate(-50%, -50%) rotate(45deg);
		}
	`
	}
`
const HoverEl = styled.div`
	background-color: var(--bg-pink);
	position: absolute;
	width: 150%;
	height: 200%;
	border-radius: 50%;
	top: -50%;
	left: -25%;
	transform: translate3d(0,-76%,0);
    will-change: transform;
    transition: background-color ease-in-out .25s;
`


// eslint-disable-next-line
const BurgerFixed = () => {
	const menuOpen = useSelector(state => state.menu.menuOpen);
	const showIcon = useSelector(state => state.menu.showIcon);
	const dispatch = useDispatch();

	

	useEffect(() => {
		const fixedBurger = () => window.scrollY > 700 ? dispatch(actionSchowIcon(true)) : dispatch(actionSchowIcon(false))
		document.addEventListener('scroll', fixedBurger);

		return () => document.removeEventListener('scroll', fixedBurger);
		// eslint-disable-next-line
	}, []);

	return (
		<BurgerWrapper showIcon={showIcon} menuOpen={menuOpen} onClick={() => dispatch(actionOpenMenu())}>
			<BurgerBody
				onMouseEnter={(event) => mouseEnterAnim(event)}
				onMouseMove={(event) => mouseMoveAnim(event)}
				onMouseLeave={(event) => mouseLeaveAnim(event)}
				data-magnetic='true'
				data-strength="25"
				data-strength-text="15"
				data-spead="0.3"
				menuOpen={menuOpen}
				>
				<HoverEl data-hover-fill></HoverEl>
				<BurgerLines data-magnetic-child>
					<BurgerLine data-magnetic-text menuOpen={menuOpen}></BurgerLine>
				</BurgerLines>
			</BurgerBody>
		</BurgerWrapper>
	)
}


export {BurgerFixed}