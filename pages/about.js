import styled from 'styled-components';
import {motion} from 'framer-motion';
import {withLayout} from "../layout/Layout";
import {Container} from '../components/Container';
import {animationContent} from '../helpers/Animations';

import {MButton} from '../components/Button';

const AboutWrapper = styled(motion.div)`
	padding-top: 40px;
`

const About = () => {
	return (
		<AboutWrapper initial="hidden" whileInView="visible" viewport={{once: true}}>
			<Container>
				<MButton
					variants={animationContent}
					custom={1}
					dark
					magnetic
					href="/"
				>
					Go Home
				</MButton>
				<motion.h1
					variants={animationContent}
					custom={2}
					style={{textAlign: 'center', fontSize: '22px', marginTop: '30px'}}
					>About Page</motion.h1>
			</Container>
		</AboutWrapper>
	)
}

export default withLayout(About);