import { forwardRef } from "react";
import styled from 'styled-components';
import {motion} from 'framer-motion'

const TitleBig = styled.h1`
	z-index: 1;
	position: relative;
	text-align: ${({textAlign}) => textAlign ? textAlign : `center`};
	font-weight: var(--fw-regular);
	margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : `4vh`};
	color: ${({light}) => light ? 'var(--white)' : `inherit`};

	font-size: calc(clamp(3.25em, 7vw, 8em) * .875);

	@media (max-width: 480px){
		font-size: calc(clamp(3.7em, 7vw, 8em) * .875);
		margin-bottom: ${({marginBottom}) => marginBottom && `4vh`};
	}
`;
const TitleMiddle = styled.h2`
	z-index: 1;
	position: relative;
	text-align: ${({textAlign}) => textAlign ? textAlign : `center`};
	font-weight: var(--fw-regular);
	margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : `4vh`};
	color: ${({light}) => light ? 'var(--white)' : `inherit`};
	font-size: calc(clamp(2.5em, 6vw, 7em) * .775);

	@media (max-width: 480px){
		font-size: calc(clamp(3em, 6vw, 7em) * .775);
	}
`;
const TitleSmall = styled.h3`
	z-index: 1;
	position: relative;
	text-align: ${({textAlign}) => textAlign ? textAlign : `center`};
	font-weight: var(--fw-regular);
	margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : `4vh`};
	color: ${({light}) => light ? 'var(--white)' : `inherit`};
	font-size: calc(clamp(2em, 5vw, 6em) * .675);
`;
// eslint-disable-next-line
const Title = forwardRef(({children, type, ...props}, ref) => {
	switch (type) {
		case 'h1':
			return <TitleBig ref={ref} {...props}>{children}</TitleBig>
		case 'h2':
			return <TitleMiddle ref={ref} {...props}>{children}</TitleMiddle>
		case 'h3':
			return <TitleSmall ref={ref} {...props}>{children}</TitleSmall>
		default:
			return <TitleBig ref={ref} {...props}>{children}</TitleBig>
	}
})

const MTitle = motion(Title);

export {Title, MTitle};