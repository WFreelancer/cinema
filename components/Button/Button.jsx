import { forwardRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {mouseMoveAnim, mouseEnterAnim, mouseLeaveAnim} from './ButtonAnimation'

const CustomLinkWrapper = styled.div`
	max-width: ${props => props.maxWidth ? props.maxWidth : `100%`};
	${(props) => props.stretch &&`
		width: 100%;
	`}
`

const CustomLink = styled(Link)`
	position: relative;
	z-index: 5;
	border: 0;
	outline: 0;
	background: transparent;
	${(props) => props.stretch &&`
		width: 100%;
	`}
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

	${(props) => props.stretch &&`
		width: 100%;
	`}

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
		transition: color .3s linear .2s;
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
const CustomButtonWrapper = styled.button`
	position: relative;
	z-index: 5;
	border: 0;
	outline: 0;
	background: transparent;
	max-width: ${props => props.maxWidth ? props.maxWidth : `100%`};
	${(props) => props.stretch &&`
		width: 100%;
	`}
`
const CustomButton = styled.div`
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

	${(props) => props.stretch &&`
		width: 100%;
	`}
	${(props) => props.circle &&`
		width: 170px;
		height: 170px;
		border-radius: 50%;
	`}
	
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
		transition: color .3s linear .2s;
	}


	${(props) => props.light &&`
		background-color: transparent;
		border: 1px solid var(--white);

		@media (any-hover: hover){
			:hover{
				span{
					color: var(--bg-dark);
					transition-delay: .3s;
				}
			}
		}
	`}

	${(props) => props.dark &&`
		background-color: var(--bg-dark);
	`}

	${(props) => props.pink &&`
		background-color: var(--bg-pink);

		@media (any-hover: hover){
			:hover{
				span{
					color: var(--white);
				}
			}
		}
	`}

	${(props) => props.orange &&`
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

	${(props) => props.light &&`
		background-color: var(--white);
	`}

	${(props) => props.dark &&`
		background-color: var(--bg-pink);
	`}

	${(props) => props.pink &&`
		background-color: #E12538;
	`}

	${(props) => props.orange &&`
		background-color: #FFBF41;
	`}
`

// eslint-disable-next-line
const Button = forwardRef((props, ref) => {
	const {children, onClick, button, magnetic = false, href = '', pink, light, dark, orange, variants, circle, custom, maxWidth, borderRadius, stretch} = props;

	return (
		<>
			{button ?
				<CustomButtonWrapper
					ref={ref}
					onClick={onClick}
					variants={variants}
					custom={custom}
					maxWidth={maxWidth}
					stretch={stretch}
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
					maxWidth={maxWidth}
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