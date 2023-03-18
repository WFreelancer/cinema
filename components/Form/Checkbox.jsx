import { forwardRef } from "react";
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {mouseEnterAnim, mouseLeaveAnim} from '../Button/ButtonAnimation'

const CheckboxLabel = styled.label`
	will-change: transform;
	position:relative;
	cursor:pointer;
	-webkit-user-select: none; /* Chrome/Safari */
	-moz-user-select: none; /* Firefox */
	overflow: hidden;
	border-radius: 2.125em;
	box-shadow: ${({dark}) => dark ? `inset 0px 0px 0px 1px var(--color-border-dark)` : `inset 0px 0px 0px 1px var(--white)`};
`

const CheckboxText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 2.125em;
	padding: 1.05em 2.05em;
	overflow: hidden;
	color: ${({dark}) => dark ? `var(--bg-dark)` : `var(--white)`};
	transition: color .3s linear .1s;
	z-index: 3;

	@media (min-width: 1800px){
		font-size: 1.5rem;
	}

	@media (any-hover: hover){
		${CheckboxLabel}:hover & {
			transition: color .3s linear .1s;
			color: ${({dark}) => dark ? `var(--white)` : `var(--bg-dark)`};
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
	background: ${({dark}) => dark ? `var(--bg-pink)` : `var(--white)`};
`

const CheckboxInput = styled.input`
	display: none;
	position: relative;

	&:checked + ${CheckboxText} {
		color: ${({dark}) => dark ? `var(--white)` : `var(--bg-dark)`};
		background: ${({dark}) => dark ? `var(--bg-dark)` : `var(--white)`};
	}
`
// eslint-disable-next-line
const Checkbox = forwardRef((props, ref) => {
	const {
		children,
		title,
		id,
		filterCount,
		handleСheckbox = Function.prototype,
		type = 'checkbox',
		dark
	} = props;

	return(
		<CheckboxLabel
			onMouseEnter={(event) => mouseEnterAnim(event)}
			onMouseLeave={(event) => mouseLeaveAnim(event)}
			ref={ref}
			dark={dark}
		>
			<CheckboxInput dark={dark} type={type} name={title.toLowerCase()} value={title} checked={filterCount === id} onChange={() => handleСheckbox(id)}/>
			<CheckboxText dark={dark}>{children}</CheckboxText>
			<HoverEl dark={dark} data-hover-fill></HoverEl>
		</CheckboxLabel>
	)
})

const MCheckbox = motion(Checkbox);

export {Checkbox, MCheckbox}