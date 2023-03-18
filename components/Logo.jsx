import Link from 'next/link'

import styled from 'styled-components';

const LogoIcon = styled.a`
	font-family: var(--font-lato);
	color: var(--white);
	font-size: 2rem;
	font-weight: var(--fw-bold);
	user-select: none;
	letter-spacing: 2px;
	cursor: pointer;

	span{
		color: #F21B3F;
	}

	@media (min-width: 1800px){
		font-size: 3rem;
	}

	@media (max-width: 1024px){
		font-size: 1.8rem;
	}

	@media (max-width: 768px){
		font-size: 1.5rem;
	}
`;

const Logo = () => {
	return (
		<Link href="/" legacyBehavior>
			<LogoIcon>Cinema<span>Room</span></LogoIcon>
		</Link>
	)
}

export {Logo};