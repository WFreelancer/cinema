import { forwardRef } from "react";
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mouseEnterAnim, mouseLeaveAnim, mouseMoveAnim } from '../Button/ButtonAnimation';


const CheckboxLabelWrapper = styled.label``


const CheckboxContent = styled.div`
	cursor:pointer;
	will-change: transform;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 2.125em;
	padding: 1.05em 2.05em;
	overflow: hidden;
	color: ${({ dark }) => dark ? `var(--bg-dark)` : `var(--white)`};
	box-shadow: ${({ dark }) => dark ? `inset 0px 0px 0px 1px var(--color-border-dark)` : `inset 0px 0px 0px 1px var(--white)`};
	transition: color .3s linear;
	z-index: 3;
	font-family: 'Lexend', sans-serif;

	span{
		z-index: 2;
		color: inherit;
		position: relative;
		transform: rotate(0.001deg);
		will-change: transform, color;
		transition: color .3s linear;
	}

	@media (min-width: 1700px){
		font-size: 1.2rem;
		padding: 1.15em 2.15em;
	}

	@media (any-hover: hover){
		:hover{
			transition: color .3s linear;
			color: ${({ dark }) => dark ? `var(--white)` : `var(--bg-dark)`};
		}
	}
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
	background: ${({ dark }) => dark ? `var(--bg-pink)` : `red`};
	z-index: -1;
`

const CheckboxInput = styled.input`
	display: none;
	position: relative;

	&:checked + ${CheckboxContent} {
		color: ${({ dark }) => dark ? `var(--white)` : `var(--bg-dark)`};
		background: ${({ dark }) => dark ? `var(--bg-dark)` : `var(--white)`};
	}
`
// eslint-disable-next-line
const Checkbox = forwardRef((props, ref) => {
	const {
		children,
		title,
		id,
		activeCheckox,
		handleCheckbox = Function.prototype,
		type = 'checkbox',
		dark,
		magnetic
	} = props;

	return (
		<CheckboxLabelWrapper
			ref={ref}
			dark={dark}
		>
			<CheckboxInput dark={dark} type={type} name={title.toLowerCase()} value={title} checked={activeCheckox === id} onChange={() => handleCheckbox(id)} />
			<CheckboxContent
				dark={dark}
				onMouseEnter={(event) => mouseEnterAnim(event)}
				onMouseMove={(event) => mouseMoveAnim(event)}
				onMouseLeave={(event) => mouseLeaveAnim(event)}
				data-magnetic={magnetic}
				data-strength="30"
				data-strength-text="35"
				data-spead="0.3"
			>
				<div data-magnetic-child>
					<span data-magnetic-text>{children}</span>
				</div>
				<HoverEl dark={dark} data-hover-fill></HoverEl>
			</CheckboxContent>

		</CheckboxLabelWrapper>
	)
})

const MCheckbox = motion(Checkbox);

export { Checkbox, MCheckbox }