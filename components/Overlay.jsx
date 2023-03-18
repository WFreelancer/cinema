import styled from 'styled-components';

const OverlayEl = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: linear-gradient(to right,hsla(220, 13%, 0%, .3) 40%, hsla(220, 13%, 0%, 1) 80%);
	opacity: 0;
	transition: opacity .8s cubic-bezier(.7, 0, .2, 1);
	z-index: 10;
	pointer-events: none;
	will-change: opacity;

	${({active}) => active &&`
			opacity: .35;
			pointer-events: all;
		`
	}
`

const Overlay = ({active, toggle = Function.prototype}) => {
	return <OverlayEl active={active} onClick={toggle}/>
}

export {Overlay};