import Link from 'next/link'
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {animationContent} from '../helpers/Animations';

const BreadCrumbsWrapper = styled(motion.div)`
	margin-bottom: 20px;
	color: var(--light-dark);

	@media (min-width: 1800px){
		font-size: 1.3rem !important;
		font-size: 1.8rem;
	};

	@media (max-width: 600px){
		font-size: 1.2rem;
	};
	a{
		font-size: inherit;
		line-height: inherit;
		transition: var(--transition-sm);
		@media (any-hover: hover){
			:hover{
				color: var(--bg-red);
			}
		}
	}
`
const BreadCrumbs = ({children}) => {
	return (
		<BreadCrumbsWrapper
			initial="hidden"
			whileInView="visible"
			viewport={{once: true}}
			variants={animationContent} custom={1}
		>
			<Link href="/">Home</Link> / {children}
		</BreadCrumbsWrapper>
	)
}

export {BreadCrumbs};