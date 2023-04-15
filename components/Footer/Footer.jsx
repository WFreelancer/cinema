import styled from 'styled-components';
import { memo } from 'react';
import {Container} from '../Container'
import { Logo } from "../Logo";

const FooterWrapper = styled.footer`
	background-color: var(--bg-dark);
	padding: 50px 0;

	@media (min-width: 1800px){
		padding: 70px 0;
	}

	@media (max-width: 480px){
		padding: 30px 0;
	}
`
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 480px){
		flex-direction: column;
	}
`

const Info = styled.span`
	color: var(--white);

	@media (min-width: 1800px){
		font-size: 1.5rem;
	}
	@media (max-width: 480px){
		margin-top: 15px;
	}
`
const Footer = () => {
	return(
		<FooterWrapper>
			<Container>
				<Row>
					<Logo/>
					<Info>© Code by Mark Kostenko {new Date().getFullYear()}</Info>
				</Row>
			</Container>
		</FooterWrapper>
	)
}

export default memo(Footer);