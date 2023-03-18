import { forwardRef } from "react";
import styled from 'styled-components';
import {motion} from 'framer-motion'

const TitleEl = styled.h4`
	z-index: 1;
	position: relative;
	text-align: ${({textAlign}) => textAlign ? textAlign : `center`};
	font-weight: var(--fw-regular);
	margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : `4vh`};
	color: ${({light}) => light ? 'var(--white)' : `inherit`};

	font-size: calc(clamp(2.5em, 5vw, 6em) * 0.80);

	@media (min-width: 1800px){
		font-size: 5rem;
	}
	
	@media (max-width: 1024px){
		font-size: calc(clamp(1.75em, 2.3vw, 2.5em) * 1.125);
	}

`;

const Title = forwardRef(({children, ...props}, ref) => {
	return(
		<TitleEl ref={ref} {...props}>{children}</TitleEl>
	)
})

const MTitle = motion(Title);

export {Title, MTitle};