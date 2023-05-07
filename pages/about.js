import styled from 'styled-components';
import { motion } from 'framer-motion';
import { withLayout } from "../layout/Layout";
import { Container } from '../components/Container';
import { animationContent } from '../helpers/Animations';
import { MTitle } from '../components/Title';
import { BreadCrumbs } from '../components/BreadCrumbs';

const AboutWrapper = styled(motion.div)`
	padding-top: 40px;
`

const About = () => {
	return (
		<AboutWrapper initial="hidden" whileInView="visible" viewport={{ once: true }}>
			<Container>
				<BreadCrumbs>About Page</BreadCrumbs>
				<MTitle marginBottom="3vh" variants={animationContent} custom={2} type="h3">About Page</MTitle>
			</Container>
		</AboutWrapper>
	)
}

export default withLayout(About);