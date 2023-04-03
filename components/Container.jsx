import {forwardRef} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion'

const ContainerEl = styled.div`
	max-width: 1240px;
	width: 100%;
	padding: 0 20px;
	margin: 0 auto;
	border-bottom: ${({border}) => border && border};

	@media (min-width: 1800px){
		max-width: 1600px;
	}
`;
// eslint-disable-next-line
const Container = forwardRef(({border, children}, ref) => {
	return(
		<ContainerEl ref={ref} border={border}>{children}</ContainerEl>
	)
})

const MContainer = motion(Container);
export {Container, MContainer};