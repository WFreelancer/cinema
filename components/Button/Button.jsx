import { forwardRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {mouseMoveAnim, mouseEnterAnim, mouseLeaveAnim} from './ButtonAnimation'

const CustomLinkWrapper = styled.div`
	max-width: 100%;
	width: ${({stretch}) => stretch ? `100%` : `auto`};
`

const CustomLink = styled(Link)`
	position: relative;
	z-index: 5;
	border: 0;
	outline: 0;
	background: transparent;
	width: ${({stretch}) => stretch ? `100%` : `auto`};
`
const LinkEl = styled.a`
	position: relative;
	min-width: 170px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: ${props => props.borderRadius ? props.borderRadius : `2.125em`};
	padding: 1.05em 0;
	cursor: pointer;
	user-select: none;
    text-decoration: none;
    will-change: transform;
    outline: 0;
    transform: translateZ(0) rotate(0.001deg);
	color: var(--white);
	box-shadow: inset 0px 0px 0px 1px var(--color-border-light);
	overflow: hidden;
	font-family: 'Lexend', sans-serif;

	width: ${({stretch}) => stretch ? `100%` : `auto`};

	@media (min-width: 1800px){
		min-width: 220px;
		font-size: 1.5rem;
	}

	@media (max-width: 400px){
		min-width: 130px;
	};

	span{
		z-index: 2;
		position: relative;
		transform: rotate(0.001deg);
		pointer-events: none;
		will-change: transform, color;
		transition: color .3s linear .1s;
	}


	${(props) => props.light &&`
		background-color: transparent;
		border: 1px solid var(--white);

		:hover{
			span{
				color: var(--bg-dark);
			}
		}
	`}
	${(props) => props.dark &&`
		background-color: var(--bg-dark);
	`}

	${(props) => props.pink &&`
		background-color: var(--bg-pink);

		:hover{
			span{
				color: var(--white);
			}
		}
	`}

	${(props) => props.orange &&`
		background-color: var(--orange);
	`}
`
const CustomButtonWrapper = styled(motion.button)`
	position: relative;
	z-index: 5;
	border: 0;
	outline: 0;
	background: transparent;
	max-width: 100%;
	width: ${({stretch}) => stretch ? `100%` : `auto`};

	${({circle}) => circle &&`
		left: 150px;
		font-size: 18px;
		@media (max-width: 767px){
			left: 0px;
		};
	`}
`
const CustomButton = styled.div`
	position: relative;
	min-width: 170px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: ${({borderRadius}) => borderRadius ? borderRadius : `2.125em`};
	padding: 1.05em 0;
	cursor: pointer;
	user-select: none;
    text-decoration: none;
    will-change: transform;
    outline: 0;
    transform: translateZ(0) rotate(0.001deg);
	color: var(--white);
	box-shadow: inset 0px 0px 0px 1px var(--color-border-light);
	overflow: hidden;
	width: ${({stretch}) => stretch ? `100%` : `auto`};
	font-family: 'Lexend', sans-serif;
	@media (min-width: 1800px){
		min-width: 250px;
		font-size: 1.5rem;
	}

	@media (max-width: 400px){
		min-width: 130px;
	};

	span{
		z-index: 2;
		color: var(--color-dark);
		position: relative;
		transform: rotate(0.001deg);
		pointer-events: none;
		will-change: transform, color;
		transition: color .3s linear .1s;
	}

	${({circle}) => circle &&`
		min-width: unset;
		width: clamp(9em, 12vw, 11em);
		height: clamp(9em, 12vw, 11em);
		border-radius: 50%;
		
		@media (min-width: 1800px){
			min-width: unset;
		}
	`}


	${({light}) => light &&`
		background-color: transparent;
		border: 1px solid var(--white);

		@media (any-hover: hover){
			:hover{
				span{
					color: var(--bg-dark);
					transition-delay: .2s;
				}
			}
		}
	`}

	${({dark}) => dark &&`
		background-color: var(--bg-dark);
	`}

	${({pink}) => pink &&`
		background-color: var(--bg-pink);

		@media (any-hover: hover){
			:hover{
				span{
					color: var(--white);
				}
			}
		}
	`}

	${({orange}) => orange &&`
		background-color: var(--orange);
	`}
`
const HoverEl = styled.div`
	position: absolute;
	width: 150%;
	height: 200%;
	border-radius: 50%;
	top: -50%;
	left: -25%;
	transform: translate3d(0,-76%,0);
    will-change: transform;
    transition: background-color ease-in-out .25s;

	${({light}) => light &&`
		background-color: var(--white);
	`}

	${({dark}) => dark &&`
		background-color: var(--bg-pink);
	`}

	${({pink}) => pink &&`
		background-color: #E12538;
	`}

	${({orange}) => orange &&`
		background-color: #FFBF41;
	`}
`

// eslint-disable-next-line
const Button = forwardRef((props, ref) => {
	const {children, onClick, button, magnetic = false, href = '', parallax, pink, light, dark, orange, variants, circle, custom, borderRadius, stretch} = props;

	return (
		<>
			{button ?
				<CustomButtonWrapper
					ref={ref}
					onClick={onClick}
					variants={variants}
					custom={custom}
					stretch={stretch}
					circle={circle}
				>
					<CustomButton
							onMouseEnter={(event) => mouseEnterAnim(event)}
							onMouseMove={(event) => mouseMoveAnim(event)}
							onMouseLeave={(event) => mouseLeaveAnim(event)}
							data-magnetic={magnetic}
							data-strength="30"
							data-strength-text="35"
							data-spead="0.3"
							dark={dark}
							light={light}
							pink={pink}
							orange={orange}
							borderRadius={borderRadius}
							stretch={stretch}
							circle={circle}
						>
						<HoverEl dark={dark} light={light} pink={pink} orange={orange} data-hover-fill></HoverEl>
						<div data-magnetic-child>
							<div data-magnetic-text>
								<span>{children}</span>
							</div> 
						</div>
					</CustomButton>
				</CustomButtonWrapper>
				:
				<CustomLinkWrapper
					ref={ref}
					variants={variants}
					custom={custom}
					stretch={stretch}
				>
					<CustomLink href={href} legacyBehavior stretch={stretch}>
						<LinkEl
							onMouseEnter={(event) => mouseEnterAnim(event)}
							onMouseMove={(event) => mouseMoveAnim(event)}
							onMouseLeave={(event) => mouseLeaveAnim(event)}
							data-magnetic={magnetic}
							data-strength="25"
							data-strength-text="25"
							data-spead="0.3"
							dark={dark}
							light={light}
							pink={pink}
							orange={orange}
							borderRadius={borderRadius}
							stretch={stretch}
						>
							<HoverEl dark={dark} light={light} pink={pink} orange={orange} data-hover-fill></HoverEl>
							<div data-magnetic-child>
								<div data-magnetic-text>
									<span>{children}</span>
								</div> 
							</div>
						</LinkEl>
					</CustomLink>
				</CustomLinkWrapper>
			}
		</>
		)
});

const MButton = motion(Button);

export {Button, MButton};