import Link from 'next/link'
import styled from 'styled-components';

const LogoIcon = styled.a`
	font-family: var(--font-lexend);
	color: var(--white);
	font-size: 2rem;
	font-weight: var(--fw-medium);
	user-select: none;
	letter-spacing: 2px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;

	span{
		color: var(--bg-pink);
	}

	@media (min-width: 1700px){
		font-size: 2.5rem;
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
			<LogoIcon>Movie<span>Verse</span></LogoIcon>
		</Link>
	)
}

export {Logo};